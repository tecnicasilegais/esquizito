import questionRepository from 'repositories/question';
import userService from 'services/user';
import { BaseService } from 'services/base.service';
import { FilterType } from 'utils/filter.util';
import { CustomError } from 'utils/error.util';

export class QuestionService extends BaseService {
  constructor() {
    super(questionRepository);
  }

  /*
   * List questions by ids
   * @param {Array} ids
   *
   * It's expected to be used by the QuizService to map the list of ids to real questions
   */
  async listByIds(ids) {
    return this.repository.getAll([
      { field: '_id', type: FilterType.IN, value: ids },
    ]);
  }

  async create(question) {
    const exists = await userService.exists({ _id: question.userId });
    if (!exists) {
      throw new CustomError(
        `Could not locate a user by id: ${question.userId}`,
        'UserIdNotFound',
      );
    }
    return super.create(question);
  }
}

const questionService = new QuestionService();

export default questionService;
