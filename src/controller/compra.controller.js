const { where } = require('sequelize');
const error = require('../config/error');
const models = require('../models/index');
const usuario = require('../models/usuario');

module.exports = {
    
    crear: async(req, res, next) => {
        try {
            const buscarCompra = await models.compra.findOne({
                where: {
                    nombre: req.body.nombre
                }
            })
            if (buscarCompra) return next(error.ServicioProductoExistente)
            
            const compra = await models.compra.create(req.body)
    
            if(!compra) return next(error.ErrorAlCrearCompra)
            
            res.json({
                success: true,
                data: {compra}
            })
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

                return res.json({
                    success: true,
                    data: {compra}
                })
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
    
            res.json({
                success: true,
                data: {compra}
            })
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

            res.json({
                success: true,
                data : {
                    usuario
                }
            })
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
    
            res.json({
            success: true,
            data : {
                usuario
            }
            })
            
        } catch (err) {
            return next(err)
        }
    }
}