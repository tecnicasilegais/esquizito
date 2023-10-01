import { NextFunction, Request, Response } from 'express';

import userService from 'services/user.service';

import { CustomError } from '../../utils/error.util';

export async function validateUserExists(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const id = req.params.id || req.body.userId;

  const exists = id ? await userService.exists({ _id: id }) : false;

  return exists
    ? next()
    : next(
        new CustomError(
          `Could not locate a user by id: ${id}`,
          'UserIdNotFound',
        ),
      );
}
