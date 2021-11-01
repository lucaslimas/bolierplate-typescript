import dotenv from 'dotenv';
import express from 'express';

import { routes } from './routes';
import beforeShutdown from './shutdown';

dotenv.config();

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('Server is running');
});

server.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});

server.use(routes);

beforeShutdown(async () => {
  console.log('Service was Finished');
});
