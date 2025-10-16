import express from "express";
import bcrypt from "bcrypt";
import User from "../schema/user.js";

const regRouter = express.Router();

regRouter.get("/register", (req, res) => {
    res.send("Pra registrar um usuário siga o seguinte modelo JSON:\n\n{\n 'nome':'username',\n   'email':'useremail',\n'senha': 'usersenha'\n}");
})

regRouter.post("/register", async (req, res) => {
    try{
        const { nome, email, senha } = req.body;

        if(!nome || !email || !senha){
            return res.status(400).json({ error: "Todos os campos são obrigatórios." })
        }

        const userExists = await User.findOne({ email });
        if(userExists) {
            return res.status(409).json({ error: "E-mail já cadastrado." })
        }

        const hashedSenha = await bcrypt.hash(senha, 10);
        await User.create({
            nome: nome,
            email: email,
            senha: hashedSenha
        })
        res.status(201).json({ message: "Usuário criado com sucesso." });
    }catch{
        console.error("Usuario não registrado");
    }
})

export default regRouter;