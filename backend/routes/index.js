import express from "express";
 
import { 
    getAllmeasurement,
    createMeasurement,
    getMeasurementById,
    updateMeasurement,
    deleteMeasurement
} from "../controllers/measurement.js";
 
const router = express.Router();
 
router.get('/', getAllmeasurement);
router.get('/:id', getMeasurementById);
router.post('/', createMeasurement);
router.patch('/:id', updateMeasurement);
router.delete('/:id', deleteMeasurement);
 
export default router;