import { AxiosResponse } from "axios";
/**
 * Returns a string in the format: [Random W-word] [Random S-word] [Random O-word]
 * The words are drawn from a dictionary on the server, updated to remove
 * offensive words.
 *
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const getRandomWSO: () => Promise<AxiosResponse<any>>;
/**
 * Loads the course catalog.
 *
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const getCatalog: () => Promise<AxiosResponse<any>>;
export { getRandomWSO, getCatalog };
