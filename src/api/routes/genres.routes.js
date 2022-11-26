const express = require('express');

const routerGenres = express.Router(); //Creamos nuestro enroutador.

const {getAllGenres, getGenre, postNewGenre, putGenre, deleteGenre} = require('../controllers/./genres.controllers');

routerGenres.get('/', getAllGenres);        //GET Creamos todas las funciones, las exportamos y las anexionamos al router correspondiente
routerGenres.get('/:id', getGenre);         //GET Unitario por id
routerGenres.post('/', postNewGenre);          //POST Para crear un nuevo elemento a la base de datos.
routerGenres.put('/:id', putGenre);     //PUT Para modificar un elemento de la base de datos recibiendo como parámetro un id
routerGenres.delete('/:id', deleteGenre);  //DELETE Para eliminar un elemento de la base de datos recibiendo como parámetro un id*/

module.exports = routerGenres;