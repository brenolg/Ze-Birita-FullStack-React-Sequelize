const express = require('express');
require('express-async-errors');
const cors = require('cors');
const path = require('path');
const ErrorHandler = require('../middlewares/ErrorMiddleware');
const { loginRouter, registerRouter, productRouter, orderRouter } = require('../routers/index');

class App {
  constructor() {
    this.app = express();

    this.config();
    this.routes();
  }

  config() {
    const accessControl = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(cors()); // cors() e accessControl fazem o mesmo papel?
    this.app.use(accessControl);
  }

  routes() {
    this.app.use(
      '/products/register', 
      express.static(path.resolve(__dirname, '..', '..', 'public', 'images')),
      );
    this.app.use('/login', loginRouter);
    this.app.use('/register', registerRouter);   
    this.app.use('/products', productRouter);
    this.app.use('/custumer/orders', orderRouter);
    // this.app.use('/saller/orders', orderRouter);
    this.app.use(express.static('public'));    
    
    this.app.use(ErrorHandler.handle);
  }

  start(PORT) {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

module.exports = App;
