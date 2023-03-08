const Pool = require("pg").Pool;

const Pool1 = new Pool({
    user: process.env.DB_user,
    host: process.env.DB_host,  //or we can write here instead of localhost (127.0.0.1) the local machine adress
    database: process.env.DB_name,
    password: process.env.DB_password,
    port: process.env.DB_port,
});

module.exports = Pool1;



