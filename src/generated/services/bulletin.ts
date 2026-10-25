/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
import {
  BulletinCreateBulletinParams,
  BulletinCreateDiscussionParams,
  BulletinCreatePostParams,
  BulletinCreateRideParams,
  BulletinUpdateBulletinParams,
  BulletinUpdatePostParams,
  BulletinUpdateRideParams,
  ModelsBulletin,
  ModelsBulletinRide,
  ModelsDiscussion,
  ModelsPost,
} from '../types';

export class BulletinService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async createBulletin(createParams: BulletinCreateBulletinParams): Promise<APIResponse<ModelsBulletin>> {
    return this.api.request('post', `/api/v2/bulletin/bulletins`, {
      data: createParams,
    });
  }

  async createDiscussion(createParams: BulletinCreateDiscussionParams): Promise<APIResponse<ModelsDiscussion>> {
    return this.api.request('post', `/api/v2/bulletin/discussions`, {
      data: createParams,
    });
  }

  async createPost(createParams: BulletinCreatePostParams): Promise<APIResponse<ModelsPost>> {
    return this.api.request('post', `/api/v2/bulletin/posts`, {
      data: createParams,
    });
  }

  async createRide(createParams: BulletinCreateRideParams): Promise<APIResponse<ModelsBulletinRide>> {
    return this.api.request('post', `/api/v2/bulletin/rides`, {
      data: createParams,
    });
  }

  async deleteBulletin(bulletinID: number): Promise<APIResponse<ModelsBulletin>> {
    return this.api.request('delete', `/api/v2/bulletin/bulletins/${bulletinID}`);
  }

  async deleteDiscussion(discussionID: number): Promise<APIResponse<ModelsDiscussion>> {
    return this.api.request('delete', `/api/v2/bulletin/discussion/${discussionID}`);
  }

  async deletePost(postID: number): Promise<APIResponse<ModelsPost>> {
    return this.api.request('delete', `/api/v2/bulletin/posts/${postID}`);
  }

  async deleteRide(rideID: number): Promise<APIResponse<ModelsBulletinRide>> {
    return this.api.request('delete', `/api/v2/bulletin/rides/${rideID}`);
  }

  async getBulletin(bulletinID: number): Promise<APIResponse<ModelsBulletin>> {
    return this.api.request('get', `/api/v2/bulletin/bulletins/${bulletinID}`);
  }

  async getDiscussion(discussionID: number, params?: {
    preload?: Array<string>;
  }): Promise<APIResponse<ModelsDiscussion>> {
    return this.api.request('get', `/api/v2/bulletin/discussions/${discussionID}`, {
      params: params,
    });
  }

  async getDiscussionPosts(discussionID: number, params?: {
    start?: string;
    offset?: number;
    limit?: number;
    preload?: Array<string>;
  }): Promise<APIResponse<Array<ModelsPost>>> {
    return this.api.request('get', `/api/v2/bulletin/discussions/${discussionID}/posts`, {
      params: params,
    });
  }

  async getPost(postID: number): Promise<APIResponse<ModelsPost>> {
    return this.api.request('get', `/api/v2/bulletin/posts/${postID}`);
  }

  async getRide(rideID: number): Promise<APIResponse<ModelsBulletinRide>> {
    return this.api.request('get', `/api/v2/bulletin/rides/${rideID}`);
  }

  async listAnnouncementRss(params?: {
    start?: string;
    offset?: number;
    limit?: number;
    all?: string;
  }): Promise<APIResponse<string>> {
    return this.api.request('get', `/api/v2/bulletin/rss/announcement`, {
      params: params,
    });
  }

  async listBulletins(params?: {
    start?: string;
    offset?: number;
    limit?: number;
    preload?: Array<string>;
    type?: string;
    all?: boolean;
  }): Promise<APIResponse<Array<ModelsBulletin>>> {
    return this.api.request('get', `/api/v2/bulletin/bulletins`, {
      params: params,
    });
  }

  async listDiscussionRss(params?: {
    start?: string;
    offset?: number;
    limit?: number;
  }): Promise<APIResponse<string>> {
    return this.api.request('get', `/api/v2/bulletin/rss/discussion`, {
      params: params,
    });
  }

  async listDiscussions(params?: {
    start?: string;
    offset?: number;
    limit?: number;
    preload?: Array<string>;
    getLastPost?: boolean;
  }): Promise<APIResponse<Array<ModelsDiscussion>>> {
    return this.api.request('get', `/api/v2/bulletin/discussions`, {
      params: params,
    });
  }

  async listExchangeRss(params?: {
    start?: string;
    offset?: number;
    limit?: number;
    all?: string;
  }): Promise<APIResponse<string>> {
    return this.api.request('get', `/api/v2/bulletin/rss/exchange`, {
      params: params,
    });
  }

  async listJobRss(params?: {
    start?: string;
    offset?: number;
    limit?: number;
    all?: string;
  }): Promise<APIResponse<string>> {
    return this.api.request('get', `/api/v2/bulletin/rss/job`, {
      params: params,
    });
  }

  async listLostAndFoundRss(params?: {
    start?: string;
    offset?: number;
    limit?: number;
    all?: string;
  }): Promise<APIResponse<string>> {
    return this.api.request('get', `/api/v2/bulletin/rss/lostAndFound`, {
      params: params,
    });
  }

  async listRideRss(params?: {
    start?: string;
    offset?: number;
    limit?: number;
    type?: string;
    all?: string;
  }): Promise<APIResponse<string>> {
    return this.api.request('get', `/api/v2/bulletin/rss/ride`, {
      params: params,
    });
  }

  async listRides(params?: {
    start?: string;
    offset?: number;
    limit?: number;
    preload?: Array<string>;
    type?: string;
    all?: string;
  }): Promise<APIResponse<Array<ModelsBulletinRide>>> {
    return this.api.request('get', `/api/v2/bulletin/rides`, {
      params: params,
    });
  }

  async updateBulletin(bulletinID: number, updateParams: BulletinUpdateBulletinParams): Promise<APIResponse<ModelsBulletin>> {
    return this.api.request('patch', `/api/v2/bulletin/bulletins/${bulletinID}`, {
      data: updateParams,
    });
  }

  async updatePost(postID: number, updateParams: BulletinUpdatePostParams): Promise<APIResponse<ModelsPost>> {
    return this.api.request('patch', `/api/v2/bulletin/posts/${postID}`, {
      data: updateParams,
    });
  }

  async updateRide(rideID: number, updateParams: BulletinUpdateRideParams): Promise<APIResponse<ModelsBulletinRide>> {
    return this.api.request('patch', `/api/v2/bulletin/rides/${rideID}`, {
      data: updateParams,
    });
  }

}
