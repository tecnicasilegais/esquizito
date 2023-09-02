import { BaseService } from 'services/base.service';

export class BaseController {
  constructor(service, name = 'resource') {
    if (!(service instanceof BaseService)) {
      throw new Error(`${service} is not a valid service`);
    }
    this.service = service;
    this.name = name;
  }

  async get(req, res, next) {
    const { id } = req.params;

    const model = await this.service.get(id);

    if (!model) {
      req.notFoundMessage = `Could not locate ${this.name} by id: ${id}`;
      return next();
    }

    return res.status(200).json(model);
  }

  async create(req, res, next) {
    const { body } = req;

    this.service
      .create(body)
      .then(({ _id }) => res.status(201).json({ id: _id }))
      .catch((err) => next(err));
  }
}
