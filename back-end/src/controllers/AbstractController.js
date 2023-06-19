const StatusCodes = require('../utils/statusCode');

class AbstractController {
  constructor(service, req, res, next) {
    this.service = service;
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async getAll() {
    const result = await this.service.getAll();
    return this.res.status(StatusCodes.OK).json(result);
  }

  async getById() {
    const { id } = this.req.params;
    const result = await this.service.getById(id);
    return this.res.status(StatusCodes.OK).json(result);
  }

  async create() {
    this.req.body.userId = this.req.body.user.id;
    const newObj = await this.service.create(this.req.body);
    return this.res.status(StatusCodes.CREATED).json(newObj);
  }

  async update() {
    const { id } = this.req.params;
    const updated = await this.service.update(id, this.req.body);
    return this.res.status(StatusCodes.OK).json(updated);
  }

  async remove() {
    const { id } = this.req.params;

      await this.service.remove(id);
      return this.res.status(StatusCodes.NO_CONTENT).json();
  }
}

module.exports = AbstractController;
