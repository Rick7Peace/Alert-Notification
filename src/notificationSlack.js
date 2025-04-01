const { default: axios } = require('axios');

const handler = async (event) => {
  try {
    for (const record of event.Records) {
      try {
        console.log(record.body);
        //need to send record.body to slack url using axios
      } catch (e) {
        console.error(e)
        throw e;
      }
    }
    } catch(e) {
      console.error(e)
      throw e;
    }
  }

  module.exports = {
    handler,
  };