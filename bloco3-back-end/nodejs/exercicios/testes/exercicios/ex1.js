const { expect } = require('chai');
import naturalNumbers from './naturalNumbers';

describe('Executa a funcao naturalNumbers', () => {
  describe('retorna uma string', () => {
    expect(naturalNumbers(10)).to.be.a('string');
  
    describe('Quando o número é maior que 0', () => {

      it('A resposta é igual a "positivo"', () => {
        expect(naturalNumbers(10)).to.equal('positivo');
      });
    });

    describe('Quando número é igual a 0', () => {
      it('A resposta é igual a "neutro"', () => {
        expect(naturalNumbers(0)).to.equal('neutro');
      });
    });

    describe('Quando número é menor que 0', () => {
      it('A resposta é igual a "negativo"', () => {
        expect(naturalNumbers(-10)).to.equal('negativo');
      });
    });

  })
});