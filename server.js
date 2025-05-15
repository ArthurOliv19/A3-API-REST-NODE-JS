const restify = require("restify");
const errors = require("restify-errors");
const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "mercadinho"
    }
});

const server = restify.createServer();
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

// Mensagem de boas-vindas
server.get("/", (req, res, next) => {
    res.send({ mensagem: "Bem-vindo à API da Lojinha" });
    return next();
});

// ROTAS PRODUTO
server.get("/produto", (req, res, next) => {
    knex("produto").then((dados) => {
        res.send(dados);
        return next();
    });
});

server.post("/produto", (req, res, next) => {
    knex("produto").insert(req.body).then((dados) => {
        res.send({ inserido: true });
        return next();
    });
});

// ROTAS CLIENTE
server.get("/cliente", (req, res, next) => {
    knex("cliente").then((dados) => {
        res.send(dados);
        return next();
    });
});

server.post("/cliente", (req, res, next) => {
    knex("cliente").insert(req.body).then((dados) => {
        res.send({ inserido: true });
        return next();
    });
});

server.listen(8001, () => {
    console.log("API rodando na porta 8001");
});