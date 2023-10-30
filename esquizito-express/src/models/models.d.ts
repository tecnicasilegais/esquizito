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
  amountOfAnswers: number;
}

export interface IResponse<T> {
  question: T;
  answer: boolean;
  elapsedTime: number; // seconds
}

export interface IResult<T, U> {
  userId: T;
  userName: string;
  quizId: T;
  quizName: string;
  answers: IResponse<U>[];
  elapsedTime: number; // seconds
  createdAt: Date;
}
