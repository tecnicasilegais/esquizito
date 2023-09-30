import { NextFunction, Request, Response } from 'express';
import { MongoError } from 'mongodb';
import { Error } from 'mongoose';

import { CustomError } from '../../utils/error.util';

// Express needs 4 parameters on the error handler, even if we won't use 'next'
// eslint-disable-next-line no-unused-vars
/*
  This middleware is used to handle errors that are thrown in the POST operations.
 */

export const postErrorHandler = (
  error: CustomError | unknown,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (error instanceof Error.ValidationError) {
    const message = Object.values(error.errors).map((value) => value.message);
    response.status(400).json({ error: message });
    return;
  }
  if (error instanceof Error.StrictModeError) {
    response
      .status(400)
      .json({ error: `Unexpected field was received: '${error.path}'` });
    return;
  }
  if (error instanceof MongoError && error.code === 11000) {
    let errMsg = 'The value for the given field is already in use';
    if ('keyValue' in error && error.keyValue) {
      errMsg = `The value for the given '${Object.keys(
        error.keyValue,
      )}' is already in use`;
    }
    response.status(400).json({
      error: errMsg,
    });
    return;
  }
  if (error instanceof CustomError) {
    if (error.name === 'UserIdNotFound') {
      response.status(400).json({ error: error.message });
      return;
    }

    if (error.name === 'QuestionIdNotFound') {
      response.status(404).json({ error: error.message });
      return;
    }
  }
  next(error);
};
