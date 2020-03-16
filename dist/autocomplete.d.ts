import { AxiosResponse } from "axios";
declare type AutoCompleteQuery = {
    q: string;
    limit?: number;
};
/**
 * Returns the autocomplete results for tags, limited to 5.
 *
 * @param {string} token - The auth token to be used.
 * @param {AutoCompleteQuery} query - The query to be searched.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const autocompleteTags: (token: string, query: AutoCompleteQuery) => Promise<AxiosResponse<any>>;
/**
 * Returns the autocomplete results for Factrak (Professors/Courses), limited to 5.
 *
 * @param {string} token - The auth token to be used.
 * @param {AutoCompleteQuery} query - The query to be searched.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const autocompleteFactrak: (token: string, query: AutoCompleteQuery) => Promise<AxiosResponse<any>>;
export { autocompleteTags, autocompleteFactrak };
