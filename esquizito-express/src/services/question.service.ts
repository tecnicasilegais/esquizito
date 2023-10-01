import { QuestionDocument } from 'models/documents';
import questionRepository from 'repositories/question.repository';
import { BaseService } from 'services/base.service';
import { CustomError } from 'utils/error.util';
import { FilterType } from 'utils/filter.util';

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

  listByUserId = async (userId: string) =>
    this.repository.getAll([
      { field: 'userId', type: FilterType.EQUALS, value: userId },
      { field: 'deprecated', type: FilterType.EQUALS, value: false },
    ]);

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
