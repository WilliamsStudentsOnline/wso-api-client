import { APIResponse } from '../api';
import { DormtrakService as GeneratedDormtrakService } from '../generated/services/dormtrak';
import { ModelsDormtrakRanking } from '../generated/types';

export class DormtrakService extends GeneratedDormtrakService {
  /** OpenAPI types this as an array; runtime/UI expect a single aggregate object. */
  async getRankings(): Promise<APIResponse<ModelsDormtrakRanking>> {
    const resp = await super.getRankings();
    const data = Array.isArray(resp.data) ? resp.data[0] : resp.data;
    return { ...resp, data };
  }
}
