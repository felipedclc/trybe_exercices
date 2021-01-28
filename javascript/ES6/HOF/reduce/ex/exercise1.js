const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
// Dada uma matriz de matrizes, transforme em uma única matriz.

function flatten() {
    return arrays.reduce((acumulator, current) => {
        return acumulator.concat(current);
    }, [])
}
console.log(flatten())

//assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);