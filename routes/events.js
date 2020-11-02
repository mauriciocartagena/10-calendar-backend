
// Todas tienen que pasar por una validación  de

const { Router } = require('express');
const { check } = require('express-validator');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const validarCampos = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

//Todos tienen que pasar por la validación del JWT
router.use( validarJWT );

// Obtener evento
router.get('/', actualizarEvento );

// Crear un nuevo evento
router.post('/newEvents', crearEvento);

// Actualizar evento
router.put('/:id', actualizarEvento);

// Eliminar evento
router.delete('/:id', eliminarEvento);

// return "export" router 
module.exports = router;