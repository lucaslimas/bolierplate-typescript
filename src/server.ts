import dotenv from 'dotenv';
import express from 'express';

import { routes } from './routes';

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
