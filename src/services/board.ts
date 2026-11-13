import { APIResponse } from '../api';
import { BoardService as GeneratedBoardService } from '../generated/services/board';
import { BoardListThreadsResponse } from './types';

export class BoardService extends GeneratedBoardService {
  async listBoardThreads(params?: {
    cursor?: string;
    offset?: number;
    limit?: number;
    sort?: string;
    includeNull?: boolean;
    /** Prefer this — axios appends `[]` to array keys; `"type[]"` becomes `type[][]` */
    type?: Array<string>;
    'type[]'?: Array<string>;
    resolved?: boolean;
    offeringRide?: boolean;
    userID?: number;
  }): Promise<APIResponse<BoardListThreadsResponse>> {
    const { 'type[]': typeBracket, type, ...rest } = params || {};
    const types = type ?? typeBracket;
    return this.api.request('get', `/api/v2/board/threads`, {
      params: {
        ...rest,
        ...(types && types.length > 0 ? { type: types } : {}),
      },
    });
  }
}
