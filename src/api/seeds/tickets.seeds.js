const mongoose = require('mongoose');

const Ticket = require('../models/tickets.models');

const tickets = [{

    user : '6380ace32b82f2a09dc47fb2',
    concert : '637fbf276c37899b1a5f1113',
    artist : '637fbf36ae057cf88978e8c5'
    

}

]

const ticketMap = tickets.map((ticket) => new Ticket(ticket));

mongoose.connect("mongodb+srv://root:root@cluster0.xbshs7n.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(async () => {
    const allTicket = await Ticket.find();

    if(allTicket.length){
        await Ticket.collection.drop();
        console.log("Ticket eliminados")
    }

}).catch((error) => console.log("error borrando ticket", error)).then(async () => {
    await Ticket.insertMany(ticketMap)
console.log("ticket creado");

}).catch((error) => console.log("error insertando", error))
.finally(() => {mongoose.disconnect()});