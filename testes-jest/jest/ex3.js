function techList(arrayTec, name) {
    if (arrayTec.length === 0) return 'Vazio!'

    const arrayTecSort = arrayTec.sort();
    return arrayTecSort.map(value => ({ tech: value, name: name }));
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Felipe'));

module.exports = techList;