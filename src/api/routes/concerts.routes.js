const express = require('express');

const routerConcerts = express.Router(); //Creamos nuestro enroutador.

const {getAllConcerts, getConcert, postNewConcert, putConcert, deleteConcert} = require('../controllers/concerts.controllers');

routerConcerts.get('/', getAllConcerts);        //GET Creamos todas las funciones, las exportamos y las anexionamos al router correspondiente
routerConcerts.get('/:id', getConcert);         //GET Unitario por id
routerConcerts.post('/', postNewConcert);          //POST Para crear un nuevo elemento a la base de datos.
routerConcerts.put('/:id', putConcert);     //PUT Para modificar un elemento de la base de datos recibiendo como parámetro un id
routerConcerts.delete('/:id', deleteConcert);  //DELETE Para eliminar un elemento de la base de datos recibiendo como parámetro un id*/

module.exports = routerConcerts;