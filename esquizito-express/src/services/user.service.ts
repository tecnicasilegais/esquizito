import userRepository from 'repositories/user.repository';
import { BaseService } from 'services/base.service';
import { FilterType } from 'utils/filter.util';
import { UserDocument } from 'models/documents';

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
}

const userService = new UserService();
export default userService;
