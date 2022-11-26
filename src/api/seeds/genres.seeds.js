const mongoose = require('mongoose');

const Genre = require('../models/genres.models');

const genres = [{
    name:"House",
    image:"https://www.shutterstock.com/image-photo/charismatic-disc-jockey-turntable-dj-260nw-351983273.jpg"
},{
    name:"Reggaeton",
    image:"https://adetodogeneromusic.files.wordpress.com/2019/03/image-7.jpeg"
},{
    name:"Rock and Roll",
    image:"https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/25/133/25-133-101X/Rock--Roll-Florent-Bodart-Poster.jpg"
},{
    name:"Pop",
    image:"https://alohaotakus.com/wp-content/uploads/2020/02/popmusic.png"
},{
    name:"Música clásica",
    image:"https://static-2.ivoox.com/canales/3/7/7/4/5901460064773_XXL.jpg"
}

]

const genreMap = genres.map((genre) => new Genre(genre));

mongoose.connect("mongodb+srv://root:root@cluster0.xbshs7n.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(async () => {
    const allGenre = await Genre.find();

    if(allGenre.length){
        await Genre.collection.drop();
        console.log("Genre eliminados")
    }

}).catch((error) => console.log("error borrando genero", error)).then(async () => {
    await Genre.insertMany(genreMap)
console.log("Genre creados");

}).catch((error) => console.log("error insertando", error))
.finally(() => {mongoose.disconnect()});