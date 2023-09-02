import questionRepository from 'repositories/question';
import { BaseService } from 'services/base.service';
import { FilterType } from 'utils/filter.util';

export class QuestionService extends BaseService {
  constructor() {
    super(questionRepository);
  }

  listByIds = async (ids) =>
    this.repository.getAll([{ field: '_id', type: FilterType.IN, value: ids }]);
}
