//7
// Importamos JWT
const jwt = require('jsonwebtoken');
const secretCode = require('../utils/key')

// Almacenamos nuestra clave secreta

const JWT_SECRET = secretCode;

// Creamos una funcion para generar un token JWT

const generateToken = (user) => {
    //orden a hacer a futuro
    const payload = {
        userId: user._id,
        email: user.email,
    };
  
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
    return token
};
  
module.exports = { generateToken };