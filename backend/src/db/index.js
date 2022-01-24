const { Sequelize } = require('sequelize');

const MYSQL_DIALECT = 'mysql';

module.exports = function initiDb({database, user, password, host, port}) {
  const db = new Sequelize(database, user, password, {
    host,
    dialect: MYSQL_DIALECT,
    port
  });

  return db.authenticate();
}