import { ValidationError } from 'express-validator';
import { CustomError} from './custom-error'

export class RequestError extends CustomError {
  statusCode = 500;
  constructor(public errors: ValidationError[]) {
    super('invalid Request');
    Object.setPrototypeOf(this, RequestError.prototype)
  }

  serializeError(): { msg: string; field?: string | undefined; }[] {
      return this.errors.map(err => {
          return {msg: err.msg}
      })
  }
}
