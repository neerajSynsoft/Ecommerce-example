import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productSchema = new Schema({
    title: String,
    slug: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    category: String,
    brand: String,
    thumbnail: String,
    images: [ String ]
},);

const Product = model('Product', productSchema);
export default Product;