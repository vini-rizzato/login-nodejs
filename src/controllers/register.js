import express from "express";
import bcrypt from "bcrypt";
import User from "../schema/user.js";

const regRouter = express.Router();

regRouter.get("/register", (req, res) => {
    res.send("register");
})

regRouter.post("/register", async (req, res) => {
    try{
        const userDados = req.body;
        bcrypt.hash(userDados.senha, 10, (err, hashedSenha) => {
            if(err) throw err;
            console.log("Senha Hashed", hashedSenha);
        })
        await User.create({
            nome: userDados.nome,
            email: userDados.email,
            senha: userDados.senha
        })
        res.send("Usuário criado");
    }catch{
        console.error("Usuario não registrado");
    }
})

export default regRouter;