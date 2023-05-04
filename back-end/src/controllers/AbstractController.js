class AbstractController {
  constructor(service, req, res, next) {
    this.service = service;
    this.req = req;
    this.res = res;
    this.next = next;
  }

  async getAll() {
      const result = await this.service.getAll();
      return this.res.status(200).json(result);
  }

  async getById() {
      const { id } = this.req.params;
      const result = await this.service.getById(id);
      return this.res.status(200).json(result);
  }

  async create() {
      const newObj = await this.service.create(this.req.body);
      return this.res.status(201).json(newObj);
  }

  async update() {
    const { id } = this.req.params;

      const updated = await this.service.update(id, this.req.body);
      return this.res.status(200).json(updated);
  }

  async remove() {
    const { id } = this.req.params;

      await this.service.remove(id);
      return this.res.status(204).json();
  }
}

module.exports = AbstractController;
