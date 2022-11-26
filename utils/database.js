//Conectamos la BBDD

const mongoose = require('mongoose'); 
const dotenv = require('dotenv');
dotenv.config();

const DB_URL = 'mongodb+srv://root:root@cluster0.xbshs7n.mongodb.net/?retryWrites=true&w=majority';

const connect = async () => {
    try {
        
        const DB = await mongoose.connect(DB_URL, {
            useNewUrlParser : true,
            useUnifiedTopology : true
        })

        const { name, host } = DB.connection;
        console.log(`Connected to ${name} DB in host ${host}`);

    } catch (error) {
       
        console.log(error)

    }
    
}

module.exports = {connect} //La exportamos como objeto porque en algún momento nos llevaremos la url.