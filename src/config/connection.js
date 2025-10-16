import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectUrl = process.env.DATADB_URL;

export default async function connectDB(){
    try{
        await mongoose.connect(connectUrl);
        console.log("Conectou ao DB");
    }catch(err){
        console.error(`Falha ao conectar ao db ${err}`);
    }
};