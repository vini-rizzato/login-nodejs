import express from "express";
import bcrypt from "bcrypt";
import User from "../schema/user.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const secretKey = process.env.JWT_KEY;

const loginRouter = express.Router();

loginRouter.get("/login", (req, res) => {

});

loginRouter.post("/login", async (req, res) => {
    const userDados = req.body;

//    const token = jwt.sign({ nome: mockUser.nome, senha: mockUser.senha }, process.env.JWT_KEY, { expiresIn: "1y", subject: "1"});

        try{
            const authUser = await User.findOne({ nome: userDados.nome });

            const comparaSenha = await bcrypt.compare(userDados.senha, authUser.senha);
            console.log(comparaSenha);
            console.log(process.env.JWT_KEY);

            if(comparaSenha){
                const token = jwt.sign({ nome: authUser.nome }, process.env.JWT_KEY, { expiresIn: "1d", subject: "1" });
                console.log(token);
                res.send(token);
            }
        }catch(err){
            console.error("Erro ao autenticar usuário");
            res.status(404).send("Erro ao autenticar");
        }
})

export default loginRouter;