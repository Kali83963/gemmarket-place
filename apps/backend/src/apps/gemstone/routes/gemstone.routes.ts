// App/Gemstone/Routes/GemstoneRoutes.ts
import { Router } from 'express';
import { GemstoneController } from "../controller/gemstone.controller";

const router = Router();
const gemstoneController = new GemstoneController();

router.get('/all', gemstoneController.getAllGemstones.bind(gemstoneController));
router.post('/', gemstoneController.addGemstone.bind(gemstoneController));
router.put('/:id', gemstoneController.editGemstone.bind(gemstoneController));
router.delete('/:id', gemstoneController.deleteGemstone.bind(gemstoneController));
router.get('/:id', gemstoneController.getGemstone.bind(gemstoneController));
router.get('/', gemstoneController.searchGemstones.bind(gemstoneController));



export { router as gemstoneRoutes };
