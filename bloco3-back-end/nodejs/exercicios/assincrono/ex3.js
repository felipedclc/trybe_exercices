/* const getRandomNumber = () => Math.floor(Math.random() * 100 + 1);

function doMath(a, b, c) {
  return new Promise((resolve, reject) => { */
    /* Caso o tipo de algum parâmetro não seja `number`, rejeitamos a Promise */
/*     if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject('Informe apenas números');

    const result = (a + b) * c;

    if (result < 50) {
      return reject('Valor muito baixo');
    }

    resolve(result);
  });
}

async function callDoMath() {
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  try {
    const result = await doMath(...randomNumbers);
    console.log(result);
  } catch(err) {
    console.error(err);
  }
}

callDoMath().then(value => console.log(value)) */


const generateRandomNumb = () => Math.floor(Math.random() * 100 + 1);
console.log(generateRandomNumb());


async function crazyCalculations() {
  
    // const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
    const newArr = [];
    for (let i = 1; i <= 3; i++) {
      newArr.push(generateRandomNumb());
    }
    if (newArr.find((number) => number > 80)) {
      throw new Error('Valor aleatório maior que 80');
    }
    return newArr;
}

crazyCalculations()
  .then(array => console.log(array))
  .catch((err) => console.log(err.message));