import { Router } from 'express';

import { createUserController } from './useCases/users/createUser';

const routes = Router();

routes.post('/', createUserController.handle);

export { routes };
