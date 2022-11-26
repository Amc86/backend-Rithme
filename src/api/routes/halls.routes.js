const express = require('express');

const routerHalls = express.Router(); //Creamos nuestro enroutador.

const {getAllHalls, getHall, postNewHall, putHall, deleteHall} = require('../controllers/./halls.controllers');

routerHalls.get('/', getAllHalls);        //GET Creamos todas las funciones, las exportamos y las anexionamos al router correspondiente
routerHalls.get('/:id', getHall);         //GET Unitario por id
routerHalls.post('/', postNewHall);          //POST Para crear un nuevo elemento a la base de datos.
routerHalls.put('/:id', putHall);     //PUT Para modificar un elemento de la base de datos recibiendo como parámetro un id
routerHalls.delete('/:id', deleteHall);  //DELETE Para eliminar un elemento de la base de datos recibiendo como parámetro un id*/

module.exports = routerHalls;