import { QuestionService } from 'services/question';
import { BaseController } from 'controllers/base.controller';

export class QuestionController extends BaseController {
  constructor() {
    super(new QuestionService(), 'question');
  }
}
