import { AxiosResponse } from "axios";
/**
 * Returns the autocomplete results for tags, limited to 5.
 *
 * @param {string} token - The auth token to be used.
 * @param {string} query - The query to be searched.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const autocompleteTags: (token: string, query: string) => Promise<AxiosResponse<any>>;
/**
 * Returns the autocomplete results for Factrak (Professors/Courses), limited to 5.
 *
 * @param {string} token - The auth token to be used.
 * @param {string} query - The query to be searched.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const autocompleteFactrak: (token: string, query: string) => Promise<AxiosResponse<any>>;
export { autocompleteTags, autocompleteFactrak };
