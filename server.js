import express from "express";
import Rotas from "./src/routes/router.js";
import connectDB from "./src/config/connection.js";
import bodyParser from "body-parser";

const app = express();
const PORT  = 8000;

app.use(bodyParser.json());
app.use('/', Rotas);
app.use(express.json());
connectDB();

app.listen(PORT, () => {
    console.log(`Servidor ouvindo em ${PORT}`);
});

console.log(`dotenv: ${process.env.JWT_KEY}`);

//how to use jwt to set a password encrypted and set a token for a user