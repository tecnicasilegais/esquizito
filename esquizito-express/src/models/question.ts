import { model, Schema } from 'mongoose';
import { QuestionDocument } from './documents';

const questionSchema: Schema<QuestionDocument> = new Schema<QuestionDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
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

export const Question = model('Question', questionSchema);
