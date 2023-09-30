import { NextFunction, Request, Response } from 'express';

import { BaseController } from 'controllers/base.controller';
import { QuestionDocument } from 'models/documents';
import questionService, { QuestionService } from 'services/question.service';

export class QuestionController extends BaseController<QuestionDocument> {
  declare service: QuestionService;

  constructor() {
    super(questionService, 'question');
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { body } = req;

    const question = await this.service.update(id, body);

    if (!question?._id) {
      req.notFoundMessage = `Could not locate ${this.name} by id: ${id}`;
      return next();
    }

    return res.status(200).json({ id: question._id });
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
      .json({ message: 'Successfully removed the question' });
  };
}
