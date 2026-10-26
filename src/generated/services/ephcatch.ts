/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
import {
  ModelsEphcatcher,
  ModelsUser,
} from '../types';

export class EphcatchService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async getEphcatcher(ephcatcherID: number): Promise<APIResponse<ModelsEphcatcher>> {
    return this.api.request('get', `/api/v2/ephcatch/ephcatchers/${ephcatcherID}`);
  }

  async likeEphcatcher(ephcatcherID: number): Promise<APIResponse<any>> {
    return this.api.request('post', `/api/v2/ephcatch/ephcatchers/${ephcatcherID}/like`);
  }

  async listEphcatchers(params?: {
    offset?: number;
    limit?: number;
    preload?: Array<string>;
    q?: string;
  }): Promise<APIResponse<Array<ModelsEphcatcher>>> {
    return this.api.request('get', `/api/v2/ephcatch/ephcatchers`, {
      params: params,
    });
  }

  async listEphcatchMatches(): Promise<APIResponse<Array<ModelsUser>>> {
    return this.api.request('get', `/api/v2/ephcatch/matches`);
  }

  async unlikeEphcatcher(ephcatcherID: number): Promise<APIResponse<any>> {
    return this.api.request('post', `/api/v2/ephcatch/ephcatchers/${ephcatcherID}/unlike`);
  }

}
