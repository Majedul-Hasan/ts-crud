import express, { Request, Response, NextFunction , Application} from 'express';
import { json } from 'body-parser';
import connect from './config/db.config';
import userRouter from './routes/users';

const app: Application = express();

app.use(json());

const db = 'mongodb+srv://apolo2:wnRwDO7qM7KC5o92@apolo.ua3pari.mongodb.net/RAKIB?retryWrites=true&w=majority';
// const db = 'mongodb://localhost:27017/testY';
connect({db});
app.use('/api/users', userRouter)

app.get('/', (req: Request, res: Response) =>
  res.send('Welcome to the Mongoose & TypeScript example')
);

app.listen(5000, ()=>{
  console.log("server is running on port " + 5000);
} );
