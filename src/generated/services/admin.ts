/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
import {
  AdminCreateJobRunRequest,
  AdminJobInfo,
  AdminModeratorTaskResponse,
  AdminResolveTasksBody,
  FeedbackUpdateFeedbackParams,
  ModelsFeedback,
  ModelsJobRun,
} from '../types';

export class AdminService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async cancelAdminJobRun(id: number): Promise<APIResponse<ModelsJobRun>> {
    return this.api.request('post', `/api/v2/admin/jobs/runs/${id}/cancel`);
  }

  async createAdminJobRun(name: string, body: AdminCreateJobRunRequest): Promise<APIResponse<ModelsJobRun>> {
    return this.api.request('post', `/api/v2/admin/jobs/${name}/runs`, {
      data: body,
    });
  }

  async deleteFeedback(feedbackID: number): Promise<APIResponse<Record<string, any>>> {
    return this.api.request('delete', `/api/v2/admin/feedback/${feedbackID}`);
  }

  async deleteModeratorTask(taskID: number): Promise<APIResponse<Record<string, any>>> {
    return this.api.request('delete', `/api/v2/admin/tasks/${taskID}`);
  }

  async getAdminJobRun(id: number): Promise<APIResponse<ModelsJobRun>> {
    return this.api.request('get', `/api/v2/admin/jobs/runs/${id}`);
  }

  async getAdminJobRunLogs(id: number): Promise<APIResponse<string>> {
    return this.api.request('get', `/api/v2/admin/jobs/runs/${id}/logs`);
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

  async listAdminJobRuns(params?: {
    job?: string;
    status?: string;
    limit?: number;
  }): Promise<APIResponse<Array<ModelsJobRun>>> {
    return this.api.request('get', `/api/v2/admin/jobs/runs`, {
      params: params,
    });
  }

  async listAdminJobs(): Promise<APIResponse<Array<AdminJobInfo>>> {
    return this.api.request('get', `/api/v2/admin/jobs`);
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
