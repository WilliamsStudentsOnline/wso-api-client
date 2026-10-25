import { APIResponse } from '../api';
import { BulletinService as GeneratedBulletinService } from '../generated/services/bulletin';
import { ModelsDiscussion } from './types';

export class BulletinService extends GeneratedBulletinService {
  async getDiscussion(
    discussionID: number,
    preloadOrParams?: string[] | { preload?: string[] }
  ): Promise<APIResponse<ModelsDiscussion>> {
    const params = Array.isArray(preloadOrParams) ? { preload: preloadOrParams } : preloadOrParams;
    return super.getDiscussion(discussionID, params as any);
  }

  async deleteDiscussion(discussionID: number): Promise<APIResponse<any>> {
    return this.api.request('delete', `/api/v2/bulletin/discussions/${discussionID}`);
  }
}
