import { Model, QueryWithHelpers } from 'mongoose';

import { Filter, FilterType } from 'utils/filter.util';

import { IRepository } from './repository';

export class BaseRepository<T> implements IRepository<T> {
  private _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  // eslint-disable-next-line class-methods-use-this
  private filterOperation(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mongoOperation: QueryWithHelpers<any, any>,
    filters: Filter<T, keyof T>[] = [],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): QueryWithHelpers<any, any> {
    let req = mongoOperation;
    filters.forEach((filter) => {
      const { field, type, value } = filter;
      switch (type) {
        case FilterType.IN:
          req = req.where(field as string).in(value as T[keyof T][]);
          break;
        case FilterType.EQUALS:
          req = req.where(field as string).equals(value);
          break;
        default:
          break;
      }
    });
    return req;
  }

  async get(id: string): Promise<T | null> {
    return this._model.findById(id).exec();
  }

  async getOne(filters: Filter<T, keyof T>[]): Promise<T | null> {
    return this.filterOperation(this._model.findOne(), filters).exec();
  }

  async getAll(filters: Filter<T, keyof T>[]): Promise<T[]> {
    return this.filterOperation(this._model.find(), filters).exec();
  }

  async update(id: string, changes: Partial<T>, fieldsToRemove?: [keyof T]) {
    const updateOperation: [{ $set: Partial<T> } | { $unset: keyof T }] = [
      { $set: changes },
    ];
    if (fieldsToRemove) {
      fieldsToRemove.forEach((field: keyof T) => {
        updateOperation.push({ $unset: field });
      });
    }
    return this._model
      .findByIdAndUpdate(id, updateOperation, { new: true })
      .exec();
  }

  async increment(id: string, field: keyof T, amount: number) {
    return this._model.findByIdAndUpdate(
      id,
      { $inc: { [field]: amount } } as never,
      { new: true },
    );
  }

  async create(model: T) {
    return this._model.create(model);
  }

  async exists(fields: Partial<T>): Promise<boolean> {
    return this._model
      .exists(fields)
      .exec()
      .then((result) =>
        result ? Promise.resolve(true) : Promise.resolve(false),
      );
  }
}
