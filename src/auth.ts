import axios, { AxiosError, AxiosResponse } from "axios";

/**
 * Refreshes the auth token passed in. Marginally faster than updateToken, but
 * in general updateTokenAPI should be used, since this method does not update
 * necessary scopes and payload.
 *
 * @param {string} token - The auth token to be refreshed.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>} Returns the response from the server.
 */
const refreshToken = async (token: string): Promise<AxiosResponse<any>> => {
  return axios
    .post("/api/v2/auth/refresh-token", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Updates the auth token passed in by performing the necessary queries to the
 * database, modifying the token payload if necessary.
 *
 * @param {string} token - The auth token to be refreshed.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const updateTokenAPI = async (token: string): Promise<AxiosResponse<any>> => {
  return axios
    .get("/api/v2/auth/update-token", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Attempts to authenticate the user with the provided unixID and password,
 * logging on to the server.
 *
 * @param {string} unixID - The unix id for the LDAP account.
 * @param {string} password - The password for the LDAP account.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server
 */
const getToken = async (
  unixID: string,
  password: string
): Promise<AxiosResponse<any>> => {
  if (!unixID || !password) {
    return null;
  }
  return axios
    .post("/api/v2/auth/login", {
      unixID,
      password,
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Gets an on/off-campus token without logging in.
 *
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const getCampusToken = async (): Promise<AxiosResponse<any>> => {
  return axios
    .post("/api/v2/auth/login", {
      unixID: "invalid",
      password: "invalid",
      useIP: true,
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

export { updateTokenAPI, getToken, getCampusToken, refreshToken };
