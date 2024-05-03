//9
const jwt = require("jsonwebtoken");
const secretCode = require('../utils/key');

const verifyToken = (req, res, next) => {
    return new Promise((resolve, reject) => {
        const token = req.headers.authorization;
  
        if (!token) {
            reject({
                status: 401,
                message: "Token de autenticacion no proporcionado",
            });
        }
  
        jwt.verify(
            token.split(" ")[1], secretCode,
            (error, decodedToken) => {
                if (error) {
                    reject({ status: 401, message: "Token de autenticacion no valido" });
                } else {
                    req.userId = decodedToken.userId; // Agregamos ID de usuario decodificado para posterior uso
                    resolve();
                }
            }
        );
    })
        .then(() => next()) // Continua el seguimiento del siguiente middleware o del siguiente controlador
        .catch((error) =>
            res.status(error.status || 500).json({ message: error.message })
        );
};
  
module.exports = verifyToken;