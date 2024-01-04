import { Schema, model } from 'mongoose';
// import jwt from 'jsonwebtoken';

const userSchema = new Schema({
  name: String,
  username: String,
  phone: String, 
  formulirNumber: String, 
  profile_picture: String,
  email: { type: String, unique: true, required: true, dropDups: true },
  password: { type: String, select: false },
  monthly_volume: String,
  sales_chanel: String,
  language: { type: String, default: 'id' },
  theme: { type: String, default: 'light' },
  industry: String,
  is_active: Boolean,
  authorization: {
      id: String,
      name: String
  }
}, {
  timestamps: true
})
  
const userModal = model('User', userSchema);
export default userModal;