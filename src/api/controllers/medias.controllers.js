const Media = require('../models/medias.models'); //Nos traermos el modelo del archivo enterprise.models

const getAllMedias = async (request, response) => {
    try {
        
        const getAllMedias = await Media.find(); //Cogemos todas las series de nuestro modelo "Enterprise".
        return response.status(200).json(getAllMedias);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const getMedia = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allMedias = await Media.findById(id); //Cogemos todas las Enterprises de nuestro modelo "Enterprise
        return response.status(200).json(allMedias);

    } catch (error) {
       
        return response.status(500).json(error)

    }
}
const postNewMedia = async (request, response) => {
    try {
        
        const {nameONDAS, nameREVISTA, image} = request.body;
        const newMedia = new Media({nameONDAS, nameREVISTA, image});
        const createdMedia = await newMedia.save();
        return response.status(201).json(createdMedia);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const putMedia = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params el "id"
        const putMedia = new Media(request.body);
        putMedia._id = id;

        const mediaDb = await Media.findByIdAndUpdate(id, putMedia);
        if(!mediaDb) { //Para controlar el error si no encuentra en la base de datos.
            
            return response.status(404).json( {message : "Media not found on database."} );

        }

        return response.status(200).json(putMedia) //Si no hay error, devuelve el elemento actualizdo.

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const deleteMedia = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params el "id"
        const mediaDb = await Media.findByIdAndDelete(id);

        if(!mediaDb) {

            return response.status(404).json({ message : "Media not found on database."});

        }

        return response.status(200).json(mediaDb);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

module.exports = {getAllMedias, getMedia, postNewMedia, putMedia, deleteMedia};