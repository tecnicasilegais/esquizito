import { QuizDocument } from 'models/documents';
import { Quiz } from 'models/quiz';
import { BaseRepository } from 'repositories/base.repository';

const quizRepository: BaseRepository<QuizDocument> =
  new BaseRepository<QuizDocument>(Quiz);

export default quizRepository;
