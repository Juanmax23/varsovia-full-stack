const { response, request } = require('express');

const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');


const usuariosGet = async(req = request, res = response) => {

    
    const {limite = 100, desde = 0 } =  req.query;
    const query = {  };

    const [ total, usuarios ] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ])

    res.json({
        msg: `Obtener usuarios`,
        total,
        usuarios
    });
}  


const usuariosPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, correo, ...resto } = req.body;

    if ( password ) {
        // encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync( password, salt );   
    }
    
    const usuario = await Usuario.findByIdAndUpdate( id, resto );


    res.json({
        msg: 'Se han actualizado los cambios',
        usuario 

    });
}


const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Esto es un Patch'

    });
}


const usuariosPost = async(req, res = response) => {

    const { nombre, correo, password } = req.body;
    const usuario = new Usuario( { nombre, correo, password} );


    // encriptar la contra
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt );

    // guardar en base de datos
    
    await usuario.save();

    res.json({
        msg: 'se agrego el usario correctamente',
        usuario 
    });
}



const usuariosDelete = async(req, res = response) => {

    const { id } = req.params;
    const usuario = await Usuario.findByIdAndUpdate( id, {estado: false} );
    
    res.json({
        msg: 'Se ah borrado correctamente',
        usuario,     
    });

}    


module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPut,
    usuariosPatch,
    usuariosPost 
}