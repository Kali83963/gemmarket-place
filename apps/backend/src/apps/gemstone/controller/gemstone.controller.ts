// App/Gemstone/Controllers/GemstoneController.ts
import { Request, Response } from "express";
import { GemstoneService } from "../services/gemstone.service";
import { asyncHandler } from "@/utils/utils";
import { successResponse } from "@/utils/response";

const gemstoneService = new GemstoneService();

export const addGemstone = asyncHandler(async (req: Request, res: Response) => {
  const user = req.user;
  const gemstone = await gemstoneService.addGemstone(req.body, user);
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
export const verifyGemstone = asyncHandler(
  async (req: Request, res: Response) => {
    const status = await gemstoneService.verifyGemstone(
      +req.params.id,
      req.body,
      req.user
    );

    successResponse(
      res,
      null,
      `Gemstone ${req.params.id} ${status} successfully`,
      201
    );
  }
);

export const generateGemstoneHash = asyncHandler(
  async (req: Request, res: Response) => {
    const data = await gemstoneService.generateGemstoneHash(
      +req.params.id,
      req.body
    );

    successResponse(res, data, `Hash Generated successfully`, 201);
  }
);

export const updateGemstoneStatus = asyncHandler(
  async (req: Request, res: Response) => {
    const gemstone = await gemstoneService.updateGemstoneStatus(
      +req.params.id,
      req.body
    );

    successResponse(res, gemstone, "Gemstone edited successfully", 201);
  }
);

export const updateGemstoneBlockChainId = asyncHandler(
  async (req: Request, res: Response) => {
    const gemstone = await gemstoneService.updateGemstoneBlockChainId(
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
export const getGemstoneAdmin = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const gemstone = await gemstoneService.getGemstoneAdmin(+id);
    successResponse(res, gemstone, "Gemstone updated successfully");
  }
);
export const getGemstoneUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.user;
    const gemstone = await gemstoneService.getUserGemstone(id);
    successResponse(res, gemstone, "Gemstone updated successfully");
  }
);

export const searchGemstones = asyncHandler(
  async (req: Request, res: Response) => {
    const { user } = req;
    const gemstones = await gemstoneService.searchGemstones(user, req.params);
    successResponse(res, gemstones, "Gemstone reterived successfully");
  }
);

// New method to get all gemstones
export const getAllGemstones = asyncHandler(
  async (req: Request, res: Response) => {
    const query = req.query;
    const gemstones = await gemstoneService.getAllGemstones(query);
    successResponse(res, gemstones, "Gemstone reterived successfully");
  }
);
