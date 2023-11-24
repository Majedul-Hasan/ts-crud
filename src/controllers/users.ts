import User, { IUser } from '../models/users';
import  { Request, Response } from 'express';

const createUser = (req: Request , res:Response ) => {
    console.log('first')
    res.send('ghufhsdfhk hkljh')
}


export default {
  createUser
};
