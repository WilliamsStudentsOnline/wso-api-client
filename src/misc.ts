import axios, { AxiosError, AxiosResponse } from "axios";

/**
 * Returns a string in the format: [Random W-word] [Random S-word] [Random O-word]
 * The words are drawn from a dictionary on the server, updated to remove
 * offensive words.
 *
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const getRandomWSO = async (): Promise<AxiosResponse<any>> => {
  return axios.get("/api/v2/words", {}).catch((error: AxiosError<any>) => {
    throw error;
  });
};

/**
 * Loads the course catalog.
 *
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const getCatalog = async (): Promise<AxiosResponse<any>> => {
  return axios.get("/courses.json", {}).catch((error: AxiosError<any>) => {
    throw error;
  });
};

export { getRandomWSO, getCatalog };
