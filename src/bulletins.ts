import axios, { AxiosError, AxiosResponse } from "axios";

type BulletinQuery = {
  start?: string;
  offset?: string;
  limit?: string;
  preload?: string[];
  all?: string;
  type?: string;
};

type DiscussionsQuery = {
  start?: string;
  offset?: string;
  limit?: string;
  preload?: string[];
  getLastPost?: boolean;
};

type DiscussionQuery = {
  preload?: string[];
};

type NewDiscussion = {
  content: string;
  title: string;
};

type UpdatedBulletin = {
  body?: string;
  endDate?: string;
  offer?: boolean;
  startDate?: string;
  title?: string;
};

type NewBulletin = {
  body: string;
  endDate: string;
  startDate: string;
  title: string;
  offer: boolean;
  type: string;
};

type NewDiscussionPost = {
  content: string;
  discussionID: number;
};

type UpdatedDiscussionPost = {
  content: string;
};

type RideQuery = {
  start?: string;
  offset?: number;
  limit?: number;
  preload?: string[];
  type?: string;
  all?: string;
};

type NewRide = {
  body: string;
  date: string;
  destination: string;
  offer: boolean;
  source: string;
};

type UpdatedRide = {
  body: string;
  date: string;
  offer: boolean;
};

/** *
 ** Bulletins Section
 **
 ** Bulletins include Lost & Found, Announcements, Exchanges and Jobs.
 */

/**
 * Gets the bulletins satisfying the given parameters.
 *
 * @param {string} token - The auth token to be used.
 * @param {BulletinQuery} params - The parameters used to retrieve the bulletins.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const getBulletins = async (
  token: string,
  params: BulletinQuery
): Promise<AxiosResponse<any>> => {
  return axios
    .get("/api/v2/bulletin/bulletins", {
      headers: { Authorization: `Bearer ${token}` },
      params,
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Gets a single bulletin by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} bulletinID - The id number of the bulletin to retrieve.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const getBulletin = async (
  token: string,
  bulletinID: number
): Promise<AxiosResponse<any>> => {
  return axios
    .get(`/api/v2/bulletin/bulletins/${bulletinID}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Creates a single bulletin.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewBulletin} createParams - The parameters used to create the bulletin.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const postBulletin = async (
  token: string,
  createParams: NewBulletin
): Promise<AxiosResponse<any>> => {
  return axios
    .post("/api/v2/bulletin/bulletins", {
      headers: { Authorization: `Bearer ${token}` },
      data: createParams,
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Deletes a single bulletin by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} bulletinID - The id of the bulletin.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const deleteBulletin = async (
  token: string,
  bulletinID: number
): Promise<AxiosResponse<any>> => {
  return axios
    .delete(`/api/v2/bulletin/bulletins/${bulletinID}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Updates a single bulletin.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} bulletinID - The id of the bulletin.
 * @param {UpdatedBulletin} updateParams - The parameters used to update the bulletin.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const patchBulletin = async (
  token: string,
  bulletinID: number,
  updateParams: UpdatedBulletin
): Promise<AxiosResponse<any>> => {
  return axios
    .patch(`/api/v2/bulletin/bulletins/${bulletinID}`, {
      headers: { Authorization: `Bearer ${token}` },
      params: updateParams,
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/** *
 ** Discussions Section
 **
 ** Discussions consist of a main discussion thread, followed by discussion posts.
 */

/**
 * Gets all the discussions.
 *
 * @param {string} token - The auth token to be used.
 * @param {DiscussionsQuery} params - The parameters used to update the bulletin.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const getDiscussions = async (
  token: string,
  params: DiscussionsQuery
): Promise<AxiosResponse<any>> => {
  return axios
    .get("/api/v2/bulletin/discussions", {
      headers: { Authorization: `Bearer ${token}` },
      params,
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Gets a discussion by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} discussionID - The id of the discussion to be retrieved.
 * @param {DiscussionQuery} params - The parameters used to get the bulletin (preload).
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const getDiscussion = async (
  token: string,
  discussionID: number,
  params: DiscussionQuery
): Promise<AxiosResponse<any>> => {
  return axios
    .get(`/api/v2/bulletin/discussions/${discussionID}`, {
      headers: { Authorization: `Bearer ${token}` },
      params,
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Deletes a discussion by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} discussionID - The id of the discussion to be retrieved.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const deleteDiscussion = async (
  token: string,
  discussionID: number
): Promise<AxiosResponse<any>> => {
  return axios
    .delete(`/api/v2/bulletin/discussions/${discussionID}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Creates a new discussion.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewDiscussion} createParams - The parameters used to create the discussion.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const postDiscussion = async (
  token: string,
  createParams: NewDiscussion
): Promise<AxiosResponse<any>> => {
  return axios
    .post(`/api/v2/bulletin/discussions`, {
      headers: { Authorization: `Bearer ${token}` },
      data: createParams,
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Gets the posts of a discussion by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} discussionID - The id of the discussion whose posts are
 *                                to be retrieved.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const getDiscussionPosts = async (
  token: string,
  discussionID: number
): Promise<AxiosResponse<any>> => {
  return axios
    .get(`/api/v2/bulletin/discussions/${discussionID}/posts`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Creates a new bulletin post in the discussion thread.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewDiscussionPost} createParams - The parameters of the new bulletin.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const postPost = async (
  token: string,
  createParams: NewDiscussionPost
): Promise<AxiosResponse<any>> => {
  return axios
    .post(`/api/v2/bulletin/posts`, {
      headers: { Authorization: `Bearer ${token}` },
      data: createParams,
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Gets a bulletin post based on the post ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} postID - The id of the bulletin post to be retrieved.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const getPost = async (
  token: string,
  postID: number
): Promise<AxiosResponse<any>> => {
  return axios
    .get(`/api/v2/bulletin/posts/${postID}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Deletes a bulletin post based on the post ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} postID - The id of the bulletin post to be deleted.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const deletePost = async (
  token: string,
  postID: number
): Promise<AxiosResponse<any>> => {
  return axios
    .delete(`/api/v2/bulletin/posts/${postID}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Updates a bulletin post based on the post ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} postID - The id of the bulletin post to be deleted.
 * @param {UpdatedDiscussionPost} updateParams - The parameters used to update the post.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const patchPost = async (
  token: string,
  postID: number,
  updateParams: UpdatedDiscussionPost
): Promise<AxiosResponse<any>> => {
  return axios
    .patch(`/api/v2/bulletin/posts/${postID}`, {
      headers: { Authorization: `Bearer ${token}` },
      data: updateParams,
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/** *
 ** Rides Section
 **
 ** Rides are like bulletins, except they have an additional offer variable
 ** which indicates whether the user is offering the ride.
 */

/**
 * Gets a list of ride posts.
 *
 * @param {string} token - The auth token to be used.
 * @param {RideQuery} params - The parameters used to get the ride.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const getRides = async (
  token: string,
  params: RideQuery
): Promise<AxiosResponse<any>> => {
  return axios
    .get("/api/v2/bulletin/rides", {
      headers: { Authorization: `Bearer ${token}` },
      params,
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Create a new ride.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewRide} createParams - The parameters used to get the ride.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const postRide = async (
  token: string,
  createParams: NewRide
): Promise<AxiosResponse<any>> => {
  return axios
    .post("/api/v2/bulletin/rides", {
      headers: { Authorization: `Bearer ${token}` },
      data: createParams,
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Gets a new ride by id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} rideID - The id of the ride we wish to retrieve.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const getRide = async (
  token: string,
  rideID: number
): Promise<AxiosResponse<any>> => {
  return axios
    .get(`/api/v2/bulletin/rides/${rideID}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Deletes a single ride by id
 *
 * @param {string} token - The auth token to be used.
 * @param {number} rideID - The id of the ride to be deleted.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const deleteRide = async (
  token: string,
  rideID: number
): Promise<AxiosResponse<any>> => {
  return axios
    .delete(`/api/v2/bulletin/rides/${rideID}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

/**
 * Updates a single ride by id
 *
 * @param {string} token - The auth token to be used.
 * @param {number} rideID - The id of the ride to be updated.
 * @param {UpdatedRide} updateParams - The parameters used to update rides.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
const patchRide = async (
  token: string,
  rideID: number,
  updateParams: UpdatedRide
): Promise<AxiosResponse<any>> => {
  return axios
    .patch(`/api/v2/bulletin/rides/${rideID}`, {
      headers: { Authorization: `Bearer ${token}` },
      params: updateParams,
    })
    .catch((error: AxiosError<any>) => {
      throw error;
    });
};

export {
  getBulletins,
  postBulletin,
  getBulletin,
  deleteBulletin,
  patchBulletin,
  getDiscussion,
  deleteDiscussion,
  postDiscussion,
  getDiscussions,
  getDiscussionPosts,
  postPost,
  getPost,
  deletePost,
  patchPost,
  getRide,
  getRides,
  postRide,
  deleteRide,
  patchRide,
};
