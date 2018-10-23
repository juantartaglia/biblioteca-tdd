var mysql = require('mysql');
var dbconfig = require('./config/dbconfig')

console.log("ENV ",process.env.NODE_ENV);

var connection = mysql.createConnection({
  host: dbconfig.host,
  port: dbconfig.port,
  user: dbconfig.user,
  password: dbconfig.password,
  database: dbconfig.database
});

module.exports = connection;
