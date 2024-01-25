import ProductModal from "~/server/models/productModel.js";

export default defineEventHandler(async (event: any) => {
  try {
    const id = getRouterParam(event, "id");

    const result = await ProductModal.findOne({
      _id: id,
    });
    console.log("result===", result);

    if (result) {
      return result;
    } else {
      throw createError({
        statusCode: 500,
        statusMessage: "Something went wrong unable to get product",
        stack: "",
      });
    }
  } catch (error: any) {
    console.error("Error in API handler:", error);

    if (error?.cause) {
      return error;
    } else {
      throw createError({
        statusCode: 500,
        statusMessage: "Internal server error",
        stack: "",
      });
    }
  }
});
