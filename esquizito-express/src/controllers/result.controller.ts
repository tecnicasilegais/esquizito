import { BaseController } from 'controllers/base.controller';
import { ResultDocument } from 'models/documents';
import resultService, { ResultService } from 'services/result.service';

export class ResultController extends BaseController<ResultDocument> {
  declare service: ResultService;

  constructor() {
    super(resultService, 'result');
  }
}
