import express from 'express';
import userController from 'controllers/user';
import { validateId } from 'middlewares/validator';

const router = express.Router();

/* GET single user. */
router.get('/:id', validateId, userController.get);

export default router;
