const { Router } = require('express');
const ProductController = require('../controllers/ProductController');
const ProductService = require('../services/ProductService');
const UserHandler = require('../middlewares/UserMiddlewares');
const role = require('../utils/rolesList');
const upload = require('../utils/upload');

const router = Router();
const productService = new ProductService();

router.get(
  '/', 
  (req, res, next) => new ProductController(productService, req, res, next)
  .getAll(),
);

router.get(
  '/:id', 
  (req, res, next) => new ProductController(productService, req, res, next)
  .getById(),
);

router.post(
  '/register', 
  UserHandler.defaultAccess,
  upload.single('image'), 
  (req, res, next) => new ProductController(productService, req, res, next)
  .create(),
);

router.delete(
'/:id', 
UserHandler.defaultAccess,
UserHandler.roleAccess(role.ADMIN),
(req, res, next) => new ProductController(productService, req, res, next)
.remove(),
);

module.exports = router;
