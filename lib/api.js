"use strict";

var configuration = require("./configure");
var utils = require("./utils");
var httpClient = require("./client");

/**
 * @param  {Object} options - sets configuration options
 */
exports.configure = function configure(options) {
  if (options !== undefined && typeof options === "object") {
    configuration.defaultOptions = utils.merge(
      configuration.defaultOptions,
      options
    );

    if (configuration.defaultOptions.mode !== "dev") {
      throw new Error('Mode must be "dev" - For testing purposes only!');
    }
  }
};
/**
 * @param  {Object} config - additional config
 * @param  {Function} callbackFunc - callback function
 */
exports.generateToken = function generateToken(config, callbackFunc) {
  if (typeof config === "function") {
    callbackFunc = config;
    config = configuration.defaultOptions;
  } else if (!config) {
    config = configuration.defaultOptions;
  } else {
    config = utils.merge(config, configuration.defaultOptions, true);
  }

  // No Production Server - just generate token here directly, update config, and return generated token
  // Generate Token
  var tokenString = utils.tokenGenerator(
    config.signing_key,
    config.subscription_key
  );

  // Add Token to config
  config.token = tokenString;

  // Return Token
  callbackFunc(null, tokenString);
};
