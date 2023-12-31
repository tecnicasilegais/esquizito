import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import nocache from 'nocache';

import appConfig from 'configs/application.config';
import { errorHandler } from 'middlewares/error-handling/error.middleware';
import { notFoundHandler } from 'middlewares/error-handling/not-found.middleware';
import { contentTypeJson } from 'middlewares/response-content.middleware';

import questionsRouter from './routes/question';
import quizzesRouter from './routes/quiz';
import resultsRouter from './routes/result';
import usersRouter from './routes/user';

const app = express();

// setting up the middlewares
app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Deactivates X-Powered-By: Express
app.disable('x-powered-by');

app.use(nocache());

// security
app.use(
  helmet({
    hsts: {
      maxAge: 31536000,
    },
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        'default-src': ["'none'"],
        'frame-ancestors': ["'none'"],
      },
    },
    frameguard: {
      action: 'deny',
    },
  }),
);

// Allow external access
app.use(
  cors({
    origin: appConfig.originUrl,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    maxAge: 86400,
  }),
);

app.use(contentTypeJson);
app.use('/user', usersRouter);
app.use('/question', questionsRouter);
app.use('/quiz', quizzesRouter);
app.use('/result', resultsRouter);

app.get('/health', (req, res) =>
  res.status(200).json({ message: `I'm Alive` }),
);

app.use(errorHandler);
app.use(notFoundHandler);

export { app };
