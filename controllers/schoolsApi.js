const schools = require("../models/school");


const getTotal = async (req, res) => {
 
    try {
      if (1 ==1 ) {
        let info = await schools.getSchools();
        console.log(info,"esto es info");
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