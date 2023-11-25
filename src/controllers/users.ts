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
const getUsers = async (req: Request , res:Response ) => {
  // console.log(req.body)
   const result = await UserServices.getallUsersFromDB()
  //  console.log(result)
  
    res.status(200).json({
      success: true,
      data: result,
    });
}
const getUsersByid = async (req: Request , res:Response ) => {
  // console.log(req.body)
  const {id} = req.params;
   const result = await UserServices.getAnUserFromDB(id)
  //  console.log(result)
  
    res.status(200).json({
      success: true,
      data: result,
    });
}


export  {
  createUser, getUsers, getUsersByid
};
