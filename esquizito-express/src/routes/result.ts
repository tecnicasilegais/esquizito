import express from 'express';

import auth0Config from 'configs/auth0.config';
import { ResultController } from 'controllers/result.controller';
import { postErrorHandler } from 'middlewares/error-handling/post-error.middleware';
import {
  addTimestamp,
  incrementAmountOfAnswers,
  validateUserExistsAndAddUserName,
} from 'middlewares/general';
import { validateAccessToken } from 'middlewares/validators/auth0.middleware';
import {
  validateBodyQuizId,
  validateBodyUserId,
  validateId,
} from 'middlewares/validators/id.validator.middleware';
import { validateBodyQuizExists } from 'middlewares/validators/quiz.validator.middleware';

import {
  addQuestionDetails,
  addQuizName,
  validateAnswers,
} from '../middlewares/validators/result.validator.middleware';

const router = express.Router();

const resultController = new ResultController();

if (auth0Config.enabled) {
  router.use(validateAccessToken);
}

router.post(
  '/create',
  validateBodyUserId,
  validateBodyQuizId,
  validateUserExistsAndAddUserName,
  validateBodyQuizExists,
  validateAnswers,
  addQuizName,
  addQuestionDetails,
  addTimestamp,
  resultController.create,
  incrementAmountOfAnswers,
  postErrorHandler,
);

router.get('/:id', validateId, resultController.get);

export default router;
