import axios from "axios";

/**
 * Base URLs for the different environment.
 * Note that the testing environment is not here, because the localhost is
 * the default option.
 */
export const BASE_URL = {
  production: "https://wso.williams.edu/api/v2",
  development: "https://wso-dev.williams.edu:10391/api/v2",
};

/**
 * Returns the base url depending on the production environment.
 * Uses the production api for production, and development api link
 * otherwise.
 *
 * @param {string} url - The URL to be used as the base URL for requests.
 * @returns {boolean} Returns true if update succeeds, return false otherwise.
 */
export const updateBaseURL = (url: string): boolean => {
  if (url !== BASE_URL.production && url !== BASE_URL.development) {
    return false;
  }

  axios.defaults.baseURL = url;
  return true;
};
