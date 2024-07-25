const error = require('../config/error');
const models = require('../models/index');
const Response =  require('./utilities/response')


module.exports = {
    
    crear: async(req, res, next) => {
        try {
            const buscarCompra = await models.compra.findOne({
                where: {
                    nombre: req.body.nombre
                }
            })
            if (buscarCompra) return next(error.ServicioProductoExistente)
            
            if(!compra) return next(error.ErrorAlCrearCompra)
            
            const compra = await models.compra.create(req.body)
            
            const resp = Response.format(true, compra)   

            res.json(resp)

        } catch (err) {
            return next(err)
        }    
    },
    editar: async (req, res, next) => {
        try {
            const camposActualizar = req.body
            let compra = await models.compra.findOne({
                where: {
                    id: req.params.id
                }
            }) 
            if(!compra) return next(error.ProductoInexistente)
            
            if(camposActualizar.nombre === compra.nombre) return next(error.ErrorAlActualizarNombre)

            if(!camposActualizar.nombre || camposActualizar.nombre !== compra.nombre){
                
                if(camposActualizar.tipo === compra.tipo) return next(error.ErrorAlActualizarTipp)
                
                await compra.update(camposActualizar)
                
                compra = await models.compra.findOne({
                    where: {
                        id: req.params.id
                    }
                })

                const resp = Response.format(true, compra)
                
                return res.json(resp)
            }

        } catch (err) {
            return next(err) 
        } 
    },
    actualizarStatus: async (req, res, next) => {
        try {
            let compra = await models.compra.findOne({
                where: {
                    id: req.params.id
                }
            })
            if(!compra) return next(error.ProductoInexistente)
            
            if (req.body.status > 1 || req.body.status < 0) return next(error.ErrorStatusValoresInvalidos)
            
            const nuevoStatus = (req.body.status === 1) ? 'activo' : 'inactivo'
    
            if(compra.status === nuevoStatus) return next(error.ErrorAlActualizarStatus)
                
            await compra.update({
                status : nuevoStatus
            })
            
            compra = await models.compra.findOne({
                where: {
                    id : req.params.id
                }
            })
            
            const resp = Response.format(true, compra)

            res.json(resp)
            
        } catch (err) {
            return next(err)
        }
        
    },
    obtenerDatos: async (req, res, next) => {
        try {
            const usuario = await models.usuario.findAll({
                include: [{
                    model: models.compra,
                    as: 'compra'
                }]
            })
            
            if(!usuario) return next(error.UsuarioInexistente)
            
            const resp = Response.format(true, usuario)

            res.json(resp)

        } catch (err) {
            return next(err)
        }
    },
    obtenerDato: async (req, res, next) => {
        try {
            const usuario = await models.usuario.findOne({
                where: {
                    id: req.params.id
                },
                include: [{
                    model: models.compra,
                    as: 'compra'
                }]
            })
            
            if (!usuario) return next(error.UsuarioInexistente)
                
            const resp = Response.format(true, usuario)
            
            res.json(resp)
            
        } catch (err) {
            return next(err)
        }
    }
}