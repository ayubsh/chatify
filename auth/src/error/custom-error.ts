export abstract class CustomError extends Error {
  abstract statusCode: number;
  constructor(msg: string) {
   super(msg);
   Object.setPrototypeOf(this, CustomError.prototype)
  }

  abstract serializeError(): {msg: string, field?: string}[];
}
