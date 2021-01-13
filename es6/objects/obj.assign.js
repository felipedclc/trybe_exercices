/* A função recebe um número qualquer de parâmetros.
Todos são agregados como valores para adicionar ao objeto de destino!


Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4); */

const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
};

const info = {
    age: 23,
    job: 'engenheiro',
};

const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

// A propriedade do objeto destino sempre utilizará o último valor disponível.

const person1 = {
    name: 'Roberto',
};

const lastName = {
    lastName: 'Silva',
};

const clone = Object.assign(person1, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person1); // { name: 'Roberto', lastName: 'Silva' }

clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person1); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person1.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person1); // Output: { name: 'Maria', lastName: 'Ferreira' }

// Alterando os dados do novo objeto criado sem modificar o objeto inicial

const person2 = {
    name: 'Roberto',
};

const lastName1 = {
    lastName: 'Silva',
};

/* Podemos passar como primeiro parâmetro do Object.assign
um objeto vazio {} e armazenar seu retorno em uma nova variável. */
console.log('Clonando e alterando o objeto destino sem mudar o inicial')

const newPerson = Object.assign({}, person2, lastName1);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person2);