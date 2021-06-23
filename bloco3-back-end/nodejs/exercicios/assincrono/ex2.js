const generateRandomNumb = () => Math.floor(Math.random() * 100 + 1);
console.log(generateRandomNumb());


function crazyCalculations() {
  return new Promise((resolve, reject) => {
    // const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
    const newArr = [];
    for (let i = 1; i <= 3; i++) {
      newArr.push(generateRandomNumb());
    }
    if (newArr.find((number) => number > 80)) {
      return reject(new Error('Valor aleatório maior que 80'));
    }
    resolve(newArr);
  });
}

crazyCalculations()
  .then(array => console.log(array))
  .catch((err) => console.log(err.message));