import userRepository from 'repositories/user.repository';
import questionService from 'services/question.service';
import { BaseService } from 'services/base.service';
import { FilterType } from 'utils/filter.util';
import { UserDocument } from 'models/documents';
import { CustomError } from '../utils/error.util';

export class UserService extends BaseService<UserDocument> {
  constructor() {
    super(userRepository);
  }

  async getByEmail(email: string) {
    return this.repository.getOne([
      { field: 'email', type: FilterType.EQUALS, value: email },
    ]);
  }

  async getByAuth0Id(auth0Id: string) {
    return this.repository.getOne([
      { field: 'auth0Id', type: FilterType.EQUALS, value: auth0Id },
    ]);
  }

  async getQuestions(id: string) {
    const exists = await super.exists({ _id: id });
    if (!exists) {
      throw new CustomError(
        `Could not locate a user by id: ${id}`,
        'UserIdNotFound',
      );
    }

    return questionService.listByUserId(id);
  }
}

const userService = new UserService();
export default userService;
