const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function pegaAtributoDaLesson2EJogaNaLesson1() {
    const mistureba1e2 = Object.assign({}, lesson1, lesson2)
    console.log(mistureba1e2);
    console.log(lesson1)
    console.log(lesson2)
}
pegaAtributoDaLesson2EJogaNaLesson1();

function listaKeys(objeto) {
    const chaves = Object.keys(objeto);
    for (chave in chaves) {
        console.log(chaves[chave]);
    }
}
console.log('--------------------------------')
console.log('CHAVES: ')
listaKeys(lesson3);

function tamanhoObjeto(objeto) {
    const chaves = Object.keys(objeto);
    console.log(chaves.length);
}
console.log('--------------------------------')
console.log(`Tamanho do objeto é`);
tamanhoObjeto(lesson3);

const listaValores = (obj) => console.log(Object.values(obj));
console.log('--------------------------------')
console.log(`Listando valores`);
listaValores(lesson3);

const allLessons = () => console.log(Object.assign({}, {
    lesson1,
    lesson2,
    lesson3
}));
console.log('--------------------------------')
console.log(`Todas as lessons`);
allLessons();

// OBTENDO O VALOR DA CHAVE DE ACORDO COM A POIÇÃO DO OBJETO
const getValueByNumber = (obj, number) => Object.values(obj)[number];
console.log('--------------------------------')
console.log(`Chave 0 lesson3`);
console.log(getValueByNumber(lesson3, 0));