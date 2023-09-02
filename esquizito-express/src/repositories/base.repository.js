import { Model } from 'mongoose';
import { FilterType } from 'utils/filter.util';

const filterOperation = (mongoOperation, filters) => {
  let req = mongoOperation;
  filters.forEach((filter) => {
    const { field, type, value } = filter;
    switch (type) {
      case FilterType.IN:
        req = req.where(field).in(value);
        break;
      case FilterType.EQUALS:
        req = req.where(field).equals(value);
        break;
      default:
        break;
    }
  });
  return req;
};

export class BaseRepository {
  constructor(model) {
    if (!(model.prototype instanceof Model)) {
      throw new Error(`${model} is not a valid mongoose model`);
    }
    this.model = model;
  }

  get = async (id) => this.model.findById(id).exec();

  getOne = async (filters) =>
    filterOperation(this.model.findOne(), filters).exec();

  getAll = async (filters) =>
    filterOperation(this.model.find(), filters).exec();

  update = async (id, fieldsToUpdate) =>
    this.model.findByIdAndUpdate(id, fieldsToUpdate).exec();

  create = async (fieldsToCreate) => this.model.create(fieldsToCreate);
}
