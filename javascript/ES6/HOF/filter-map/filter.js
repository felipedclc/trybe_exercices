const numbers = [19, 21, 30, 3, 45, 22, 15];

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2); // [ 30, 22 ]



// Apenas pega os elementos que não possuem alguma condição

const objPeople = [{
        name: 'José',
        age: 21
    },
    {
        name: 'Lucas',
        age: 19
    },
    {
        name: 'Maria',
        age: 16
    },
    {
        name: 'Gilberto',
        age: 18
    },
    {
        name: 'Vitor',
        age: 15
    },
];

const verifyAgeDrive = (arrayOfPeople) => (
    arrayOfPeople.filter((people) => (people.age < 18))
);

console.log(verifyAgeDrive(objPeople)); // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]



// Retornando um array sem o elemento desejado.

const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => {
    return listStudents.filter((student) => student !== name); // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.
};

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]
