import { API, APIResponse } from '../api';
import jwtDecode from 'jwt-decode';

export interface LoginData {
  unixID?: string;
  password?: string;
  useIP?: boolean;
  localIP?: boolean;
}

export class AuthService {
  private api: API;

  constructor(api: API) {
    this.api = api;
  }

  /* V2 Auth API */
  async getIdentityToken(data: LoginData): Promise<Token> {
    return this.api
      .request('post', '/api/v2/auth/identity/token', {
        data: data,
        noAuth: true,
      })
      .then((resp: APIResponse<AuthResponse>) => {
        if (!resp.data) throw new Error('missing response data');
        return new Token(resp.data.token);
      });
  }

  async getAPIToken(identityToken: string): Promise<Token> {
    return this.api
      .request('post', '/api/v2/auth/api/token', {
        noAuth: true,
        headers: {
          Authorization: `Bearer ${identityToken}`,
        },
      })
      .then((resp: APIResponse<AuthResponse>) => {
        if (!resp.data) throw new Error('missing response data');
        return new Token(resp.data.token);
      });
  }

  async refreshAPIToken(apiToken?: string): Promise<Token> {
    let req = {};
    if (apiToken) {
      req = {
        noAuth: true,
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      };
    }
    return this.api
      .request('post', '/api/v2/auth/identity/token', req)
      .then((resp: APIResponse<AuthResponse>) => {
        if (!resp.data) throw new Error('missing response data');
        return new Token(resp.data.token);
      });
  }

  /* V1 Auth API */
  async refreshTokenV1(): Promise<Token> {
    return this.api
      .request('post', '/api/v2/auth/refresh-token')
      .then((resp: APIResponse<AuthResponse>) => {
        if (!resp.data) throw new Error('missing response data');
        return new Token(resp.data.token);
      });
  }

  async updateTokenV1(): Promise<Token> {
    return this.api
      .request('post', '/api/v2/auth/update-token')
      .then((resp: APIResponse<AuthResponse>) => {
        if (!resp.data) throw new Error('missing response data');
        return new Token(resp.data.token);
      });
  }

  async loginV1(data: LoginData): Promise<Token> {
    return this.api
      .request('post', '/api/v2/auth/login', {
        data: data,
        noAuth: true,
      })
      .then((resp: APIResponse<AuthResponse>) => {
        if (!resp.data) throw new Error('missing response data');
        return new Token(resp.data.token);
      });
  }
}

interface AuthResponse {
  token: string;
  expiry: Date;
}

export class Token {
  token: string;
  scopes: string[];
  expiry: Date;
  id: number;

  constructor(token: string) {
    if (!token) {
      this.token = '';
      this.scopes = [];
      this.expiry = new Date();
      this.id = 0;
      return;
    }

    const jwt = jwtDecode<any>(token);
    this.token = token;
    this.scopes = jwt.scope;
    this.id = jwt.id;
    this.expiry = new Date(jwt.exp * 1000);
  }
}

// The current scopes
export enum Scope {
  // Global scopes:
  AdminAll = 'admin:all',
  // Allows client to do write-level requests as long as it is scoped to models involving self, not all models
  WriteSelf = 'write:self',

  // Service scopes. Permits clients to access services read only. If it is included with the global write-self scope,
  // allows write access to service, iff it is scoped to models owned and allowed to be edited by self.

  // Service: Factrak
  // Limited access to factrak for people with outstanding survey deficit
  FactrakLimited = 'service:factrak:limited',
  // Full access to factrak for people with no survey deficit. Includes everything from ScopeFactrakLimited.
  FactrakFull = 'service:factrak:full',
  // Allows admin access to factrak. This includes everything from ScopeFactrakFull, while also opening up
  // admin endpoints and allowing certain admin-level write actions (need write-self for normal actions, though).
  FactrakAdmin = 'service:factrak:admin',

  // Service: Dormtrak
  // Access to dormtrak reviews, etc.
  Dormtrak = 'service:dormtrak',
  // Ability to create reviews, etc. (must be upperclass)
  DormtrakWrite = 'service:dormtrak:write',

  Ephcatch = 'service:ephcatch',
  Bulletin = 'service:bulletin',
  // This is for facebook & users
  Users = 'service:users',
  // Allows you to access other services not mentioned above
  AllOther = 'service:other',

  Ephmatch = 'service:ephmatch',
}
