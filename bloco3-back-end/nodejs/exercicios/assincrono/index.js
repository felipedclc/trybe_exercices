function crazyCalculate() {
  return new Promise((resolve, reject) => {
    const a = Math.floor(Math.random() * 100 + 1);
    const b = Math.floor(Math.random() * 100 + 1);
    const c = Math.floor(Math.random() * 100 + 1);

    /* Criamos um array com os tipos dos parâmetros */
    const paramTypes = [a, b, c].map((param) => typeof param);
    let result = 0;

    /* Caso o tipo de algum parâmetro não seja `number`, rejeitamos a Promise */
    if (paramTypes.some((paramType) => paramType !== 'number')) {
      return reject(new Error('Informe apenas números'));
    }
    if (paramTypes.some((type) => type === 'number')) {
      result = (a + b) * c
    }
    if (result < 1000) {
      return reject(new Error('Valor muito baixo'))
    }
    resolve(result);
  });
}

crazyCalculate()
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));