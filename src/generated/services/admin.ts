/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
import {
  AdminModeratorTaskResponse,
  AdminResolveTasksBody,
  FeedbackUpdateFeedbackParams,
  ModelsFeedback,
} from '../types';

export class AdminService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async deleteFeedback(feedbackID: number): Promise<APIResponse<Record<string, any>>> {
    return this.api.request('delete', `/api/v2/admin/feedback/${feedbackID}`);
  }

  async deleteModeratorTask(taskID: number): Promise<APIResponse<Record<string, any>>> {
    return this.api.request('delete', `/api/v2/admin/tasks/${taskID}`);
  }

  async getFeedback(feedbackID: number, params?: {
    preload?: Array<string>;
  }): Promise<APIResponse<ModelsFeedback>> {
    return this.api.request('get', `/api/v2/admin/feedback/${feedbackID}`, {
      params: params,
    });
  }

  async getModeratorTask(taskID: number, params?: {
    preload?: Array<string>;
  }): Promise<APIResponse<AdminModeratorTaskResponse>> {
    return this.api.request('get', `/api/v2/admin/tasks/${taskID}`, {
      params: params,
    });
  }

  async listFeedback(params?: {
    priority?: string;
    offset?: number;
    limit?: number;
    preload?: Array<string>;
  }): Promise<APIResponse<Array<ModelsFeedback>>> {
    return this.api.request('get', `/api/v2/admin/feedback`, {
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

  async updateFeedback(feedbackID: number, body: FeedbackUpdateFeedbackParams): Promise<APIResponse<ModelsFeedback>> {
    return this.api.request('patch', `/api/v2/admin/feedback/${feedbackID}`, {
      data: body,
    });
  }

}
