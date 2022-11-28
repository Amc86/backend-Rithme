const mongoose = require('mongoose') //Requerimos primero mongoose.

const Schema = mongoose.Schema

const concertsSchema = new Schema({

    artist : {type: Schema.Types.ObjectId, ref : 'artists'},
    date : {type : String, required: true},
    hour : {type : String, required: true},
    price: {type : String, required: true},
    halls : {type: Schema.Types.ObjectId, ref : 'halls'}


borrar esta linea
},{
    timestamps : true
})

const Concerts = mongoose.model('concerts', concertsSchema ); //Aquí creamos nuestro modelo de series.

module.exports = Concerts; //Para exportar el modelo.