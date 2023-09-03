import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      index: true,
    },
    statement: { type: String, required: true },
    answer: { type: Boolean, required: true },
    subject: { type: String, index: true },
    explanation: { type: String, required: true },
    deprecated: { type: Boolean, default: false },
  },
  {
    strict: 'throw',
  },
);

export const Question = mongoose.model('Question', questionSchema);
