/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
import {
  EphmatchCountMatchesResponse,
  EphmatchGetAvailabilityResp,
  EphmatchProfileCreateParams,
  EphmatchProfileUpdateParams,
  EphmatchSetProfileRelationParams,
  EphmatchSetProfileRelationResp,
  ModelsEphmatchProfile,
  ResponsesListMatchesResponseEphmatchMatch,
} from '../types';

export class EphmatchService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async countMatches(): Promise<APIResponse<EphmatchCountMatchesResponse>> {
    return this.api.request('get', `/api/v2/ephmatch/matches-count`);
  }

  async createSelfProfile(createParams: EphmatchProfileCreateParams): Promise<APIResponse<ModelsEphmatchProfile>> {
    return this.api.request('post', `/api/v2/ephmatch/profile`, {
      data: createParams,
    });
  }

  async deleteProfilePhoto(): Promise<APIResponse<any>> {
    return this.api.request('delete', `/api/v2/ephmatch/profile/photo`);
  }

  async deleteSelfProfile(): Promise<APIResponse<ModelsEphmatchProfile>> {
    return this.api.request('delete', `/api/v2/ephmatch/profile`);
  }

  async getAvailability(): Promise<APIResponse<EphmatchGetAvailabilityResp>> {
    return this.api.request('get', `/api/v2/ephmatch/availability`);
  }

  async getProfile(profileUserID: number): Promise<APIResponse<ModelsEphmatchProfile>> {
    return this.api.request('get', `/api/v2/ephmatch/profiles/${profileUserID}`);
  }

  async getSelfProfile(): Promise<APIResponse<ModelsEphmatchProfile>> {
    return this.api.request('get', `/api/v2/ephmatch/profile`);
  }

  async listMatches(params?: {
    preload?: Array<string>;
  }): Promise<APIResponse<Array<ResponsesListMatchesResponseEphmatchMatch>>> {
    return this.api.request('get', `/api/v2/ephmatch/matches`, {
      params: params,
    });
  }

  async listProfiles(params?: {
    sort?: string;
    offset?: number;
    limit?: number;
    noRelations?: boolean;
    preload?: Array<string>;
  }): Promise<APIResponse<Array<ModelsEphmatchProfile>>> {
    return this.api.request('get', `/api/v2/ephmatch/profiles`, {
      params: params,
    });
  }

  async setProfileRelation(profileUserID: number, relationParams: EphmatchSetProfileRelationParams): Promise<APIResponse<EphmatchSetProfileRelationResp>> {
    return this.api.request('put', `/api/v2/ephmatch/profiles/${profileUserID}/relation`, {
      data: relationParams,
    });
  }

  async unmatch(matchUserID: number): Promise<APIResponse<any>> {
    return this.api.request('delete', `/api/v2/ephmatch/matches/${matchUserID}`);
  }

  async updateSelfProfile(updateParams: EphmatchProfileUpdateParams): Promise<APIResponse<ModelsEphmatchProfile>> {
    return this.api.request('patch', `/api/v2/ephmatch/profile`, {
      data: updateParams,
    });
  }

  async uploadProfilePhoto(file: Blob | File | string): Promise<APIResponse<any>> {
    const formData = new FormData();
    formData.append('file', file as any);
    return this.api.request('put', `/api/v2/ephmatch/profile/photo`, {
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

}
