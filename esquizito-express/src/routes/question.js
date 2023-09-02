import express from 'express';
import { validateBodyUserId, validateId } from 'middlewares/validator';
import { validateAccessToken } from 'middlewares/auth0.middleware';
import { QuestionController } from 'controllers/question';
import auth0Config from 'configs/auth0.config';
import { postErrorHandler } from 'middlewares/error-handling/post-error.middleware';

const router = express.Router();
const questionController = new QuestionController();

if (auth0Config.enabled) {
  router.use(validateAccessToken);
}

router.post(
  '/create',
  validateBodyUserId,
  questionController.create,
  postErrorHandler,
);

router.get('/:id', validateId, questionController.get);

export default router;
