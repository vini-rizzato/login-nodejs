import express from "express";
import loginRouter from "../controllers/login.js";
import regRouter from "../controllers/register.js";

const Rotas = express.Router();

Rotas.use("/", loginRouter);
Rotas.use("/", regRouter)
Rotas.get("/", (req, res) => {
    res.send("edson praga");
});

export default Rotas;