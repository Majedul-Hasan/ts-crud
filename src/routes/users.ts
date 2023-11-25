import { Router } from 'express';
import { createUser, getUsers, getUsersByid, deleteUsersByid } from '../controllers/users';



const userRouter = Router();
// api/users/
userRouter.post('/', createUser)
userRouter.get('/', getUsers)
userRouter.get('/:id', getUsersByid)
userRouter.delete('/:id', deleteUsersByid)

export default userRouter;