import express from 'express';
import {
  validateBodyUserId,
  validateId,
  validateQuizListOfIds,
} from 'middlewares/validations/id-validator.middleware';
import { validateAccessToken } from 'middlewares/validations/auth0.middleware';
import { QuizController } from 'controllers/quiz.controller';
import auth0Config from 'configs/auth0.config';
import { postErrorHandler } from 'middlewares/error-handling/post-error.middleware';
import { validateUserExists } from 'middlewares/validations/user-validator.middleware';
import { validateQuestionsExists } from 'middlewares/validations/quiz-validator.middleware';

const router = express.Router();
const quizController = new QuizController();

if (auth0Config.enabled) {
  router.use(validateAccessToken);
}

router.post(
  '/create',
  validateBodyUserId,
  validateUserExists,
  validateQuizListOfIds,
  validateQuestionsExists,
  quizController.create,
  postErrorHandler,
);

router.patch('/:id/publish', validateId, quizController.publish);

router.delete('/:id', validateId, quizController.delete);
router.get('/:id', validateId, quizController.get);

export default router;
