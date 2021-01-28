/* Percorre o array e executa a função passada para cada um dos seus valores.
O forEach não retorna nenhum valor . */

const emailListInData = [
    "roberta@email.com",
    "paulo@email.com",
    "anaroberta@email.com",
    "fabiano@email.com"
];

const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
}

// Use o método forEach chamando a callback showEmailList para apresentar os emails.

emailListInData.forEach(item => showEmailList(item));

/*****************************************************************************/
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
    console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

/*****************************************************************************/
