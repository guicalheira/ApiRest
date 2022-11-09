const express = require('express')
const ProductController = require('./controllers/productController.js')

const router =express.Router();

router.get('/products',ProductController.index)
router.get('/products/:id',ProductController.show)
router.post('/products/:id',ProductController.create)
module.exports = router;