import { APIResponse } from '../api';
import { EphcatchService as GeneratedEphcatchService } from '../generated/services/ephcatch';
import { ModelsUser } from './types';

export class EphcatchService extends GeneratedEphcatchService {
  /** Alias for listEphcatchMatches (old client name). */
  async listMatches(): Promise<APIResponse<ModelsUser[]>> {
    return this.listEphcatchMatches() as any;
  }
}
