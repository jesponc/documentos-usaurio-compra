module.exports = {
    'ValidationError': {
        code: 1000,
        message: 'Error de Validacion'
    },
    'FaltanCampos': {
        code: 1001,
        message: 'Faltan campos necesarios'
    },
    'UsuarioInexistente': {
        code: 1002,
        message: 'El usuario no existe'
    },
    'ErrorAlCrearUsuario': {
        code: 1003,
        message: 'Ocurrio un error'
    },
    'ArchivoInexistente': {
        code: 1002,
        message: 'El Archivo no existe'
    },
    'ServicioProductoExistente': {
        code: 1002,
        message: 'El servicio o producto ya existe'
    },
    'ErrorAlCrearCompra': {
        code: 1003,
        message: 'Ocurrio un error al crear la compra'
    },
    'ProductoInexistente': {
        code: 1003,
        message: 'El producto no existe' 
    },
    'ErrorAlActualizarTipp': {
        code: 1000,
        message: 'El nuevo tipo debe ser diferente al actual'
    },
    'ErrorAlActualizarNombre': {
        code: 1000,
        message: 'El nuevo nombre debe ser diferente al actual'
    },
    'ErrorAlActualizarStatus': {
        code: 1000,
        message: 'El nuevo status debe ser diferente al actual'
    },
    'ErrorStatusValoresInvalidos': {
        code: 1000,
        message: 'Datos invalidos, solo se permite 0 (inactivo) y 1 (activo)'
    } 
}