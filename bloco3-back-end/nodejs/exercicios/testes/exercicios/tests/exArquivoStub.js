const fs = require('fs');
const sinon = require('sinon'); // usado para isolar a função (seu teste não quebra)
const { expect } = require('chai');

const escrevaArquivo = require('../funcaoLerArquivo');

describe('Executa a função escrevaArquivo', () => {
  before(() => { // executa antes do describe onde ele está, mockando "writeFileSync"
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore(); // restaura "writeFileSync" para seu funcionamento normal
  });

  describe('a resposta', () => {
    it('é uma "string"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.a('string');
    });

    it('é igual a "ok"', () => {
      const resposta = escrevaArquivo('arquivo.txt', '#vqv conteúdo');

      expect(resposta).to.be.equals('ok');
    });
  });
});