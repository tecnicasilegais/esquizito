import { model, Schema } from 'mongoose';
import { QuizDocument } from './documents';

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
      type: [Schema.Types.ObjectId],
      required: true,
    },
  },
  {
    strict: 'throw',
  },
);

export const Quiz = model('Quiz', quizSchema);
