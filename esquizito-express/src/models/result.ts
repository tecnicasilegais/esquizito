import { Schema, model } from 'mongoose';

import { ResultDocument } from './documents';
import { questionSchema } from './question';

const resultSchema: Schema<ResultDocument> = new Schema<ResultDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      index: true,
    },
    userName: {
      type: String,
      required: true,
    },
    quizId: {
      type: Schema.Types.ObjectId,
      required: true,
      index: true,
    },
    quizName: {
      type: String,
      required: true,
    },
    answers: {
      type: [
        {
          question: { type: questionSchema, required: true },
          answer: { type: Boolean, required: true },
          elapsedTime: { type: Number, required: true },
        },
      ],
      required: true,
    },
    elapsedTime: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
    },
  },
  {
    strict: 'throw',
  },
);

export const Result = model('Result', resultSchema);
