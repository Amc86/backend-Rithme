const mongoose = require('mongoose') //Requerimos primero mongoose.

const Schema = mongoose.Schema

const artistsSchema = new Schema({

    name : {type : String, required: true},
    genre : {type: Schema.Types.ObjectId, ref : 'genres'},
    description: {type : String, required: true},
    image : {type : String, required: true},
    concerts : {type: Schema.Types.ObjectId, ref : 'concerts'}

},{
    timestamps : true
})

const Artists = mongoose.model('artists', artistsSchema ); //Aquí creamos nuestro modelo de series.

module.exports = Artists; //Para exportar el modelo.