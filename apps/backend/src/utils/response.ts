import { Response } from "express";

export const successResponse = (
  res: Response,
  data: any,
  message = "Success",
  status = 200
) => {
  return res.status(status).json({
    data,
    message,
  });
};

export const errorResponse = (
  res: Response,
  message = "Something went wrong",
  status = 400,
  data: any = null
) => {
  return res.status(status).json({
    data,
    message,
  });
};
