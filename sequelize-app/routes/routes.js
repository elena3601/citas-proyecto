// Import express
import express from "express";
// Import Product Controller
import { 
    getCitas,
    getCitasById,
    createCitas,
    updateCitas,
    deleteCitas
 } from "../controllers/Citas.js";
 
 // Init express router
const router = express.Router();
 
// Route get all products
router.get('/citas', getCitas);
// Route get product by id
router.get('/citas/:id', getCitasById);
// Route create a new product
router.post('/citas', createCitas);
// Route update product by id
router.put('/citas/:id', updateCitas);
// Route delete product by id
router.delete('/citas/:id', deleteCitas);
 
// export router
export default router;