const mysql = require('mysql2/promise')
const dbConfig = require('../configs/db.config')

async function query(sql, params) {
    const connection = await mysql.createConnection(dbConfig)
    // https://github.com/sidorares/node-mysql2/issues/1239
    // const [results] = await connection.execute(sql, params)
    const [results] = await connection.query(sql, params)

    return results
}

module.exports = {
    query,
}
