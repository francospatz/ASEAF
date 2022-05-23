const pool = require("../utils/dbpg")
require('dotenv').config();

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


  module.exports = { getSchools, getSchoolsbyCam }