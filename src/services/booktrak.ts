import { APIResponse } from '../api';
import { BooktrakService as GeneratedBooktrakService } from '../generated/services/booktrak';
import {
  BooktrakCreateBookParams,
  BooktrakUpdateBookCoursesParams,
  ModelsBook,
  ModelsBookListing,
  ServerHealthCheckResponse,
} from '../generated/types';

export class BooktrakService extends GeneratedBooktrakService {
  async healthCheck(): Promise<APIResponse<ServerHealthCheckResponse>> {
    return this.api.request('get', '/api/v2/booktrak/health-check');
  }

  async getBook(bookID: number): Promise<APIResponse<ModelsBook>> {
    return this.api.request('get', `/api/v2/booktrak/books/${bookID}`);
  }

  async searchBooks(params?: { q?: string; limit?: number }): Promise<APIResponse<ModelsBook[]>> {
    return this.api.request('get', `/api/v2/booktrak/books/web`, { params });
  }

  async createBook(params: BooktrakCreateBookParams): Promise<APIResponse<ModelsBook>> {
    return this.api.request('post', `/api/v2/booktrak/books`, { data: params });
  }

  async updateBookCourses(
    bookID: number,
    updateParams: BooktrakUpdateBookCoursesParams
  ): Promise<APIResponse<ModelsBook>> {
    return this.api.request('patch', `/api/v2/booktrak/books/${bookID}`, {
      data: updateParams,
    });
  }

  async getBookListing(bookListingID: number): Promise<APIResponse<ModelsBookListing>> {
    return this.api.request('get', `/api/v2/booktrak/listings/${bookListingID}`);
  }

  // (id, params) or legacy (params, id)
  async updateBookListing(
    a: number | Record<string, any>,
    b?: number | Record<string, any>
  ): Promise<APIResponse<ModelsBookListing>> {
    const id = typeof a === 'number' ? a : (b as number);
    const params = typeof a === 'number' ? b : a;
    return this.api.request('put', `/api/v2/booktrak/listings/${id}`, { data: params });
  }
}
