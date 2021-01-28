// Obj
const { nomeQueEuQuiser, nomeQueEuQuiser2 } = product;
console.log(nomeQueEuQuiser); // Smart TV Crystal UHD
console.log(nomeQueEuQuiser2); // Casas de Minas

//Array
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada

// Default parameters
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!
