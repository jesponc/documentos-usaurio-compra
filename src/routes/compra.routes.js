const router = require("express").Router();
const compraController = require('../controller/compra.controller')

router.post("/", compraController.crear)
router.patch("/:id", compraController.editar)
router.patch("/status/:id", compraController.actualizarStatus)
router.get("/", compraController.obtenerDatos)
router.get("/:id", compraController.obtenerDato)

module.exports = router;