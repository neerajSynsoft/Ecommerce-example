import userModal from "~/server/models/userModel.js";
import bcrypt from "bcrypt";
import { userSignupSchema } from "~/server/validations";

export default defineEventHandler(async (event: any) => {
  try {
    // Read the body of the request
    const reqBody = await readBody(event);
    await userSignupSchema.validate(reqBody, { abortEarly: false });

    const password = bcrypt.hashSync(reqBody.password, 10);

    const params = {
      phone: reqBody.phone,
      name: reqBody.name,
      email: reqBody.email,
      password: password,
      monthly_volume: reqBody.monthly_volume,
      is_active: true,
      // username : body.username,
      isFormulirUser: true,
    };

    // Query the Users model for email existence
    const emailExists = await userModal.findOne({
      email: new RegExp(["^", reqBody.email, "$"].join(""), "i"),
    });

    if (emailExists) {
      throw createError({
        statusCode: 400,
        statusMessage: "Email already exist",
        fatal: false,
        data: { email: emailExists.email },
        stack: "",
      });
    }

    const newUser = new userModal({ ...params });
    const savedUser = await newUser.save();

    return savedUser;
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
