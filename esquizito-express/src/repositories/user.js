import { User } from 'models/user';

const get = async (id) => User.findById(id).exec();

export default { get };
