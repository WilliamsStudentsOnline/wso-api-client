import axios, { AxiosInstance, AxiosResponse, Method } from 'axios';
import { Authentication, NoAuthentication } from './auth';

export class API {
  auth: Authentication;
  api: AxiosInstance;
  private base: string;

  constructor(apiBase: string, auth: Authentication) {
    this.base = apiBase;
    this.auth = auth;
    this.api = axios.create({
      baseURL: apiBase,
      validateStatus: (status: number) => {
        return (status >= 200 && status < 300) || (status >= 400 && status < 500);
      },
    });
  }

  isAuthenticated(): boolean {
    return !(this.auth instanceof NoAuthentication);
  }

  // returns a new API object with the newAuth object.
  updateAuth(newAuth: Authentication): API {
    return new API(this.base, newAuth);
  }

  /**
   * Performs a request with the given parameters, returning the response.
   * @param {string} method HTTP method (e.g. POST, GET)
   * @param {string} path API path
   * @param {APIRequest} req additional request parameters.
   * @return {Promise<APIResponse>} the http response given by the server.
   * @throws {APIError} throws an error if the http status code is above 400, or if there is an error.
   */
  async request(method: string, path: string, req: APIRequest = {}): Promise<APIResponse> {
    const config = {
      method: <Method>method,
      url: path,
      headers: req.headers || {},
      data: req.data,
      params: req.params,
    };
    if (!req.noAuth) {
      const token = await this.auth.getToken();
      config.headers['Authorization'] = `Bearer ${token.token}`;
    }

    return this.api.request<APIResponse>(config).then((resp: AxiosResponse<APIResponse>) => {
      if (resp.status >= 400) {
        if (resp.data.error) {
          // If error NoScopeAuthorization, call the event
          if (resp.data.error.errorCode == 1330)
            this.auth.onNoScopeAuthorization({ method, path, req }, resp);

          throw resp.data.error;
        }
        throw new Error('unknown api error');
      }
      this.auth.onResponse(resp.data);
      return resp.data;
    });
  }
}

export interface APIRequest {
  data?: any;
  params?: any;
  headers?: any;
  noAuth?: boolean;
}

export interface APIError extends Error {
  errorCode: number;
  message: string;
  errors?: string[];
}

export interface APIResponse<T = any> {
  status: number;
  data?: T;
  error?: APIError;
  updateToken?: boolean;
  paginationTotal?: number;
}
