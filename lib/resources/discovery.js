"use strict";

var httpClient = require("../client");
var configuration = require("../configure");

// Retrieve Product List
exports.retrieveProductList = async (config, callBackFunc) => {
  var apiUrl =
    configuration.defaultOptions.local_host +
    "discovery/v1/internet/80001/list";

  return callBackFunc(
    null,
    await httpClient.requestGet(apiUrl, config, callBackFunc)
  );
};
