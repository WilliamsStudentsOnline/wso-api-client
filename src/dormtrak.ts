import axios, { AxiosError } from "axios";

// TODO document preloads

type DormsQuery = {
  offset?: number;
  limit?: number;
  preload?: string[];
  q?: string;
};

type DormReviewsQuery = {
  dormID?: number;
  dormRoomID?: number;
  userID?: number;
  offset?: string;
  limit?: number;
  preload?: string[];
  commented?: boolean;
};

type NewDormReview = {
  bathroomDesc: string;
  bedAdjustable: boolean;
  closet: string;
  comment: string;
  commonRoomAccess: boolean;
  commonRoomDesc: string;
  dormRoomID: number;
  flooring: string;
  keyOrCard: string;
  location: number;
  loudness: number;
  noise: string;
  privateBathroom: boolean;
  satisfaction: number;
  thermostatAccess: boolean;
  wifi: number;
};

type UpdatedDormReview = {
  bathroomDesc: string;
  bedAdjustable: boolean;
  closet: string;
  comment: string;
  commonRoomAccess: boolean;
  commonRoomDesc: string;
  flooring: string;
  keyOrCard: string;
  location: number;
  loudness: number;
  noise: string;
  privateBathroom: boolean;
  satisfaction: number;
  thermostatAccess: boolean;
  wifi: number;
};

/**
 * Get the Dormtrak rankings based on the following metrics:
 * 1. Max/Min Single Size
 * 2. Biggest/Smallest Singles
 * 3. Max/Min Double Size
 * 4. Biggest/Smallest Doubles
 * 5. Most Singles/Doubles
 * 6. Most/Fewest Bathrooms
 *
 * Note that some of these results are dorms, and the others are specific rooms.
 *
 * @param {string} token - The auth token to be used.
 * @return {Promise<any>} Returns the response from the server.
 */
const getDormtrakRankings = async (token: string): Promise<any> => {
  return axios
    .get("/api/v2/dormtrak/rankings", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Retrieves the list of Dormtrak Neighborhoods.
 *
 * @param {string} token - The auth token to be used.
 * @return {Promise<any>} Returns the response from the server.
 */
const getNeighborhoods = async (token: string): Promise<any> => {
  return axios
    .get("/api/v2/dormtrak/neighborhoods", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Retrieves one dormtrak neighborhood by id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} neighborhoodID - The id of the neighborhood we are interested in.
 * @return {Promise<any>} Returns the response from the server.
 */
const getNeighborhood = async (
  token: string,
  neighborhoodID: number
): Promise<any> => {
  return axios
    .get(`/api/v2/dormtrak/neighborhoods/${neighborhoodID}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Retrieves one dormtrak neighborhood facts by id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} neighborhoodID - The id of the neighborhood we are interested in.
 * @return {Promise<any>} Returns the response from the server.
 */
const getNeighborhoodFacts = async (
  token: string,
  neighborhoodID: number
): Promise<any> => {
  return axios
    .get(`/api/v2/dormtrak/neighborhoods/${neighborhoodID}/facts`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Retrieves the list of all Dormtrak dorms.
 *
 * @param {string} token - The auth token to be used.
 * @param {DormsQuery} params - The query parameters.
 * @return {Promise<any>} Returns the response from the server.
 */
const getDorms = async (token: string, params: DormsQuery): Promise<any> => {
  return axios
    .get("/api/v2/dormtrak/dorms", {
      headers: { Authorization: `Bearer ${token}` },
      params,
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Retrieves the dorm corresponding to a specific dorm id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} dormID - The id of the dorm to retrieve.
 * @return {Promise<any>} Returns the response from the server.
 */
const getDorm = async (token: string, dormID: number): Promise<any> => {
  return axios
    .get(`/api/v2/dormtrak/dorms/${dormID}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Retrieves the dorm facts for the dorm corresponding to a specific dorm id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} dormID - The id of the dorm whose facts we want to retrieve.
 * @return {Promise<any>} Returns the response from the server.
 */
const getDormFacts = async (token: string, dormID: number): Promise<any> => {
  return axios
    .get(`/api/v2/dormtrak/dorms/${dormID}/facts`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Retrieves the dorm rooms for the dorm corresponding to a specific dorm id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} dormID - The id of the dorm whose rooms we want to retrieve.
 * @return {Promise<any>} Returns the response from the server.
 */
const getDormRooms = async (token: string, dormID: number): Promise<any> => {
  return axios
    .get(`/api/v2/dormtrak/dorms/${dormID}/rooms`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Retrieves the dorm reviews for the dorm corresponding to a specific dorm id.
 *
 * @param {string} token - The auth token to be used.
 * @param {DormReviewsQuery} [queryParams = {}] - The id of the dorm whose rooms we want to retrieve.
 * @return {Promise<any>} Returns the response from the server.
 */
const getDormReviews = async (
  token: string,
  queryParams: DormReviewsQuery = {}
): Promise<any> => {
  return axios
    .get(`/api/v2/dormtrak/reviews`, {
      headers: { Authorization: `Bearer ${token}` },
      params: queryParams,
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Creates a Dormtrak Review.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewDormReview} createParams - New Dormtrak Review.
 * @return {Promise<any>} Returns the response from the server.
 */
const postDormReview = async (
  token: string,
  createParams: NewDormReview
): Promise<any> => {
  return axios
    .post(`/api/v2/dormtrak/reviews`, {
      headers: { Authorization: `Bearer ${token}` },
      data: createParams,
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Retrieves the Dormtrak Review corresponding to the id passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} reviewID - The id of the review to be retrieved.
 * @return {Promise<any>} Returns the response from the server.
 */
const getDormReview = async (token: string, reviewID: number): Promise<any> => {
  return axios
    .get(`/api/v2/dormtrak/reviews/${reviewID}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Deletes a specific Dormtrak Review based on the review id passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} reviewID - The id of the review to be deleted.
 * @return {Promise<any>} Returns the response from the server.
 */
const deleteDormReview = async (
  token: string,
  reviewID: number
): Promise<any> => {
  return axios
    .delete(`/api/v2/dormtrak/reviews/${reviewID}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

/**
 * Updates a specific Dormtrak Review based on the review id passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} reviewID - The id of the review to be deleted.
 * @param {UpdatedDormReview} reviewParams - The updated dormtrak review.
 * @return {Promise<any>} Returns the response from the server.
 */
const patchDormReview = async (
  token: string,
  reviewParams: UpdatedDormReview,
  reviewID: number
): Promise<any> => {
  return axios
    .patch(`/api/v2/dormtrak/reviews/${reviewID}`, {
      headers: { Authorization: `Bearer ${token}` },
      data: reviewParams,
    })
    .catch((error: AxiosError) => {
      return error.response;
    });
};

export {
  getDormtrakRankings,
  getNeighborhoods,
  getNeighborhood,
  getNeighborhoodFacts,
  getDorms,
  getDorm,
  getDormFacts,
  getDormRooms,
  getDormReviews,
  postDormReview,
  getDormReview,
  deleteDormReview,
  patchDormReview,
};
