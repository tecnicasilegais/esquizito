import userService from 'services/user';

const get = async (req, res) => {
  const userId = req.params.id;

  const user = await userService.get(userId);

  return user
    ? res.status(200).json(user)
    : res.status(404).json({ message: 'User not found' });
};
export default { get };
