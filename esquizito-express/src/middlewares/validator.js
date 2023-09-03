import mongoose from 'mongoose';

const validateObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

export function validateId(req, res, next) {
  return validateObjectId(req.params.id)
    ? next()
    : res.status(400).json({ error: 'Invalid ID' });
}

export function validateBodyUserId(req, res, next) {
  return validateObjectId(req.body.userId)
    ? next()
    : res.status(400).json({ error: 'Invalid User ID' });
}
