import { NextFunction, Request, Response } from 'express';

import quizService from 'services/quiz.service';
import userService from 'services/user.service';
import { CustomError } from 'utils/error.util';

export async function validateUserExistsAndAddUserName(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { userId } = req.body;

  const user = await userService.get(userId);

  if (user) {
    req.body.userName = user.name;
    return next();
  }

  return next(
    new CustomError(
      `Could not locate a user by id: ${userId}`,
      'UserIdNotFound',
    ),
  );
}

export async function addTimestamp(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  req.body.createdAt = new Date();
  return next();
}

export async function incrementAmountOfAnswers(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { quizId } = req.body;

  await quizService.increaseAmountOfAnswers(quizId);
}
