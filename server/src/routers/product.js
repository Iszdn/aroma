import { Router } from 'express'
import { createProducts, deleteProduct, getProducts } from '../controllers/product.js'
const router = Router()

router.post("/",createProducts)
router.get("/",getProducts)
router.delete("/:id",deleteProduct)



export default router