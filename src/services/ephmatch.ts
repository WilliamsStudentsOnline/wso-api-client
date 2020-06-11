import { API, APIResponse } from '../api';
import {
  EphmatchCountMatchesResponse,
  EphmatchGetAvailabilityResp,
  EphmatchProfileCreateParams,
  EphmatchProfileUpdateParams,
  ModelsEphmatchProfile,
  ResponsesListMatchesResponseEphmatchMatch,
} from './types';

export class EphmatchService {
  private api: API;

  constructor(api: API) {
    this.api = api;
  }

  /* Availability */

  async getAvailability(): Promise<APIResponse<EphmatchGetAvailabilityResp>> {
    return this.api.request('get', '/api/v2/ephmatch/availability');
  }

  /* Matches */

  async listMatches(params?: {
    preload?: string[];
  }): Promise<APIResponse<ResponsesListMatchesResponseEphmatchMatch[]>> {
    return this.api.request('get', '/api/v2/ephmatch/matches', {
      params: params,
    });
  }

  async countMatches(): Promise<APIResponse<EphmatchCountMatchesResponse>> {
    return this.api.request('get', '/api/v2/ephmatch/matches-count');
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
