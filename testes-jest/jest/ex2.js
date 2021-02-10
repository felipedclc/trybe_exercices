function encode(frase) {
    const fraseArray = frase.split('');

    for (let i in fraseArray) {
      if (fraseArray[i] === 'a') fraseArray[i] = 1;
      if (fraseArray[i] === 'e') fraseArray[i] = 2;
      if (fraseArray[i] === 'i') fraseArray[i] = 3;
      if (fraseArray[i] === 'o') fraseArray[i] = 4;
      if (fraseArray[i] === 'u') fraseArray[i] = 5;
    }
    return fraseArray.join('');
  }
  console.log(encode('aeiou'))
  function decode(frase) {
    const fraseArray = frase.split('');
  
    for (let i in fraseArray) {
      if (fraseArray[i] === '1') fraseArray[i] = 'a';
      if (fraseArray[i] === '2') fraseArray[i] = 'e';
      if (fraseArray[i] === '3') fraseArray[i] = 'i';
      if (fraseArray[i] === '4') fraseArray[i] = 'o';
      if (fraseArray[i] === '5') fraseArray[i] = 'u';
    }
    return fraseArray.join('');
  }
  
  const functions = { encode, decode };
  module.exports = functions;