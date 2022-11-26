const Artist = require('../models/artists.models'); //Nos traermos el modelo del archivo enterprise.models

const getAllArtists = async (request, response) => {
    try {
        
        const allArtists = await Artist.find().populate('genre concerts'); //Cogemos todas las series de nuestro modelo "Enterprise".
        return response.status(200).json(allArtists);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const getArtist = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allArtists = await Artist.findById(id).populate('genre concerts'); //Cogemos todas las Enterprises de nuestro modelo "Enterprise
        return response.status(200).json(allArtists);

    } catch (error) {
       
        return response.status(500).json(error)

    }
}

const postNewArtist = async (request, response) => {
    try {
        
        const {name, genre, description, image, concerts} = request.body;
        const newArtist = new Artist({name, genre, description, image, concerts});
        const createdArtist = await newArtist.save();
        return response.status(201).json(createdArtist);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const putArtist = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params el "id"
        const putArtist = new Artist(request.body);
        putArtist._id = id;

        const artistDb = await Artist.findByIdAndUpdate(id, putArtist);
        if(!artistDb) { //Para controlar el error si no encuentra en la base de datos.
            
            return response.status(404).json( {message : "Artist not found on database."} );

        }

        return response.status(200).json(putArtist) //Si no hay error, devuelve el elemento actualizdo.

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const deleteArtist = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params el "id"
        const artistDb = await Artist.findByIdAndDelete(id);

        if(!artistDb) {

            return response.status(404).json({ message : "Artist not found on database."});

        }

        return response.status(200).json(artistDb);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

module.exports = {getAllArtists, getArtist, postNewArtist, putArtist, deleteArtist};