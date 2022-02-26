const {
  cloudSqlProxy: { dbHost, dbName, dbPass, dbUser, dbPort },
} = require('../../manifest');

const cldSqlConnection = `postgres://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`;

module.exports = { cldSqlConnection };
