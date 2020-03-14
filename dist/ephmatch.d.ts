declare type EphmatchProfilesQuery = {
    sort?: string;
    offset?: number;
    limit?: number;
    preload?: string[];
};
declare type EphmatchProfilesNew = {
    description: string;
    matchMessage: string;
};
declare type EphmatchProfilesUpdate = {
    description?: string;
    matchMessage?: string;
};
/**
 * Lists all Ephmatch-eligible students that the user has matched with
 *
 * @param {string} token - The auth token to be used.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getEphmatchMatches: (token: string) => Promise<any>;
/**
 *  Retrieves the Ephmatch profile of the user provided by the token.
 *
 * @param {string} token - The auth token to be used.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getSelfEphmatchProfile: (token: string) => Promise<any>;
/**
 *  Retrieves the ephmatch profile of the user provided by the profile user id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} profileUserID - The user id of the Ephmatch profile to be retrieved.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getEphmatchProfile: (token: string, profileUserID: number) => Promise<any>;
/**
 * Retrieves ephmatch profiles that fit the given parameters.
 *
 * @param {string} token - The auth token to be used.
 * @param {EphmatchProfilesQuery} params - Query parameters for profile retrival.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getEphmatchProfiles: (token: string, params: EphmatchProfilesQuery) => Promise<any>;
/**
 * Creates a new Ephmatch profile
 *
 * @param {string} token - The auth token to be used.
 * @param {EphmatchProfilesQuery} params - Query parameters for profile retrival.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const createEphmatchProfile: (token: string, params: EphmatchProfilesNew) => Promise<any>;
/**
 * Deletes token owner's Ephmatch profile
 *
 * @param {string} token - The auth token to be used.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const deleteEphmatchProfile: (token: string) => Promise<any>;
/**
 * Update token owner's Ephmatch profile.
 *
 * @param {string} token - The auth token to be used.
 * @param {EphmatchProfilesUpdate} params - Update parameters.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const updateEphmatchProfile: (token: string, params: EphmatchProfilesUpdate) => Promise<any>;
/**
 * Like the ephmatcher by their profile user id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} profileUserID - Profile id of the user to be liked.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const likeEphmatcher: (token: string, profileUserID: number) => Promise<any>;
/**
 * Unlike the ephmatcher by their profile user id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} profileUserID - Profile id of the user to be unliked.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const unlikeEphmatcher: (token: string, profileUserID: number) => Promise<any>;
export { getEphmatchMatches, getEphmatchProfile, getEphmatchProfiles, getSelfEphmatchProfile, unlikeEphmatcher, likeEphmatcher, updateEphmatchProfile, deleteEphmatchProfile, createEphmatchProfile, };
