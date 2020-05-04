import { APIRequest, APIResponse } from './api';
import { AuthService, LoginData, Token } from './services/auth';

export interface Authentication {
  getToken(): Promise<Token>;

  onResponse(resp: APIResponse): void;

  onNoScopeAuthorization(
    req: { method: string; path: string; req: APIRequest },
    resp: APIResponse
  ): void;
}

export class SimpleAuthentication implements Authentication {
  private token: Token;

  constructor(token: string) {
    this.token = new Token(token);
  }

  async getToken(): Promise<Token> {
    return this.token;
  }

  async onResponse(resp: APIResponse) {}

  onNoScopeAuthorization(
    req: { method: string; path: string; req: APIRequest },
    resp: APIResponse
  ) {}
}

export class NoAuthentication implements Authentication {
  constructor() {}

  async getToken(): Promise<Token> {
    return new Token('');
  }

  async onResponse(resp: APIResponse) {}
  onNoScopeAuthorization(
    req: { method: string; path: string; req: APIRequest },
    resp: APIResponse
  ) {}
}

export class HandledAuthentication implements Authentication {
  private identityToken: Token;
  private apiToken: Token;
  private authSvc: AuthService;

  constructor(identityToken: Token, apiToken: Token, authSvc: AuthService) {
    this.identityToken = identityToken;
    this.apiToken = apiToken;
    this.authSvc = authSvc;
  }

  static async createAuth(authSvc: AuthService, data: LoginData): Promise<HandledAuthentication> {
    const identToken = await authSvc.getIdentityToken(data);
    const apiToken = await authSvc.getAPIToken(identToken.token);
    return new HandledAuthentication(identToken, apiToken, authSvc);
  }

  getIdentityToken(): Token {
    return this.identityToken;
  }

  getAPIToken(): Token {
    return this.apiToken;
  }

  async getToken(): Promise<Token> {
    return this.getAPIToken();
  }

  async onResponse(resp: APIResponse) {
    if (this.apiToken.expiry.valueOf() - new Date().valueOf() <= 3600000 || resp.updateToken) {
      this.authSvc.refreshAPIToken().then((resp: Token) => {
        this.apiToken = resp;
      });
    }
  }

  async onNoScopeAuthorization() {
    await this.authSvc.refreshAPIToken().then((resp: Token) => {
      this.apiToken = resp;
    });
  }
}
