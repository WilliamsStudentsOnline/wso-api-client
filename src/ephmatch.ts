import axios, { AxiosResponse, AxiosError } from "axios";

type EphmatchProfilesQuery = {
  sort?: string;
  offset?: number;
  limit?: number;
  preload?: string[];
};

type EphmatchProfilesNew = {
  description: string;
  matchMessage: string;
};

type EphmatchProfilesUpdate = {
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
const getEphmatchMatches = async (
  token: string
): Promise<AxiosResponse<any>> => {
  const response = await axios
    .get("/api/v2/ephmatch/matches", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });

  return response;
};

/**
 *  Retrieves the Ephmatch profile of the user provided by the token.
 *
 * @param {string} token - The auth token to be used.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const getSelfEphmatchProfile = async (
  token: string
): Promise<AxiosResponse<any>> => {
  const response = await axios
    .get(`/api/v2/ephmatch/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });

  return response;
};

/**
 *  Retrieves the ephmatch profile of the user provided by the profile user id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} profileUserID - The user id of the Ephmatch profile to be retrieved.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const getEphmatchProfile = async (
  token: string,
  profileUserID: number
): Promise<AxiosResponse<any>> => {
  const response = await axios
    .get(`/api/v2/ephmatch/profiles/${profileUserID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });

  return response;
};

/**
 * Retrieves ephmatch profiles that fit the given parameters.
 *
 * @param {string} token - The auth token to be used.
 * @param {EphmatchProfilesQuery} params - Query parameters for profile retrival.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const getEphmatchProfiles = async (
  token: string,
  params: EphmatchProfilesQuery
): Promise<AxiosResponse<any>> => {
  const response = await axios
    .get(`/api/v2/ephmatch/profiles`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });

  return response;
};

/**
 * Creates a new Ephmatch profile
 *
 * @param {string} token - The auth token to be used.
 * @param {EphmatchProfilesQuery} params - Query parameters for profile retrival.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const createEphmatchProfile = async (
  token: string,
  params: EphmatchProfilesNew
): Promise<AxiosResponse<any>> => {
  const response = await axios
    .post(`/api/v2/ephmatch/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: params,
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });

  return response;
};

/**
 * Deletes token owner's Ephmatch profile
 *
 * @param {string} token - The auth token to be used.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const deleteEphmatchProfile = async (
  token: string
): Promise<AxiosResponse<any>> => {
  const response = await axios
    .delete(`/api/v2/ephmatch/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });

  return response;
};

/**
 * Update token owner's Ephmatch profile.
 *
 * @param {string} token - The auth token to be used.
 * @param {EphmatchProfilesUpdate} params - Update parameters.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const updateEphmatchProfile = async (
  token: string,
  params: EphmatchProfilesUpdate
): Promise<AxiosResponse<any>> => {
  const response = await axios
    .patch(`/api/v2/ephmatch/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: params,
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });

  return response;
};

/**
 * Like the ephmatcher by their profile user id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} profileUserID - Profile id of the user to be liked.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const likeEphmatcher = async (
  token: string,
  profileUserID: number
): Promise<AxiosResponse<any>> => {
  const response = await axios
    .post(`/api/v2/ephmatch/profiles/${profileUserID}/like`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });

  return response;
};

/**
 * Unlike the ephmatcher by their profile user id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} profileUserID - Profile id of the user to be unliked.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const unlikeEphmatcher = async (
  token: string,
  profileUserID: number
): Promise<AxiosResponse<any>> => {
  const response = await axios
    .post(`/api/v2/ephmatch/profiles/${profileUserID}/unlike`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });

  return response;
};

export {
  getEphmatchMatches,
  getEphmatchProfile,
  getEphmatchProfiles,
  getSelfEphmatchProfile,
  unlikeEphmatcher,
  likeEphmatcher,
  updateEphmatchProfile,
  deleteEphmatchProfile,
  createEphmatchProfile,
};
