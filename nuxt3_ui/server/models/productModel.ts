import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productSchema = new Schema({
    title: String,
    slug: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    reviews: Number,
    stock: Number,
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
      },
    brand: String,
    thumbnail: String,
    images: [ String ],
    variant: Object,
});

const Product = model('Product', productSchema);
export default Product;