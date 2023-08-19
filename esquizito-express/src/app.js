import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import usersRouter from './routes/user';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Allow external access
app.use(cors());
// Deactivates X-Powered-By: Express
app.disable('x-powered-by');

app.use('/user', usersRouter);

app.use('/*', (req, res) => res.status(404).send('Not Found'));

export { app };
