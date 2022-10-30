import express, { Express, Request, Response } from 'express';

import swagger from 'swagger-ui-express';

// * Security
import cors from 'cors';
import helmet from 'helmet';

// * Routes
import router from '../routes';
// import mongoose from 'mongoose';

// * Create express application
const server: Express = express();

// * Security Config
server.use(helmet());
server.use(cors());
server.use(express.json({ limit: '50mb' }));
server.use(express.urlencoded({ extended: true, limit: '50mb' }));


// * Static Server
server.use(express.static('public'));

// * Swagger Config and Route
server.use('/docs', swagger.serve, swagger.setup(undefined, {
  swaggerOptions: {
    url: '/swagger.json',
    explorer: true
  }
}));

// * API routes -> http://localhost:8000/api...
server.use('/api', router);

// * Mongoose connection
// mongoose.connect('')


// * Redirect to "/api"
server.get('/', (req: Request, res: Response) => {
  res.redirect('/api');
});


export default server;

