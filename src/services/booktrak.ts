import { API, APIResponse } from '../api';
import {
  BooktrakCreateBookListingParams,
  BooktrakCreateOrUpdateBookParams,
  BooktrakUpdateBookCoursesParams,
  ModelsBook,
  ModelsBookListing,
} from './types';

export class BooktrakService {
  private api: API;

  constructor(api: API) {
    this.api = api;
  }

  /* Book */
  async getBook(bookID: number): Promise<APIResponse<ModelsBook>> {
    return this.api.request('get', `/api/v2/booktrak/books/${bookID}`);
  }

  async listBooks(params?: {
    offset?: number;
    limit?: number;
    title?: string;
    publisher?: string;
    isbn_10?: string;
    isbn_13?: string;
  }): Promise<APIResponse<ModelsBook[]>> {
    return this.api.request('get', `/api/v2/booktrak/books`, {
      params: params,
    });
  }

  async searchBooks(params?: { q?: string; limit?: number }): Promise<APIResponse<ModelsBook[]>> {
    return this.api.request('get', `/api/v2/booktrak/books/web`, {
      params: params,
    });
  }

  async createOrUpdateBook(
    createParams: BooktrakCreateOrUpdateBookParams
  ): Promise<APIResponse<ModelsBook>> {
    return this.api.request('post', `/api/v2/booktrak/books`, {
      data: createParams,
    });
  }

  async updateBook(
    bookID: number,
    updateParams: BooktrakUpdateBookCoursesParams
  ): Promise<APIResponse<ModelsBook>> {
    return this.api.request('post', `/api/v2/booktrak/books/${bookID}`, {
      data: updateParams,
    });
  }

  /* Book Listing */
  async getBookListing(bookListingID: number): Promise<APIResponse<ModelsBookListing>> {
    return this.api.request('get', `/api/v2/booktrak/listings/${bookListingID}`);
  }

  async listBookListings(params?: {
    offset?: number;
    limit?: number;
    bookID?: number;
    courseID?: number;
    userID?: number;
    isbn10?: string;
    isbn13?: string;
    minCondition?: number;
    maxCondition?: number;
    isBuyListing?: boolean;
  }): Promise<APIResponse<ModelsBookListing[]>> {
    return this.api.request('get', `/api/v2/booktrak/listings`, {
      params: params,
    });
  }

  async createBookListing(
    createParams: BooktrakCreateBookListingParams
  ): Promise<APIResponse<ModelsBookListing>> {
    return this.api.request('post', `/api/v2/booktrak/listings`, {
      data: createParams,
    });
  }

  async deleteBookListing(bookListingID: number): Promise<APIResponse<ModelsBookListing>> {
    return this.api.request('delete', `/api/v2/booktrak/listings/${bookListingID}`);
  }
}
