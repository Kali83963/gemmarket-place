import { Request, Response, NextFunction } from "express";
import { errorResponse, successResponse } from "@/utils/response";
import { asyncHandler } from "@/utils/utils";
import { EndoserService } from "../services/endoser.service";

const endoserService = new EndoserService();

export const creatEendoser = asyncHandler(
  async (req: Request, res: Response) => {
    const endoser = await endoserService.create(req.body);

    successResponse(res, endoser, "endoser created successfully", 201);
  }
);

export const getEndoser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const endoser = await endoserService.getendoserById(id);

  successResponse(res, endoser, "endoser fetched successfully", 200);
});

export const editEndoser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const endoser = await endoserService.editEndoser(id, req.body);

  successResponse(res, endoser, "endoser updated successfully", 200);
});

export const deletEendoser = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const endoser = await endoserService.deleteendoser(id);

    successResponse(res, {}, "endoser deleted successfully", 204);
  }
);

export const searchEndoser = asyncHandler(
  async (req: Request, res: Response) => {
    const { query } = req.query;
    const endosers = await endoserService.searchendosers(query as string);

    successResponse(
      res,
      endosers,
      "endoser search completed successfully",
      200
    );
  }
);

export const getEndoserProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.user;
    const endoser = await endoserService.getendoserById(id);
    if (!endoser) {
      return errorResponse(res, "endoser not found", 404);
    }

    successResponse(res, endoser, "endoser profile fetched successfully", 200);
  }
);

export const updateEndoserProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.user;
    const endoser = await endoserService.editEndoser(id, req.body);
    if (!endoser) {
      return errorResponse(res, "endoser not found", 404);
    }

    successResponse(res, endoser, "endoser profile updated successfully", 200);
  }
);
