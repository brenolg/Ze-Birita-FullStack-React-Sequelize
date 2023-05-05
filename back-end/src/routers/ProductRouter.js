const { Router } = require('express');
const ProductController = require('../controllers/ProductController');
const ProductService = require('../services/ProductService');

const router = Router();
const productService = new ProductService();

router.get('/:id', (req, res, next) => new ProductController(productService, req, res, next)
.getById());

module.exports = router;
