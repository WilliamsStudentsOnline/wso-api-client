import { API, APIResponse } from '../api';
import {
  NotificationSettingsUpdateParams,
  ModelsNotificationSettings,
  ModelsNotificationToken,
  NotificationTokenCreateParams,
} from './types';

export class NotificationService {
  private api: API;

  constructor(api: API) {
    this.api = api;
  }

  async createNotificationToken(
    createParams: NotificationTokenCreateParams
  ): Promise<APIResponse<ModelsNotificationToken>> {
    return this.api.request('post', '/api/v2/notification/app/token', {
      data: createParams,
    });
  }

  async getNotificationSettings(): Promise<APIResponse<ModelsNotificationSettings>> {
    return this.api.request('get', `/api/v2/notification/settings`);
  }

  async updateNotificationSettings(
    updateParams: NotificationSettingsUpdateParams
  ): Promise<APIResponse<ModelsNotificationSettings>> {
    return this.api.request('patch', `/api/v2/notification/settings`, {
      data: updateParams,
    });
  }
}
