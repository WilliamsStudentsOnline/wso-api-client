import { AxiosResponse } from "axios";
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
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const getEphmatchMatches: (token: string) => Promise<AxiosResponse<any>>;
/**
 *  Retrieves the Ephmatch profile of the user provided by the token.
 *
 * @param {string} token - The auth token to be used.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const getSelfEphmatchProfile: (token: string) => Promise<AxiosResponse<any>>;
/**
 *  Retrieves the ephmatch profile of the user provided by the profile user id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} profileUserID - The user id of the Ephmatch profile to be retrieved.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const getEphmatchProfile: (token: string, profileUserID: number) => Promise<AxiosResponse<any>>;
/**
 * Retrieves ephmatch profiles that fit the given parameters.
 *
 * @param {string} token - The auth token to be used.
 * @param {EphmatchProfilesQuery} params - Query parameters for profile retrival.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const getEphmatchProfiles: (token: string, params: EphmatchProfilesQuery) => Promise<AxiosResponse<any>>;
/**
 * Creates a new Ephmatch profile
 *
 * @param {string} token - The auth token to be used.
 * @param {EphmatchProfilesQuery} params - Query parameters for profile retrival.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const createEphmatchProfile: (token: string, params: EphmatchProfilesNew) => Promise<AxiosResponse<any>>;
/**
 * Deletes token owner's Ephmatch profile
 *
 * @param {string} token - The auth token to be used.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const deleteEphmatchProfile: (token: string) => Promise<AxiosResponse<any>>;
/**
 * Update token owner's Ephmatch profile.
 *
 * @param {string} token - The auth token to be used.
 * @param {EphmatchProfilesUpdate} params - Update parameters.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const updateEphmatchProfile: (token: string, params: EphmatchProfilesUpdate) => Promise<AxiosResponse<any>>;
/**
 * Like the ephmatcher by their profile user id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} profileUserID - Profile id of the user to be liked.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const likeEphmatcher: (token: string, profileUserID: number) => Promise<AxiosResponse<any>>;
/**
 * Unlike the ephmatcher by their profile user id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} profileUserID - Profile id of the user to be unliked.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const unlikeEphmatcher: (token: string, profileUserID: number) => Promise<AxiosResponse<any>>;
export { getEphmatchMatches, getEphmatchProfile, getEphmatchProfiles, getSelfEphmatchProfile, unlikeEphmatcher, likeEphmatcher, updateEphmatchProfile, deleteEphmatchProfile, createEphmatchProfile, };
