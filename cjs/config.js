"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wsoBaseUrl = void 0;

/**
 * Returns the base url depending on the production environment.
 * Uses the production api for production, and development api link
 * otherwise.
 *
 * @returns {String} Returns the appropriate base url.
 */
// TODO think of how to make this work
// TODO use .env.development/ .env.production
// eslint-disable-next-line
var wsoBaseUrl = function wsoBaseUrl() {
  return process.env.NODE_ENV === "production" ? "https://wso.williams.edu/api/v2" : "https://wso-dev.williams.edu:10391/api/v2";
};

exports.wsoBaseUrl = wsoBaseUrl;