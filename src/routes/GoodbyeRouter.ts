import express, { Request, Response } from 'express';

import { LogInfo } from '../utils/logger';

import { IGoodbyeController } from '../controller/interfaces';
import { GoodbyeController } from '../controller/GoodbyeController';


// Router from express
let goodbyeRouter = express.Router();

// GET -> /api/hello/
goodbyeRouter.route('/')
  .get(async (req: Request, res: Response) => {
    let name: any = req?.query?.name;
    LogInfo(`Query Param: ${name}`);
    // Controller Instance
    const controller: IGoodbyeController = new GoodbyeController();
    const response = await controller.getMessageAndDate(name);
    // Send to the cliente the response
    res.send(response);
  })

export default goodbyeRouter;
