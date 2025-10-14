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
        const hashedSenha = await bcrypt.hash(userDados.senha, 10);
        await User.create({
            nome: userDados.nome,
            email: userDados.email,
            senha: hashedSenha
        })
        res.send("Usuário criado");
    }catch{
        console.error("Usuario não registrado");
    }
})

export default regRouter;