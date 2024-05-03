'use strict'
//1
//importamos express y rutas de usuario

const express = require('express');
const connectDb = require('./db/db');

// crear instancia de express

const app = express();
const PORT = 3010;

// 11 Importamos las rutas

const userRoutes = require("./routes/userRoutes")
const authRoutes= require("./routes/authRoutes")
const sessionRoutes= require("./routes/sessionRoutes")

//middleware

app.use(express.json())

//rutas
//11 Creamos las rutas de usuario en la ruta /api/users
// Rutas de Autenticacion

app.use("/api/auth/", authRoutes)

// Rutas de Usuarios

app.use("/api/users", userRoutes) 

// Rutas del usuario actual

app.use("/api/session", sessionRoutes)



//Inicializamos DB

connectDb();

//inicializamos

app.listen(PORT, ()=> {
    console.log('corriendo en puerto: '+ PORT)
}); //ruta /api/users
