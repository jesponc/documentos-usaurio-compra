const router = require("express").Router();
const archivoController = require('../controller/archivo.controller.js')

const multer = require('multer')

//archivos
const upload = multer({ dest: './src/uploads' })

router.post('/upload', upload.single('file'), archivoController.uploadFile)
router.post('/download/', archivoController.downloadFile)

module.exports = router;
