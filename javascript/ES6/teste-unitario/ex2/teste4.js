const assert = require('assert');

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
}

// implemente seus testes aqui
assert.strictEqual(typeof myFizzBuzz, 'function');

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'errou');
assert.strictEqual(myFizzBuzz(3), 'fizz', 'errou');
assert.strictEqual(myFizzBuzz(5), 'buzz', 'errou');

assert.strictEqual(myFizzBuzz(17), 17);
assert.strictEqual(myFizzBuzz('this_is_not_a_number'), false);