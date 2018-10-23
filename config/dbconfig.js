var db = process.env.NODE_ENV === 'test' ? 'biblioteca_test' : 'biblioteca';

var config = {
  host: 'localhost',
  port: '3306',
  user: 'www',
  password: 'www123',
  database: db
};

module.exports = config;