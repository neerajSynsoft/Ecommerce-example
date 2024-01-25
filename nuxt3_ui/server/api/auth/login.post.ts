import userModal from "~/server/models/userModel.js";
import { userLoginSchema } from "~/server/validations";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default defineEventHandler(async (event: any) => {
  try {
    // Read the body of the request
    const reqBody = await readBody(event);

    await userLoginSchema.validate(reqBody, { abortEarly: false });

    const result = await userModal.findOne({
      email: new RegExp(["^", reqBody.email, "$"].join(""), "i"),
    }).select("password");
    console.log("result===", result);

    if (result && result.password) {
      const bcryptRes = await bcrypt.compare(reqBody.password, result.password);

      if (bcryptRes) {
        const data = await userModal.findOne({
          email: new RegExp(["^", reqBody.email, "$"].join(""), "i"),
        });
        if (data) {
          const expiresIn = reqBody.rememberUser ? "1y" : "2d";
          let token = jwt.sign(
            {
              userId: data._id,
              name: data.name,
              email: data.email,
              // role: result.role
            },
            "config.jwtKey_default",
            { expiresIn: expiresIn }
          );
          return { token, ...data.toJSON() };
        } else {
          throw createError({
            statusCode: 500,
            statusMessage: "Something went wrong unable to get user",
            stack: "",
          });
        }
      } else {
        throw createError({
          statusCode: 400,
          statusMessage: "Email or Password is not correct. Please try again",
          fatal: false,
          stack: "",
        });
      }
    } else {
      throw createError({
        statusCode: 400,
        statusMessage: "Email or Password is not correct. Please try again",
        fatal: false,
        stack: "",
      });
    }
  } catch (error: any) {
    console.error("Error in API handler:", error);

    if (error?.cause) {
      return error;
    } else if (error.errors) {
      throw createError({
        statusCode: 400,
        statusMessage: error.message,
        data: error.errors,
        stack: "",
      });
    } else {
      throw createError({
        statusCode: 500,
        statusMessage: "Internal server error",
        stack: "",
      });
    }
  }
});
