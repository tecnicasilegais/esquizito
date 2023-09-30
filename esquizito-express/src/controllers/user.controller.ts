import { NextFunction, Request, Response } from 'express';

import { BaseController } from 'controllers/base.controller';
import userService, { UserService } from 'services/user.service';

import { UserDocument } from '../models/documents';

export class UserController extends BaseController<UserDocument> {
  declare service: UserService;

  constructor() {
    super(userService, 'user');
  }

  getByAuth0Id = async (req: Request, res: Response, next: NextFunction) => {
    const auth0Id = req.params.id;

    const user = await this.service.getByAuth0Id(auth0Id);

    if (!user) {
      req.notFoundMessage = `Could not locate user by auth0Id: ${auth0Id}`;
      return next();
    }

    return res.status(200).json(user);
  };

  getByEmail = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.params;

    const user = await this.service.getByEmail(email);

    if (!user) {
      req.notFoundMessage = `Could not locate user by email: ${email}`;
      return next();
    }

    return res.status(200).json(user);
  };

  getQuestions = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const questions = await this.service.getQuestions(id);

    if (!questions) {
      req.notFoundMessage = `Could not locate questions by userId: ${id}`;
      return next();
    }

    return res.status(200).json(questions);
  };
}
