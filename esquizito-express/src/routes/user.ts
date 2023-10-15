import express from 'express';

import auth0Config from 'configs/auth0.config';
import { UserController } from 'controllers/user.controller';
import { postErrorHandler } from 'middlewares/error-handling/post-error.middleware';
import { validateAccessToken } from 'middlewares/validators/auth0.middleware';
import { validateId } from 'middlewares/validators/id.validator.middleware';
import { validateParamsUserExists } from 'middlewares/validators/user.validator.middleware';

const router = express.Router();
const userController = new UserController();

if (auth0Config.enabled) {
  router.use(validateAccessToken);
}

router.post('/register', userController.create, postErrorHandler);

router.get('/auth0/:id', userController.getByAuth0Id);

router.get('/email/:email', userController.getByEmail);

router.get(
  '/:id/questions',
  validateId,
  validateParamsUserExists,
  userController.getQuestions,
);

router.get(
  '/:id/quizzes',
  validateId,
  validateParamsUserExists,
  userController.getQuizzes,
);

router.get(
  '/:id/results',
  validateId,
  validateParamsUserExists,
  userController.getResults,
);

router.get('/:id', validateId, userController.get);

export default router;
