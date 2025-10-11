import express from "express";
import authRouter from "../controllers/auth.js";

const Rotas = express.Router();

Rotas.use("/", authRouter);
Rotas.get("/", (req, res) => {
    res.send("edson gay");
});

export default Rotas;