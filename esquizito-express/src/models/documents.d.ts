import { Document, Schema } from 'mongoose';

import { IQuestion, IQuiz, IUser } from './models';

export interface UserDocument extends IUser, Document {}

export interface QuestionDocument
  extends IQuestion<Schema.Types.ObjectId>,
    Document {}

export interface QuizDocument extends IQuiz<Schema.Types.ObjectId>, Document {}
