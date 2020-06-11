import { API, APIResponse } from '../api';

export class ChatService {
  private api: API;

  constructor(api: API) {
    this.api = api;
  }

  async getChatAuthToken(): Promise<APIResponse<string>> {
    return this.api.request('get', '/api/v2/chat/auth/token');
  }
}
