"use strict";

var httpClient = require("../client");
var configuration = require("../configure");

// Retrieve Voucher Detail
exports.retrieveVoucherDetail = async (config, callBackFunc) => {
  var apiUrl =
    configuration.defaultOptions.local_host +
    "vas/v1/internet/lpp/voucher/213123";

  return callBackFunc(
    null,
    await httpClient.requestGet(apiUrl, config, callBackFunc)
  );
};
