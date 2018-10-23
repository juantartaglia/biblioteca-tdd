var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var Libro = require('./models/libro')

app.use(bodyParser.json());

app.get('/', function(req, res){ 
  var param1 = req.query.param1;
  var otroparam = req.query.otroparam;
  res.json({
    otroparam: otroparam,
    param1: param1
  });
})

app.get('/libros', function(req, res){  
  Libro.obtenerLista(function(err,result){
    if(err){
      return res.status(500).json({
        message: "Error en la base de datos"
      });
    }
    res.json(result);
  });

  
})

app.get('/libros/:isbn', function(req, res){  
  var isbn = req.params.isbn;
  Libro.obtenerLibro({ isbn : isbn}, function(err,result) {
    if(err){
      return res.status(500).json({ error: true, message: 'Error al procesar consulta'});
    }
    if(result && result.length == 0){
      return res.status(404).json({ error: false, message: 'Libro no encontrado'});
    }
    res.status(200).json(result);
  });
});

var puerto = 8085;

if(process.env.NODE_ENV !== 'test') {
  app.listen(puerto, function(){
    console.log("Server corriendo en el puerto", puerto);
  });
}

module.exports = app;