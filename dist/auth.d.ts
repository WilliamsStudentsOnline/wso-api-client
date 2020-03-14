/**
 * Refreshes the auth token passed in. Marginally faster than updateToken, but
 * in general updateTokenAPI should be used, since this method does not update
 * necessary scopes and payload.
 *
 * @param {string} token - The auth token to be refreshed.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const refreshToken: (token: string) => Promise<any>;
/**
 * Updates the auth token passed in by performing the necessary queries to the
 * database, modifying the token payload if necessary.
 *
 * @param {string} token - The auth token to be refreshed.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const updateTokenAPI: (token: string) => Promise<any>;
/**
 * Attempts to authenticate the user with the provided unixID and password,
 * logging on to the server.
 *
 * @param {string} unixID - The unix id for the LDAP account.
 * @param {string} password - The password for the LDAP account.
 * @return {Promise<any>} Returns the response from the server
 */
declare const getToken: (unixID: string, password: string) => Promise<any>;
/**
 * Gets an on/off-campus token without logging in.
 *
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getCampusToken: () => Promise<any>;
export { updateTokenAPI, getToken, getCampusToken, refreshToken };
