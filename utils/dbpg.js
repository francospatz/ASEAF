const { Pool } = require("pg");
require('dotenv').config();

const poolConfig = {
    connectionString: process.env.PG_URL,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 50000,
    idleTimeoutMillis: 50000,
    max: 100,
}
const pool = new Pool(poolConfig);

module.exports = pool;