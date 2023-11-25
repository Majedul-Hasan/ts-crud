import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export enum Gender {
  male = 'male',
  female = 'female',
  undisclosed = 'undisclosed'
}

export interface Address extends Document {
  street: string;
  city: string;
  country: string;

}
export interface fullName extends Document {
  firstName: string;
  lastName: string;
 
}
export interface Order extends Document {
   productName: string;
   price: number;
  quantity: number;
 
}


export interface IUser extends Document {
  email: string;
 
  userId: number;
  fullName?: fullName;
  gender?: Gender;
  address?: Address;
  age: number;
  isActive: boolean;
  password: string;
  username: string;
  hobbies: [string]
  orders: [Order]

}

const UserSchema: Schema = new Schema(
  {
    userId: { type:Number, required: true},
    fullName:{
       firstName: {
        type: String,
        required: [true, 'First Name is required'],
        trim: true,
        maxlength: [20, 'Name can not be more than 20 characters'],
      },
      lastName: {
        type: String,
        trim: true,
        required: [true, 'Last Name is required'],
        maxlength: [20, 'Name can not be more than 20 characters'],
      },
    },

  email: { type: String, required: true, unique: true },
  age: { type: Number, required:true},
   isActive: { type: Boolean, default: false},
   address: {
    street: { type: String },
    city: { type: String },
    country: { type: String }
  },
  password: { type: String, required: [true, 'password is required' ] ,  maxlength: [60, 'password can not be more than 60 characters'], minlangth: [6, 'password can not be less than 6 characters']  },
 
  username: { type: String, required: true, unique: true},

  // Gets the Mongoose enum from the TypeScript enum
  gender: { type: String, enum: Object.values(Gender) },
  hobbies: [{type: String}],
  orders: [
            {
                productName: {
                  type: String,
                  required: [true, 'productName is required'],
                },
                price: {type: Number, require: true},
                quantity: {type: Number, require: true},
            }]
  
});


UserSchema.pre('save', async function (next) {
  // hashing user password
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(10)
  );



  next();
});



// Export the model and return your IUser interface
export default mongoose.model<IUser>('User', UserSchema);
