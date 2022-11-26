const Ticket = require('../models/./tickets.models'); //Nos traermos el modelo del archivo enterprise.models

const getAllTickets = async (request, response) => {
    try {
        
        const getAllTickets = await Ticket.find().populate('user artist concert hall'); //Cogemos todas las series de nuestro modelo "Enterprise".
        return response.status(200).json(getAllTickets);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const getTicket = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allTickets = await Ticket.findById(id).populate('user artist concert hall'); //Cogemos todas las Enterprises de nuestro modelo "Enterprise
        return response.status(200).json(allTickets);

    } catch (error) {
       
        return response.status(500).json(error)

    }
}
const postNewTicket = async (request, response) => {
    try {
        
        const {user, artist, concert, hall} = request.body;
        const newTicket = new Ticket({user, artist, concert, hall});
        const createdTicket = await newTicket.save();
        return response.status(201).json(createdTicket);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

// const putHall = async (request, response) => {
//     try {
        
//         const {id} = request.params; //Recogemos de request.params el "id"
//         const putHall = new Hall(request.body);
//         putHall._id = id;

//         const hallDb = await Hall.findByIdAndUpdate(id, putHall);
//         if(!hallDb) { //Para controlar el error si no encuentra en la base de datos.
            
//             return response.status(404).json( {message : "Hall not found on database."} );

//         }

//         return response.status(200).json(putHall) //Si no hay error, devuelve el elemento actualizdo.

//     } catch (error) {
        
//         return response.status(500).json(error)

//     }
// }

// const deleteHall = async (request, response) => {
//     try {
        
//         const {id} = request.params; //Recogemos de request.params el "id"
//         const hallDb = await Hall.findByIdAndDelete(id);

//         if(!hallDb) {

//             return response.status(404).json({ message : "Hall not found on database."});

//         }

//         return response.status(200).json(hallDb);

//     } catch (error) {
        
//         return response.status(500).json(error)

//     }
// }

module.exports = {getAllTickets, getTicket, postNewTicket};