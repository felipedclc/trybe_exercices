/* Escreva um teste que verifique a chamada do callback de uma função uppercase ,
que transforma as letras de uma palavra em letras maiúsculas.
Lembre-se de ter cuidado com os falso-positivos em testes assíncronos. */

function uppercase(str, callback) {
    return callback(str.toUpperCase());
}

test("Testando se 'jose' volta 'JOSE'", (done) => {
    uppercase('jose', (bla) => {
        expect(bla).toBe('JOSE');
        done();
    });
})
