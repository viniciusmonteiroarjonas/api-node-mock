const actuator = require('express-actuator');
const express = require("express");
const app = express();
const routes = express.Router();

const options = {
    basePath: '/api/v1/actuator', 
    infoGitMode: 'simple', 
    infoBuildOptions: null, 
    infoDateFormat: null,
    customEndpoints: []
};

app.use(actuator(options));

// Imports mocks
const listaCartoes = require("./mocks/listaCartoes");

app.get('/api/v1/cartoes', (req, res) => {
  console.log(listaCartoes.listaCartoes);
  res.json(listaCartoes.listaCartoes).status(200);
})


app.get('/api/v1/consulta/proposta/:propostaId', (req, res) => {
    let status;
    switch (req.params.propostaId) {
        case "1":
          status = "APROVADO"
          console.log('STATUS APROVADO');
          break;
        case "2":
        case "3":
          status = "PENDENTE"
          console.log('STATUS PENDENTE');
          break;
        default:
          status = "EM ANÁLISE"
          console.log('STATUS EM ANÁLISE');
    }

    const data = {
        "status": status
    }

    res.json({data}).status(200);
})


app.listen("3000", () => {
    console.log("API rodando na porta 3000");
})