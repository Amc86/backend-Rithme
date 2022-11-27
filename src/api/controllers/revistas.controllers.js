const Revista = require('../models/revistas.models'); //Nos traermos el modelo del archivo enterprise.models

const getAllRevistas = async (request, response) => {
    try {
        
        const getAllRevistas = await Revista.find(); //Cogemos todas las series de nuestro modelo "Enterprise".
        return response.status(200).json(getAllRevistas);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const getRevista = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allRevistas = await Revista.findById(id); //Cogemos todas las Enterprises de nuestro modelo "Enterprise
        return response.status(200).json(allRevistas);

    } catch (error) {
       
        return response.status(500).json(error)

    }
}
const postNewRevista = async (request, response) => {
    try {
        
        const {nameREVISTA, image} = request.body;
        const newRevista = new Revista({nameREVISTA, image});
        const createdRevista = await newRevista.save();
        return response.status(201).json(createdRevista);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

// const putMedia = async (request, response) => {
//     try {
        
//         const {id} = request.params; //Recogemos de request.params el "id"
//         const putMedia = new Media(request.body);
//         putMedia._id = id;

//         const mediaDb = await Media.findByIdAndUpdate(id, putMedia);
//         if(!mediaDb) { //Para controlar el error si no encuentra en la base de datos.
            
//             return response.status(404).json( {message : "Media not found on database."} );

//         }

//         return response.status(200).json(putMedia) //Si no hay error, devuelve el elemento actualizdo.

//     } catch (error) {
        
//         return response.status(500).json(error)

//     }
// }

// const deleteMedia = async (request, response) => {
//     try {
        
//         const {id} = request.params; //Recogemos de request.params el "id"
//         const mediaDb = await Media.findByIdAndDelete(id);

//         if(!mediaDb) {

//             return response.status(404).json({ message : "Media not found on database."});

//         }

//         return response.status(200).json(mediaDb);

//     } catch (error) {
        
//         return response.status(500).json(error)

//     }
// }

module.exports = {getAllRevistas, getRevista, postNewRevista};

// odule.exports = {getAllMedias, getMedia, postNewMedia, putMedia, deleteMedia};