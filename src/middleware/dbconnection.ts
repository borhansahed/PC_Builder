import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    console.log("Database connected ");
  } catch (err) {
    console.log(err);
  }
};

export default connectMongo;
