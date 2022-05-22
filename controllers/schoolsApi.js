const schools = require("../models/school");


const getTotal = async (req, res) => {
 
    try {
      if (req.query.title) {
        let info = await schools.getSchools();
        console.log(info);
      } else {
        console.log('esta en else')
      }
    } catch (error) {
      console.log(`ERROR: ${error.stack}`);
      return [];
    }
  };

  module.exports = {
    getTotal
  };