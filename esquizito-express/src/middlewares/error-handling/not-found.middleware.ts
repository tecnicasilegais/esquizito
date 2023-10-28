import { Request, Response } from 'express';

export const notFoundHandler = (req: Request, res: Response) => {
  if (res.isSent) {
    return;
  }

  let message = 'Not Found';

  if (req.notFoundMessage) {
    message = req.notFoundMessage;
  }

  res.status(404).json({ message });
};
