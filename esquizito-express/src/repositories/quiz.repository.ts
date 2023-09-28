import { Quiz } from 'models/quiz';
import { BaseRepository } from 'repositories/base.repository';
import { QuizDocument } from 'models/documents';

const quizRepository: BaseRepository<QuizDocument> =
  new BaseRepository<QuizDocument>(Quiz);

export default quizRepository;
