/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
import {
  FeedbackCreateFeedbackParams,
  ModelsFeedback,
} from '../types';

export class FeedbackService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async createFeedback(body: FeedbackCreateFeedbackParams): Promise<APIResponse<ModelsFeedback>> {
    return this.api.request('post', `/api/v2/feedback`, {
      data: body,
    });
  }

}
