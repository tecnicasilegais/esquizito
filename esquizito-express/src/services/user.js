import userRepository from 'repositories/user';
import { BaseService } from 'services/base.service';
import { FilterType } from 'utils/filter.util';

export class UserService extends BaseService {
  constructor() {
    super(userRepository);
  }

  async getByEmail(email) {
    return this.repository.getOne([
      { field: 'email', type: FilterType.EQUALS, value: email },
    ]);
  }

  async getByAuth0Id(auth0Id) {
    return this.repository.getOne([
      { field: 'auth0Id', type: FilterType.EQUALS, value: auth0Id },
    ]);
  }
}

const userService = new UserService();
export default userService;
