import { Router } from 'express';
import { createUser } from '../controllers/users';



const userRouter = Router();
// api/users/
userRouter.post('/', createUser)

export default userRouter;