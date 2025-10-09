const express = require("express");
const path = require("path")
const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'views')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "cadastro.html"));
});

const usuarioRoutes = require("./routes/usuarioRoutes.js");
app.use("/usuario", usuarioRoutes);

if (require.main === module) {
  app.listen(8000, () => {
    console.log("Aplicação rodando em localhost:8000");
  });
}

module.exports = app;
