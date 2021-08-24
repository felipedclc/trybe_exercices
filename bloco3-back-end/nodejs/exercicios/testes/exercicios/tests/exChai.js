const { expect } = require('chai');
import numbers from './funcaoNumbers';

describe('Executa a funcao numbers', () => {
  describe('retorna uma string', () => {
    expect(numbers(10)).to.be.a('string');
  
    describe('Quando o número é maior que 0', () => {

      it('A resposta é igual a "positivo"', () => {
        expect(numbers(10)).to.equals('positivo');
      });
    });

    describe('Quando número é igual a 0', () => {
      it('A resposta é igual a "neutro"', () => {
        expect(numbers(0)).to.equals('neutro');
      });
    });

    describe('Quando número é menor que 0', () => {
      it('A resposta é igual a "negativo"', () => {
        expect(numbers(-10)).to.equals('negativo');
      });
    });

    describe('Quando o valor passado para a função não é um número', () => {
      it('A resposta deve ser igual a "O valor passado não é um número"', () => {
        expect(numbers('xablau')).to.equals('O valor passado não é um número');
      });
    });

  })
});