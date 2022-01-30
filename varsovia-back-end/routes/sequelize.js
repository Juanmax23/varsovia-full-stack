const { Router } = require('express');

const sequelize = require('../infrastructure/db');



const router = Router();

router.get('/', async(req, res) => {
    try {
        await sequelize.authenticate();
        console.log(`Connection has been established successfully.`.green);
        res.sendStatus(200)
        
        
    } catch (error) {
        console.error(`Error de conexión sequelize `.red, error);
        res.sendStatus(510)
        
    }
})


module.exports = router;

