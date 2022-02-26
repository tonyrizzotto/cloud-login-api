require('dotenv').config();

module.exports = {
  environment: {
    port: process.env.CONNECTIONPORT,
  },
  cloudSqlProxy: {
    dbUser: process.env.DBUSER,
    dbHost: process.env.DBHOST,
    dbPass: process.env.DBPASS,
    dbPort: process.env.DBPORT,
    dbName: process.env.DBNAME,
  },
};
