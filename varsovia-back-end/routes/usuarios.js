const { Router } = require('express');
const { check } = require('express-validator');

const multer = require('multer');

const uploadMiddleware = multer({ dest: '/product'});

const {validarCampos, validarJWT} = require('../middlewares')

const {emailExiste, existeUsuarioPorId,} = require('../helpers/db-validators');

    
const { 
    usuariosGet,
    usuariosPut,
    usuariosDelete, 
    usuariosPatch,
    usuariosPost,
} = require('../controllers/usuarios');




const router = Router();





router.get('/', usuariosGet );

router.put('/:id',[
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),

    validarCampos
], usuariosPut );



router.post('/',uploadMiddleware.single('usuario'),[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6}),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom( emailExiste ),

    validarCampos
], usuariosPost );


router.delete('/:id',[
    validarJWT,

    
    check('id', 'No es un ID valido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    validarCampos
], usuariosDelete );



router.patch('/', usuariosPatch);


module.exports = router;