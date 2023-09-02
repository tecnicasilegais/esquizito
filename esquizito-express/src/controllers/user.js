import { UserService } from 'services/user';
import { BaseController } from 'controllers/base.controller';

export class UserController extends BaseController {
  constructor() {
    super(new UserService(), 'user');
  }

  getByAuth0Id = async (req, res, next) => {
    const auth0Id = req.params.id;

    const user = await this.service.getByAuth0Id(auth0Id);

    if (!user) {
      req.notFoundMessage = `Could not locate user by auth0Id: ${auth0Id}`;
      return next();
    }

    return res.status(200).json(user);
  };

  getByEmail = async (req, res, next) => {
    const { email } = req.params;

    const user = await this.service.getByEmail(email);

    if (!user) {
      req.notFoundMessage = `Could not locate user by email: ${email}`;
      return next();
    }

    return res.status(200).json(user);
  };
}
