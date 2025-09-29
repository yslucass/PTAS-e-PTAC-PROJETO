const router = require("express").Router();

const UsuarioController = require("../controllers/usuarioController");

router.post("/cadastro", usuarioController.cadastrar);
router.post("/login", usuarioController.login);

module.exports = router;