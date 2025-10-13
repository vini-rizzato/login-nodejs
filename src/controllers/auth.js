import express from "express";
import mockUser from "../mockUser.json" with { type: 'json' };
import jwt from "jsonwebtoken";

const authRouter = express.Router();

authRouter.get("/auth", (req, res) => {
    res.json({ nome: mockUser.userDado.nome, senha: mockUser.userDado.senha });
});

authRouter.post("/auth", (req, res) => {
    const userDados = req.body;

    const token = jwt.sign({ nome: mockUser.nome, senha: mockUser.senha }, process.env.JWT_KEY, { expiresIn: "1y", subject: "1"});
    console.log(userDados);
    console.log(token);

    res.json(userDados);

    if(userDados.nome === mockUser.userDado.nome && userDados.nome === mockUser.senha){
        const token = jwt.sign({ nome: mockUser.nome, senha: mockUser.senha }, process.env.JWT_KEY, { expiresIn: "1y", subject: "1"});
        res.userDados;

    }else{
        console.log("erro");
    }
})

export default authRouter;