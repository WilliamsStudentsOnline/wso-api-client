import { API, APIResponse } from '../api';
import {
  EphmatchProfileCreateParams,
  EphmatchProfileUpdateParams,
  ModelsEphmatchProfile,
  ResponsesListMatchesResponseEphmatch,
} from './types';

export class EphmatchService {
  private api: API;

  constructor(api: API) {
    this.api = api;
  }

  /* Matches */

  async listMatches(params?: {
    preload?: string[];
  }): Promise<APIResponse<ResponsesListMatchesResponseEphmatch[]>> {
    return this.api.request('get', '/api/v2/ephmatch/matches', {
      params: params,
    });
  }

  /* Self Profile */

  async getSelfProfile(): Promise<APIResponse<ModelsEphmatchProfile>> {
    return this.api.request('get', '/api/v2/ephmatch/profile');
  }

  async createSelfProfile(
    createParams: EphmatchProfileCreateParams
  ): Promise<APIResponse<ModelsEphmatchProfile>> {
    return this.api.request('post', '/api/v2/ephmatch/profile', {
      data: createParams,
    });
  }

  async deleteSelfProfile(): Promise<APIResponse<ModelsEphmatchProfile>> {
    return this.api.request('delete', '/api/v2/ephmatch/profile');
  }

  async updateSelfProfile(
    updateParams: EphmatchProfileUpdateParams
  ): Promise<APIResponse<ModelsEphmatchProfile>> {
    return this.api.request('patch', '/api/v2/ephmatch/profile', {
      data: updateParams,
    });
  }

  /* Profiles */

  async listProfiles(params?: {
    offset?: number;
    limit?: number;
    preload?: string[];
    sort?: string;
  }): Promise<APIResponse<ModelsEphmatchProfile[]>> {
    return this.api.request('get', '/api/v2/ephmatch/profiles', {
      params: params,
    });
  }

  async getProfile(profileUserID: number): Promise<APIResponse<ModelsEphmatchProfile>> {
    return this.api.request('get', `/api/v2/ephmatch/profiles/${profileUserID}`);
  }

  async likeProfile(profileUserID: number): Promise<APIResponse> {
    return this.api.request('post', `/api/v2/ephmatch/profiles/${profileUserID}/like`);
  }

  async unlikeProfile(profileUserID: number): Promise<APIResponse> {
    return this.api.request('post', `/api/v2/ephmatch/profiles/${profileUserID}/unlike`);
  }
}
