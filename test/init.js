var execSQL = require('exec-sql');
var path = require('path');
//const db = require('../database');
var dbconfig = require('../config/dbconfig');

before(function(done) {
  this.timeout(5000);
  execSQL.connect({
    database: dbconfig.database,
    user: dbconfig.user,
    password: dbconfig.password,
    host: dbconfig.host
  });
  
  execSQL.executeFile(path.join(__dirname, '../dbscripts/create-biblioteca-test.sql'), function(err) {
    execSQL.disconnect();
    console.log("Database selected : ",dbconfig.database);
    if (err) {
      console.error('Error while cleaning test DB:', err);
    }
    else {
      console.log('Test DB cleaned successfully');
    }
    done();
  });
})
