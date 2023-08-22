import mongoose from 'mongoose';

export function validateId(req, res, next) {
  const { id } = req.params;

  if (mongoose.Types.ObjectId.isValid(id)) {
    next();
  } else {
    res.status(400).json({ message: 'Invalid ID' });
  }
}
