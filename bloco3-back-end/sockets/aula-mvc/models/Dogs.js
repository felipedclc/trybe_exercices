const connection = require('./connection');

/*
Dog: [
  name: 'string',
  age:  'number',
]
*/

const getAllDogs = () => {
  return connection.execute('SELECT name, age FROM dogs').then(([results]) => results);
}

const createDog = async (name, age) => {
  const [result] = await connection
    .execute('INSERT INTO dogs (name, age) VALUES(?,?)', [name, age]);

  return result.insertId; // retorna apenas o id
};

const getDog = (id) =>
  connection
    .execute('SELECT id, name, age FROM dogs WHERE id = ?', [id])
    .then(([results]) => results[0]);

const deleteDog = async (id) => {
  await connection.execute('DELETE FROM dogs WHERE id = ?', [id]);
};

module.exports = {
  getAllDogs,
  createDog,
  getDog,
  deleteDog,
};