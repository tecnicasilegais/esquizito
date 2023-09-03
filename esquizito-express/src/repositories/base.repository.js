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

  async get(id) {
    return this.model.findById(id).exec();
  }

  async getOne(filters) {
    return filterOperation(this.model.findOne(), filters).exec();
  }

  async getAll(filters) {
    return filterOperation(this.model.find(), filters).exec();
  }

  async update(id, fieldsToUpdate) {
    return this.model.findByIdAndUpdate(id, fieldsToUpdate).exec();
  }

  async create(fieldsToCreate) {
    return this.model.create(fieldsToCreate);
  }

  async exists(fields) {
    return this.model.exists(fields).exec();
  }
}
