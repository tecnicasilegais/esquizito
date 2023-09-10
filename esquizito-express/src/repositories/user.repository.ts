import { User } from 'models/user';
import { BaseRepository } from 'repositories/base.repository';
import { UserDocument } from 'models/documents';

const userRepository: BaseRepository<UserDocument> = new BaseRepository(User);

export default userRepository;
