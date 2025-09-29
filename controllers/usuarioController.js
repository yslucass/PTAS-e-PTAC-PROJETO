const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const client = new PrismaClient();

class UsuarioController {
  static async cadastrar(req, res) {
    try {
      const { nome, email, password } = req.body;

      // Verifica se já existe usuário com o mesmo email
      const existente = await client.usuario.findUnique({ where: { email } });
      if (existente) {
        return res.json({
          mensagem: "Email já cadastrado!",
          erro: true,
        });
      }

      const salt = bcryptjs.genSaltSync(8);
      const hashSenha = bcryptjs.hashSync(password, salt);

      const usuario = await client.usuario.create({
        data: { nome, email, password: hashSenha },
      });

      return res.json({
        mensagem: "Usuário cadastrado com sucesso!",
        erro: false,
        usuarioId: usuario.id,
      });
    } catch (e) {
      return res.json({
        mensagem: "Erro ao cadastrar usuário!",
        erro: true,
      });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    const usuario = await client.usuario.findUnique({ where: { email } });
    if (!usuario) {
      return res.json({
        mensagem: "Usuário não encontrado!",
        erro: true,
      });
    }

    const senhaCorreta = bcryptjs.compareSync(password, usuario.password);
    if (!senhaCorreta) {
      return res.json({
        mensagem: "Senha incorreta!",
        erro: true,
      });
    }

    const token = jwt.sign(
      { id: usuario.id },
      process.env.SENHA_SERVIDOR,
      { expiresIn: "2h" }
    );

    return res.json({
      mensagem: "Autenticado!",
      erro: false,
      token: token,
    });
  }
}

module.exports = UsuarioController;