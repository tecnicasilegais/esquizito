import { NextFunction, Request, Response } from 'express';

import { BaseController } from 'controllers/base.controller';
import { QuizDocument } from 'models/documents';
import quizService, { QuizService } from 'services/quiz.service';

export class QuizController extends BaseController<QuizDocument> {
  declare service: QuizService;

  constructor() {
    super(quizService, 'quiz');
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const updatedDocument = await this.service.update(id, req.body);

    if (!updatedDocument) {
      req.notFoundMessage = `Could not locate ${this.name} by id: ${id}`;
      return next();
    }

    return res.status(200).json({
      message: `Successfully updated the ${this.name}`,
    });
  };

  publish = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const published = await this.service.publish(id);

    if (!published) {
      req.notFoundMessage = `Could not locate ${this.name} by id: ${id}`;
      return next();
    }

    return res.status(200).json({
      message: `Successfully published the ${this.name}`,
      code: published.code,
    });
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const deleted = await this.service.delete(id);

    if (!deleted) {
      req.notFoundMessage = `Could not locate ${this.name} by id: ${id}`;
      return next();
    }

    return res
      .status(200)
      .json({ message: `Successfully archived the ${this.name}` });
  };
}
