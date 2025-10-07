const router = require("express").Router();

const usuarioController = require("../controllers/usuarioController");

router.post("/auth/cadastro", usuarioController.cadastrar);
router.post("/auth/login", usuarioController.login);

module.exports = router;