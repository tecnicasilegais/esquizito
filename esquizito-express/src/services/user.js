import userRepository from 'repositories/user';

const get = async (userId) => userRepository.get(userId);

export default { get };
