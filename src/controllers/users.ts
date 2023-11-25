import User, { IUser } from '../models/users';
import  { Request, Response } from 'express';
import { UserServices } from '../service/user.service';

const createUser = async (req: Request , res:Response ) => {
  // console.log(req.body)
   const result = await UserServices.createUserIntoDB(req.body);
  //  console.log(result)
    res.status(200).json({
      success: true,
      message: 'User is Created successfully',
      data: result,
    });
}


export  {
  createUser
};
