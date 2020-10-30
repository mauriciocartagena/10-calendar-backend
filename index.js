const express = require('express');
var cors = require('cors')
require('dotenv').config();

const { dbConnnection } = require('./database/config');


//Crear el servidor de express

const app = express();


//Base de datos
dbConnnection();

///CORS

app.use(cors());

//Directorio Público

app.use( express.static('public') );

// Lectura y parseo del body
app.use(express.json()); 


//Rutas
app.use('/api/auth', require('./routes/auth'));
// TODO CRUD: Eventos



// Escuchar peticiones

app.listen(  process.env.PORT, () => {

    console.log(`Servidor corriendo en puerto ${ process.env.PORT } `);

});