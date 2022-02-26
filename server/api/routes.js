module.exports = async function (server, opts, next) {
  // Get all people
  server.get('/', async (req, reply) => {
    const client = await server.pg.connect();

    const { rows } = await client.query('SELECT * FROM account;');

    client.release();

    return rows;
  });

  // Get person by ID
  server.get('/:id', async (req, reply) => {
    const { id } = req.params;

    const client = await server.pg.connect();

    const queryText = `SELECT * FROM account WHERE id = $1;`;
    const values = [id];

    const { rows } = await client.query(queryText, values);
    client.release();

    return rows;
  });

  // Create a new Person
  server.post('/new', async (req, reply) => {
    const { first_name, last_name } = req.body;

    return server.pg.transact(async (client) => {
      const queryText =
        'INSERT INTO account(first_name, last_name) VALUES($1, $2) RETURNING id';
      const values = [first_name, last_name];

      const person = await client.query(queryText, values);

      return person;
    });
  });

  next();
};
