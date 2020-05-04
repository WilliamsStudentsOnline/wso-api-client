import { API, APIResponse } from '../api';
import { AutocompleteACEntry } from './types';

export class AutocompleteService {
  private api: API;

  constructor(api: API) {
    this.api = api;
  }

  async autocompleteAreaOfStudy(
    query: string,
    limit?: number
  ): Promise<APIResponse<AutocompleteACEntry>> {
    return this.api.request('get', '/api/v2/autocomplete/area-of-study', {
      params: {
        q: query,
        limit: limit,
      },
    });
  }

  async autocompleteCourse(
    query: string,
    limit?: number
  ): Promise<APIResponse<AutocompleteACEntry>> {
    return this.api.request('get', '/api/v2/autocomplete/course', {
      params: {
        q: query,
        limit: limit,
      },
    });
  }

  async autocompleteFactrak(
    query: string,
    limit?: number
  ): Promise<APIResponse<AutocompleteACEntry>> {
    return this.api.request('get', '/api/v2/autocomplete/factrak', {
      params: {
        q: query,
        limit: limit,
      },
    });
  }

  async autocompleteProfessor(
    query: string,
    limit?: number
  ): Promise<APIResponse<AutocompleteACEntry>> {
    return this.api.request('get', '/api/v2/autocomplete/professor', {
      params: {
        q: query,
        limit: limit,
      },
    });
  }

  async autocompleteTag(query: string, limit?: number): Promise<APIResponse<AutocompleteACEntry>> {
    return this.api.request('get', '/api/v2/autocomplete/tag', {
      params: {
        q: query,
        limit: limit,
      },
    });
  }
}
