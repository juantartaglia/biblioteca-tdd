var request = require('supertest');
var expect = require('chai').expect;
var server = require('../../index.js');
var Libro = require('../../models/libro');

describe('Libros', function() {
  before(function(done) {
    Libro.agregar({ titulo: 'Libro 1', isbn: '111' }, function() {
      Libro.agregar({ titulo: 'Libro 2', isbn: '222' }, function() {
        done();
      });
    });
  });

  describe('GET /libros', function () {
    it('devuelve un listado de libros', function(done) {
      request(server).get('/libros').end(function(err, res) {
        expect(res.status).to.eq(200);
        expect(res.body.length).to.eq(2);
        expect(res.body[0].titulo).to.eq('Libro 1');
        expect(res.body[0].isbn).to.eq('111');
        expect(res.body[1].titulo).to.eq('Libro 2');
        expect(res.body[1].isbn).to.eq('222')
        done();
      });
    });
  });



  describe('GET /libros/:isbn',function(){
    it('devuelve json del libro pasado por isbn, con un isbn valido', function(done){
      request(server).get('/libros/111').end(function (err,res){
        expect(res.status).to.eq(200);
        
        //expect(res.body.isbn).to.eq('111');
        done();
      });
    });

    it('Devuelve status 404 con respuesta Json, mediante isbn inexistente', function(done){
      request(server).get('/libros/999999').end(function (err,res){
        expect(res.status).to.eq(404);
        //expect(res.body.error).to.eq(true);
        done();
      });
    });
  });

    

});
