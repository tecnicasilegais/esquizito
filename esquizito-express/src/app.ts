import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';
import nocache from 'nocache';

import { contentTypeJson } from 'middlewares/response-content.middleware';
import { notFoundHandler } from 'middlewares/not-found.middleware';
import { errorHandler } from 'middlewares/error-handling/error.middleware';
import appConfig from 'configs/application.config';

import usersRouter from './routes/user';
import questionsRouter from './routes/question';

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

app.use(errorHandler);
app.use(notFoundHandler);

export { app };
