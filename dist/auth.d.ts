import { AxiosResponse } from "axios";
/**
 * Refreshes the auth token passed in. Marginally faster than updateToken, but
 * in general updateTokenAPI should be used, since this method does not update
 * necessary scopes and payload.
 *
 * @param {string} token - The auth token to be refreshed.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>} Returns the response from the server.
 */
declare const refreshToken: (token: string) => Promise<AxiosResponse<any>>;
/**
 * Updates the auth token passed in by performing the necessary queries to the
 * database, modifying the token payload if necessary.
 *
 * @param {string} token - The auth token to be refreshed.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const updateTokenAPI: (token: string) => Promise<AxiosResponse<any>>;
/**
 * Attempts to authenticate the user with the provided unixID and password,
 * logging on to the server.
 *
 * @param {string} unixID - The unix id for the LDAP account.
 * @param {string} password - The password for the LDAP account.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server
 */
declare const getToken: (unixID: string, password: string) => Promise<AxiosResponse<any>>;
/**
 * Gets an on/off-campus token without logging in.
 *
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const getCampusToken: () => Promise<AxiosResponse<any>>;
export { updateTokenAPI, getToken, getCampusToken, refreshToken };
