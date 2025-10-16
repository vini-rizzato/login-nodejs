import express from "express";
import bcrypt from "bcrypt";
import User from "../schema/user.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const loginRouter = express.Router();

loginRouter.get("/login/:id", async (req, res) => {
    const paramUser = req.params.id;

    try{
        const findUser = await User.findOne({ nome: paramUser });

        if(!findUser){
            return res.status(404).json({ error: "Usuário não encontrado." })
        }
        res.send("Usuário encontrado\n" + findUser);
    }catch(err){
        res.status(500).send("Erro de servidor.")
    }


});

loginRouter.post("/login", async (req, res) => {
    const { nome, senha } = req.body;
    try{

        if(!nome || !senha){
            return res.status(400).json({ error: "Todos os campos são obrigatórios." });
        }

        const authUser = await User.findOne({ nome });

        if(!authUser){
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        const comparaSenha = await bcrypt.compare(senha, authUser.senha);

        console.log(comparaSenha);
        console.log(process.env.JWT_KEY);

        if(comparaSenha){
            const token = jwt.sign({ nome: nome }, process.env.JWT_KEY, { expiresIn: "1d", subject: "1" });
            console.log(token);
            return res.status(200).json({ message: "Login bem-sucedido!", token });
        }else{
            return res.status(401).json({ error: "Senha incorreta." });
        }
    }catch(err){
        res.status(500).send("Erro interno");
    }
})

loginRouter.delete("/login", async (req, res) => {
    const { nome } = req.body;

    try {
        if (!nome) {
            return res.status(400).json({ error: "O campo 'nome' é obrigatório." });
        }

        const findUser = await User.findOne({ nome });
        if (!findUser) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        await findUser.deleteOne();
        res.status(200).json({ message: "Usuário deletado com sucesso." });
    } catch (err) {
        console.error("Erro ao deletar usuário:", err);
        res.status(500).json({ error: "Erro interno no servidor." });
    }
});

loginRouter.put("/login", async (req, res) => {
    const { nome, senha } = req.body;

    try {
        if (!nome || !senha) {
            return res.status(400).json({ error: "Nome e nova senha são obrigatórios." });
        }

        const findUser = await User.findOne({ nome });
        if (!findUser) {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        const hashedSenha = await bcrypt.hash(senha, 10);
        await User.updateOne({ nome }, { senha: hashedSenha });

        res.status(200).json({ message: "Senha atualizada com sucesso." });
    } catch (err) {
        console.error("Erro ao atualizar senha:", err);
        res.status(500).json({ error: "Erro interno no servidor." });
    }
});


export default loginRouter;