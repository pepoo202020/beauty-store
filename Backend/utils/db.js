import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB Connected: ${conn.connection.name}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
