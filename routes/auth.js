/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } =  require('express');

const router = Router();

router.get('/', ( req, res ) => {

    console.log('Se requiere el /');

    res.json({
        ok:true
    });
});

module.exports = router;