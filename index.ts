import express, { Express, Request, Response } from 'express';
import dotenv = require('dotenv');

// env. configuration
dotenv.config();

// Create express application
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// GET root
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    data: {
      message: 'Goodbye, world'
    }
  });
});

// GET with 'name' query
app.get('/hello', (req: Request, res: Response) => {
  const { name = 'anónimo' } = req.query;
  res.status(200).json({
    data: {
      message: `Hola, ${name}`
    }
  });
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

