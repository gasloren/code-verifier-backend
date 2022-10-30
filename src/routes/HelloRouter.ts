import express, { Request, Response } from 'express';

import { LogInfo } from '../utils/logger';

import { IHelloController } from '../controller/interfaces';
import { HelloController } from '../controller/HelloController';


// Router from express
let helloRouter = express.Router();

// GET -> /api/hello/
helloRouter.route('/')
  .get(async (req: Request, res: Response) => {
    let name: any = req?.query?.name;
    LogInfo(`Query Param: ${name}`);
    // Controller Instance
    const controller: IHelloController = new HelloController();
    const response = await controller.getMessage(name);
    // Send to the cliente the response
    res.send(response);
  })

export default helloRouter;
