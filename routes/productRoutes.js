const express = require('express');
const {getProducts, createProduct, deleteProduct, updateProductQuantity} = require('../controller/productControllers');

// initialising router
const router = express.Router();

//routes
router.get('/products', getProducts);
router.post('/products/create', createProduct);
router.delete('/products/:id', deleteProduct);
router.post('/products/:id/update_quantity', updateProductQuantity);

module.exports = router;
