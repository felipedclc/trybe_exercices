/* Tente criar uma função que exiba as habilidades do objeto student . 
Cada habilidade deve ser exibida no formato "Nome da habilidade, 
Nível: valor da chave referente à habilidade".  */


const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

function exibeHability(student) {
    const habilityList = Object.keys(student); // OBTENDO AS CHAVES(KEYS)
    for (hability in habilityList) {
        console.log(`${habilityList[hability]}, Nivel: ${student[habilityList[hability]]}`);
        //                  CHAVE                              VALOR
    }
}
exibeHability(student1);
console.log('');
exibeHability(student2);
console.log('');