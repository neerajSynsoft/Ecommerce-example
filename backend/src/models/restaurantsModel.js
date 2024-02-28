import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const restaurantSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  address: {
    building: String,
    coord: {
      type: [Number],
      required: true,
    },
    street: String,
    zipcode: String,
  },
  borough: String,
  cuisine: String,
  grades: [
    {
      date: { type: Date, required: true },
      grade: String,
      score: Number,
    },
  ],
  name: String,
  restaurant_id: String,
});

const Restaurant = model('restaurants', restaurantSchema);

export default Restaurant;