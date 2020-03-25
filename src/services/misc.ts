import { API, APIResponse } from "../api";
import { ServerHealthCheckResponse } from "./types";

export class MiscService {
  private api: API;

  constructor(api: API) {
    this.api = api;
  }

  async getHealthCheck(): Promise<APIResponse<ServerHealthCheckResponse>> {
    return this.api.request("get", `/api/v2/health-check`);
  }

  async getWords(): Promise<APIResponse<string>> {
    return this.api.request("get", `/api/v2/words`);
  }
}
