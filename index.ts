import express, { Express, Request, Response } from 'express';
import dotenv = require('dotenv');

// env. configuration
dotenv.config();

// Create express application
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// First route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

