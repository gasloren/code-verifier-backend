/**
 * Root Router
 * Redirections to Routers
 */

import express, { Express, Request, Response } from 'express';

import { LogInfo } from '../utils/logger';

import helloRouter from './HelloRouter';
import goodbyeRouter from './GoodbyeRouter';


// Server Instance
let server: Express = express();

let rootRouter = express.Router();

// GET --> http://localhost:8000/api
rootRouter.get('/', (req: Request, res: Response) => {
  LogInfo('GET --> http://localhost:8000/api')
  res.status(200).send('Welcomo to my API Restfull!');
});

// Routes Redirections
server.use('/', rootRouter);
server.use('/hello', helloRouter);
server.use('/goodbye', goodbyeRouter);
// add more routes...

export default server;

