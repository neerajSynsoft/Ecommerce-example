import  Product  from "~/server/models/productModel.js";

export default defineEventHandler(async (event) => {
  console.log('ens====',event);
  const Products = await Product.find();

  return Products;
});