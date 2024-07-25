const { Router } = require("express");
const usuarioRoutes = require("./usuarios.routes.js");
const compraRoutes = require("./compra.routes.js");

const rutas_init = () => {
  const router = Router();

  router.use("/usuarios", usuarioRoutes);
  router.use("/compra", compraRoutes);

  return router;
};

module.exports = { rutas_init };
