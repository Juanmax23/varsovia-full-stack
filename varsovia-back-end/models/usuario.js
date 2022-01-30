const { Schema, model } = require('mongoose');


const usuarioShema = Schema({
    
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    img: {
        type: String,
        require: false
    },
  
    // estado: {
    //     type: Boolean,
    //     default: true
    // },
    google: {
        type: Boolean,
        default: false
    },
});


usuarioShema.methods.toJSON = function() {
    const { __v, password, _id, ...usuario } = this.toObject();
    usuario.uid = _id;
    return usuario;
}


module.exports = model('Usuario', usuarioShema );