import { API, APIResponse } from '../api';
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
} from './types';

export class BulletinService {
  private api: API;

  constructor(api: API) {
    this.api = api;
  }

  /* Bulletins */

  async listBulletins(params?: {
    start?: string;
    offset?: number;
    limit?: number;
    preload?: string[];
    type?: string;
    all?: boolean;
  }): Promise<APIResponse<ModelsBulletin[]>> {
    return this.api.request('get', '/api/v2/bulletin/bulletins', {
      params: params,
    });
  }

  async getBulletin(bulletinID: number): Promise<APIResponse<ModelsBulletin>> {
    return this.api.request('get', `/api/v2/bulletin/bulletins/${bulletinID}`);
  }

  async createBulletin(
    createParams: BulletinCreateBulletinParams
  ): Promise<APIResponse<ModelsBulletin>> {
    return this.api.request('post', '/api/v2/bulletin/bulletins', {
      data: createParams,
    });
  }

  async deleteBulletin(bulletinID: number): Promise<APIResponse<ModelsBulletin>> {
    return this.api.request('delete', `/api/v2/bulletin/bulletins/${bulletinID}`);
  }

  async updateBulletin(
    bulletinID: number,
    updateParams: BulletinUpdateBulletinParams
  ): Promise<APIResponse<ModelsBulletin>> {
    return this.api.request('patch', `/api/v2/bulletin/bulletins/${bulletinID}`, {
      data: updateParams,
    });
  }

  /* Discussions */

  async listDiscussions(params?: {
    start?: string;
    offset?: number;
    limit?: number;
    preload?: string[];
    getLastPost?: boolean;
  }): Promise<APIResponse<ModelsDiscussion[]>> {
    return this.api.request('get', '/api/v2/bulletin/discussions', {
      params: params,
    });
  }

  async createDiscussion(
    createParams: BulletinCreateDiscussionParams
  ): Promise<APIResponse<ModelsDiscussion>> {
    return this.api.request('post', '/api/v2/bulletin/discussions', {
      data: createParams,
    });
  }

  async getDiscussion(
    discussionID: number,
    preload: string[] = []
  ): Promise<APIResponse<ModelsDiscussion>> {
    return this.api.request('get', `/api/v2/bulletin/discussions/${discussionID}`, {
      params: {
        preload: preload,
      },
    });
  }

  async deleteDiscussion(discussionID: number): Promise<APIResponse<ModelsDiscussion>> {
    return this.api.request('delete', `/api/v2/bulletin/discussions/${discussionID}`, {});
  }

  async getDiscussionPosts(
    discussionID: number,
    params?: {
      start?: string;
      offset?: number;
      limit?: number;
      preload?: string[];
    }
  ): Promise<APIResponse<ModelsPost[]>> {
    return this.api.request('get', `/api/v2/bulletin/discussions/${discussionID}/posts`, {
      params: params,
    });
  }

  /* Posts */

  async getPost(postID: number): Promise<APIResponse<ModelsPost>> {
    return this.api.request('get', `/api/v2/bulletin/posts/${postID}`);
  }

  async createPost(createParams: BulletinCreatePostParams): Promise<APIResponse<ModelsPost>> {
    return this.api.request('post', '/api/v2/bulletin/posts', {
      data: createParams,
    });
  }

  async deletePost(postID: number): Promise<APIResponse<ModelsPost>> {
    return this.api.request('delete', `/api/v2/bulletin/posts/${postID}`);
  }

  async updatePost(
    postID: number,
    updateParams: BulletinUpdatePostParams
  ): Promise<APIResponse<ModelsPost>> {
    return this.api.request('patch', `/api/v2/bulletin/posts/${postID}`, {
      data: updateParams,
    });
  }

  /* Rides */

  async listRides(params?: {
    start?: string;
    offset?: number;
    limit?: number;
    preload?: string[];
    type?: string;
    all?: boolean;
  }): Promise<APIResponse<ModelsBulletinRide[]>> {
    return this.api.request('get', '/api/v2/bulletin/rides', {
      params: params,
    });
  }

  async getRide(rideID: number): Promise<APIResponse<ModelsBulletinRide>> {
    return this.api.request('get', `/api/v2/bulletin/rides/${rideID}`);
  }

  async createRide(
    createParams: BulletinCreateRideParams
  ): Promise<APIResponse<ModelsBulletinRide>> {
    return this.api.request('post', '/api/v2/bulletin/rides', {
      data: createParams,
    });
  }

  async deleteRide(rideID: number): Promise<APIResponse<ModelsBulletinRide>> {
    return this.api.request('delete', `/api/v2/bulletin/rides/${rideID}`);
  }

  async updateRide(
    rideID: number,
    updateParams: BulletinUpdateRideParams
  ): Promise<APIResponse<ModelsBulletinRide>> {
    return this.api.request('patch', `/api/v2/bulletin/rides/${rideID}`, {
      data: updateParams,
    });
  }
}
