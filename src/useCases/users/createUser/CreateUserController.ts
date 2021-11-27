import { Request, Response } from 'express';

import { IMailProvider } from '../../../providers/IMailProvider';

class CreateUserController {
  constructor(private mailProvider: IMailProvider) {}

  async handle(req: Request, res: Response) {
    const { name, email } = req.body;

    await this.mailProvider.send({
      to: {
        name,
        address: email,
      },
      from: 'treno@spsconsultoria.com.br',
      subject: 'Novo usuário',
      body: '<p>Isso é um e-mail de boas vindas</p>',
    });

    res.sendStatus(201);
  }
}

export { CreateUserController };
