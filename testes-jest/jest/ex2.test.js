const { encode, decode } = require('./ex2');

describe('Teste se encode e decode são funções', () => {
    it('Teste se encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    }); 
    it('Teste se encode é uma função', () => {
        expect(typeof decode).toEqual('function');
    }); 
}) ;

test('Teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5', () => {
    expect(encode('aeiou')).toEqual('12345');
});
test('Teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u', () => {
    expect(decode('12345')).toEqual('aeiou');
});
describe('Teste se encode e decode são funções', () => {
    it('Teste se as demais letras/números não são convertidos para cada caso', () => {
        expect(encode('xablau')).toEqual('x1bl15');
    });
    it('Teste se as demais letras/números não são convertidos para cada caso', () => {
        expect(decode('x1bl15')).toEqual('xablau');
    });
});

it('A string que é retornada deve ter têm o mesmo número de caracteres que a string passada', () => {
    expect((encode('batman')).length).toEqual(6);
});



