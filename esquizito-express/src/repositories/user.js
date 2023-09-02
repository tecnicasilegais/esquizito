import { User } from 'models/user';
import { BaseRepository } from 'repositories/base.repository';

const userRepository = new BaseRepository(User);

export default userRepository;
