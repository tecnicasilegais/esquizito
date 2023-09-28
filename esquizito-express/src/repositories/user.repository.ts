import { UserDocument } from 'models/documents';
import { User } from 'models/user';
import { BaseRepository } from 'repositories/base.repository';

const userRepository: BaseRepository<UserDocument> = new BaseRepository(User);

export default userRepository;
