const env = process.env
const db_config = {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME
}

const pool_config = {
    connection_limit:100,
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
}

module.exports = { db_config, pool_config }
