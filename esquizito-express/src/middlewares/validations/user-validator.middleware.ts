import userService from 'services/user.service';
import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../../utils/error.util';

export async function validateUserExists(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { body } = req;
  const exists = await userService.exists({ _id: body.userId });

  return exists
    ? next()
    : next(
        new CustomError(
          `Could not locate a user by id: ${body.userId}`,
          'UserIdNotFound',
        ),
      );
}
