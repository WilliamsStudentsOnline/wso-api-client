/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
import {
  WcfmNow,
  WcfmShow,
} from '../types';

export class WcfmService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async getWCFMNow(): Promise<APIResponse<WcfmNow>> {
    return this.api.request('get', `/api/v2/wcfm/now`, {
      noAuth: true,
    });
  }

  async getWCFMSchedule(): Promise<APIResponse<Array<WcfmShow>>> {
    return this.api.request('get', `/api/v2/wcfm/schedule`, {
      noAuth: true,
    });
  }

}
