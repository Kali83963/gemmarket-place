import { asyncHandler } from "@/utils/utils";
import { Request, Response } from "express";

export const uploads = asyncHandler(async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded");
  }

  // Return the URL of the uploaded file
  const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  res.json({ fileUrl });
});
