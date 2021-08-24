/* const arr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]

const newStrArr = arr.join(',').split(',');
const a = newStrArr.filter((numb, i) => newStrArr.indexOf(numb) !== i).join(',').replace( /\s/g, '' )

console.log(a);
console.log('1,4,13');

function StringChallenge(sen) {
  // const string = "Bom dia a todos!";

  const result = sen
    .match(/\w+/g)
    .sort((a, b) => b.length - a.length)[0];
  return result;
}

// keep this function call here 
console.log(StringChallenge('fun&!! time'));

console.log('texto aqui'.split('').sort().join(''));
 */

const checkIfDuplicateExists = (w) => new Set(w).size !== w.length;
const arr = "Hello apple pie".split(' ')

console.log(checkIfDuplicateExists(arr));

function constterCount( str ) {
	const words = str.split( ' ' );
	let longest = 0;
	let longest_word;
	for ( let i = 0; i < words.length; i += 1 ) {
		const word = words[i];
		for ( let j = 0; j < word.length; j++ ) {
			const pattern = new RegExp( word[j], 'gi' );
			const length = word.match( pattern ).length;
			if ( length > 1 && length > longest ) {
				longest = word.match( pattern ).length;
				longest_word = word;
			}
		}
	}
	
	return longest_word ? longest_word : -1;
}

console.log(constterCount('Hello apple pie'));