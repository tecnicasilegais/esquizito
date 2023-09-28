import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

const validateObjectId = (id: string) => mongoose.Types.ObjectId.isValid(id);

export function validateId(req: Request, res: Response, next: NextFunction) {
  return validateObjectId(req.params.id)
    ? next()
    : res.status(400).json({ error: 'Invalid ID' });
}

export function validateBodyUserId(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  return validateObjectId(req.body.userId)
    ? next()
    : res.status(400).json({ error: 'Invalid User ID' });
}
