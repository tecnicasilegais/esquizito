import { User } from 'models/user';

const get = async (id) => User.findById(id).exec();
const getByAuth0Id = async (auth0Id) =>
  User.findOne({
    auth0Id,
  }).exec();
const getByEmail = async (email) => User.findOne({ email }).exec();

const register = async (userInfo) => User.create(userInfo);

export default { get, getByAuth0Id, getByEmail, register };
