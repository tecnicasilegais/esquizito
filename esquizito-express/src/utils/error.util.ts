export class CustomError extends Error {
  constructor(message: string, name: string) {
    super(message);
    this.name = name;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
