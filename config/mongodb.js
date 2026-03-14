import mongoose from "mongoose";
import asyncHandler from "../utility/asyncHandler.js";

let isConnect = false;

const connectDB = asyncHandler(async () => {
  if (isConnect) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "auth-session",
  });

  isConnect = db.connections[0].readyState === 1;
  console.log("MongoBD Connected");
});

export default connectDB;
