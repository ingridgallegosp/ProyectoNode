'use strict'

//2
// importamos mongoose para crear conexion a la base de datos

const mongoose = require('mongoose');

// conectamos db con metodo conect de mongoose

const mongoURL = 'mongodb+srv://inggape18:fTQp7Qby7EeXxG8A@cluster0.8nwuku9.mongodb.net/project'

// funcion para conectar db

const connectDB = () => {
    return new Promise((res, rej) => {

        // Conectar a la base de datos usando la URL proporcioanada
        mongoose
            .connect(mongoURL)
            .then(() => {
                console.log("Conexion a la DB establecida correctamente");
              
            // Si la conexion es exitosa resolvemos la promesa
            res();
            })
            .catch((err) => {
                
                // Si hay un error al conectar, imprimir el error y rechazar la promesa
                console.error("Error al conectar a la DB ", err);
                rej(err);
            });
        });
    }
    
    //Exportamos la funcion de la conexion a la db para utilizarla en el app.js
    module.exports = connectDB;