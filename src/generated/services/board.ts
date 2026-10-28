/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
import {
  BoardCreateReplyParams,
  BoardCreateThreadParams,
  BoardListThreadsResponse,
  BoardUpdateReplyParams,
  BoardUpdateThreadParams,
  ModelsBoardPost,
  ModelsBoardThread,
} from '../types';

export class BoardService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async createBoardReply(threadID: number, body: BoardCreateReplyParams): Promise<APIResponse<ModelsBoardPost>> {
    return this.api.request('post', `/api/v2/board/threads/${threadID}/replies`, {
      data: body,
    });
  }

  async createBoardThread(body: BoardCreateThreadParams): Promise<APIResponse<ModelsBoardThread>> {
    return this.api.request('post', `/api/v2/board/threads`, {
      data: body,
    });
  }

  async deleteBoardReply(replyID: number): Promise<APIResponse<ModelsBoardPost>> {
    return this.api.request('delete', `/api/v2/board/replies/${replyID}`);
  }

  async deleteBoardThread(threadID: number): Promise<APIResponse<ModelsBoardThread>> {
    return this.api.request('delete', `/api/v2/board/threads/${threadID}`);
  }

  async flagBoardReply(replyID: number): Promise<APIResponse<any>> {
    return this.api.request('post', `/api/v2/board/replies/${replyID}/flag`);
  }

  async flagBoardThread(threadID: number): Promise<APIResponse<any>> {
    return this.api.request('post', `/api/v2/board/threads/${threadID}/flag`);
  }

  async getBoardThread(threadID: number): Promise<APIResponse<ModelsBoardThread>> {
    return this.api.request('get', `/api/v2/board/threads/${threadID}`);
  }

  async listBoardThreads(params?: {
    cursor?: string;
    offset?: number;
    limit?: number;
    sort?: string;
    includeNull?: boolean;
    /** Prefer `type` — axios appends `[]` to array keys. `"type[]"` becomes `type[][]=…` and gin won't bind. */
    type?: Array<string>;
    "type[]"?: Array<string>;
    resolved?: boolean;
    offeringRide?: boolean;
    userID?: number;
  }): Promise<APIResponse<BoardListThreadsResponse>> {
    const { "type[]": typeBracket, type, ...rest } = params || {};
    const types = type ?? typeBracket;
    return this.api.request('get', `/api/v2/board/threads`, {
      params: {
        ...rest,
        ...(types && types.length > 0 ? { type: types } : {}),
      },
    });
  }

  async updateBoardReply(replyID: number, body: BoardUpdateReplyParams): Promise<APIResponse<ModelsBoardPost>> {
    return this.api.request('patch', `/api/v2/board/replies/${replyID}`, {
      data: body,
    });
  }

  async updateBoardThread(threadID: number, body: BoardUpdateThreadParams): Promise<APIResponse<ModelsBoardThread>> {
    return this.api.request('patch', `/api/v2/board/threads/${threadID}`, {
      data: body,
    });
  }

}
