/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
import {
  ModelsUser,
  ResponsesGetUserResponseUser,
  ResponsesListUsersResponseUser,
  UserCreateTagRequestParams,
  UserUpdateUserParams,
  UserUpdateUserTagsParams,
} from '../types';

export class UserService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async createUserTagRequest(userID: number | 'me', body: UserCreateTagRequestParams): Promise<APIResponse<Record<string, any>>> {
    return this.api.request('post', `/api/v2/users/${userID}/tag-requests`, {
      data: body,
    });
  }

  async getOnboardingCanonicalUser(unixID: string): Promise<APIResponse<ModelsUser>> {
    return this.api.request('get', `/api/v2/onboarding/canonical/${unixID}`);
  }

  async getOnboardingKs19User(unixID: string): Promise<APIResponse<ModelsUser>> {
    return this.api.request('get', `/api/v2/onboarding/ks19/${unixID}`);
  }

  async getOnboardingMgb4User(unixID: string): Promise<APIResponse<ModelsUser>> {
    return this.api.request('get', `/api/v2/onboarding/mgb4/${unixID}`);
  }

  async getUser(userID: number | 'me'): Promise<APIResponse<ResponsesGetUserResponseUser>> {
    return this.api.request('get', `/api/v2/users/${userID}`);
  }

  async listUsers(params?: {
    offset?: number;
    limit?: number;
    preload?: Array<string>;
    q?: string;
  }): Promise<APIResponse<Array<ResponsesListUsersResponseUser>>> {
    return this.api.request('get', `/api/v2/users`, {
      params: params,
    });
  }

  async updateUser(userID: number | 'me', updateParams: UserUpdateUserParams): Promise<APIResponse<ResponsesGetUserResponseUser>> {
    return this.api.request('patch', `/api/v2/users/${userID}`, {
      data: updateParams,
    });
  }

  async updateUserPhoto(userID: number | 'me', file: Blob | File | string): Promise<APIResponse<any>> {
    const formData = new FormData();
    formData.append('file', file as any);
    return this.api.request('put', `/api/v2/users/${userID}/photo`, {
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  async updateUserTags(userID: number | 'me', updateTagsParams: UserUpdateUserTagsParams): Promise<APIResponse<any>> {
    return this.api.request('put', `/api/v2/users/${userID}/tags`, {
      data: updateTagsParams,
    });
  }

}
