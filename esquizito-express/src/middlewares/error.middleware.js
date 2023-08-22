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
// eslint-disable-next-line no-unused-vars
export const errorHandler = (error, request, response, next) => {
  if (error instanceof InvalidTokenError) {
    response
      .status(error.status)
      .json({ message: ErrorMessages.badCredentials });
    return;
  }
  if (error instanceof UnauthorizedError) {
    response.status(error.status).json({ message: ErrorMessages.unauthorized });
    return;
  }
  response.status(500).json({ message: ErrorMessages.internalError });
};
