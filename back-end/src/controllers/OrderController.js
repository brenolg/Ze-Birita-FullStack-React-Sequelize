// const StatusCodes = require('../utils/statusCode');
const StatusCodes = require('../utils/statusCode');
const AbstractController = require('./AbstractController');

class OrderControler extends AbstractController {
  constructor(orderService, req, res, next) {
    super(
      orderService,
      req,
      res,
      next,
    );
    this.service = orderService;
  }

  async getOrdersByCustomer() {
    const { id } = this.req.params;
    const orders = await this.service.getOrdersByCustomer(id);
    return this.res.status(StatusCodes.OK).json(orders);
  }

  async getOrdersBySeller() {
    const { id } = this.req.params;
    const orders = await this.service.getOrdersBySeller(id);
    return this.res.status(StatusCodes.OK).json(orders);
  }

  async updateStatus() {
    const { id } = this.req.params;
    const { status } = this.req.body;
    const update = await this.service.updateStatus(id, status);
    return this.res.status(StatusCodes.OK).json({ message: update });
  }
}

module.exports = OrderControler;
