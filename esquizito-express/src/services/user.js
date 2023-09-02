import userRepository from 'repositories/user';

const get = async (userId) => userRepository.get(userId);

const getByEmail = async (email) => userRepository.getByEmail(email);
const getByAuth0Id = async (auth0Id) => userRepository.getByAuth0Id(auth0Id);

const register = async (userInfo) => userRepository.register(userInfo);

export default { get, getByAuth0Id, getByEmail, register };
