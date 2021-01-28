// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['morango', 'abacaxi', 'mamão'];

const fruitSalad = (fruit, additional) => {
    return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
