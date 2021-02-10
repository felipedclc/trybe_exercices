/* Utilizando a sintaxe de async-await , faça um teste que verifique o resultado da função
getUserName para o caso em que o usuário é encontrado, e também um teste para o caso
em que o usuário não é encontrado.
Dica : Veja os dados falsos utilizados no banco de dados, disponíveis na variável users,
para saber quais IDs existem. */

const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: `User with ${id} not found.`});
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

  describe('Quando o usuario é encontado', () => {
      it('Retorna o nome do usuario', () => {
        expect.assertions(1);
        const userById = await getUserName(4);
        expect(userById).toEqual('Mark');
      });
  });

  describe('Quando o usuario é encontado', () => {
    it('returns an error', async () => {
      expect.assertions(1);
      try {
        await getUserName(1);
      } catch (error) {
        expect(error).toEqual({ error: 'User with 1 not found.' });
      }
    });
  });
  