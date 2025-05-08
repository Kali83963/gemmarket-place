import { Request, Response, NextFunction, RequestHandler } from "express";
import { errorResponse } from "./response";

// export const asyncHandler =
//   (
//     fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
//   ): RequestHandler =>
//   (req, res, next) => {
//     fn(req, res, next).catch(next);
//   };
export const asyncHandler =
  (
    fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
  ): RequestHandler =>
  (req, res, next) => {
    fn(req, res, next).catch((error) => {
      console.log(error);
      errorResponse(
        res,
        error.message || "Something went wrong",
        error.statusCode || 400
      );
    });
  };
