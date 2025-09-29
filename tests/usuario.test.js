const request = require("supertest");
const app = require("../server");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

describe("Testes de Usuario", () => {
  // Antes de tudo, limpar tabela usuario (ambiente de testes)
  beforeAll(async () => {
    await prisma.usuario.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test("Cadastro deve criar novo usuário", async () => {
    const res = await request(app)
      .post("/usuario/cadastro")
      .send({
        nome: "Lucas",
        email: "lucas@test.com",
        password: "123456"
      });

    expect(res.status).toBe(200);
    expect(res.body.erro).toBe(false);
    expect(res.body.mensagem).toBe("Usuário cadastrado com sucesso!");
    expect(res.body.usuarioId).toBeDefined();
  });

  test("Cadastro não deve permitir email duplicado", async () => {
    const res = await request(app)
      .post("/usuario/cadastro")
      .send({
        nome: "Lucas 2",
        email: "lucas@test.com",
        password: "abcdef"
      });

    expect(res.status).toBe(200);
    expect(res.body.erro).toBe(true);
    expect(res.body.mensagem).toBe("Email já cadastrado!");
  });

  test("Login deve autenticar usuário existente", async () => {
    const res = await request(app)
      .post("/usuario/login")
      .send({
        email: "lucas@test.com",
        password: "123456"
      });

    expect(res.status).toBe(200);
    expect(res.body.erro).toBe(false);
    expect(res.body.mensagem).toBe("Autenticado!");
    expect(res.body.token).toBeDefined();
  });

  test("Login falha se senha incorreta", async () => {
    const res = await request(app)
      .post("/usuario/login")
      .send({
        email: "lucas@test.com",
        password: "senhaerrada"
      });

    expect(res.status).toBe(200);
    expect(res.body.erro).toBe(true);
    expect(res.body.mensagem).toBe("Senha incorreta!");
  });

  test("Login falha se usuário não existe", async () => {
    const res = await request(app)
      .post("/usuario/login")
      .send({
        email: "naoexiste@test.com",
        password: "123456"
      });

    expect(res.status).toBe(200);
    expect(res.body.erro).toBe(true);
    expect(res.body.mensagem).toBe("Usuário não encontrado!");
  });
});
