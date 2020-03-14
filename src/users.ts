import axios, { AxiosError } from "axios";

type UsersQuery = {
  offset?: string;
  limit?: string;
  preload?: string[];
  q?: string;
};

type UpdatedUser = {
  dormVisible?: boolean;
  hasAcceptedDormtrakPolicy?: boolean;
  hasAcceptedFactrakPolicy?: boolean;
  homeVisible?: boolean;
  nickname?: string;
  offCycle?: boolean;
  optOutEphcatch?: boolean;
  pronoun?: string;
  visible?: boolean;
};

type UpdatedTags = {
  tags: string[];
};

/**
 * WSO API for services with regards to getting users.
 *
 * When using the API, take note that userID is different from unixID.
 * UserID refers to the id of the user in our database, while unixID
 * refers to the unix of the user (e.g. "gt4").
 */

/**
 * Retrieves all the users who match the search parameters
 *
 * @param {string} token - The auth token to be used.
 * @param {UsersQuery} params - The parameters used to retrieve the users.
 * @return {Promise<any>} Returns the response from the server.
 */
const getAllUsers = async (token: string, params: UsersQuery): Promise<any> => {
  return axios
    .get("/api/v2/users", {
      headers: { Authorization: `Bearer ${token}` },
      params,
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Retrieves all the user by user id.
 * By default, this function returns the user the token belongs to,
 * although you can pass in "me" as the userID to get the token user as
 * well.
 *
 * @param {string} token - The auth token to be used.
 * @param {string | number} [userID = "me"] - The user id used to search for a user. If 'me' is
 *                                 passed in, return the user of the token.
 * @return {Promise<any>} Returns the response from the server.
 */
const getUser = async (
  token: string,
  userID: string | number = "me"
): Promise<any> => {
  return axios
    .get(`/api/v2/users/${userID}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Updates the current user (i.e. user of the token) based on the update Parameters.
 *
 * @param {string} token - The auth token to be used.
 * @param {UpdatedUser} updateParams - The update user object
 * @return {Promise<any>} Returns the response from the server.
 */
const patchCurrUser = async (
  token: string,
  updateParams: UpdatedUser
): Promise<any> => {
  return axios
    .patch("/api/v2/users/me", {
      headers: { Authorization: `Bearer ${token}` },
      data: updateParams,
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Updates the current user's tags. Take note that this method will replace the
 * user's current tags with the tags that are passed in
 *
 * @param {string} token - The auth token to be used.
 * @param {UpdatedTags} updatedTags - The update tags
 * @return {Promise<any>} Returns the response from the server.
 */
const putCurrUserTags = async (
  token: string,
  updatedTags: UpdatedTags
): Promise<any> => {
  return axios
    .put("/api/v2/users/me/tags", {
      headers: { Authorization: `Bearer ${token}` },
      data: updatedTags,
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Updates the current user's profile photo.
 *
 * @param {string} token - The auth token to be used.
 * @param {Blob} file - The html blob representing the file.
 * @return {Promise<any>} Returns the response from the server.
 */
const putCurrUserPhoto = async (token: string, file: Blob): Promise<any> => {
  const formData = new FormData();
  formData.append("file", file);
  return axios
    .put("/api/v2/users/me/photo", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Gets the profile picture of the user scaled to thumbnail size.
 * This image is perfect for smaller images such as in the header.
 * Returns the thumbnail photo of the token user by default, and this
 * behavior can be explicitly performed by passing "me" as the unixID.
 *
 * @param {string} token - The auth token to be used.
 * @param {string | number} [unixID = "me"] - The unix id of the user whose photo we wish to retrieve.
 *                                   Pass in "me" to get the photo of the token's user.
 * @return {Promise<any>} Returns the response from the server.
 */
const getUserThumbPhoto = async (
  token: string,
  unixID: string | number = "me"
): Promise<any> => {
  return axios
    .get(`/pic/thumb/${unixID}.jpg`, {
      headers: { Authorization: `Bearer ${token}` },
      responseType: "blob",
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Gets the profile picture of the user scaled to the larger size.
 * This image is perfect for larger images such as in facebook results or ephmatch.
 * Returns the large photo of the token user by default, and this
 * behavior can be explicitly performed by passing "me" as the unixID.
 *
 * @param {string} token - The auth token to be used.
 * @param {string | number} [unixID = "me"] - The unix id of the user whose photo we wish to retrieve.
 *                                           Pass in "me" to get the photo of the token's user.
 * @return {Promise<any>} Returns the response from the server.
 */
const getUserLargePhoto = async (
  token: string,
  unixID: string | number = "me"
): Promise<any> => {
  return axios
    .get(`/pic/large/${unixID}.jpg`, {
      headers: { Authorization: `Bearer ${token}` },
      responseType: "blob",
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

export {
  getAllUsers,
  getUser,
  patchCurrUser,
  putCurrUserTags,
  putCurrUserPhoto,
  getUserThumbPhoto,
  getUserLargePhoto,
};
