import { Schema, model } from 'mongoose';

import { ResultDocument } from './documents';

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
    answers: {
      type: [
        {
          questionId: { type: Schema.Types.ObjectId, required: true },
          givenAnswer: { type: Boolean, required: true },
          correctAnswer: { type: Boolean, required: true },
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
