import axios, { AxiosError } from "axios";

/**
 * Returns the autocomplete results for tags, limited to 5.
 *
 * @param {string} token - The auth token to be used.
 * @param {string} query - The query to be searched.
 * @return {Promise<any>} Returns the response from the server.
 */
const autocompleteTags = async (token: string, query: string): Promise<any> => {
  return axios
    .get("/api/v2/autocomplete/tag", {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        q: query,
        limit: 5,
      },
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Returns the autocomplete results for Factrak (Professors/Courses), limited to 5.
 *
 * @param {string} token - The auth token to be used.
 * @param {string} query - The query to be searched.
 * @return {Promise<any>} Returns the response from the server.
 */
const autocompleteFactrak = async (
  token: string,
  query: string
): Promise<any> => {
  return axios
    .get("/api/v2/autocomplete/factrak", {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        q: query,
        limit: 5,
      },
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

export { autocompleteTags, autocompleteFactrak };
