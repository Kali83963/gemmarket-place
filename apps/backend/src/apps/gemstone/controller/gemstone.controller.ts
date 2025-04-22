// App/Gemstone/Controllers/GemstoneController.ts
import { Request, Response } from 'express';
import { GemstoneService } from '../services/gemstone.service';

const gemstoneService = new GemstoneService();

export class GemstoneController {
  async addGemstone(req: Request, res: Response) {
    const gemstone = await gemstoneService.addGemstone(req.body);
    res.status(201).json(gemstone);
  }

  async editGemstone(req: Request, res: Response) {
    const gemstone = await gemstoneService.editGemstone(+req.params.id, req.body);
    res.json(gemstone);
  }

  async deleteGemstone(req: Request, res: Response) {
    await gemstoneService.deleteGemstone(+req.params.id);
    res.status(204).send();
  }

  async getGemstone(req: Request, res: Response) {
    const gemstone = await gemstoneService.getGemstone(+req.params.id);
    res.json(gemstone);
  }

  async searchGemstones(req: Request, res: Response) {
    const gemstones = await gemstoneService.searchGemstones(
      req.query.type as string, 
      parseFloat(req.query.minPrice as string), 
      parseFloat(req.query.maxPrice as string), 
      req.query.origin as string, 
      req.query.certificationStatus === 'true'
    );
    res.json(gemstones);
  }

  // New method to get all gemstones
  async getAllGemstones(req: Request, res: Response) {
    try {
      const gemstones = await gemstoneService.getAllGemstones();
      res.json(gemstones);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching gemstones', error: error.message });
    }
  }
}
