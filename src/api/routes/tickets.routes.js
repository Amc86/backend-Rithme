const express = require('express');

const routerTickets = express.Router(); //Creamos nuestro enroutador.

const {getAllTickets, getTicket, postNewTicket} = require('../controllers/./tickets.controllers');

routerTickets.get('/', getAllTickets);        //GET Creamos todas las funciones, las exportamos y las anexionamos al router correspondiente
routerTickets.get('/:id', getTicket);         //GET Unitario por id
routerTickets.post('/', postNewTicket);          //POST Para crear un nuevo elemento a la base de datos.
// routerHalls.put('/:id', putHall);     //PUT Para modificar un elemento de la base de datos recibiendo como parámetro un id
// routerHalls.delete('/:id', deleteHall);  //DELETE Para eliminar un elemento de la base de datos recibiendo como parámetro un id*/

module.exports = routerTickets;