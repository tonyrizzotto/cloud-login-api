const server = require('fastify')({ logger: true });
const { cldSqlConnection } = require('./db/index');
const routes = require('./api/routes');

// Create a server instance
async function createServer() {
  // Register DB connection
  server.register(require('fastify-postgres'), {
    connectionString: cldSqlConnection,
  });

  // Register API routes
  server.register(routes, {
    prefix: '/api/v1',
  });

  return server;
}

module.exports = createServer;
