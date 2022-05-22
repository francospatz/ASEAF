const schools = require("../models/school");


const getTotal = async (req, res) => {
 
    try {
      if (1 ==1 ) {
        let data = await schools.getSchools();
        console.log(data,"esto es data");
        res.status(200).json(data);
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