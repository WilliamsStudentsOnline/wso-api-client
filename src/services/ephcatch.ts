import { API, APIResponse } from '../api';
import { ModelsEphcatcher, ModelsUser } from './types';

export class EphcatchService {
  private api: API;

  constructor(api: API) {
    this.api = api;
  }

  async listEphcatchers(params?: {
    offset?: number;
    limit?: number;
    preload?: string[];
    q?: string;
  }): Promise<APIResponse<ModelsEphcatcher[]>> {
    return this.api.request('get', '/api/v2/ephcatch/ephcatchers', {
      params: params,
    });
  }

  async getEphcatcher(ephcatcherID: number): Promise<APIResponse<ModelsEphcatcher>> {
    return this.api.request('get', `/api/v2/ephcatch/ephcatchers/${ephcatcherID}`);
  }

  async likeEphcatcher(ephcatcherID: number): Promise<APIResponse> {
    return this.api.request('post', `/api/v2/ephcatch/ephcatchers/${ephcatcherID}/like`);
  }

  async unlikeEphcatcher(ephcatcherID: number): Promise<APIResponse> {
    return this.api.request('post', `/api/v2/ephcatch/ephcatchers/${ephcatcherID}/unlike`);
  }

  async listMatches(): Promise<APIResponse<ModelsUser[]>> {
    return this.api.request('get', '/api/v2/ephcatch/matches');
  }
}
