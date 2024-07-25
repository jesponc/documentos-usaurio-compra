const models = require('../models/index');
const error = require('../config/error');
const Response =  require('./utilities/response')

module.exports = {
    uploadFile: async (req, res, next) => {
        try {
            await models.sequelize.sync()
            const archivo = models.archivo.create({
                nombre: req.body.nombre,
                idUsuario: req.body.idUsuario,
                file: req.file.filename,
                nombre_original: req.file.originalname
            })
            if (!archivo) return next(error.ArchivoInexistente)
            
            const resp = Response.format(true, req.file)
            res.json(resp)

        } catch (error) {
            console.log(error.message);
        }

    },

    downloadFile: async (req, res, next) => {
        try {
            const archivo = await models.archivo.findOne({
                where: {
                    idUsuario: req.body.idUsuario,
                    nombre: req.body.nombre
                }
            });
    
            if (!archivo) return next(error.ArchivoInexistente)
            
            res.download('src/uploads/' + archivo.file, archivo.nombre_original)
            
        } catch (err) {
            return next(error.ArchivoInexistente)
        }
    }
    
}