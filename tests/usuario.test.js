const request = require("supertest");
const app = require("../server");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

describe("Usuário", () => {
  beforeAll(async () => {
    await prisma.usuario.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  test("cadastra um novo usuário", async () => {
    const res = await request(app)
      .post("/usuario/auth/cadastro")
      .send({ nome: "Lucas", email: "lucas@test.com", password: "123456" });

    expect(res.body.erro).toBe(false);
    expect(res.body.usuarioId).toBeDefined();
    expect(res.body.mensagem).toBe("Usuário cadastrado com sucesso!");
  });

  test("não permite email duplicado", async () => {
    const res = await request(app)
      .post("/usuario/auth/cadastro")
      .send({ nome: "Julia", email: "lucas@test.com", password: "2564" });

    expect(res.body.erro).toBe(true);
    expect(res.body.mensagem).toBe("Email já cadastrado!");
  });

  test("loga com credenciais corretas", async () => {
    const res = await request(app)
      .post("/usuario/auth/login")
      .send({ email: "lucas@test.com", password: "123456" });

    expect(res.body.erro).toBe(false);
    expect(res.body.token).toBeDefined();
    expect(res.body.mensagem).toBe("Autenticado!");
  });

  test("erro ao logar com senha incorreta", async () => {
    const res = await request(app)
      .post("/usuario/auth/login")
      .send({ email: "lucas@test.com", password: "senhaerrada" });

    expect(res.body.erro).toBe(true);
    expect(res.body.mensagem).toBe("Senha incorreta!");
  });

  test("erro ao logar com usuário inexistente", async () => {
    const res = await request(app)
      .post("/usuario/auth/login")
      .send({ email: "naoexiste@test.com", password: "123456" });

    expect(res.body.erro).toBe(true);
    expect(res.body.mensagem).toBe("Usuário não encontrado!");
  });
});
