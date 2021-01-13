// arrow function , template literals .
const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
        ifScope = `${ifScope} - ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
    //console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);
console.log('');

// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);
console.log(`Os números ${oddsAndEvens.sort((a, b) => b - a)} se encontram ordenados de forma decrescente!`);


// Crie uma função que receba um número e retorne seu fatorial.
function factorial(number) {
    let result = 1;
    for (let i = 2; i <= number; i += 1) {
        result = result * i;
    }

    return result
}

console.log(factorial(5));

/* const factorial = number => number > 1 ? number * factorial(number - 1) : 1

console.log(factorial(5)); */


// Crie uma função que receba uma frase e retorne qual a maior palavra.
function longestWord(string) {
    const list = string.split(' ');
    let maiorLength = 0;
    let maiorWord = '';
    for (let i = 0; i < list.length; i += 1) {
        if (list[i].length > maiorLength) {
            maiorLength = list[i].length;
            maiorWord = list[i]
        }
    }
    return maiorWord;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

// EM APENAS UMA LINHA COM SORT
const longestWord01 = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];