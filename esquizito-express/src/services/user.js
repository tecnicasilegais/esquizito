import userRepository from 'repositories/user';
import { BaseService } from 'services/base.service';
import { FilterType } from 'utils/filter.util';

export class UserService extends BaseService {
  constructor() {
    super(userRepository);
  }

  getByEmail = async (email) =>
    this.repository.getOne([
      { field: 'email', type: FilterType.EQUALS, value: email },
    ]);

  getByAuth0Id = async (auth0Id) =>
    this.repository.getOne([
      { field: 'auth0Id', type: FilterType.EQUALS, value: auth0Id },
    ]);
}
