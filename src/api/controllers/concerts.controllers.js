const Concert = require('../models/concerts.models'); //Nos traermos el modelo del archivo enterprise.models

const getAllConcerts = async (request, response) => {
    try {
        
        const getAllConcerts = await Concert.find().populate('halls'); //Cogemos todas las series de nuestro modelo "Enterprise".
        return response.status(200).json(getAllConcerts);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}
const getConcert = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allConcerts = await Concert.findById(id).populate('halls'); //Cogemos todas las Enterprises de nuestro modelo "Enterprise
        return response.status(200).json(allConcerts);

    } catch (error) {
       
        return response.status(500).json(error)

    }
}

const postNewConcert = async (request, response) => {
    try {
        
        const {date, hour, price, halls} = request.body;
        const newConcert = new Concert({date, hour, price, halls});
        const createdConcert = await newConcert.save();
        return response.status(201).json(createdConcert);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const putConcert = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params el "id"
        const putConcert = new Concert(request.body);
        putConcert._id = id;

        const concertDb = await Concert.findByIdAndUpdate(id, putConcert);
        if(!concertDb) { //Para controlar el error si no encuentra en la base de datos.
            
            return response.status(404).json( {message : "Concert not found on database."} );

        }

        return response.status(200).json(putConcert) //Si no hay error, devuelve el elemento actualizdo.

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const deleteConcert = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params el "id"
        const concertDb = await Concert.findByIdAndDelete(id);

        if(!concertDb) {

            return response.status(404).json({ message : "Concert not found on database."});

        }

        return response.status(200).json(concertDb);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

module.exports = {getAllConcerts, getConcert, postNewConcert, putConcert, deleteConcert};