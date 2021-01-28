const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
    for (let i = 0, len = arr.length; i < len; i += 1) {
        if (arr[i] === item) {
            arr.splice(i, 1);
            i -= 1;
            len -= 1;
        }
    }

    return arr;
}

// implemente seus testes aqui
assert.strictEqual(typeof myRemoveWithoutCopy, 'function'); // Sempre verificar se é uma função
const myList = [1, 2, 3, 4];
assert.deepStrictEqual(myRemoveWithoutCopy(myList, 1), [2, 3, 4], 'Errou!');
assert.notDeepStrictEqual(myRemoveWithoutCopy(myList, 1), [1, 2, 3, 4], 'Acertou!');

const myList2 = [1, 2, 3, 4, 5];
myRemoveWithoutCopy(myList2, 4);

assert.deepStrictEqual(myRemoveWithoutCopy(myList2, 4), [1, 2, 3, 5]);