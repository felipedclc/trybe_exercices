const fs = require('fs');
const { expect } = require('chai');

const escrevaArquivo = require('../funcaoLerArquivo');

describe('Executa a função escrevaArquivo', () => {
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