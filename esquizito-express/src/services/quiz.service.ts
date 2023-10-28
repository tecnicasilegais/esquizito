import { getId } from 'configs/nanoId.config';
import { QuizDocument } from 'models/documents';
import { QuizStatus } from 'models/enums';
import quizRepository from 'repositories/quiz.repository';
import { BaseService } from 'services/base.service';

import { FilterType } from '../utils/filter.util';

export class QuizService extends BaseService<QuizDocument> {
  constructor() {
    super(quizRepository);
  }

  // are there extra validators?
  create = async (quiz: QuizDocument) => {
    const quizDoc = quiz;
    quizDoc.status = QuizStatus.DRAFT;
    return super.create(quizDoc);
  };

  getByCode = async (code: string) =>
    this.repository.getOne([
      { field: 'code', type: FilterType.EQUALS, value: code },
    ]);

  publish = async (id: string) =>
    super.update(id, { status: QuizStatus.PUBLISHED, code: getId() });

  delete = async (id: string) =>
    this.repository.update(id, { status: QuizStatus.ARCHIVED }, ['code']);

  listByUserId = async (userId: string) =>
    this.repository.getAll([
      { field: 'userId', type: FilterType.EQUALS, value: userId },
    ]);

  increaseAmountOfAnswers = async (id: string) =>
    this.repository.increment(id, 'amountOfAnswers', 1);
}

const quizService = new QuizService();

export default quizService;
