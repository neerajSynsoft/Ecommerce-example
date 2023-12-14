import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const categorySchema = new Schema({
    category: String,
});

const Category = model('Category', categorySchema);
export default Category;