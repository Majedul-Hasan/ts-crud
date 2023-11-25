import { Router } from 'express';
import { createUser } from '../controllers/users';



const userRouter = Router();

userRouter.post('/user', createUser)

export default userRouter;