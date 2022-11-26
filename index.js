const express = require('express'); 
const dotenv = require('dotenv'); 
const PORT = process.env.PORT || 9007;
const routerArtists = require('./src/api/routes/artists.routes');
const routerConcerts = require('./src/api/routes/concerts.routes');
const routerHalls = require('./src/api/routes/halls.routes');
const routerGenres = require('./src/api/routes/genres.routes');
const routerUsers = require('./src/api/routes/users.routes');
const routerTickets = require('./src/api/routes/tickets.routes');
const cors = require('cors');

const {connect} = require('./utils/database'); //Importamos la conexión con la BBDD

connect(); //Conectamos después de iniciar el servidor con la BBDD
dotenv.config();
const app = express(); //Iniciamos el servidor con express

app.use(cors({
    origin: "*",
    credentials: true
})) // Use this after the variable declaration
app.use(express.json()); //Necesario para poder usar json a la hora de enviar datos como puede ser con el método POST.
app.use(express.urlencoded({ extended : false }));

app.use('/', routerArtists, routerConcerts, routerHalls, routerGenres, routerUsers, routerTickets);
app.use('/artists', routerArtists);
app.use('/concerts', routerConcerts);
app.use('/halls', routerHalls);
app.use('/genres', routerGenres);
app.use('/users', routerUsers);
app.use('/tickets', routerTickets);  //Para la ruta '/enterprises', utiliza este router(routerEnterprises), que hemos creado en routes/enterprise.routes.js donde hemos creado funciones para los diferentes métodos GET POST PUT DELETE
app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));
