const { response } = require("express");


const getEventos = ( req, res = response ) => {

    res.status(200).json({
            ok:true,
            msg:'getEventos'
    });
}

const crearEvento = ( req, res = response ) => { 
    
    res.status( 200 ).json({
        ok:true,
        msg:'crearEventos'
    });

}

const actualizarEvento = ( req, res = response ) => {
    
    // const { id } = req.body;
    res.status( 200 ).json({
        // id,
        ok:true,
        msg:'actualizarEvento'
    });
}
const eliminarEvento = ( req, res = response ) => {

    const { id } = req.body;

    res.status( 200 ).json({
        id,
        ok:true,
        msg:'eliminarEvento'
    })
}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}
