/**
 * Returns the base url depending on the production environment.
 * Uses the production api for production, and development api link
 * otherwise.
 *
 * @returns {String} Returns the appropriate base url.
 */
// eslint-disable-next-line
export const wsoBaseUrl = (): string =>
  process.env.NODE_ENV === "production"
    ? "https://wso.williams.edu/api/v2"
    : "https://wso-dev.williams.edu:10391/api/v2";
