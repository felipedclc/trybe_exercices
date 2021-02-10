/* Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também
os testes para essa função. Utilizando o mock, defina o retorno padrão como 10.
Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada. */

const service = require('./service');

test('testando o retorno da função mockada que deve retorna 10', () => {
    service.randomNum = jest.fn().mockReturnValue(10);

    expect(service.randomNum()).toBe(10);
    expect(service.randomNum).toHaveBeenCalled();
    expect(service.randomNum).toHaveBeenCalledTimes(1);
});