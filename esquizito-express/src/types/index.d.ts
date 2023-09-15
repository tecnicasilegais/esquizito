export {};

declare global {
  namespace Express {
    export interface Request {
      notFoundMessage?: string;
    }
  }
}
