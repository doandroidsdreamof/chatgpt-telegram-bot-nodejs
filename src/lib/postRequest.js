const axios = require('axios');

const postRequest = async (baseURL, endPoint, payload, chatID) => {
  try {
    if (payload) {
      const payloadObj = await {
        payload,
        chatID
      };
      axios
        .post(`${baseURL}${endPoint}`, {
          data: payloadObj,
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
