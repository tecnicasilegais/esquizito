import express from 'express';
import userController from 'controllers/user';

const router = express.Router();

/* GET single user. */
router.get('/:id', userController.get);

export default router;
