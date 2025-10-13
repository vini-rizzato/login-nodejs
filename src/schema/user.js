import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String
}, {collection: "users"});

const User = mongoose.model("User", userSchema);

export default User;