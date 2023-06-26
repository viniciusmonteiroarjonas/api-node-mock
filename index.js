const express = require('express')
const app = express()
const port = 3000

// Imports mocks
const listaCartoes = require("./mocks/listaCartoes");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/lista/cartoes', (req, res) => {
  console.log(listaCartoes.listaCartoes);
  // res.send(listaCartoes.listaCartoes).status(200);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})