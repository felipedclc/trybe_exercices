const express = require('express'); // importando o express

const app = express(); // 1 inicia o express

app.get('/hello', handleHelloWorldRequest); // 2  rota "/" tipo de req get

app.listen(3000, () => console.log('Aplicação ouvindo na porta 3000')); // 3 porta 3000

function handleHelloWorldRequest(req, res) { // req(requisição), res(resposta)
  res.status(200).send('Hello World!'); // 4 callback do app.get
}