import { BaseRepository } from 'repositories/base.repository';

export class BaseService {
  constructor(repository) {
    if (!(repository instanceof BaseRepository)) {
      throw new Error(`${repository} is not a valid repository`);
    }
    this.repository = repository;
  }

  async get(id) {
    return this.repository.get(id);
  }

  async create(model) {
    return this.repository.create(model);
  }

  async update(id, model) {
    return this.repository.update(id, model);
  }

  async exists(model) {
    return this.repository.exists(model);
  }
}
