import questionService from 'services/question';
import { BaseController } from 'controllers/base.controller';

export class QuestionController extends BaseController {
  constructor() {
    super(questionService, 'question');
  }

  update = async (req, res, next) => {
    const { id } = req.params;
    const { body } = req;

    const { _id } = await this.service.update(id, body);

    if (!_id) {
      req.notFoundMessage = `Could not locate ${this.name} by id: ${id}`;
      return next();
    }

    return res.status(200).json({ _id });
  };

  delete = async (req, res, next) => {
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
