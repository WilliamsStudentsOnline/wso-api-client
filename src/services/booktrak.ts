import { API, APIResponse } from '../api';
import {
  BooktrakCreateBookListingParams,
  BooktrakCreateBookParams,
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
    isbn?: string;
    preload?: string[];
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

  async createBook(params: BooktrakCreateBookParams): Promise<APIResponse<ModelsBook>> {
    return this.api.request('post', `/api/v2/booktrak/books`, {
      data: params,
    });
  }

  async updateBookCourses(
    bookID: number,
    params: BooktrakUpdateBookCoursesParams
  ): Promise<APIResponse<ModelsBook>> {
    return this.api.request('patch', `/api/v2/booktrak/books/${bookID}`, {
      data: params,
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
    isbn?: string;
    minCondition?: ModelsBookListing.ConditionEnum;
    maxCondition?: ModelsBookListing.ConditionEnum;
    listingType?: ModelsBookListing.ListingTypeEnum;
    preload?: string[];
  }): Promise<APIResponse<ModelsBookListing[]>> {
    return this.api.request('get', `/api/v2/booktrak/listings`, {
      params: params,
    });
  }

  async createBookListing(
    params: BooktrakCreateBookListingParams
  ): Promise<APIResponse<ModelsBookListing>> {
    return this.api.request('post', `/api/v2/booktrak/listings`, {
      data: params,
    });
  }

  async deleteBookListing(bookListingID: number): Promise<APIResponse<ModelsBookListing>> {
    return this.api.request('delete', `/api/v2/booktrak/listings/${bookListingID}`);
  }
}
