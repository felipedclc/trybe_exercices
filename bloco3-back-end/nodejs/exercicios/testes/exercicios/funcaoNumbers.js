function numbers(n) {
  if(typeof n !== 'number') return 'O valor passado não é um número';
  if(n > 0) return 'positivo';
  if(n < 0) return 'negativo';
  return 'neutro';
}

console.log(numbers('a'));

export default { numbers };