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
