import axios, { AxiosError } from "axios";

/**
 * Returns a string in the format: [Random W-word] [Random S-word] [Random O-word]
 * The words are drawn from a dictionary on the server, updated to remove
 * offensive words.
 *
 * @return {Promise<any>} Returns the response from the server.
 */
const getRandomWSO = async (): Promise<any> => {
  return axios.get("/api/v2/words", {}).catch((error: AxiosError) => {
    return error.response;
  });
};

const getCatalog = async (): Promise<any> => {
  return axios
    .get("/courses.json", {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

export { getRandomWSO, getCatalog };
