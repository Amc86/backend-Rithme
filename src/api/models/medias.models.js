const mongoose = require('mongoose') //Requerimos primero mongoose.

const Schema = mongoose.Schema

const mediasSchema = new Schema({

    nameONDAS : {type : String},
    image : {type : String, required: true}

},{
    timestamps : true
})

const Medias = mongoose.model('medias', mediasSchema ); //Aquí creamos nuestro modelo de series.

module.exports = Medias; //Para exportar el modelo.