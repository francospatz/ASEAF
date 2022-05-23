const { Pool } = require("pg");
require('dotenv').config();

const poolConfig = {
    connectionString: process.env.PG_URL,
    ssl: { rejectUnauthorized: false }
}
const pool = new Pool(poolConfig);

module.exports = pool;