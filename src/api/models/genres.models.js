const mongoose = require('mongoose') //Requerimos primero mongoose.

const Schema = mongoose.Schema

const genresSchema = new Schema({

    name : {type : String, required: true},
    image : {type : String, required: true}

},{
    timestamps : true
})

const Genres = mongoose.model('genres', genresSchema ); //Aquí creamos nuestro modelo de series.

module.exports = Genres; //Para exportar el modelo.