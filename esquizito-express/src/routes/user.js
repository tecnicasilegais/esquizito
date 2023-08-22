import express from 'express';
import { validateId } from 'middlewares/validator';
import { validateAccessToken } from 'middlewares/auth0.middleware';
import userController from 'controllers/user';
import auth0Config from 'configs/auth0.config';

const router = express.Router();

if (auth0Config.enabled) router.use(validateAccessToken);

/* GET single user. */
router.get('/:id', validateId, userController.get);

export default router;
