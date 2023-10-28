export {};

declare global {
  namespace Express {
    export interface Request {
      notFoundMessage?: string;
    }
    export interface Response {
      isSent?: boolean;
    }
  }
}
