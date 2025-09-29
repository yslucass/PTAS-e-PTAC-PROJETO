const router = require("express").Router();

const usuarioController = require("../controllers/usuarioController");

router.post("/cadastro", usuarioController.cadastrar);
router.post("/login", usuarioController.login);

module.exports = router;