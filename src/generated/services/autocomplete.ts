/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
import {
  AutocompleteACEntry,
} from '../types';

export class AutocompleteService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async autocompleteAreaOfStudy(params?: {
    q: string;
    limit?: number;
  }): Promise<APIResponse<Array<AutocompleteACEntry>>> {
    return this.api.request('get', `/api/v2/autocomplete/area-of-study`, {
      params: params,
    });
  }

  async autocompleteCourse(params?: {
    q: string;
    limit?: number;
  }): Promise<APIResponse<Array<AutocompleteACEntry>>> {
    return this.api.request('get', `/api/v2/autocomplete/course`, {
      params: params,
    });
  }

  async autocompleteFactrak(params?: {
    q: string;
    limit?: number;
  }): Promise<APIResponse<Array<AutocompleteACEntry>>> {
    return this.api.request('get', `/api/v2/autocomplete/factrak`, {
      params: params,
    });
  }

  async autocompleteProfessor(params?: {
    q: string;
    limit?: number;
  }): Promise<APIResponse<Array<AutocompleteACEntry>>> {
    return this.api.request('get', `/api/v2/autocomplete/professor`, {
      params: params,
    });
  }

  async autocompleteTag(params?: {
    q: string;
    limit?: number;
  }): Promise<APIResponse<Array<AutocompleteACEntry>>> {
    return this.api.request('get', `/api/v2/autocomplete/tag`, {
      params: params,
    });
  }

}
