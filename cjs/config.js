"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBaseURL = exports.BASE_URL = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Base URLs for the different environment.
 * Note that the testing environment is not here, because the localhost is
 * the default option.
 */
var BASE_URL = {
  production: "https://wso.williams.edu/api/v2",
  development: "https://wso-dev.williams.edu:10391/api/v2"
};
/**
 * Returns the base url depending on the production environment.
 * Uses the production api for production, and development api link
 * otherwise.
 *
 * @param {string} url - The URL to be used as the base URL for requests.
 * @returns {boolean} Returns true if update succeeds, return false otherwise.
 */

exports.BASE_URL = BASE_URL;

var updateBaseURL = function updateBaseURL(url) {
  if (url !== BASE_URL.production && url !== BASE_URL.development) {
    return false;
  }

  _axios["default"].defaults.baseURL = url;
  return true;
};

exports.updateBaseURL = updateBaseURL;