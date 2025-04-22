// App/Gemstone/Controllers/GemstoneController.ts
import { Request, Response } from "express";
import { GemstoneService } from "../services/gemstone.service";
import { asyncHandler } from "@/utils/utils";
import { successResponse } from "@/utils/response";

const gemstoneService = new GemstoneService();

export const addGemstone = asyncHandler(async (req: Request, res: Response) => {
  const gemstone = await gemstoneService.addGemstone(req.body);
  successResponse(res, gemstone, "Gemstone created successfully", 201);
});

export const editGemstone = asyncHandler(
  async (req: Request, res: Response) => {
    const gemstone = await gemstoneService.editGemstone(
      +req.params.id,
      req.body
    );

    successResponse(res, gemstone, "Gemstone edited successfully", 201);
  }
);

export const deleteGemstone = asyncHandler(
  async (req: Request, res: Response) => {
    await gemstoneService.deleteGemstone(+req.params.id);
    successResponse(res, "Gemstone deleted successfully");
  }
);

export const getGemstone = asyncHandler(async (req: Request, res: Response) => {
  const gemstone = await gemstoneService.getGemstone(+req.params.id);
  successResponse(res, gemstone, "Gemstone updated successfully");
});

export const searchGemstones = asyncHandler(
  async (req: Request, res: Response) => {
    const gemstones = await gemstoneService.searchGemstones(
      req.query.type as string,
      parseFloat(req.query.minPrice as string),
      parseFloat(req.query.maxPrice as string),
      req.query.origin as string,
      req.query.certificationStatus === "true"
    );
    successResponse(res, gemstones, "Gemstone reterived successfully");
  }
);

// New method to get all gemstones
export const getAllGemstones = asyncHandler(
  async (req: Request, res: Response) => {
    const gemstones = await gemstoneService.getAllGemstones();
    successResponse(res, gemstones, "Gemstone reterived successfully");
  }
);
