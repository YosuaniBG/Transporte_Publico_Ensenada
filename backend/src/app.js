// Servidor Backend
const express = require('express');
const cors = require('cors');
const app = express();

// Importar conexion a mongoDB
const database=require('./database') 

// settings
app.set('port', process.env.PORT || 4000); 

// middlewares
app.use(cors());
app.use(express.json());

// importacion de routes y modelos
const rutaZona=require('./routes/zona')
const rutaRuta=require('./routes/rutasensenada')
const rutaTramo=require('./routes/tramos')

// importar body-parser para convertir la peticion en JSON
const bodyParser= require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

// console.log(api);
app.use('/api/zona',rutaZona)
app.use('/api/rutasensenada',rutaRuta)

//conexion API de Geolocalizacion


module.exports = app;