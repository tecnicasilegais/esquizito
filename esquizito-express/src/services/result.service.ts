import { ResultDocument } from 'models/documents';
import resultRepository from 'repositories/result.repository';
import { BaseService } from 'services/base.service';

import { FilterType } from '../utils/filter.util';

export class ResultService extends BaseService<ResultDocument> {
  constructor() {
    super(resultRepository);
  }

  listByUserId = async (userId: string) =>
    this.repository.getAll([
      { field: 'userId', type: FilterType.EQUALS, value: userId },
    ]);

  listByQuizId = async (quizId: string) =>
    this.repository.getAll([
      { field: 'quizId', type: FilterType.EQUALS, value: quizId },
    ]);
}

const resultService = new ResultService();

export default resultService;
