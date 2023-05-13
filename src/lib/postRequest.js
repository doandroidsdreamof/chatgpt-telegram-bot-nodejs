const axios = require('axios');

const postRequest = async (baseURL, endPoint, payload) => {
  try {
    if (payload) {
      axios
        .post(`${baseURL}${endPoint}`, {
          data: payload,
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  } catch (err) {
    console.log('🚀 ~ file: postRequest.js:25 ~ postRequest ~ err:', err);
  }
};

module.exports = { postRequest };
