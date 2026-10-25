/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
import {
  ModelsNotificationSettings,
  ModelsNotificationToken,
  NotificationSettingsUpdateParams,
  NotificationTokenCreateParams,
} from '../types';

export class NotificationService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async createNotificationToken(updateParams: NotificationTokenCreateParams): Promise<APIResponse<ModelsNotificationToken>> {
    return this.api.request('post', `/api/v2/notification/app/token`, {
      data: updateParams,
    });
  }

  async getNotificationSettings(): Promise<APIResponse<ModelsNotificationSettings>> {
    return this.api.request('get', `/api/v2/notification/settings`);
  }

  async updateNotificationSettings(updateParams: NotificationSettingsUpdateParams): Promise<APIResponse<ModelsNotificationSettings>> {
    return this.api.request('patch', `/api/v2/notification/settings`, {
      data: updateParams,
    });
  }

}
