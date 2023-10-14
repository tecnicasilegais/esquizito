import express from 'express';

import auth0Config from 'configs/auth0.config';
import { ResultController } from 'controllers/result.controller';
import { postErrorHandler } from 'middlewares/error-handling/post-error.middleware';
import { validateAccessToken } from 'middlewares/validators/auth0.middleware';
import {
  validateBodyQuizId,
  validateBodyUserId,
  validateId,
} from 'middlewares/validators/id.validator.middleware';
import { validateBodyQuizExists } from 'middlewares/validators/quiz.validator.middleware';
import { validateBodyUserExists } from 'middlewares/validators/user.validator.middleware';

import { validateAnswers } from '../middlewares/validators/result.validator.middleware';

const router = express.Router();

const resultController = new ResultController();

if (auth0Config.enabled) {
  router.use(validateAccessToken);
}

router.post(
  '/create',
  validateBodyUserId,
  validateBodyQuizId,
  validateBodyUserExists,
  validateBodyQuizExists,
  validateAnswers,
  resultController.create,
  postErrorHandler,
);

router.get('/:id', validateId, resultController.get);

export default router;
