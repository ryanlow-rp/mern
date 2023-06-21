const mysql = require('mysql2/promise')
const dbConfig = require('../configs/db.config')

async function query(sql, params) {
    // https://github.com/sidorares/node-mysql2/issues/1239
    // const [results] = await connection.execute(sql, params)
    const connection = await mysql.createConnection(dbConfig.db_config)
    const [results] = await connection.query(sql, params)
    connection.close()
    return results
}

module.exports = {
    query,
}