import express, { Request, Response, NextFunction , Application} from 'express';
import { json } from 'body-parser';
import connect from './config/db.config';

const app: Application = express();

app.use(json());

const db = 'mongodb://localhost:27017/test';
connect({db});

app.get('/', (req: Request, res: Response) =>
  res.send('Welcome to the Mongoose & TypeScript example')
);

app.listen(3000, ()=>{
  console.log("server is running")
} );
