import { BaseRepository } from 'repositories/base.repository';

export class BaseService<T> {
  protected repository: BaseRepository<T>;

  constructor(repository: BaseRepository<T>) {
    this.repository = repository;
  }

  async get(id: string) {
    return this.repository.get(id);
  }

  async create(model: T) {
    return this.repository.create(model);
  }

  async update(id: string, model: Partial<T>) {
    return this.repository.update(id, model);
  }

  async exists(model: Partial<T>) {
    return this.repository.exists(model);
  }
}
