const pool = require("../utils/dbpg")
require('dotenv').config();

const getSchools = async () => {

  try {
    const data = await pool.query(`select count(*) from edicion2021;`);
    result = data.rows;
    //pool.release()
    return result
  } catch (err) {
    //pool.release()
    console.log(err);
  }

};

// Cam
const getSchoolsbyCam = async () => {

  try {
    const client = await pool.connect();
    const data = await client.query(`SELECT estado, COUNT(nombre) as COLEGIOS_INSCRITOS,(SELECT COUNT(*) FROM edicion2021) as TOTAL
    from edicion2021
    GROUP BY estado
    ORDER BY COLEGIOS_INSCRITOS DESC;`);
    const result = data.rows;
    client.release();
    //pool.end(() => console.log("Pool has ended"))
    return result
  } catch (err) {
    console.log(err)
  } 
  
  /* const client = await pool.connect();
  const data = await client.query(`SELECT estado, COUNT(nombre) as COLEGIOS_INSCRITOS,(SELECT COUNT(*) FROM edicion2021) as TOTAL
  from edicion2021
  GROUP BY estado
  ORDER BY COLEGIOS_INSCRITOS DESC;`);
  const result = data.rows;
  client.release()
  return result */
/* 
  try {
    const data = await pool.query(`SELECT estado, COUNT(nombre) as COLEGIOS_INSCRITOS,(SELECT COUNT(*) FROM edicion2021) as TOTAL
      from edicion2021
      GROUP BY estado
      ORDER BY COLEGIOS_INSCRITOS DESC;`);
    result = data.rows;
    //pool.release()
    return result
  } catch (err) {
    //pool.release()
    console.log(err);
  }
 */

};

//const insertSchool = async (nombre, telefono, email, provincia, estado)


module.exports = { getSchools, getSchoolsbyCam }