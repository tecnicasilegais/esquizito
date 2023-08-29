// Express needs 4 parameters on the error handler, even if we won't use 'next'
// eslint-disable-next-line no-unused-vars

/*
  This middleware is used to handle errors that are thrown in the POST operations.
 */
export const postErrorHandler = (error, request, response, next) => {
  if (error.name === 'ValidationError') {
    const message = Object.values(error.errors).map((value) => value.message);
    response.status(400).json({ error: message });
    return;
  }
  if (error.name === 'StrictModeError') {
    response
      .status(400)
      .json({ error: `Unexpected field was received: '${error.path}'` });
    return;
  }
  if (error.code === 11000) {
    response.status(400).json({
      error: `The value for the given '${Object.keys(
        error.keyValue,
      )}' is already in use`,
    });
    return;
  }

  next(error);
};
