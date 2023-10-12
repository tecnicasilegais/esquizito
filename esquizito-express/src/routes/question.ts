import express from 'express';

import auth0Config from 'configs/auth0.config';
import { QuestionController } from 'controllers/question.controller';
import { postErrorHandler } from 'middlewares/error-handling/post-error.middleware';
import { validateAccessToken } from 'middlewares/validations/auth0.middleware';
import {
  validateBodyUserId,
  validateId,
} from 'middlewares/validations/id-validator.middleware';
import { validateBodyUserExists } from 'middlewares/validations/user-validator.middleware';

const router = express.Router();
const questionController = new QuestionController();

if (auth0Config.enabled) {
  router.use(validateAccessToken);
}

router.post(
  '/create',
  validateBodyUserId,
  validateBodyUserExists,
  questionController.create,
  postErrorHandler,
);

router.put(
  '/update/:id',
  validateId,
  questionController.update,
  postErrorHandler,
);

router.delete('/:id', validateId, questionController.delete);
router.get('/:id', validateId, questionController.get);

export default router;
