// Usando for para criar uma lista com os nomes do obj(persons)
const persons = [
    { firstName: "Maria", lastName: "Ferreira" },
    { firstName: "João", lastName: "Silva" },
    { firstName: "Antonio", lastName: "Cabral" },
  ];
  
  const fullNames = [];
  for(let i = 0; i < persons.length; i += 1){
    fullNames.push(`${persons[i].firstName} ${persons[i].lastName}`);
  }
  
  console.log(fullNames);


  // Usando map para criar uma lista com os nomes do obj(persons)
  const persons = [
    { firstName: "Maria", lastName: "Ferreira" },
    { firstName: "João", lastName: "Silva" },
    { firstName: "Antonio", lastName: "Cabral" },
  ];
  
  const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
  
  console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

