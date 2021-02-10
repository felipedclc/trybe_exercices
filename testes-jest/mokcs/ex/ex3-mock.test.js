/* Ainda com a mesma função do primeiro exercício, utilizando o mock,
crie uma nova implementação que receba três parâmetros e retorne sua multiplicação.
Após fazer os devidos testes para ela, resete sua implementação e crie uma nova,
que receba um parâmetro e retorne seu dobro. Faça os testes necessários. */

const service = require('./service');

test('Receber 3 paramatros e retornar sua multiplicação', () => {
    service.randomNum = jest.fn().mockImplementation((x, y, z) => x * y * z);

    expect(service.randomNum(2, 3, 10)).toBe(60);
    expect(service.randomNum).toHaveBeenCalled();
    expect(service.randomNum).toHaveBeenCalledTimes(1); 
    expect(service.randomNum).toHaveBeenCalledWith(2, 3, 10);
});

test('Receber 1 parâmetro e retornar o seu dobro', () => {
    service.randomNum.mockReset();
    service.randomNum = jest.fn().mockImplementation(x => x * 2);

    expect(service.randomNum(10)).toBe(20);
    expect(service.randomNum).toHaveBeenCalled();
    expect(service.randomNum).toHaveBeenCalledTimes(1);
    expect(service.randomNum).toHaveBeenCalledWith(10);
});