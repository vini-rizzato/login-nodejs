import express from "express";
import mockUser from "../mockUser.json";
import jwt from "jsonwebtoken";

const authRouter = express.Router();

authRouter.get("/auth", (req, res) => {
    res.send("auth");
});

authRouter.post("/auth", (req, res) => {
    const userNome = req.body.nome;
    const userSenha = req.body.senha;

    if(userNome === mockUser.nome && userSenha === mockUser.senha){
        jwt.sign
    }
})