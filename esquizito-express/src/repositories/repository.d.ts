import { Filter } from 'utils/filter.util';

export interface IRepository<T> {
  get(id: string): Promise<T | null>;
  getOne(filters: Filter<T, keyof T>[]): Promise<T | null>;
  getAll(filters: Filter<T, keyof T>[]): Promise<T[]>;
  update(id: string, changes: Partial<T>): Promise<T | null>;
  create(model: T): Promise<T>;
  exists(fields: Partial<T>): Promise<boolean>;
}
