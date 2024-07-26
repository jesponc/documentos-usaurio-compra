const router = require("express").Router();
const usuarioController = require("../controller/usuario.controller.js");
const validate = require('../middleware/validate.js');
const usuarioScheme = require('../middleware/schemes/usuario.scheme.js')

//usuarios
router.get("/", usuarioController.listar);
router.get("/:idUsuario", usuarioController.listarInfo);
router.post("/", validate(usuarioScheme.crearUsuario) , usuarioController.crear);
router.delete("/:idUsuario", usuarioController.eliminar)
router.patch("/:idUsuario", usuarioController.editarInfo)

module.exports = router;
