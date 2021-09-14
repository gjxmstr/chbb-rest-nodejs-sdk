"use strict";

// Set, Get Current SDK Version
exports.sdkVersion = require("../package").version;

// Set, Get Default Options
exports.defaultOptions = {
  mode: "dev",
  local_host: "http://localhost:3100/",
  host: "https://apacsteadbsdevapim.azure-api.net/",
  headers: {},
};
