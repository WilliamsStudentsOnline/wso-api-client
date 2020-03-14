/**
 * Returns the autocomplete results for tags, limited to 5.
 *
 * @param {string} token - The auth token to be used.
 * @param {string} query - The query to be searched.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const autocompleteTags: (token: string, query: string) => Promise<any>;
/**
 * Returns the autocomplete results for Factrak (Professors/Courses), limited to 5.
 *
 * @param {string} token - The auth token to be used.
 * @param {string} query - The query to be searched.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const autocompleteFactrak: (token: string, query: string) => Promise<any>;
export { autocompleteTags, autocompleteFactrak };
