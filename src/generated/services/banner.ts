/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
import {
  BannerBanner,
} from '../types';

export class BannerService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async getBanner(): Promise<APIResponse<BannerBanner>> {
    return this.api.request('get', `/api/v2/banner`, {
      noAuth: true,
    });
  }

  async setBanner(banner: BannerBanner): Promise<APIResponse<BannerBanner>> {
    return this.api.request('post', `/api/v2/banner`, {
      data: banner,
    });
  }

}
