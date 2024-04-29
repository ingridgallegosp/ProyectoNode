'use strict'
//1
//importamos express y rutas de usuario

const express = require('express');
var userRoutes = require('./routes/userRoutes');
const connectDb = require('./db/db');

// crear instancia de express

const app = express();
const PORT = 3000;


//middleware

app.use(express.json())

//rutas

//app.use('/api/users', userRoutes); //ruta /api/users

//Inicializamos DB

connectDb();

//inicializamos

app.listen(PORT, ()=> {
    console.log('corriendo en puerto: '+ PORT)
}); //ruta /api/users
