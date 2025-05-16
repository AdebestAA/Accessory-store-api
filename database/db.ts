require("dotenv").config();
import mongoose from "mongoose";



const connectMongoDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL as string)
        console.log("connected successfully");

    } catch (error) {
        console.log("something went wrong" , error);
    }
}

module.exports = connectMongoDb