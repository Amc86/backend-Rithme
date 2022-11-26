const mongoose = require('mongoose');

const Hall = require('../models/halls.models');

const halls = [{
    name:"Fabrik",
    address:"Av. de la Industria, 82, 28970 Humanes de Madrid, Madrid",
    image:"https://www.elfest.es/files/places/7/image_746_1_large.jpg"
},{
    name:"WiZink Center",
    address:"Av. Felipe II, s/n, 28009 Madrid",
    image:"https://lh3.googleusercontent.com/p/AF1QipPF7QVezGiiJ-Po6Mc0glcbGRRc1bhnNLRvmwET=s1360-w1360-h1020"
},{
    name:"La Riviera",
    address:"P.º Bajo de la Virgen del Puerto, S/N, 28005 Madrid",
    image:"https://estaticos.esmadrid.com/cdn/farfuture/h5ZoKnzam_MeJhRjdvMA-zXJN9vyv2Pzt9lEISheNPA/mtime:1646730361/sites/default/files/styles/content_type_full/public/recursosturisticos/noche/riviera.jpg?itok=gBsnfmH0"
},{
    name:"Teatro Eslava",
    address:"C. del Arenal, 11, 28013 Madrid",
    image:"https://media.timeout.com/images/105858974/750/422/image.jpg"
},{
    name:"Estadio San Mamés",
    address:"P. Rafael Moreno Pitxitxi, s/n, 48013 Bilbao",
    image:"https://lh3.googleusercontent.com/p/AF1QipPsmag3A_rqOzFTjC0yrUaMdPJ1cfDSmnGOkWef=s1360-w1360-h1020"
},{
    name:"Sala Apolo",
    address:"C. Nou de la Rambla, 113, 08004 Barcelona",
    image:"https://media.timeout.com/images/100575949/750/422/image.jpg"
},{
    name:"Sala Custom",
    address:"Pol. Ind. Calonge, C. Metalurgia, 25, Sevilla",
    image:"https://www.escenaensevilla.es/doc/l/l_custom.jpg"
}



]
const hallMap = halls.map((hall) => new Hall(hall));

mongoose.connect("mongodb+srv://root:root@cluster0.xbshs7n.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(async () => {
    const allHall = await Hall.find();

    if(allHall.length){
        await Hall.collection.drop();
        console.log("Hall eliminados")
    }

}).catch((error) => console.log("error borrando hall", error)).then(async () => {
    await Hall.insertMany(hallMap)
console.log("Hall creados");

}).catch((error) => console.log("error insertando", error))
.finally(() => {mongoose.disconnect()});