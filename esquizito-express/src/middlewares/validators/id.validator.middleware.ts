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
  if (validateObjectId(req.body.userId)) {
    req.body.userId = new mongoose.Types.ObjectId(req.body.userId);

    return next();
  }
  return res.status(400).json({ error: 'Invalid User ID' });
}

export function validateBodyQuizId(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  return validateObjectId(req.body.quizId)
    ? next()
    : res.status(400).json({ error: 'Invalid Quiz ID' });
}

export function validateQuizListOfIds(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { questions } = req.body;

  if (!Array.isArray(questions)) {
    return res.status(400).json({ error: 'Invalid Questions' });
  }

  const invalidIds = questions.filter((id) => !validateObjectId(id));

  if (invalidIds.length > 0) {
    const invalidIdsMessage = `Invalid Question IDs: [${invalidIds.join(
      ', ',
    )}]`;
    return res.status(400).json({ error: invalidIdsMessage });
  }

  return next();
}
