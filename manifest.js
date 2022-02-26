require('dotenv').config();

module.exports = {
  cloudSqlProxy: {
    dbUser: process.env.DBUSER,
    dbHost: process.env.DBHOST,
    dbPass: process.env.DBPASS,
    dbPort: process.env.DBPORT,
    dbName: process.env.DBNAME,
  },
};
