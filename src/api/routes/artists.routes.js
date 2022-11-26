const express = require('express');

const routerArtists = express.Router(); //Creamos nuestro enroutador.

const {getAllArtists, getArtist, postNewArtist, putArtist, deleteArtist} = require('../controllers/artists.controllers');

routerArtists.get('/', getAllArtists);           //GET Creamos todas las funciones, las exportamos y las anexionamos al router correspondiente
routerArtists.get('/:id', getArtist);           //GET Unitario por id
routerArtists.post('/', postNewArtist);        //POST Para crear un nuevo elemento a la base de datos.
routerArtists.put('/:id', putArtist);         //PUT Para modificar un elemento de la base de datos recibiendo como parámetro un id
routerArtists.delete('/:id', deleteArtist);  //DELETE Para eliminar un elemento de la base de datos recibiendo como parámetro un id*/

module.exports = routerArtists;