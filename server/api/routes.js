const { getAllUsers, getUserById, createNewUser } = require('../db/queries');

module.exports = async function (server, opts, next) {
  // Get all people
  server.get('/', async (req, reply) => {
    const data = await getAllUsers(server);

    return data;
  });

  // Get person by ID
  server.get('/:id', async (req, reply) => {
    const data = await getUserById(server, req.params.id);

    return data;
  });

  // Create a new Person
  server.post('/new', async (req, reply) => {
    const data = await createNewUser(server, req.body);

    return data;
  });

  next();
};
