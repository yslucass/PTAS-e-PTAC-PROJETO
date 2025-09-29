const express = require("express");
const app = express();
app.use(express.json());

const usuarioRoutes = require("./routes/usuarioRoutes.js");
app.use("/auth", usuarioRoutes);

app.listen(8000, (err) => {
    console.log("Aplicação rodando em localhost:8000");
});