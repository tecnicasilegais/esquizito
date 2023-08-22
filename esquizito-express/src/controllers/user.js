import userService from 'services/user';

const get = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await userService.get(userId);

    if (user) {
      return res.status(200).send(user);
    }
  } catch (err) {
    return res.status(500).send(err);
  }
  return res.status(404).send();
};

export default { get };
