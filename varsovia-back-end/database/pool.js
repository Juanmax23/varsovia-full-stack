const { Pool } = require('pg');


const config = {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT
    
};


const pool = new Pool(config);

module.exports = {
    query: ( queryString, params ) => pool.query(queryString, params)
}