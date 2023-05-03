const express = require('express');
const cors = require('cors');
const ErrorHandler = require('../middlewares/ErrorMiddleware');
const LoginRouter = require('../routers/LoginRouter');

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
    this.app.use('/login', LoginRouter);
    this.app.get('/coffee', (_req, res) => res.status(418).end());
    this.app.use(ErrorHandler.errorMiddleware);
  }

  start(PORT) {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

module.exports = App;
