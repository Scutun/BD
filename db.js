const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "BD1234",
    port: "5432",
    host: "localhost",
    database: "BD"
})



module.exports = pool