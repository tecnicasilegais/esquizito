export const notFoundHandler = (req, res) => {
  let message = 'Not Found';

  if (req.notFoundMessage) {
    message = req.notFoundMessage;
  }

  res.status(404).json({ message });
};
