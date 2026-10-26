/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
import {
  DormtrakDormRoomPhotoInfo,
  DormtrakReviewCreateParams,
  DormtrakReviewUpdateParams,
  ModelsDorm,
  ModelsDormFacts,
  ModelsDormRoom,
  ModelsDormtrakRanking,
  ModelsDormtrakReview,
  ModelsNeighborhood,
  ModelsNeighborhoodFacts,
} from '../types';

export class DormtrakService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async createReview(createParams: DormtrakReviewCreateParams): Promise<APIResponse<ModelsDormtrakReview>> {
    return this.api.request('post', `/api/v2/dormtrak/reviews`, {
      data: createParams,
    });
  }

  async deleteReview(reviewID: number): Promise<APIResponse<ModelsDormtrakReview>> {
    return this.api.request('delete', `/api/v2/dormtrak/reviews/${reviewID}`);
  }

  async getDorm(dormID: number): Promise<APIResponse<ModelsDorm>> {
    return this.api.request('get', `/api/v2/dormtrak/dorms/${dormID}`);
  }

  async getDormFacts(dormID: number): Promise<APIResponse<ModelsDormFacts>> {
    return this.api.request('get', `/api/v2/dormtrak/dorms/${dormID}/facts`);
  }

  async getDormRooms(dormID: number, params?: {
    offset?: number;
    limit?: number;
  }): Promise<APIResponse<Array<ModelsDormRoom>>> {
    return this.api.request('get', `/api/v2/dormtrak/dorms/${dormID}/rooms`, {
      params: params,
    });
  }

  async getNeighborhood(neighborhoodID: number): Promise<APIResponse<ModelsNeighborhood>> {
    return this.api.request('get', `/api/v2/dormtrak/neighborhoods/${neighborhoodID}`);
  }

  async getNeighborhoodFacts(neighborhoodID: number): Promise<APIResponse<ModelsNeighborhoodFacts>> {
    return this.api.request('get', `/api/v2/dormtrak/neighborhoods/${neighborhoodID}/facts`);
  }

  async getRankings(): Promise<APIResponse<Array<ModelsDormtrakRanking>>> {
    return this.api.request('get', `/api/v2/dormtrak/rankings`);
  }

  async getReview(reviewID: number): Promise<APIResponse<ModelsDormtrakReview>> {
    return this.api.request('get', `/api/v2/dormtrak/reviews/${reviewID}`);
  }

  async getReviewPhotos(reviewID: number): Promise<APIResponse<Array<DormtrakDormRoomPhotoInfo>>> {
    return this.api.request('get', `/api/v2/dormtrak/reviews/${reviewID}/photos`);
  }

  async getRoomPhotos(roomID: number): Promise<APIResponse<Array<DormtrakDormRoomPhotoInfo>>> {
    return this.api.request('get', `/api/v2/dormtrak/rooms/${roomID}/photos`);
  }

  async listDorms(params?: {
    offset?: number;
    limit?: number;
    preload?: Array<string>;
    q?: string;
  }): Promise<APIResponse<Array<ModelsDorm>>> {
    return this.api.request('get', `/api/v2/dormtrak/dorms`, {
      params: params,
    });
  }

  async listNeighborhoods(): Promise<APIResponse<Array<ModelsNeighborhood>>> {
    return this.api.request('get', `/api/v2/dormtrak/neighborhoods`);
  }

  async listReviews(params?: {
    dormID?: number;
    dormRoomID?: number;
    userID?: number;
    offset?: string;
    limit?: number;
    preload?: Array<string>;
    commented?: boolean;
  }): Promise<APIResponse<Array<ModelsDormtrakReview>>> {
    return this.api.request('get', `/api/v2/dormtrak/reviews`, {
      params: params,
    });
  }

  async updateReview(reviewID: number, updateParams: DormtrakReviewUpdateParams): Promise<APIResponse<ModelsDormtrakReview>> {
    return this.api.request('patch', `/api/v2/dormtrak/reviews/${reviewID}`, {
      data: updateParams,
    });
  }

  async uploadReviewPhoto(reviewID: number, file: Blob | File | string): Promise<APIResponse<any>> {
    const formData = new FormData();
    formData.append('file', file as any);
    return this.api.request('put', `/api/v2/dormtrak/reviews/${reviewID}/photo`, {
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

}
