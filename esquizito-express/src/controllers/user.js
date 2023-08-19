import userService from 'services/user';

const get = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await userService.get(userId);

    if (user) {
      res.status(200).send(user);
    }
    res.status(404).send();
  } catch (err) {
    res.status(500).send(err);
  }
};

export default { get };
