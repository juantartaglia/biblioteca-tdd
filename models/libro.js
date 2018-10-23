var connection = require('../database');
var Libro = function(titulo,isbn){
  this.titulo = titulo;
  this.isbn = isbn;
}


Libro.obtenerLista = function(callback){
  connection.query("SELECT titulo,isbn FROM libros", function(err,res){
    callback(err,res);
  });
};

Libro.agregar = function(data,callback){
  var sqlQuery = `INSERT INTO libros (titulo, isbn) VALUES ('${data.titulo}', '${data.isbn}')`;
  connection.query(sqlQuery, function(err,res){
    callback(err,res);
  });
};

Libro.obtenerLibro = function(data,callback){
  var sqlQuery = `SELECT titulo,isbn FROM libros WHERE isbn='${data.isbn}'`;
  connection.query(sqlQuery,function(err,res){
    callback(err,res);
  });
};

/*  opcionalmente puedo pasar directamente el callback en vez de declarar una function,
 porque los parametros son iguales   */

module.exports = Libro;