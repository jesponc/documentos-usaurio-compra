const express = require("express");
const { PORT } = require("./config/config.js");
const routerConfig = require('./routes/index.routes.js')
const errorHandler = require('./middleware/error.js');
let createError = require('http-errors')


const configuracionApi = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

const configuracionRutas = (app) => {
    app.use('/api', routerConfig.rutas_init())
    app.use(function (req, res, next) {
      next(createError(404))
    })

    app.use(errorHandler)
}

const init = () => {
  const app = express();
  configuracionApi(app);
  configuracionRutas(app)

  app.listen(PORT);
  console.log(`Servidor ejecutandose en el puerto: ${PORT}`);
};

init();