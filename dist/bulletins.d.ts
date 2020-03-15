import { AxiosResponse } from "axios";
declare type BulletinQuery = {
    start?: string;
    offset?: string;
    limit?: string;
    preload?: string[];
    all?: string;
    type?: string;
};
declare type DiscussionsQuery = {
    start?: string;
    offset?: string;
    limit?: string;
    preload?: string[];
    getLastPost?: boolean;
};
declare type DiscussionQuery = {
    preload?: string[];
};
declare type NewDiscussion = {
    content: string;
    title: string;
};
declare type UpdatedBulletin = {
    body?: string;
    endDate?: string;
    offer?: boolean;
    startDate?: string;
    title?: string;
};
declare type NewBulletin = {
    body: string;
    endDate: string;
    startDate: string;
    title: string;
    offer: boolean;
    type: string;
};
declare type NewDiscussionPost = {
    content: string;
    discussionID: number;
};
declare type UpdatedDiscussionPost = {
    content: string;
};
declare type RideQuery = {
    start?: string;
    offset?: number;
    limit?: number;
    preload?: string[];
    type?: string;
    all?: string;
};
declare type NewRide = {
    body: string;
    date: string;
    destination: string;
    offer: boolean;
    source: string;
};
declare type UpdatedRide = {
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
declare const getBulletins: (token: string, params: BulletinQuery) => Promise<AxiosResponse<any>>;
/**
 * Gets a single bulletin by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} bulletinID - The id number of the bulletin to retrieve.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const getBulletin: (token: string, bulletinID: number) => Promise<AxiosResponse<any>>;
/**
 * Creates a single bulletin.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewBulletin} createParams - The parameters used to create the bulletin.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const postBulletin: (token: string, createParams: NewBulletin) => Promise<AxiosResponse<any>>;
/**
 * Deletes a single bulletin by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} bulletinID - The id of the bulletin.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const deleteBulletin: (token: string, bulletinID: number) => Promise<AxiosResponse<any>>;
/**
 * Updates a single bulletin.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} bulletinID - The id of the bulletin.
 * @param {UpdatedBulletin} updateParams - The parameters used to update the bulletin.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const patchBulletin: (token: string, bulletinID: number, updateParams: UpdatedBulletin) => Promise<AxiosResponse<any>>;
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
declare const getDiscussions: (token: string, params: DiscussionsQuery) => Promise<AxiosResponse<any>>;
/**
 * Gets a discussion by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} discussionID - The id of the discussion to be retrieved.
 * @param {DiscussionQuery} params - The parameters used to get the bulletin (preload).
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const getDiscussion: (token: string, discussionID: number, params: DiscussionQuery) => Promise<AxiosResponse<any>>;
/**
 * Deletes a discussion by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} discussionID - The id of the discussion to be retrieved.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const deleteDiscussion: (token: string, discussionID: number) => Promise<AxiosResponse<any>>;
/**
 * Creates a new discussion.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewDiscussion} createParams - The parameters used to create the discussion.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const postDiscussion: (token: string, createParams: NewDiscussion) => Promise<AxiosResponse<any>>;
/**
 * Gets the posts of a discussion by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} discussionID - The id of the discussion whose posts are
 *                                to be retrieved.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const getDiscussionPosts: (token: string, discussionID: number) => Promise<AxiosResponse<any>>;
/**
 * Creates a new bulletin post in the discussion thread.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewDiscussionPost} createParams - The parameters of the new bulletin.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const postPost: (token: string, createParams: NewDiscussionPost) => Promise<AxiosResponse<any>>;
/**
 * Gets a bulletin post based on the post ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} postID - The id of the bulletin post to be retrieved.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const getPost: (token: string, postID: number) => Promise<AxiosResponse<any>>;
/**
 * Deletes a bulletin post based on the post ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} postID - The id of the bulletin post to be deleted.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const deletePost: (token: string, postID: number) => Promise<AxiosResponse<any>>;
/**
 * Updates a bulletin post based on the post ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} postID - The id of the bulletin post to be deleted.
 * @param {UpdatedDiscussionPost} updateParams - The parameters used to update the post.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const patchPost: (token: string, postID: number, updateParams: UpdatedDiscussionPost) => Promise<AxiosResponse<any>>;
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
declare const getRides: (token: string, params: RideQuery) => Promise<AxiosResponse<any>>;
/**
 * Create a new ride.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewRide} createParams - The parameters used to get the ride.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const postRide: (token: string, createParams: NewRide) => Promise<AxiosResponse<any>>;
/**
 * Gets a new ride by id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} rideID - The id of the ride we wish to retrieve.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const getRide: (token: string, rideID: number) => Promise<AxiosResponse<any>>;
/**
 * Deletes a single ride by id
 *
 * @param {string} token - The auth token to be used.
 * @param {number} rideID - The id of the ride to be deleted.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const deleteRide: (token: string, rideID: number) => Promise<AxiosResponse<any>>;
/**
 * Updates a single ride by id
 *
 * @param {string} token - The auth token to be used.
 * @param {number} rideID - The id of the ride to be updated.
 * @param {UpdatedRide} updateParams - The parameters used to update rides.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
declare const patchRide: (token: string, rideID: number, updateParams: UpdatedRide) => Promise<AxiosResponse<any>>;
export { getBulletins, postBulletin, getBulletin, deleteBulletin, patchBulletin, getDiscussion, deleteDiscussion, postDiscussion, getDiscussions, getDiscussionPosts, postPost, getPost, deletePost, patchPost, getRide, getRides, postRide, deleteRide, patchRide, };
