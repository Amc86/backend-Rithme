const Genre = require('../models/./genres.models'); //Nos traermos el modelo del archivo enterprise.models

const getAllGenres = async (request, response) => {
    try {
        
        const getAllGenres = await Genre.find(); //Cogemos todas las series de nuestro modelo "Enterprise".
        return response.status(200).json(getAllGenres);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}
const getGenre = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allGenres = await Genre.findById(id); //Cogemos todas las Enterprises de nuestro modelo "Enterprise
        return response.status(200).json(allGenres);

    } catch (error) {
       
        return response.status(500).json(error)

    }
}

const postNewGenre = async (request, response) => {
    try {
        
        const {name, image} = request.body;
        const newGenre = new Genre({name, image});
        const createdGenre = await newGenre.save();
        return response.status(201).json(createdGenre);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const putGenre = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params el "id"
        const putGenre = new Genre(request.body);
        putGenre._id = id;

        const genreDb = await Genre.findByIdAndUpdate(id, putGenre);
        if(!genreDb) { //Para controlar el error si no encuentra en la base de datos.
            
            return response.status(404).json( {message : "Genre not found on database."} );

        }

        return response.status(200).json(putGenre) //Si no hay error, devuelve el elemento actualizdo.

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const deleteGenre = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params el "id"
        const genreDb = await Genre.findByIdAndDelete(id);

        if(!genreDb) {

            return response.status(404).json({ message : "Genre not found on database."});

        }

        return response.status(200).json(genreDb);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

module.exports = {getAllGenres, getGenre, postNewGenre, putGenre, deleteGenre};