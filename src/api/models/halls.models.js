const mongoose = require('mongoose') //Requerimos primero mongoose.

const Schema = mongoose.Schema

const hallsSchema = new Schema({

    name : {type : String, required: true},
    address : {type : String, required: true},
    image : {type : String, required: true}

},{
    timestamps : true
})

const Halls = mongoose.model('halls', hallsSchema ); //Aquí creamos nuestro modelo de series.

module.exports = Halls; //Para exportar el modelo.