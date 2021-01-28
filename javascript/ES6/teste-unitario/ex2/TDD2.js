const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello ';
  const newList = [];

  for (let person in people) {
    newList.push(greeting + people[person]);
  }
  return newList;
};


const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

console.log(greetPeople(parameter))

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter), result);

