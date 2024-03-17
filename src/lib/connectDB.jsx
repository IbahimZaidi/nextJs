import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using exiting connection ");
      return;
    }
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/test");
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error(error);
  }
};
