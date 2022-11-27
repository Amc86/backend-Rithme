const express = require('express');

const routerRevistas = express.Router(); //Creamos nuestro enroutador.

const {getAllRevistas, getRevista, postNewRevista} = require('../controllers/revistas.controllers');

routerRevistas.get('/', getAllRevistas);        //GET Creamos todas las funciones, las exportamos y las anexionamos al router correspondiente
routerRevistas.get('/:id', getRevista);         //GET Unitario por id
routerRevistas.post('/', postNewRevista);          //POST Para crear un nuevo elemento a la base de datos.
// routerRevistas.put('/:id', putRevista);     //PUT Para modificar un elemento de la base de datos recibiendo como parámetro un id
// routerRevistas.delete('/:id', deleteRevista);  //DELETE Para eliminar un elemento de la base de datos recibiendo como parámetro un id*/

module.exports = routerRevistas;