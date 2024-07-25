const models = require('../models/index');
const errors = require('../config/error.js');
const Response = require('./utilities/response.js');
const error = require('../config/error.js');
module.exports = {

  listar: async (req, res) => {
      const users = await models.usuario.findAll()

      if(!users) return next(error.UsuarioInexistente)

      const resp = Response.format(true, users);
      
      res.json(resp)
  },

  crear: async (req, res) => {
    try {
      const user = await models.usuario.create(req.body)
      
      const resp = Response.format(true, user);
      
      res.json(resp)

    } catch (error) {
      return next(errors.ErrorAlCrearUsuario)
    }

    
  },

  listarInfo: async (req, res, next) => {
    try {
      const user = await models.usuario.findOne({
        where: {
          id: req.params.idUsuario
        }
      })
      if(!user) return next(errors.UsuarioInexistente)
      
      const resp = Response.format(true, user);
      
      res.json(resp)

    } catch (error) {
      return next(error)
    }
    
  },

  editarInfo: async (req, res) => {
    
    try {
      const updateFields = req.body;
  
      let user = await models.usuario.findOne({
          where: {
              id: req.params.idUsuario
          }
      });
  
      if (!user) return next(errors.UsuarioInexistente);
      
      await user.update(updateFields);
      
      const resp = Response.format(true, user);

      res.json(resp);
  
  } catch (error) {
      return next(error);
  }
  },

  eliminar: async (req, res, next) => {
    try {
      const user = await models.usuario.findOne({
        where : {
          id: req.params.idUsuario
        }
      })
      if(!user)  return next(errors.UsuarioInexistente)
      
      user.destroy()
      
      const resp = Response.format(true);
      
      res.json(resp)
    } catch (error) {
      return next(error)
    }
  },
};
