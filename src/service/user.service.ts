import UserModel, { IUser } from '../models/users';



const createUserIntoDB = async (userData: IUser) => {
  // const user = new UserModel(userData);
  // const result  = await user.save();


 const result = await UserModel.create(userData); // build in static method
  console.log(result)
  return result;
};


const getallUsersFromDB = async () => {
 const result = await UserModel.find();
 return result;
};
export const UserServices = {
  createUserIntoDB,
  getallUsersFromDB
};
