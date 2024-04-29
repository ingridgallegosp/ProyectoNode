'use strict'

//3
// Importamos Mongoose para definir usuario 

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nombre: {
      type: String,
      required: true, // es obligatorio.
    },
    edad: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, //el correo electronico tiene que ser único
    },
    contraseña: {
      type: String,
      required: true,
    },
});


// Crear el modelo user - usaando el esquema definido anteriormente

const User = mongoose.model("User", userSchema);

// Exportamos el modelo User para usarlo en cualquier parte.

module.exports = User;
  