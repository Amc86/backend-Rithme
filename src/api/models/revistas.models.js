const mongoose = require('mongoose') //Requerimos primero mongoose.

const Schema = mongoose.Schema

const revistasSchema = new Schema({

    nameREVISTA : {type : String},
    image : {type : String, required: true}

},{
    timestamps : true
})

const Revistas = mongoose.model('revistas', revistasSchema ); //Aquí creamos nuestro modelo de series.

module.exports = Revistas; //Para exportar el modelo.