import express from 'express';

import auth0Config from 'configs/auth0.config';
import { QuizController } from 'controllers/quiz.controller';
import { postErrorHandler } from 'middlewares/error-handling/post-error.middleware';
import { validateAccessToken } from 'middlewares/validators/auth0.middleware';
import {
  validateBodyUserId,
  validateId,
  validateQuizListOfIds,
} from 'middlewares/validators/id.validator.middleware';
import {
  validateAmountOfQuestions,
  validateGameCode,
  validateQuestionsExists,
  validateQuizIsDraft,
} from 'middlewares/validators/quiz.validator.middleware';
import { validateBodyUserExists } from 'middlewares/validators/user.validator.middleware';

const router = express.Router();
const quizController = new QuizController();

if (auth0Config.enabled) {
  router.use(validateAccessToken);
}

router.post(
  '/create',
  validateBodyUserId,
  validateBodyUserExists,
  validateQuizListOfIds,
  validateQuestionsExists,
  validateAmountOfQuestions,
  quizController.create,
  postErrorHandler,
);

router.put(
  '/update/:id',
  validateId,
  validateQuizIsDraft,
  validateBodyUserId,
  validateBodyUserExists,
  validateQuizListOfIds,
  validateQuestionsExists,
  validateAmountOfQuestions,
  quizController.update,
  postErrorHandler,
);

router.get('/code/:code', validateGameCode, quizController.getByCode);

router.patch('/:id/publish', validateId, quizController.publish);

router.get('/:id/results', validateId, quizController.getResults);

router.delete('/:id', validateId, quizController.delete);
router.get('/:id', validateId, quizController.get);

export default router;
