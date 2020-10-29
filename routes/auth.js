/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } =  require('express');
const { check }  = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.post(
    '/new',
    [//Mis middlewares
        check('name','El nombre es Obligatorio').not().isEmpty(),
        check('email','El email es Obligatorio').isEmail(),
        check('password','El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ] ,
    crearUsuario );

router.post('/',
    [
        // check('name','El nombre es Obligatorio').not().isEmpty(),
        check('email','El email es Obligatorio').isEmail(),
        validarCampos
    ],
    loginUsuario);

router.get('/renew', revalidarToken);

module.exports = router;