import mongoose from "mongoose"
import { unstable_noStore as noStore } from "next/cache";

const connection = {};

export const connectToDb = async () => {

noStore()
  try {
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected")
  } catch (error) {
    console.log("Not Connected")
    console.log(error);
    throw new Error(error);

  }
};
