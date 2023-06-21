const { getConnection } = require('./db')

async function query(sql, params) {
    const conn = getConnection()
    const [results] = await conn.query(sql, params)
    return results
}

module.exports = {
    query,
}