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
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getBulletins: (token: string, params: BulletinQuery) => Promise<any>;
/**
 * Gets a single bulletin by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} bulletinID - The id number of the bulletin to retrieve.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getBulletin: (token: string, bulletinID: number) => Promise<any>;
/**
 * Creates a single bulletin.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewBulletin} createParams - The parameters used to create the bulletin.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const postBulletin: (token: string, createParams: NewBulletin) => Promise<any>;
/**
 * Deletes a single bulletin by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} bulletinID - The id of the bulletin.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const deleteBulletin: (token: string, bulletinID: number) => Promise<any>;
/**
 * Updates a single bulletin.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} bulletinID - The id of the bulletin.
 * @param {UpdatedBulletin} updateParams - The parameters used to update the bulletin.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const patchBulletin: (token: string, bulletinID: number, updateParams: UpdatedBulletin) => Promise<any>;
/** *
 ** Discussions Section
 **
 ** Discussions consist of a main discussion thread, followed by discussion posts.
 ** Discussions Threads... TODO
 */
/**
 * Gets all the discussions.
 *
 * @param {string} token - The auth token to be used.
 * @param {DiscussionsQuery} params - The parameters used to update the bulletin.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getDiscussions: (token: string, params: DiscussionsQuery) => Promise<any>;
/**
 * Gets a discussion by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} discussionID - The id of the discussion to be retrieved.
 * @param {DiscussionQuery} params - The parameters used to get the bulletin (preload).
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getDiscussion: (token: string, discussionID: number, params: DiscussionQuery) => Promise<any>;
/**
 * Deletes a discussion by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} discussionID - The id of the discussion to be retrieved.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const deleteDiscussion: (token: string, discussionID: number) => Promise<any>;
/**
 * Creates a new discussion.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewDiscussion} createParams - The parameters used to create the discussion.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const postDiscussion: (token: string, createParams: NewDiscussion) => Promise<any>;
/**
 * Gets the posts of a discussion by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} discussionID - The id of the discussion whose posts are
 *                                to be retrieved.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getDiscussionPosts: (token: string, discussionID: number) => Promise<any>;
/**
 * Creates a new bulletin post in the discussion thread.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewDiscussionPost} createParams - The parameters of the new bulletin.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const postPost: (token: string, createParams: NewDiscussionPost) => Promise<any>;
/**
 * Gets a bulletin post based on the post ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} postID - The id of the bulletin post to be retrueved.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getPost: (token: string, postID: number) => Promise<any>;
/**
 * Deletes a bulletin post based on the post ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} postID - The id of the bulletin post to be deleted.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const deletePost: (token: string, postID: number) => Promise<any>;
/**
 * Updates a bulletin post based on the post ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} postID - The id of the bulletin post to be deleted.
 * @param {UpdatedDiscussionPost} updateParams - The parameters used to update the post.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const patchPost: (token: string, postID: number, updateParams: UpdatedDiscussionPost) => Promise<any>;
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
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getRides: (token: string, params: RideQuery) => Promise<any>;
/**
 * Create a new ride.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewRide} createParams - The parameters used to get the ride.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const postRide: (token: string, createParams: NewRide) => Promise<any>;
/**
 * Gets a new ride by id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} rideID - The id of the ride we wish to retrieve.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getRide: (token: string, rideID: number) => Promise<any>;
/**
 * Deletes a single ride by id
 *
 * @param {string} token - The auth token to be used.
 * @param {number} rideID - The id of the ride to be deleted.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const deleteRide: (token: string, rideID: number) => Promise<any>;
/**
 * Updates a single ride by id
 *
 * @param {string} token - The auth token to be used.
 * @param {number} rideID - The id of the ride to be updated.
 * @param {UpdatedRide} updateParams - The parameters used to update rides.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const patchRide: (token: string, rideID: number, updateParams: UpdatedRide) => Promise<any>;
export { getBulletins, postBulletin, getBulletin, deleteBulletin, patchBulletin, getDiscussion, deleteDiscussion, postDiscussion, getDiscussions, getDiscussionPosts, postPost, getPost, deletePost, patchPost, getRide, getRides, postRide, deleteRide, patchRide, };
