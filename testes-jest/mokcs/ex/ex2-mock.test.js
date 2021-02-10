/* 
Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação,
que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. 
Essa implementação deve ocorrer uma única vez. Faça os testes necessários. 
*/

const service = require('./service');

test('Criando 2 parametros e retornando a divisão do primeiro pelo segundo', () => {
    service.randomNum = jest.fn().mockImplementation((a, b) => a / b);

    expect(service.randomNum(10, 5)).toBe(2);
    expect(service.randomNum).toHaveBeenCalled();
    expect(service.randomNum).toHaveBeenCalledTimes(1);
    expect(service.randomNum).toHaveBeenCalledWith(10 ,5);
});