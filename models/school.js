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

const insertSchool = async (nombre, telefono, email, provincia, estado) => {
  try {
    const client = await pool.connect();
    if (await client.query(`select * from edicion2022 where nombre like '%${nombre}%'`)) {
      return
    } else {
      await client.query(`
      INSERT INTO edicion2022 (id, nombre, telefono, email, provincia, estado)
      VALUES (
        (SELECT id FROM colegios WHERE lower(nombre) LIKE lower('%${nombre}%') AND lower(provincia) LIKE lower('%${provincia}%') LIMIT(1)),
        '${nombre}', '${telefono}', '${email}', '${provincia}', '${estado}')
      `)
    client.release();
    }
    
  } catch (err) {
    console.log(err);
  }
}


module.exports = { 
  getSchools, 
  getSchoolsbyCam,
  insertSchool
}