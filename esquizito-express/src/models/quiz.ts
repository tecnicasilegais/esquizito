import { Schema, model } from 'mongoose';

import { QuizDocument } from './documents';
import { questionSchema } from './question';

const quizSchema: Schema<QuizDocument> = new Schema<QuizDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      index: true,
    },
    gameMode: {
      type: Number,
      required: true,
    },
    questionTimeLimit: {
      type: Number,
    },
    amountOfStars: {
      type: Number,
    },
    questions: {
      type: [questionSchema],
      required: true,
    },
    amountOfAnswers: {
      type: Number,
      default: 0,
    },
  },
  {
    strict: 'throw',
  },
);

export const Quiz = model('Quiz', quizSchema);
