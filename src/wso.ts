import { AuthService } from './services/auth';
import { API } from './api';
import { Authentication } from './auth';
import { AutocompleteService } from './services/autocomplete';
import { BulletinService } from './services/bulletin';
import { DormtrakService } from './services/dormtrak';
import { EphcatchService } from './services/ephcatch';
import { EphmatchService } from './services/ephmatch';
import { FactrakService } from './services/factrak';
import { MiscService } from './services/misc';
import { UserService } from './services/user';
import {ChatService} from "./services/chat";

export class WSO {
  private api: API;
  private _auth: AuthService;
  private _autocomplete: AutocompleteService;
  private _bulletin: BulletinService;
  private _chat: ChatService;
  private _dormtrak: DormtrakService;
  private _ephcatch: EphcatchService;
  private _ephmatch: EphmatchService;
  private _factrak: FactrakService;
  private _misc: MiscService;
  private _user: UserService;

  constructor(api: API) {
    this.api = api;

    this._auth = new AuthService(api);
    this._autocomplete = new AutocompleteService(api);
    this._bulletin = new BulletinService(api);
    this._chat = new ChatService(api);
    this._dormtrak = new DormtrakService(api);
    this._ephcatch = new EphcatchService(api);
    this._ephmatch = new EphmatchService(api);
    this._factrak = new FactrakService(api);
    this._misc = new MiscService(api);
    this._user = new UserService(api);
  }

  isAuthenticated(): boolean {
    return this.api.isAuthenticated();
  }

  // returns a new API object with the newAuth object.
  updateAuth(newAuth: Authentication): WSO {
    return new WSO(this.api.updateAuth(newAuth));
  }

  get userService(): UserService {
    return this._user;
  }

  get miscService(): MiscService {
    return this._misc;
  }

  get factrakService(): FactrakService {
    return this._factrak;
  }

  get ephmatchService(): EphmatchService {
    return this._ephmatch;
  }

  get ephcatchService(): EphcatchService {
    return this._ephcatch;
  }

  get dormtrakService(): DormtrakService {
    return this._dormtrak;
  }

  get bulletinService(): BulletinService {
    return this._bulletin;
  }

  get autocompleteService(): AutocompleteService {
    return this._autocomplete;
  }

  get authService(): AuthService {
    return this._auth;
  }

  get chatService(): ChatService {
    return this._chat;
  }

  private initServices(api: API) {
    this._auth = new AuthService(api);
    this._autocomplete = new AutocompleteService(api);
    this._bulletin = new BulletinService(api);
    this._dormtrak = new DormtrakService(api);
    this._ephcatch = new EphcatchService(api);
    this._ephmatch = new EphmatchService(api);
    this._factrak = new FactrakService(api);
    this._misc = new MiscService(api);
    this._user = new UserService(api);
    this._chat = new ChatService(api);
  }
}

export * from './api';
export * from './auth';
