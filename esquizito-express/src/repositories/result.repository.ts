import { ResultDocument } from 'models/documents';
import { Result } from 'models/result';
import { BaseRepository } from 'repositories/base.repository';

const resultRepository: BaseRepository<ResultDocument> =
  new BaseRepository<ResultDocument>(Result);

export default resultRepository;
