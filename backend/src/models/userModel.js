import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import jwt from 'jsonwebtoken';

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    address: String,
    mobile: Number,
});

// Generate JWT token for the user
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
      { _id: this._id, email: this.email, username: this.username },
      'your-secret-key' // Replace with your actual secret key
    );
    return token;
  };
  
  // Verify JWT token
  userSchema.statics.verifyAuthToken = function (token) {
    return jwt.verify(token, 'your-secret-key'); // Replace with your actual secret key
  };
  
const User = model('User', userSchema);
export default User;