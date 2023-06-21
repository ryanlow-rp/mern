const {getDB} = require('./db')

async function query(sql, params) {
    const conn = getDB()
    const [results] = await conn.query(sql, params)
    return results
}

module.exports = {
    query,
}