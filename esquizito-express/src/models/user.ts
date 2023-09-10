import { Schema, model } from 'mongoose';
import { UserDocument } from './documents';

const userSchema: Schema<UserDocument> = new Schema<UserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    auth0Id: { type: String, required: true, index: true, unique: true },
  },
  {
    strict: 'throw',
  },
);

export const User = model('User', userSchema);
