import { Router } from 'express';
import { createUser, getUsers } from '../controllers/users';



const userRouter = Router();
// api/users/
userRouter.post('/', createUser)
userRouter.get('/', getUsers)

export default userRouter;