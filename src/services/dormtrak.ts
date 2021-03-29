import { API, APIResponse } from '../api';
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
} from './types';

export class DormtrakService {
  private api: API;

  constructor(api: API) {
    this.api = api;
  }

  /* Dorms */

  async listDorms(params?: {
    offset?: number;
    limit?: number;
    preload?: string[];
    q?: string;
  }): Promise<APIResponse<ModelsDorm[]>> {
    return this.api.request('get', '/api/v2/dormtrak/dorms', {
      params: params,
    });
  }

  async getDorm(dormID: number): Promise<APIResponse<ModelsDorm>> {
    return this.api.request('get', `/api/v2/dormtrak/dorms/${dormID}`);
  }

  async getDormFacts(dormID: number): Promise<APIResponse<ModelsDormFacts>> {
    return this.api.request('get', `/api/v2/dormtrak/dorms/${dormID}/facts`);
  }

  async getDormRooms(
    dormID: number,
    params?: { offset?: number; limit?: number }
  ): Promise<APIResponse<ModelsDormRoom[]>> {
    return this.api.request('get', `/api/v2/dormtrak/dorms/${dormID}/rooms`, {
      params: params,
    });
  }

  /* Neighborhoods */

  async listNeighborhoods(): Promise<APIResponse<ModelsNeighborhood[]>> {
    return this.api.request('get', '/api/v2/dormtrak/neighborhoods');
  }

  async getNeighborhood(neighborhoodID: number): Promise<APIResponse<ModelsNeighborhood>> {
    return this.api.request('get', `/api/v2/dormtrak/neighborhoods/${neighborhoodID}`);
  }

  async getNeighborhoodFacts(
    neighborhoodID: number
  ): Promise<APIResponse<ModelsNeighborhoodFacts>> {
    return this.api.request('get', `/api/v2/dormtrak/neighborhoods/${neighborhoodID}/facts`);
  }

  /* Rankings */

  async getRankings(): Promise<APIResponse<ModelsDormtrakRanking>> {
    return this.api.request('get', `/api/v2/dormtrak/rankings`);
  }

  /* Reviews */

  async listReviews(params?: {
    dormID?: number;
    dormRoomID?: number;
    userID?: number;
    offset?: string;
    limit?: number;
    preload?: string[];
    commented?: boolean;
  }): Promise<APIResponse<ModelsDormtrakReview[]>> {
    return this.api.request('get', '/api/v2/dormtrak/reviews', {
      params: params,
    });
  }

  async createReview(
    createParams: DormtrakReviewCreateParams
  ): Promise<APIResponse<ModelsDormtrakReview>> {
    return this.api.request('post', '/api/v2/dormtrak/reviews', {
      data: createParams,
    });
  }

  async getReview(reviewID: number): Promise<APIResponse<ModelsDormtrakReview>> {
    return this.api.request('get', `/api/v2/dormtrak/reviews/${reviewID}`);
  }

  async deleteReview(reviewID: number): Promise<APIResponse<ModelsDormtrakReview>> {
    return this.api.request('delete', `/api/v2/dormtrak/reviews/${reviewID}`);
  }

  async updateReview(
    reviewID: number,
    updateParams: DormtrakReviewUpdateParams
  ): Promise<APIResponse<ModelsDormtrakReview>> {
    return this.api.request('patch', `/api/v2/dormtrak/reviews/${reviewID}`, {
      data: updateParams,
    });
  }

  // Uploads a review's photo
  async uploadReviewPhoto(reviewID: number, file: string | Blob): Promise<APIResponse> {
    const formData = new FormData();
    formData.append('file', file);
    return this.api.request('put', `/api/v2/dormtrak/reviews/${reviewID}/photo`, {
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  // Get a review's photos
  async getReviewPhotos(reviewID: number): Promise<APIResponse<DormtrakDormRoomPhotoInfo[]>> {
    return this.api.request('get', `/api/v2/dormtrak/reviews/${reviewID}/photos`);
  }

  /* Rooms */
  // Get a room's photos
  async getRoomPhotos(roomID: number): Promise<APIResponse<DormtrakDormRoomPhotoInfo[]>> {
    return this.api.request('get', `/api/v2/dormtrak/rooms/${roomID}/photos`);
  }
}
