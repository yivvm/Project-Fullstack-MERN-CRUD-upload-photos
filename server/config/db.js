import mongoose from "mongoose";
import dotenv from "dotenv";

// Load env variables
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_URL);
    console.log("connected to db");
  } catch (err) {
    console.log(`error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
