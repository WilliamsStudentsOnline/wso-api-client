import axios, { AxiosError, AxiosResponse } from "axios";

type AutoCompleteQuery = {
    q: string,
    limit?: number
}

/**
 * Returns the autocomplete results for tags, limited to 5.
 *
 * @param {string} token - The auth token to be used.
 * @param {AutoCompleteQuery} query - The query to be searched.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const autocompleteTags = async (
  token: string,
  query: AutoCompleteQuery
): Promise<AxiosResponse<any>> => {
  return axios
    .get("/api/v2/autocomplete/tag", {
      headers: { Authorization: `Bearer ${token}` },
      params: query
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Returns the autocomplete results for Factrak (Professors/Courses), limited to 5.
 *
 * @param {string} token - The auth token to be used.
 * @param {AutoCompleteQuery} query - The query to be searched.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const autocompleteFactrak = async (
  token: string,
  query: AutoCompleteQuery
): Promise<AxiosResponse<any>> => {
  return axios
    .get("/api/v2/autocomplete/factrak", {
      headers: { Authorization: `Bearer ${token}` },
      params: query,
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

export { autocompleteTags, autocompleteFactrak };
