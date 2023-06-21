const mysql = require('mysql2/promise')
const dbConfig = require('../configs/db.config')

let conn = null

mysql.createConnection(dbConfig.db_config).then((connection) => {
    conn = connection
})

function getDB() {
    return conn;
}

module.exports = {
    getDB
}
