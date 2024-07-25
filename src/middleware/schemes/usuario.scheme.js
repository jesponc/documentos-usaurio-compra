const Joi = require('joi')

let crearUsuario = Joi.object({
    nombre: Joi.string().required(),
    apellido: Joi.string().required(),
    edad: Joi.number().required(),
    email: Joi.string().required(),
    contrasena: Joi.string().required(),
})

module.exports = {
    crearUsuario
}