const assert = require('assert');

const sum = (a, b) => {
    if (typeof (a) !== 'number' || typeof (b) !== 'number') {
        throw new Error('Aceitamos apenas números');
    }
    return a + b;
}
assert.strictEqual(typeof sum, 'function');
assert.strictEqual(sum(4, 5), (9), 'Valor errado');
assert.strictEqual(sum(0, 0), (0), 'Valor errado');


assert.throws(() => {
    sum('4', 5);
});