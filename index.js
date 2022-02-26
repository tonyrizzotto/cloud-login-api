const createServer = require('./server');
const {
  environment: { port },
} = require('./manifest');

const start = async () => {
  server = await createServer();

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server listening on Port:${server.server.address().port}...`);
  });
};

// start the server
start();
