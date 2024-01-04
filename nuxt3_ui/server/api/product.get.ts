import  ProductModal  from "~/server/models/productModel.js";

export default defineEventHandler(async (event) => {

  const Products = await ProductModal.find();

  return Products;
});