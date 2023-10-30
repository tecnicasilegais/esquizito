import { QuizDocument } from 'models/documents';

export {};

declare global {
  namespace Express {
    export interface Request {
      notFoundMessage?: string;
      validatorContent?: {
        quizData?: QuizDocument;
      };
    }
    export interface Response {
      isSent?: boolean;
    }
  }
}
