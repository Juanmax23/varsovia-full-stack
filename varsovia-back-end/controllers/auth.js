const { response, json } = require('express');
const bycryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const { generarJWT } = require('../helpers/generar-jwt');
const { googleVerify } = require('../helpers/google-verify');


const login = async(req, res = response) => {

    const { correo, password } = req.body; 

    try {

        // verificar si el correo existe
        const usuario = await Usuario.findOne({ correo });
        if(!usuario){
            return res.status(400).json({
                msg:'Usuario / Password no son correctos'
            });
        }


        // si el usuario esta activo
        if( !usuario.estado ){
            return res.status(400).json({
                msg:'Usuario / Password no son correctos - estado: false'
            });
        }

        // verificar contraseña
        const validPassword = bycryptjs.compareSync( password, usuario.password );
        if ( !validPassword ) {
            return res.status(400).json({
                msg:'Usuario / Password no son correctas - password'
            });
        }

        // Generar el JWT
        const token = await generarJWT( usuario.id );


        res.json({
            msg: 'login okey',
            usuario,
            token
        })
        
    } catch (error) {
        console.log(error)
         res.status(500).json({
            msg:'Hable con el admin'
        })
    }

}

const googleSignIn = async(req, res = response) => {

    const { id_token } = req.body;
    
    try {

        const {nombre, correo, img} = await googleVerify( id_token );
        

        let usuario = await Usuario.findOne({ correo });

        if ( !usuario ) {
            // creo el usuario si no existe
            const data = {
                nombre,
                correo,
                img,
                password: ':p',
                google: true
               
            };
            

            usuario = new Usuario(data);

            await usuario.save();

        }

        // ver si el usuario esta en la base de datos
        // if ( !usuario.estado ) {
        //     return res.status(401).json({
        //         msg: 'usuario bloqueado hable con el admin'
        //     });
        // }

        // Generar el JWT
        const token = await generarJWT( usuario.id );

        
        res.json({
            msg: 'signin okey',
            usuario,
            token,
            id_token
            
        })

    
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: ' el token de google no es valido'
        })
    }

}


module.exports = {
    login,
    googleSignIn
}