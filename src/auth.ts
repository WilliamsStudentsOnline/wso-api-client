import axios, { AxiosError } from "axios";

/**
 * Refreshes the auth token passed in. Marginally faster than updateToken, but
 * in general updateTokenAPI should be used, since this method does not update
 * necessary scopes and payload.
 *
 * @param {string} token - The auth token to be refreshed.
 * @return {Promise<any>} Returns the response from the server.
 */
const refreshToken = async (token: string): Promise<any> => {
  return axios
    .post("/api/v2/auth/refresh-token", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Updates the auth token passed in by performing the necessary queries to the
 * database, modifying the token payload if necessary.
 *
 * @param {string} token - The auth token to be refreshed.
 * @return {Promise<any>} Returns the response from the server.
 */
const updateTokenAPI = async (token: string): Promise<any> => {
  return axios
    .get("/api/v2/auth/update-token", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Attempts to authenticate the user with the provided unixID and password,
 * logging on to the server.
 *
 * @param {string} unixID - The unix id for the LDAP account.
 * @param {string} password - The password for the LDAP account.
 * @return {Promise<any>} Returns the response from the server
 */
const getToken = async (unixID: string, password: string): Promise<any> => {
  if (!unixID || !password) {
    return null;
  }
  return axios
    .post("/api/v2/auth/login", {
      method: "post",
      data: {
        unixID,
        password,
      },
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Gets an on/off-campus token without logging in.
 *
 * @return {Promise<any>} Returns the response from the server.
 */
const getCampusToken = async (): Promise<any> => {
  return axios
    .post("/api/v2/auth/login", {
      data: {
        unixID: "invalid",
        password: "invalid",
        useIP: true,
      },
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

export { updateTokenAPI, getToken, getCampusToken, refreshToken };
