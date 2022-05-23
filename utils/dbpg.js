const { Pool } = require("pg");
require('dotenv').config();

const poolConfig = {
    connectionString: process.env.PG_URL,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 2000,
    idleTimeoutMillis: 2000,
    max: 1,
}
const pool = new Pool(poolConfig);

module.exports = pool;