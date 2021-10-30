import { Router } from 'express';

import { testRoutes } from './resources/test/test.routes';

const routes = Router();

routes.use(testRoutes);

export { routes };
