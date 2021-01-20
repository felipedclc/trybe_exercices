/* const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

// Ou seja:
const getSum = (result, number) => result + number;
// o retorno de cada iteração será: result + number
const sumNumbers2 = numbers.reduce(getSum);
console.log(sumNumbers2); // 113
 */
/*********************************************************************************/

// SOMANDO NUMEROS
const collection = [1, 2, 3, 4, 5];

const getSum = (accumulator, number) => {
  console.log('acc: ' + accumulator); // 1 3 6 10
  console.log('num: ' + number)
  return accumulator + number;
};

const sumNumbers3 = collection.reduce(getSum , 0); // 0 - valor inicial, na falta é a posição 0 do array
console.log('sum of numbers: ' + sumNumbers3); // 15


// PEGANDO O MAIOR NÚMERO
const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

const bigger = numbers.reduce(getBigger, 86); // 86 - valor inicial(segundo parametro do reduce)
console.log('biggest number: ' + bigger); // 85