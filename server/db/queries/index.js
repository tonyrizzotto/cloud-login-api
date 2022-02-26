const { v4: uuidv4 } = require('uuid');

///////////////////////////////////
//Helper Functions for DB Queries//
///////////////////////////////////

// Get All Users
async function getAllUsers(server) {
  const client = await server.pg.connect();
  const { rows } = await client.query('SELECT * FROM account;');

  client.release();

  return rows;
}

// Get User by ID
async function getUserById(server, id) {
  const client = await server.pg.connect();

  const queryText = `SELECT * FROM account WHERE id = $1;`;
  const values = [id];

  const { rows } = await client.query(queryText, values);
  client.release();

  return rows;
}

// Create New User
async function createNewUser(server, payload) {
  const { first_name, last_name } = payload;

  return server.pg.transact(async (client) => {
    const queryText =
      'INSERT INTO account(id, first_name, last_name) VALUES($1, $2, $3) RETURNING id';
    const values = [uuidv4(), first_name, last_name];

    const person = await client.query(queryText, values);

    return person;
  });
}

module.exports = { getAllUsers, getUserById, createNewUser };
