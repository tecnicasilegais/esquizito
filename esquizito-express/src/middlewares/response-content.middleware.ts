import { NextFunction, Request, Response } from 'express';

export function contentTypeJson(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.contentType('application/json; charset=utf-8');
  next();
}
