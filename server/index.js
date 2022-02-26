const server = require('fastify')();
const { cldSqlConnection } = require('./db/index');
const routes = require('./api/routes');

// Register DB connection
server.register(require('fastify-postgres'), {
  connectionString: cldSqlConnection,
});

// Register API routes
server.register(routes, {
  prefix: '/api/v1',
});

server.listen(3000, (err) => {
  if (err) throw err;
  console.log(`Server listening ${server.server.address().port}...`);
});
