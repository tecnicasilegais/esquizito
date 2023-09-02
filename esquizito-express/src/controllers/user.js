import { UserService } from 'services/user';

const service = new UserService();

const get = async (req, res, next) => {
  const { id } = req.params;

  const user = await service.get(id);

  if (!user) {
    req.notFoundMessage = `Could not locate user by id: ${id}`;
    return next();
  }

  return res.status(200).json(user);
};

const getByAuth0Id = async (req, res, next) => {
  const auth0Id = req.params.id;

  const user = await service.getByAuth0Id(auth0Id);

  if (!user) {
    req.notFoundMessage = `Could not locate user by auth0Id: ${auth0Id}`;
    return next();
  }

  return res.status(200).json(user);
};

const getByEmail = async (req, res, next) => {
  const { email } = req.params;

  const user = await service.getByEmail(email);

  if (!user) {
    req.notFoundMessage = `Could not locate user by email: ${email}`;
    return next();
  }

  return res.status(200).json(user);
};

const register = async (req, res, next) => {
  const { body } = req;

  service
    .create(body)
    .then(({ _id }) => res.status(201).json({ id: _id }))
    .catch((err) => next(err));
};

export default { get, getByAuth0Id, getByEmail, register };
