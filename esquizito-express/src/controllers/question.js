import questionService from 'services/question';

const get = async (req, res, next) => {
  const { id } = req.params;

  const question = await questionService.get(id);

  if (!question) {
    req.notFoundMessage = `Could not locate user by id: ${id}`;
    return next();
  }

  return res.status(200).json(question);
};

export default { get };
