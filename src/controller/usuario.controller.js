const models = require('../models/index');
const errors = require('../config/error.js');

module.exports = {

  listar: async (req, res) => {
      const users = await models.usuario.findAll()
      res.json({
        succes: true,
        data: {
          usuarios: users
        }
      })
  },

  crear: async (req, res) => {
    try {
      const user = await models.usuario.create(req.body)
      res.json({
      sucess: true, 
      data: {
        id: user.id
      }
    })  
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

      res.json({
        succes: true,
        data: {
          usuario: user
        }
      })
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
  
      user = await models.usuario.findOne({
          where: {
              id: req.params.idUsuario
          }
      });
  
      res.json({
          success: true,
          message: 'Usuario actualizado correctamente',
          usuario: user
      });
  
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
      res.json({
        succes: true,
        data: {
          message: "Se ha eliminado el usuario correctamenre", 
        }
      })
    } catch (error) {
      return next(error)
    }
  },
};
