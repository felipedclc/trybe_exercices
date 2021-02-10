/* function sumRandomArr() {
    const myArray = Array.from(
        { length: 10 },
        () =>  Math.floor(Math.random() * 50) + 1
      );
      return myArray.map(number => number * number)
            .reduce((number, acc) => number + acc, 0);
}

const fetchPromise = () => {
    const myPromise = new Promise((resolve, reject) => {
      (sumRandomArr() < 8000) ? resolve() : reject();
    });
  
    myPromise
      .then(() => console.log('Deu bom'))
      .catch(() => console.log('Deu ruim'));
  };
  
  fetchPromise(); */

const arrayRandomNumb = (tam) => {
    const newArr = [];
    for (let i = 1; i <= tam; i += 1) {
        newArr.push(Math.round(Math.pow(Math.random() * (5, 50) + 5, 2)));
    }
    return newArr.map(num => parseInt(num)).reduce((a, v) => a + v);
}
// retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.
// encadeie nela uma segunda Promise que some os elementos do array.

const fetchPromisse = () => {
    const randomArr = arrayRandomNumb(10)
    const promise = new Promise((resolve, reject) => {
        (randomArr < 9000) ? resolve(): reject();
    });
    const arrDivision = (...values) => values.map(value => Math.round(randomArr / value));

    promise
        .then(() => console.log(arrDivision(2, 3, 5, 10)))
        .catch(() => console.log('É mais de nove mil! Essa promise deve estar quebrada!'));
};

fetchPromisse();