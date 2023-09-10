import { Document, Schema } from 'mongoose';
import { IUser, IQuestion } from './models';

export interface UserDocument extends IUser, Document {}

export interface QuestionDocument
  extends IQuestion<Schema.Types.ObjectId>,
    Document {}
