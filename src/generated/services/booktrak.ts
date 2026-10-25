/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
import {
  BooktrakCreateBookListingParams,
  BooktrakCreateBookParams,
  BooktrakUpdateBookCoursesParams,
  ModelsBook,
  ModelsBookListing,
} from '../types';

export class BooktrakService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async createBook(createParams: BooktrakCreateBookParams): Promise<APIResponse<ModelsBook>> {
    return this.api.request('post', `/api/v2/booktrak/books`, {
      data: createParams,
    });
  }

  async createBookListing(createParams: BooktrakCreateBookListingParams): Promise<APIResponse<ModelsBookListing>> {
    return this.api.request('post', `/api/v2/booktrak/listings`, {
      data: createParams,
    });
  }

  async deleteBookListing(bookListingID: number): Promise<APIResponse<ModelsBookListing>> {
    return this.api.request('delete', `/api/v2/booktrak/listings/${bookListingID}`);
  }

  async getBook(bookID: number): Promise<APIResponse<ModelsBook>> {
    return this.api.request('get', `/api/v2/booktrak/books/${bookID}`);
  }

  async getBookListing(bookListingID: number): Promise<APIResponse<ModelsBookListing>> {
    return this.api.request('get', `/api/v2/booktrak/listings/${bookListingID}`);
  }

  async listBookListings(params?: {
    offset?: number;
    limit?: number;
    courseID?: number;
    userID?: number;
    isbn?: string;
    minCondition?: string;
    maxCondition?: string;
    listingType?: string;
    preload?: Array<string>;
  }): Promise<APIResponse<Array<ModelsBookListing>>> {
    return this.api.request('get', `/api/v2/booktrak/listings`, {
      params: params,
    });
  }

  async listBooks(params?: {
    offset?: number;
    limit?: number;
    title?: string;
    publisher?: string;
    isbn?: string;
  }): Promise<APIResponse<Array<ModelsBook>>> {
    return this.api.request('get', `/api/v2/booktrak/books`, {
      params: params,
    });
  }

  async updateBookCourses(bookID: number, updateParams: BooktrakUpdateBookCoursesParams): Promise<APIResponse<ModelsBook>> {
    return this.api.request('patch', `/api/v2/booktrak/books/${bookID}`, {
      data: updateParams,
    });
  }

  async updateBookListing(bookListingID: number, updateParams: BooktrakCreateBookListingParams): Promise<APIResponse<ModelsBookListing>> {
    return this.api.request('put', `/api/v2/booktrak/listings/${bookListingID}`, {
      data: updateParams,
    });
  }

}
