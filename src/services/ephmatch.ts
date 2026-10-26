import { AxiosResponse } from 'axios';
import { APIResponse } from '../api';
import { EphmatchService as GeneratedEphmatchService } from '../generated/services/ephmatch';
import { EphmatchSetProfileRelationParams, EphmatchSetProfileRelationResp } from './types';

export class EphmatchService extends GeneratedEphmatchService {
  async getEphmatchPhoto(unixID: string): Promise<Blob> {
    const token = await this.api.auth.getToken();
    return this.api.api
      .request<Blob>({
        url: `/pic/ephmatch/${unixID}.jpg`,
        headers: { Authorization: `Bearer ${token.token}` },
        responseType: 'blob',
        validateStatus: (status: number) => status >= 200 && status < 300,
      })
      .then((resp: AxiosResponse<Blob>) => resp.data);
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
    relationOrParams: string | EphmatchSetProfileRelationParams
  ): Promise<APIResponse<EphmatchSetProfileRelationResp>> {
    const data: EphmatchSetProfileRelationParams =
      typeof relationOrParams === 'string' ? { relation: relationOrParams } : relationOrParams;
    return this.api.request('put', `/api/v2/ephmatch/profiles/${profileUserID}/relation`, {
      data,
    });
  }
}
