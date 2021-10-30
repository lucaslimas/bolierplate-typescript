import { Router } from 'express';

import TestController from './test.controller';

const testRoutes = Router();

testRoutes.get('/test', TestController.get);

export { testRoutes };
