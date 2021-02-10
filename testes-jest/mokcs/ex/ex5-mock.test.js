/* Utilizando as mesmas funções do exercício anterior, repita a implementação para a
primeira função. Após repetir a implementação, restaure a implementação original e
crie os testes necessários para validar. */

const service2 = require('./service2');

describe('Testes com o mock', () => {
    it('Mockando função para receber um parâmetro e retornar em caixa baixa', () => {
        const mockUpperCase = jest
            .spyOn(service2, 'toUpperCase')
            .mockImplementation(str => str.toLowerCase());

        expect(mockUpperCase('FELIPE')).toBe('felipe');
        expect(mockUpperCase).toHaveBeenCalled();
        expect(mockUpperCase).toHaveBeenCalledTimes(1);
        expect(mockUpperCase).toHaveBeenCalledWith('FELIPE');

        service2.toUpperCase.mockRestore();

        expect(service2.toUpperCase('felipe')).toBe('FELIPE');
    });  
});
