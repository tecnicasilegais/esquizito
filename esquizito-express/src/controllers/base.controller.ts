import { NextFunction, Request, Response } from 'express';
import { BaseService } from 'services/base.service';

export class BaseController<T> {
  protected service: BaseService<T>;

  protected readonly name: string;

  constructor(service: BaseService<T>, name: string) {
    this.service = service;
    this.name = name;
  }

  get = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const model = await this.service.get(id);

    if (!model) {
      req.notFoundMessage = `Could not locate ${this.name} by id: ${id}`;
      return next();
    }

    return res.status(200).json(model);
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    this.service
      .create(body)
      .then(({ _id }) => res.status(201).json({ id: _id }))
      .catch((err) => next(err));
  };
}
