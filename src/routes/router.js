import express from "express";
import authRouter from "../controllers/auth.js";
import regRouter from "../controllers/register.js";

const Rotas = express.Router();

Rotas.use("/", authRouter);
Rotas.use("/", regRouter)
Rotas.get("/", (req, res) => {
    res.send("edson praga");
});

export default Rotas;