const Hall = require('../models/./halls.models'); //Nos traermos el modelo del archivo enterprise.models

const getAllHalls = async (request, response) => {
    try {
        
        const getAllHalls = await Hall.find(); //Cogemos todas las series de nuestro modelo "Enterprise".
        return response.status(200).json(getAllHalls);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const getHall = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allHalls = await Hall.findById(id); //Cogemos todas las Enterprises de nuestro modelo "Enterprise
        return response.status(200).json(allHalls);

    } catch (error) {
       
        return response.status(500).json(error)

    }
}
const postNewHall = async (request, response) => {
    try {
        
        const {name, address, image} = request.body;
        const newHall = new Hall({name, address, image});
        const createdHall = await newHall.save();
        return response.status(201).json(createdHall);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const putHall = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params el "id"
        const putHall = new Hall(request.body);
        putHall._id = id;

        const hallDb = await Hall.findByIdAndUpdate(id, putHall);
        if(!hallDb) { //Para controlar el error si no encuentra en la base de datos.
            
            return response.status(404).json( {message : "Hall not found on database."} );

        }

        return response.status(200).json(putHall) //Si no hay error, devuelve el elemento actualizdo.

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const deleteHall = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params el "id"
        const hallDb = await Hall.findByIdAndDelete(id);

        if(!hallDb) {

            return response.status(404).json({ message : "Hall not found on database."});

        }

        return response.status(200).json(hallDb);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

module.exports = {getAllHalls, getHall, postNewHall, putHall, deleteHall};