import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const role = new Schema({
    name: String,
    rules: Object
}, {
    collection: 'roles',
    timestamps: true
})

export default role