const toUpperCase = (str => str.toUpperCase());
const firstLetter = (str => str.split('')[0]);
const concatStr = ((str1, str2) => `${str1} ${str2}`);


module.exports = { toUpperCase, firstLetter, concatStr };