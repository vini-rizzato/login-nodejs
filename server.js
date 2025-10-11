import express from "express";
import Rotas from "./src/routes/router.js";
import dotenv from "dotenv/config";

const app = express();
const PORT  = 8000;

app.use('/', Rotas);
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor ouvindo em ${PORT}`);
});

console.log(`dotenv: ${process.env.JWT_KEY}`);
