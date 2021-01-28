// SOME (retorna true se ao menos um elemento de um array satisfaz a uma condição)


const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => {
    return names.some((name) => name[0] === letter);
};

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false

/********************************************************************************/

// EVERY (retorna true se todos os elementos de um array satisfazem a uma condição)
const notes = {
    portugues: 'Aprovado',
    matematica: 'Aprovado',
    ingles: 'Aprovado',
};

const verifyNotes = (studentNotes) => {
    return Object.values(studentNotes).every((note) => note === 'Aprovado');
};

console.log(verifyNotes(notes));