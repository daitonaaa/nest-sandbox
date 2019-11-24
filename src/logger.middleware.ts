import { Request, Response } from 'express';

export function loggerMiddleware(req: Request, res: Response, next: () => void) {
  console.log(`Request ${req.method} : ${req.url}`);
  next();
}
