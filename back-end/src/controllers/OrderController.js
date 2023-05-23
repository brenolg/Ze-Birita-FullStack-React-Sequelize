// const StatusCodes = require('../utils/statusCode');
const roles = require('../utils/rolesList');
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

  async getAllByUser() {
    const { user: { id }, role } = this.req.body;
    console.log('controller role', role, id);
    if (role === roles.CUSTOMER) {
      this.getAllByCustomer(id);
    }
    if (role === roles.SELLER) {
      this.getAllBySeller(id);
    }
    if (role === roles.ADMIN) {
      this.getAll();
    }
  }

  async getAllByCustomer(id) {
    const orders = await this.service.getAllByCustomer(id);
    return this.res.status(StatusCodes.OK).json(orders);
  }

  async getAllBySeller(id) {
    const orders = await this.service.getAllBySeller(id);
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
