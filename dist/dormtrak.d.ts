declare type DormsQuery = {
    offset?: number;
    limit?: number;
    preload?: string[];
    q?: string;
};
declare type DormReviewsQuery = {
    dormID?: number;
    dormRoomID?: number;
    userID?: number;
    offset?: string;
    limit?: number;
    preload?: string[];
    commented?: boolean;
};
declare type NewDormReview = {
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
declare type UpdatedDormReview = {
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
declare const getDormtrakRankings: (token: string) => Promise<any>;
/**
 * Retrieves the list of Dormtrak Neighborhoods.
 *
 * @param {string} token - The auth token to be used.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getNeighborhoods: (token: string) => Promise<any>;
/**
 * Retrieves one dormtrak neighborhood by id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} neighborhoodID - The id of the neighborhood we are interested in.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getNeighborhood: (token: string, neighborhoodID: number) => Promise<any>;
/**
 * Retrieves one dormtrak neighborhood facts by id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} neighborhoodID - The id of the neighborhood we are interested in.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getNeighborhoodFacts: (token: string, neighborhoodID: number) => Promise<any>;
/**
 * Retrieves the list of all Dormtrak dorms.
 *
 * @param {string} token - The auth token to be used.
 * @param {DormsQuery} params - The query parameters.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getDorms: (token: string, params: DormsQuery) => Promise<any>;
/**
 * Retrieves the dorm corresponding to a specific dorm id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} dormID - The id of the dorm to retrieve.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getDorm: (token: string, dormID: number) => Promise<any>;
/**
 * Retrieves the dorm facts for the dorm corresponding to a specific dorm id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} dormID - The id of the dorm whose facts we want to retrieve.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getDormFacts: (token: string, dormID: number) => Promise<any>;
/**
 * Retrieves the dorm rooms for the dorm corresponding to a specific dorm id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} dormID - The id of the dorm whose rooms we want to retrieve.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getDormRooms: (token: string, dormID: number) => Promise<any>;
/**
 * Retrieves the dorm reviews for the dorm corresponding to a specific dorm id.
 *
 * @param {string} token - The auth token to be used.
 * @param {DormReviewsQuery} [queryParams = {}] - The id of the dorm whose rooms we want to retrieve.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getDormReviews: (token: string, queryParams?: DormReviewsQuery) => Promise<any>;
/**
 * Creates a Dormtrak Review.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewDormReview} createParams - New Dormtrak Review.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const postDormReview: (token: string, createParams: NewDormReview) => Promise<any>;
/**
 * Retrieves the Dormtrak Review corresponding to the id passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} reviewID - The id of the review to be retrieved.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getDormReview: (token: string, reviewID: number) => Promise<any>;
/**
 * Deletes a specific Dormtrak Review based on the review id passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} reviewID - The id of the review to be deleted.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const deleteDormReview: (token: string, reviewID: number) => Promise<any>;
/**
 * Updates a specific Dormtrak Review based on the review id passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} reviewID - The id of the review to be deleted.
 * @param {UpdatedDormReview} reviewParams - The updated dormtrak review.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const patchDormReview: (token: string, reviewParams: UpdatedDormReview, reviewID: number) => Promise<any>;
export { getDormtrakRankings, getNeighborhoods, getNeighborhood, getNeighborhoodFacts, getDorms, getDorm, getDormFacts, getDormRooms, getDormReviews, postDormReview, getDormReview, deleteDormReview, patchDormReview, };