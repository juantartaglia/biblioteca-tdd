module.exports = (function(){
  var listaDeInvitados = [];

  return {
    agregarInvitado: function(nombre){
      if (nombre && nombre.trim() != ''){
        listaDeInvitados.push(nombre);
      }
    },
    eliminarUltimoInvitado: function (callback){
      setTimeout(function(){
        listaDeInvitados.pop();
        callback();
      }, 1000); 
    },
    obtenerCantidad: function(){
      return listaDeInvitados.length;
    },
    obtenerLista: function(){
      return listaDeInvitados;
    }
  }
})();