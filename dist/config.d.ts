/**
 * Base URLs for the different environment.
 * Note that the testing environment is not here, because the localhost is
 * the default option.
 */
export declare const BASE_URL: {
    production: string;
    development: string;
};
/**
 * Returns the base url depending on the production environment.
 * Uses the production api for production, and development api link
 * otherwise.
 *
 * @param {string} url - The URL to be used as the base URL for requests.
 * @returns {boolean} Returns true if update succeeds, return false otherwise.
 */
export declare const updateBaseURL: (url: string) => boolean;
