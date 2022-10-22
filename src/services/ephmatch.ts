import { API, APIResponse } from '../api';
import { AxiosResponse } from 'axios';
import {
  EphmatchCountMatchesResponse,
  EphmatchGetAvailabilityResp,
  EphmatchSetProfileRelationParams,
  EphmatchSetProfileRelationResp,
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

  async unmatch(matchUserID: number): Promise<APIResponse> {
    return this.api.request('delete', `/api/v2/ephmatch/matches/${matchUserID}`);
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

  // Gets the thumbnail photo of a specified user.
  async getEphmatchPhoto(unixID: string): Promise<Blob> {
    const token = await this.api.auth.getToken();
    return this.api.api
      .request<Blob>({
        url: `/pic/ephmatch/${unixID}.jpg`,
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
        responseType: 'blob',
        validateStatus: (status: number) => {
          return status >= 200 && status < 300;
        },
      })
      .then((resp: AxiosResponse<Blob>) => resp.data);
  }

  // Uploads current user's ephmatch photo
  async uploadProfilePhoto(file: string | Blob): Promise<APIResponse> {
    const formData = new FormData();
    formData.append('file', file);
    return this.api.request('put', `/api/v2/ephmatch/profile/photo`, {
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  // Deletes current user's ephmatch photo
  async deleteProfilePhoto(): Promise<APIResponse> {
    return this.api.request('delete', `/api/v2/ephmatch/profile/photo`);
  }

  /* Profiles */

  async listProfiles(params?: {
    offset?: number;
    limit?: number;
    noRelations: boolean;
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

  async likeProfile(profileUserID: number): Promise<APIResponse<EphmatchSetProfileRelationResp>> {
    return this.setProfileRelation(profileUserID, 'like');
  }

  async dislikeProfile(
    profileUserID: number
  ): Promise<APIResponse<EphmatchSetProfileRelationResp>> {
    return this.setProfileRelation(profileUserID, 'dislike');
  }

  async undoProfileRelation(
    profileUserID: number
  ): Promise<APIResponse<EphmatchSetProfileRelationResp>> {
    return this.setProfileRelation(profileUserID, 'none');
  }

  async setProfileRelation(
    profileUserID: number,
    relation: string
  ): Promise<APIResponse<EphmatchSetProfileRelationResp>> {
    const params: EphmatchSetProfileRelationParams = {
      relation: relation,
    };
    return this.api.request('put', `/api/v2/ephmatch/profiles/${profileUserID}/relation`, {
      data: params,
    });
  }
}
