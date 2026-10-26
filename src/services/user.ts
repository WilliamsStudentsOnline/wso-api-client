import { AxiosResponse } from 'axios';
import { APIResponse } from '../api';
import { UserService as GeneratedUserService } from '../generated/services/user';
import { ResponsesGetUserResponseUser } from './types';

export class UserService extends GeneratedUserService {
  async getUser(userID: number | 'me' = 'me'): Promise<APIResponse<ResponsesGetUserResponseUser>> {
    return super.getUser(userID);
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
