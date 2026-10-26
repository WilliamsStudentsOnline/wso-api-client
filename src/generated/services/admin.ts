/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
import {
  AdminModeratorTaskResponse,
  AdminResolveTasksBody,
} from '../types';

export class AdminService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async deleteModeratorTask(taskID: number): Promise<APIResponse<Record<string, any>>> {
    return this.api.request('delete', `/api/v2/admin/tasks/${taskID}`);
  }

  async getModeratorTask(taskID: number, params?: {
    preload?: Array<string>;
  }): Promise<APIResponse<AdminModeratorTaskResponse>> {
    return this.api.request('get', `/api/v2/admin/tasks/${taskID}`, {
      params: params,
    });
  }

  async listModeratorTasks(params?: {
    taskType?: string;
    resolvedAt?: string;
    taskReference?: string;
    orderBy?: string;
    offset?: number;
    limit?: number;
    preload?: Array<string>;
  }): Promise<APIResponse<Array<AdminModeratorTaskResponse>>> {
    return this.api.request('get', `/api/v2/admin/tasks`, {
      params: params,
    });
  }

  async resolveModeratorTasks(taskID: number, body: AdminResolveTasksBody): Promise<APIResponse<Array<AdminModeratorTaskResponse>>> {
    return this.api.request('post', `/api/v2/admin/tasks/${taskID}/resolve`, {
      data: body,
    });
  }

}
