import { MailtrapProvider } from '../../../providers/implementations/MailtrapProvider';
import { CreateUserController } from './CreateUserController';

const mailProvider = new MailtrapProvider();

const createUserController = new CreateUserController(mailProvider);

export { createUserController };
