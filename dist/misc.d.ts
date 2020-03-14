/**
 * Returns a string in the format: [Random W-word] [Random S-word] [Random O-word]
 * The words are drawn from a dictionary on the server, updated to remove
 * offensive words.
 *
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getRandomWSO: () => Promise<any>;
declare const getCatalog: () => Promise<any>;
export { getRandomWSO, getCatalog };
