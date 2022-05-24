const { Pool } = require("pg");
require('dotenv').config();

const poolConfig = {
    connectionString: process.env.PG_URL,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 20000,
    idleTimeoutMillis: 20000,
    max: 10,
}
const pool = new Pool(poolConfig);

module.exports = pool;