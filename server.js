import express from "express";

const app = express();
const PORT  = 8000;

app.get("/", (req, res) => {
    res.send("Ola cristano");
});

app.listen(PORT, () => {
    console.log(`Servidor ouvindo em ${PORT}`);
});
