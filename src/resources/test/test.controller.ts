import { Request, Response } from 'express';

class TestController {
  get(req: Request, res: Response) {
    res.send('Its a message by Test Controller');
  }
}

export default new TestController();
