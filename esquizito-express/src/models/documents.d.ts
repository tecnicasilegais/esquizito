import { Document, Schema } from 'mongoose';

import { IQuestion, IUser } from './models';

export interface UserDocument extends IUser, Document {}

export interface QuestionDocument
  extends IQuestion<Schema.Types.ObjectId>,
    Document {}
