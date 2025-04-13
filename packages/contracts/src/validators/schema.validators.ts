import { ZodSchema } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body); // validated + inferred
      next();
    } catch (err: any) {
      const formattedErrors = err.errors.map((err: any) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      res.status(400).json({
        message: "Validation failed",
        errors: formattedErrors,
      });
      return;
    }
  };
