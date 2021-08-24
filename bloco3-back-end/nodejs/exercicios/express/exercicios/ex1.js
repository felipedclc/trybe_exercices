// Crie uma rota GET /ping

// ESTRUTURA DO EXPRESS

const express = require('express');
const bodyParser = require('body-parser'); // converte o body(vem em bytes) da req para json

const app = express(); // criando a app express

app.use(bodyParser.json); // define que os dados serão passados em json

/* rotas criadas aqui */ 
app.get('/ping', (req, res) => {
  res.json({ 'message':'pong' });
  res.status(200).json({ status: "retornar" })
});

app.use(function(err, req, res, next) { // retorna o erro HTTP 500
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('Alo Houston, ouvindo na porta 3000'));