import mongoose, { ConnectOptions } from "mongoose";

type TInput = {
  db: string;
}

export default ({db}: TInput) => {
  
  const con = () => {
    mongoose
      .connect(
        db,
        {
        useNewUrlParser: true,
        useUnifiedTopology: true,
     
      } as ConnectOptions
      )
      .then(() => {
        return console.info(`Successfully connected to ${db}`);
      })
      .catch(error => {
        console.error('Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  con();

  mongoose.connection.on('disconnected', con);
};
