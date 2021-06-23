const fs = require('fs').promises;
// import { readFile } from 'fs/promises';

fs.readFile('/home/felipe/trybe-exercices/bloco3-back-end/nodejs/exercicios/assincrono/simpsons.json', 'utf-8')
  .then((file) => JSON.parse(file))
  .then((simpsons) => simpsons.map(({id, name}) => `${id} - ${name}`))
  .then((strings) => strings.forEach((string) => console.log(string)));

/* async function getById(id) {
  const simpsons = await fs
    .readFile('/home/felipe/trybe-exercices/bloco3-back-end/nodejs/exercicios/assincrono/simpsons.json', 'utf-8')
    .then((file) => JSON.parse(file));

    const simpsonFound = simpsons.find((simpson) => simpson.id === id);

    if (!simpsonFound) {
      throw new Error('Id não encontrado');
    }
} */