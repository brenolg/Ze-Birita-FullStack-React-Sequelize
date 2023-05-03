import * as express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/ErrorHandler';
import { LoginRouter } from './routers';

class App {
  constructor() {
    this.app = express();

    this._config();
    this._routes();
  }

  _config() {
    const accessControl = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  _routes() {
    this.app.use('/login', LoginRouter);
    this.app.get('/coffee', (_req, res) => res.status(418).end());
    this.app.use(errorHandler);
  }

  start(PORT) {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}


module.exports = App;

