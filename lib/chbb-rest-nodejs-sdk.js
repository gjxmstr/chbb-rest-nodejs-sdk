"use strict";

var configuration = require("./configure");
var api = require("./api");

module.exports = function () {
  function configure(options) {
    api.configure(options);
  }

  function generateToken(config, callBackFunc) {
    api.generateToken(config, callBackFunc);
  }

  return {
    version: configuration.sdkVersion,
    configure: configure,
    generateToken: generateToken,
    discovery: require("./resources/discovery"),
    sale: require("./resources/sale"),
    vas: require("./resources/vas"),
  };
};
