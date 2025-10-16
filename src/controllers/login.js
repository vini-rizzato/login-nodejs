import express from "express";
import bcrypt from "bcrypt";
import User from "../schema/user.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const secretKey = process.env.JWT_KEY;

const loginRouter = express.Router();

loginRouter.get("/login", (req, res) => {
    res.send("Login");
});

loginRouter.post("/login", async (req, res) => {
    const userDados = req.body;

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

loginRouter.delete("/login", async (req, res) => {
    const userDados = req.body;

    try{
        const findUser = await User.findOne({ nome: userDados.nome });

        await findUser.deleteOne();
        res.send("Usuário deletado");
    }catch(err){
        res.status(400).send("Erro ao deletar usuário");
    }
})

loginRouter.put("/login", async(req, res) => {
    const userDados = req.body;



    try{
        const findUser = await User.findOne({ nome: userDados.nome });

        const hashedSenha = await bcrypt.hash(userDados.senha, 10);

        await User.updateOne(findUser, {senha: hashedSenha});
        res.send("Senha do usuário atualizada");
    }catch(err){
        res.status(400).send("Falha ao atualizar a senha do usuário");
    }
})

export default loginRouter;