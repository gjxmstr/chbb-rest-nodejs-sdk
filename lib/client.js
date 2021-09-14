"use strict";

// Load Axios for HttpClient Requests
const axios = require("axios");

// Http Client - Request - GET
/**
 * @param  {} url
 * @param  {} config
 * @param  {} errorCallBack
 */
exports.requestGet = async (url, config, errorCallBack) => {
  return await axios
    .get(url, config)
    .then((response) => {
      // Return Response
      return response.data;
    })
    .catch((err) => {
      // Return Error Content
      errorCallBack(err, null);
    });
};

// Http Client - Request - POST
/**
 * @param  {} url
 * @param  {} data
 * @param  {} config
 * @param  {} callbackFunction
 */
exports.requestPost = async (url, data, config, errorCallBack) => {
  return await axios
    .post(url, data, config)
    .then((response) => {
      // Return Response
      return response.data;
    })
    .catch((err) => {
      // Return Error Content
      errorCallBack(err, null);
    });
};
