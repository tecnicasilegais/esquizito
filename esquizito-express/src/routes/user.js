import express from 'express';
import { validateId } from 'middlewares/validator';
import { validateAccessToken } from 'middlewares/auth0.middleware';
import { UserController } from 'controllers/user';
import auth0Config from 'configs/auth0.config';
import { postErrorHandler } from 'middlewares/error-handling/post-error.middleware';

const router = express.Router();
const userController = new UserController();

if (auth0Config.enabled) {
  router.use(validateAccessToken);
}

router.post('/register', userController.create, postErrorHandler);

router.get('/auth0/:id', userController.getByAuth0Id);

router.get('/email/:email', userController.getByEmail);

router.get('/:id', validateId, userController.get);

export default router;
