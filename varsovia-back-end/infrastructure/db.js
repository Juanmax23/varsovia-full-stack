const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD, {
    host: 'localhost',
    dialect: 'postgres' ,
    port:'5054'
});

module.exports = sequelize;