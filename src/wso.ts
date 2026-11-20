import { AuthService } from './services/auth';
import { API } from './api';
import { Authentication } from './auth';
import { AutocompleteService } from './services/autocomplete';
import { BulletinService } from './services/bulletin';
import { DormtrakService } from './services/dormtrak';
import { EphcatchService } from './services/ephcatch';
import { FactrakService } from './services/factrak';
import { FeedbackService } from './services/feedback';
import { MiscService } from './services/misc';
import { UserService } from './services/user';
import { ChatService } from './services/chat';
import { NotificationService } from './services/notification';
import { GoodrichService } from './services/goodrich';
import { BooktrakService } from './services/booktrak';
import { BannerService } from './services/banner';
import { AdminService } from './services/admin';
import { BoardService } from './services/board';
import { WcfmService } from './services/wcfm';

export class WSO {
  public api: API;
  private _admin: AdminService;
  private _auth: AuthService;
  private _autocomplete: AutocompleteService;
  private _banner: BannerService;
  private _board: BoardService;
  private _booktrak: BooktrakService;
  private _bulletin: BulletinService;
  private _chat: ChatService;
  private _dormtrak: DormtrakService;
  private _ephcatch: EphcatchService;
  private _factrak: FactrakService;
  private _feedback: FeedbackService;
  private _goodrich: GoodrichService;
  private _misc: MiscService;
  private _notification: NotificationService;
  private _user: UserService;
  private _wcfm: WcfmService;

  constructor(api: API) {
    this.api = api;

    this._admin = new AdminService(api);
    this._auth = new AuthService(api);
    this._autocomplete = new AutocompleteService(api);
    this._banner = new BannerService(api);
    this._board = new BoardService(api);
    this._bulletin = new BulletinService(api);
    this._booktrak = new BooktrakService(api);
    this._chat = new ChatService(api);
    this._dormtrak = new DormtrakService(api);
    this._ephcatch = new EphcatchService(api);
    this._factrak = new FactrakService(api);
    this._feedback = new FeedbackService(api);
    this._goodrich = new GoodrichService(api);
    this._misc = new MiscService(api);
    this._notification = new NotificationService(api);
    this._user = new UserService(api);
    this._wcfm = new WcfmService(api);
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

  get notificationService(): NotificationService {
    return this._notification;
  }

  get factrakService(): FactrakService {
    return this._factrak;
  }

  get feedbackService(): FeedbackService {
    return this._feedback;
  }

  get ephcatchService(): EphcatchService {
    return this._ephcatch;
  }

  get dormtrakService(): DormtrakService {
    return this._dormtrak;
  }

  get booktrakService(): BooktrakService {
    return this._booktrak;
  }

  get bannerService(): BannerService {
    return this._banner;
  }

  get boardService(): BoardService {
    return this._board;
  }

  get adminService(): AdminService {
    return this._admin;
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

  get goodrichService(): GoodrichService {
    return this._goodrich;
  }

  get wcfmService(): WcfmService {
    return this._wcfm;
  }

  private initServices(api: API) {
    this._admin = new AdminService(api);
    this._auth = new AuthService(api);
    this._autocomplete = new AutocompleteService(api);
    this._banner = new BannerService(api);
    this._board = new BoardService(api);
    this._booktrak = new BooktrakService(api);
    this._bulletin = new BulletinService(api);
    this._dormtrak = new DormtrakService(api);
    this._ephcatch = new EphcatchService(api);
    this._factrak = new FactrakService(api);
    this._feedback = new FeedbackService(api);
    this._goodrich = new GoodrichService(api);
    this._misc = new MiscService(api);
    this._user = new UserService(api);
    this._wcfm = new WcfmService(api);
    this._notification = new NotificationService(api);
    this._chat = new ChatService(api);
  }
}

export * from './api';
export * from './auth';
export { Goodrich } from './services/goodrich';
