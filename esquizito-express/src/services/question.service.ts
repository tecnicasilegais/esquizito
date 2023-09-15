import questionRepository from 'repositories/question.repository';
import userService from 'services/user.service';
import { BaseService } from 'services/base.service';
import { FilterType } from 'utils/filter.util';
import { CustomError } from 'utils/error.util';
import { QuestionDocument } from 'models/documents';

export class QuestionService extends BaseService<QuestionDocument> {
  constructor() {
    super(questionRepository);
  }

  /*
   * List questions by ids
   * @param {Array} ids
   *
   * It's expected to be used by the QuizService to map the list of ids to real questions
   */
  listByIds = async (ids: string[]) =>
    this.repository.getAll([{ field: '_id', type: FilterType.IN, value: ids }]);

  create = async (question: QuestionDocument) => {
    const exists = await userService.exists({ _id: question.userId });
    if (!exists) {
      throw new CustomError(
        `Could not locate a user by id: ${question.userId}`,
        'UserIdNotFound',
      );
    }
    return super.create(question);
  };

  update = async (id: string, question: QuestionDocument) => {
    const created = await this.create(question);

    if (created) {
      const update = await super.update(id, { deprecated: true });
      if (!update) {
        throw new CustomError(
          `Could not deprecate a question by id: ${id}`,
          'QuestionIdNotFound',
        );
      }
    }
    return created;
  };

  delete = async (id: string) => super.update(id, { deprecated: true });
}

const questionService = new QuestionService();

export default questionService;
