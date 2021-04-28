import { API, APIResponse } from '../api';
import { AxiosResponse } from 'axios';
import {
  ModelsUser,
  ResponsesGetUserResponseUser,
  UserUpdateUserParams,
  UserUpdateUserTagsParams,
} from './types';

export class UserService {
  private api: API;

  constructor(api: API) {
    this.api = api;
  }

  async listUsers(params?: {
    offset?: number;
    limit?: number;
    preload?: string[];
    q?: string;
  }): Promise<APIResponse<ResponsesGetUserResponseUser[]>> {
    return this.api.request('get', '/api/v2/users', {
      params: params,
    });
  }

  async getUser(userID: number | 'me' = 'me'): Promise<APIResponse<ResponsesGetUserResponseUser>> {
    return this.api.request('get', `/api/v2/users/${userID}`);
  }

  async updateUser(
    userID: number | 'me',
    updateParams: UserUpdateUserParams
  ): Promise<APIResponse<ModelsUser>> {
    return this.api.request('patch', `/api/v2/users/${userID}`, {
      data: updateParams,
    });
  }

  async updateUserTags(
    userID: number | 'me',
    updateParams: UserUpdateUserTagsParams
  ): Promise<APIResponse> {
    return this.api.request('put', `/api/v2/users/${userID}/tags`, {
      data: updateParams,
    });
  }

  // Replaces current user's photo
  async updateUserPhoto(userID: number | 'me', file: string | Blob): Promise<APIResponse> {
    const formData = new FormData();
    formData.append('file', file);
    return this.api.request('put', `/api/v2/users/${userID}/photo`, {
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  // Gets the thumbnail photo of a specified user.
  async getUserThumbPhoto(unixID: string): Promise<Blob> {
    const token = await this.api.auth.getToken();
    return this.api.api
      .request<Blob>({
        url: `/pic/user/thumb/${unixID}.jpg`,
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

  // Gets the large photo of a specified user.
  async getUserLargePhoto(unixID: string): Promise<Blob> {
    const token = await this.api.auth.getToken();
    return this.api.api
      .request<Blob>({
        url: `/pic/user/large/${unixID}.jpg`,
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
}
