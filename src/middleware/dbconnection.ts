import mongoose from "mongoose";

const connectMongo = async () => {
  await mongoose.connect(process.env.DB_URL as string);
  console.log("Database connected ");
};

export default connectMongo;
