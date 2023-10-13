import { Schema, model } from 'mongoose';

import { ResultDocument } from './documents';

const resultSchema: Schema<ResultDocument> = new Schema<ResultDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      index: true,
    },
    quizId: {
      type: Schema.Types.ObjectId,
      required: true,
      index: true,
    },
    answers: {
      type: [
        {
          questionId: Schema.Types.ObjectId,
          givenAnswer: Boolean,
          correctAnswer: Boolean,
          elapsedTime: Number,
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
