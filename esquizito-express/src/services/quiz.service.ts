import quizRepository from 'repositories/quiz.repository';
import { BaseService } from 'services/base.service';
import { QuizDocument } from 'models/documents';
import { QuizStatus } from 'models/enums';
import { getId } from 'configs/nanoId.config';

export class QuizService extends BaseService<QuizDocument> {
  constructor() {
    super(quizRepository);
  }

  // are there extra validations?
  create = async (quiz: QuizDocument) => {
    const quizDoc = quiz;
    quizDoc.status = QuizStatus.DRAFT;
    return super.create(quizDoc);
  };

  publish = async (id: string) =>
    super.update(id, { status: QuizStatus.PUBLISHED, code: getId() });

  delete = async (id: string) =>
    super.update(id, { status: QuizStatus.ARCHIVED });
}

const quizService = new QuizService();

export default quizService;
