import { BaseRepository } from 'repositories/base.repository';

export class BaseService {
  constructor(repository) {
    if (!(repository instanceof BaseRepository)) {
      throw new Error(`${repository} is not a valid repository`);
    }
    this.repository = repository;
  }

  get = async (id) => this.repository.get(id);

  create = async (model) => this.repository.create(model);

  update = async (id, model) => this.repository.update(id, model);
}
