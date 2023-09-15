import { NextFunction, Request, Response } from 'express';
import {
  InvalidTokenError,
  UnauthorizedError,
} from 'express-oauth2-jwt-bearer';

const ErrorMessages = {
  badCredentials: 'Bad Credentials',
  unauthorized: 'Requires Authentication',
  internalError: 'Internal Server Error',
};

// Express needs 4 parameters on the error handler, even if we won't use 'next'
export const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  next: NextFunction,
) => {
  if (error instanceof InvalidTokenError) {
    response.status(error.status).json({ error: ErrorMessages.badCredentials });
    return;
  }
  if (error instanceof UnauthorizedError) {
    response.status(error.status).json({ error: ErrorMessages.unauthorized });
    return;
  }
  if ('type' in error && error.type === 'entity.parse.failed') {
    response.status(400).json({ error: 'Invalid JSON' });
    return;
  }
  response.status(500).json({ error: ErrorMessages.internalError });
};
