import mongoose from "mongoose";

export default async function connectDB(){
    try{
        await mongoose.connect('mongodb://localhost:27017/data_users');
        console.log("Conectou ao DB");
    }catch(err){
        console.error(`Falha ao conectar ao db ${err}`);
    }
};