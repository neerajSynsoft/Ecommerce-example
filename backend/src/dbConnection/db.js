// db.js

import mongoose from 'mongoose';

export const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://neerajk:WIguOHcMECR9wiEc@mycluster.ih1adcy.mongodb.net/sample_restaurants', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    throw error; // Propagate the error to the calling function
  }
};
