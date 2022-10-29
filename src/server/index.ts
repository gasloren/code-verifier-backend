import express, { Express, Request, Response } from 'express';

// Security
import cors from 'cors';
import helmet from 'helmet';

// Routes
import router from '../routes';

// * Create express application
const server: Express = express();

// http://localhost:8000/api...
server.use('/api', router);

// * Mongoose connection

// * Security Config
server.use(helmet());
server.use(cors());
server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ extended: true, limit: '50mb' }));

// * Redirect to "/api"
server.get('/', (req: Request, res: Response) => {
  res.redirect('/api');
});

export default server;

