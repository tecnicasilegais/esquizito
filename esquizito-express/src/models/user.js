import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    auth0Id: { type: String, required: true, index: true, unique: true },
  },
  {
    strict: 'throw',
  },
);

export const User = mongoose.model('User', userSchema);
