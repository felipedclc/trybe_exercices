// Utilize o modulo fs do Node para ler/escrever arquivos.
// Caso algum erro ocorra, deve ser retornado um código 500 (Internal Server Error).
// Caso dê tudo certo, a resposta deve voltar com status 200 OK .

/* arquivo fs-utils.js */
const fs = require('fs/promises');

function getSimpsons () {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent));
}

function setSimpsons (newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

module.exports = { getSimpsons, setSimpsons };

// Crie um endpoint GET /simpsons
// O endpoint deve retornar um array com todos os Simpsons.

const express = require('express');
const bodyParser = require('body-parser');

const rescue = require('express-rescue');

const simpsonsUtils = require('./fs-utils');

app.get('/simpsons', rescue(async (req, res) => { // rescue utilizado para importar os arquivos
  const simpsons = await simpsonsUtils.getSimpsons(); // obtendo o array

  res.status(200).json(simpsons); // retornando o array
}));

// obtendo os simpsons por id (dinamico)
// caso não encontre responde com um 404

app.get(
    '/simpsons/:id',
    rescue(async (req, res) => {
      const simpsons = await simpsonsUtils.getSimpsons();
  
      const simpson = simpsons.find(({ id }) => id === req.params.id);
  
      if (!simpson) {
        return res.status(404).json({ message: 'simpson not found' });
      }
  
      return res.status(202).json();
    })
  );
