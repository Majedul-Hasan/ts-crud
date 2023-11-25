import { Router } from 'express';
import { createUser, getUsers, getUsersByid } from '../controllers/users';



const userRouter = Router();
// api/users/
userRouter.post('/', createUser)
userRouter.get('/', getUsers)
userRouter.get('/:id', getUsersByid)

export default userRouter;