import express from 'express';
import { validateId } from 'middlewares/validator';
import { validateAccessToken } from 'middlewares/auth0.middleware';
import userController from 'controllers/user';
import auth0Config from 'configs/auth0.config';
import { postErrorHandler } from 'middlewares/error-handling/post-error.middleware';

const router = express.Router();

if (auth0Config.enabled) {
  router.use(validateAccessToken);
}

/* GET single user. */
router.get('/:id', validateId, userController.get);

router.post('/register', userController.register, postErrorHandler);

router.get('/auth0/:id', userController.getByAuth0Id);

router.get('/email/:email', userController.getByEmail);

export default router;
