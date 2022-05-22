const { Pool } = require("pg");
require('dotenv').config();
/* let localPoolConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
  }; */
  
  const poolConfig = process.env.PG_URL
    ? {
        connectionString: process.env.PG_URL,
        ssl: { rejectUnauthorized: false },
      }
    : localPoolConfig;
  const pool = new Pool(poolConfig);


// el total de colegios inscritos 2021
const getSchools = async () => {
    let school;
    let result;

    try {
      school = await pool.connect();
      const data = await school.query(`select count(*) from edicion2021;`);
      result = data.rows;
      console.log(result,"esto es result");
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      school.release;
    }
    return result;
  };

  // 
  const getSchoolsbyCam = async () => {
    let school;
    let result;

    try {
      school = await pool.connect();
      const data = await school.query(`SELECT estado, COUNT(nombre) as COLEGIOS_INSCRITOS,(SELECT COUNT(*) FROM edicion2021) as TOTAL
      from edicion2021
      GROUP BY estado
      ORDER BY COLEGIOS_INSCRITOS DESC;`);
      result = data.rows;
      console.log(result,"esto es result");
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      school.release;
    }
    return result;
  };


  module.exports = {getSchools, getSchoolsbyCam}