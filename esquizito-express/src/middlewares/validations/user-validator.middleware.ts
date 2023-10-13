import { NextFunction, Request, Response } from 'express';

import userService from 'services/user.service';

import { CustomError } from '../../utils/error.util';

async function validateUserExists(id: string) {
  return id ? userService.exists({ _id: id }) : false;
}

export async function validateBodyUserExists(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { userId } = req.body;

  const exists = await validateUserExists(userId);

  return exists
    ? next()
    : next(
        new CustomError(
          `Could not locate a user by id: ${userId}`,
          'UserIdNotFound',
        ),
      );
}
export async function validateParamsUserExists(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id } = req.params;

  const exists = await validateUserExists(id);

  return exists
    ? next()
    : next(
        new CustomError(
          `Could not locate a user by id: ${id}`,
          'UserIdNotFound',
        ),
      );
}
