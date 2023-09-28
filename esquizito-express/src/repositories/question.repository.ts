import { QuestionDocument } from 'models/documents';
import { Question } from 'models/question';
import { BaseRepository } from 'repositories/base.repository';

const questionRepository: BaseRepository<QuestionDocument> =
  new BaseRepository<QuestionDocument>(Question);

export default questionRepository;
