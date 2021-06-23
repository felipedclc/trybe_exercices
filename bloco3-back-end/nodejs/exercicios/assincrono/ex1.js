// const readline = require('readline-sync');

function executaCalc(a, b, c) {
  return new Promise((resolve, reject) => {
    const typeofParam = [a, b, c].map((param) => typeof param);
  
    if (typeofParam.find((value) => value !== 'number')) {
      return reject(new Error('Informe apenas números'));
    }

    const result = (a + b) * c;

    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  })
}

executaCalc(1, 4, 5)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message))