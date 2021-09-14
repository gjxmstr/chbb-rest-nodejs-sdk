"use strict";

var httpClient = require("../client");
var configuration = require("../configure");

// Register A Sale
exports.registerSale = async (data, config, callbackFunc) => {
  //var apiUrl = configuration.defaultOptions.host + "/sale/v1/policy";
  var apiUrl = configuration.defaultOptions.local_host + "sale/v1/policy";

  return callbackFunc(
    null,
    await httpClient.requestPost(apiUrl, data, config, callbackFunc)
  );
};
