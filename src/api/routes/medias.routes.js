const express = require('express');

const routerMedias = express.Router(); //Creamos nuestro enroutador.

const {getAllMedias, getMedia, postNewMedia, putMedia, deleteMedia} = require('../controllers/medias.controllers');

routerMedias.get('/', getAllMedias);        //GET Creamos todas las funciones, las exportamos y las anexionamos al router correspondiente
routerMedias.get('/:id', getMedia);         //GET Unitario por id
routerMedias.post('/', postNewMedia);          //POST Para crear un nuevo elemento a la base de datos.
routerMedias.put('/:id', putMedia);     //PUT Para modificar un elemento de la base de datos recibiendo como parámetro un id
routerMedias.delete('/:id', deleteMedia);  //DELETE Para eliminar un elemento de la base de datos recibiendo como parámetro un id*/

module.exports = routerMedias;