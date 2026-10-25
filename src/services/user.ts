import { AxiosResponse } from 'axios';
import { APIResponse } from '../api';
import { UserService as GeneratedUserService } from '../generated/services/user';
import { ResponsesGetUserResponseUser } from './types';

/**
 * Generated user endpoints plus blob photo helpers (not in OpenAPI).
 * getUser defaults to "me" like the previous hand-written client.
 */
export class UserService extends GeneratedUserService {
  async getUser(
    userID: number | 'me' = 'me'
  ): Promise<APIResponse<ResponsesGetUserResponseUser>> {
    return super.getUser(userID);
  }

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
