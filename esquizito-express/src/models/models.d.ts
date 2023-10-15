import { QuizGameMode, QuizStatus } from './enums';

export interface IUser {
  name: string;
  email: string;
  auth0Id: string;
}

/*
 * T is the type of the userId.
 */
export interface IQuestion<T> {
  userId: T;
  statement: string;
  answer: boolean;
  subject: string;
  explanation: string;
  deprecated: boolean;
}

export interface IQuiz<T, U> {
  userId: T;
  name: string;
  status: QuizStatus;
  code: string; // nanoId
  gameMode: QuizGameMode;
  questionTimeLimit?: number; // seconds
  amountOfStars?: number;
  questions: Array<U>;
}

export interface IResponse<T> {
  questionId: T;
  givenAnswer: boolean;
  correctAnswer: boolean;
  elapsedTime: number; // seconds
}

export interface IResult<T> {
  userId: T;
  quizId: T;
  answers: IResponse<T>[];
  elapsedTime: number; // seconds
  createdAt: Date;
}
