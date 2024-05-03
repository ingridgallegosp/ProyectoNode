//8
//
const authService = require("../services/authService");
const User = require("../models/user");

const AuthToken = require("../models/auth");

// Controlador para manejar la Autenticacion de Usuarios

const login = (req, res) => {
    const { email, contraseña } = req.body;

    User.findOne({ email }) //llamamos mediante busqueda de email
        .then((user) => {
        
            //si no hay user
            if (!user) {
                return res.status(401).json({ message: "Credenciales Invalidas" });
            }

            // validar si coinciden las contraseñas

            const match = (contraseña === user.contraseña);

            if (!match) {
                return res.status(401).json({ message: "Credenciales Inválidas" });
            }
            // Si las credenciales son validadas(coincide la ingresada con la registrada) vamos a crear el token

            const token = authService.generateToken(user);
            res.json({ token });

            //13
            // Guardar el token en la base de datos

            AuthToken.create({ userId: user._id, token })
                .then(() => {
                    res.json({ token });
                })
                .catch((error) => {
                    console.error(error);
                    res.status(500).json({ message: "Error al iniciar sesion" });
                });
        })

        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: "Error al iniciar sesion" });
        });
};         
                       

            


// Controlador para cerrar la sesion

/* const logout = (req, res) => {
    //falta borrar el token
    res.status(200).json({ message: "Sesion cerrada exitosamente" })
}; */


const logout = (req, res) => {
    const token = req.headers.authorization.split(" ")[1]

    // 13 Buscamos el token en la base de datos y lo eliminamos
    AuthToken.findOneAndDelete({ token })
        .then(() => {
            res.status(200).json({ message: "Sesion cerrada exitosamente" })
            //res.status(200).json({ message: "Sesion cerrada exitosamente", error: { token } })
        })
        .catch((error) => {
            console.error(error)
            res.status(500).json({ message: "Error al iniciar sesion" })
        })
};

module.exports = {
    login,
    logout,
};
