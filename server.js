const express = require("express");
const app = express();
app.use(express.json());

const usuarioRoutes = require("./routes/usuarioRoutes.js");
app.use("/usuario", usuarioRoutes);

if (require.main === module) {
  app.listen(8000, () => {
    console.log("Aplicação rodando em localhost:8000");
  });
}

module.exports = app;
