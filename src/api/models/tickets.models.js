const mongoose = require('mongoose') //Requerimos primero mongoose.

const Schema = mongoose.Schema

const ticketsSchema = new Schema({

    user : {type: Schema.Types.ObjectId, ref : 'user'},
    concert : {type: Schema.Types.ObjectId, ref : 'concerts'},
    hall : {type: Schema.Types.ObjectId, ref : 'halls'},
    artist : {type: Schema.Types.ObjectId, ref : 'artists'}
    

},{
    timestamps : true
})

const Tickets = mongoose.model('tickets', ticketsSchema ); //Aquí creamos nuestro modelo de series.

module.exports = Tickets; //Para exportar el modelo.