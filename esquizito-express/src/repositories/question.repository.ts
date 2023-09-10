import { Question } from 'models/question';
import { BaseRepository } from 'repositories/base.repository';
import { QuestionDocument } from 'models/documents';

const questionRepository: BaseRepository<QuestionDocument> =
  new BaseRepository<QuestionDocument>(Question);

export default questionRepository;
