const express = require("express")
const router = express.Router();
const {getProducts,getProduct, updatedProduct, deleteProduct,  createProduct} = require('../controllers/Product.control.js')

// get all
router.get('/', getProducts);
//single product
router.get('/:id', getProduct);

//update
router.put('/:id', updatedProduct)

//delete
router.delete('/:id',deleteProduct)

router.post('/', createProduct)
 module.exports = router;