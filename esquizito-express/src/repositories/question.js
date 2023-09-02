import { Question } from 'models/question';
import { BaseRepository } from 'repositories/base.repository';

const questionRepository = new BaseRepository(Question);

export default questionRepository;
