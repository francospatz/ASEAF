const schools = require("../models/school");


const getTotal = async (req, res) => {
 
    try {
      
      let data = await schools.getSchools();
      console.log(data,"esto es data");
      res.status(200).json(data);
      
    } catch (error) {
      console.log(`ERROR: ${error.stack}`);
    }
  };

  const getTotalCam = async (req, res) => {
 
    try {
      let data = await schools.getSchoolsbyCam();
      console.log(data,"esto es data");
      res.status(200).json(data);
      
    } catch (error) {
      console.log(`ERROR: ${error.stack}`);
    } finally {
      return
    }
  };

  const form = async (req, res) => {

    try {
      const { nombre, telefono, email, provincia, estado } = req.body;
      let data = await schools.insertSchool(nombre, telefono, email, provincia, estado)
    } catch (error) {
      console.log('Error:', error);
    }
  }



  module.exports = {
    getTotal, 
    getTotalCam,
    //form
  };