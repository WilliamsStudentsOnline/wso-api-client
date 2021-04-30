import { API, APIResponse } from '../api';
import {
  ModelsGoodrichMenuItem,
  ModelsGoodrichOrder,
  GoodrichCreateOrderParams,
  GoodrichUpdateOrderParams,
  GoodrichTimeSlot,
  GoodrichUpdateMenuItemParams,
} from './types';

export class GoodrichService {
  private api: API;

  constructor(api: API) {
    this.api = api;
  }

  async listTimeSlots(): Promise<APIResponse<GoodrichTimeSlot[]>> {
    return this.api.request('get', '/api/v2/goodrich/timeslots');
  }

  /* Menu Service */
  async listMenu(params?: { all?: boolean }): Promise<APIResponse<ModelsGoodrichMenuItem[]>> {
    return this.api.request('get', '/api/v2/goodrich/menu', {
      params: params,
    });
  }

  /* Manager Menu Service */

  /*
  async createMenuItem(
    createParams: GoodrichCreateMenuItemParams
  ): Promise<APIResponse<ModelsGoodrichMenuItem>> {
    return this.api.request('post', '/api/v2/goodrich/menu', {
      data: createParams,
    });
  }
  */

  async updateMenuItem(
    itemID: number,
    updateParams: GoodrichUpdateMenuItemParams
  ): Promise<APIResponse<ModelsGoodrichMenuItem>> {
    return this.api.request('patch', `/api/v2/goodrich/menu/${itemID}`, {
      data: updateParams,
    });
  }

  /* Order Service */
  async listUserOrders(): Promise<APIResponse<ModelsGoodrichOrder[]>> {
    return this.api.request('get', '/api/v2/goodrich/user/orders');
  }

  async getUserOrder(orderID: number): Promise<APIResponse<ModelsGoodrichOrder>> {
    return this.api.request('get', `/api/v2/goodrich/user/orders/${orderID}`);
  }

  async createOrder(
    createParams: GoodrichCreateOrderParams
  ): Promise<APIResponse<ModelsGoodrichOrder>> {
    return this.api.request('post', '/api/v2/goodrich/orders', {
      data: createParams,
    });
  }

  /* Order Manager Service */
  async listOrders(params?: {
    offset?: number;
    limit?: number;
    sort?: string;
    date?: string;
    userID?: number;
    statuses?: Goodrich.OrderStatus[];
  }): Promise<APIResponse<ModelsGoodrichOrder[]>> {
    return this.api.request('get', '/api/v2/goodrich/orders', {
      params: params,
    });
  }

  async getOrder(orderID: number): Promise<APIResponse<ModelsGoodrichOrder>> {
    return this.api.request('get', `/api/v2/goodrich/orders/${orderID}`);
  }

  async updateOrder(
    orderID: number,
    updateParams: GoodrichUpdateOrderParams
  ): Promise<APIResponse<ModelsGoodrichOrder>> {
    return this.api.request('patch', `/api/v2/goodrich/orders/${orderID}`, {
      data: updateParams,
    });
  }
}

export namespace Goodrich {
  export enum OrderStatus {
    Unknown = 0,
    Placed,
    Ready,
    Paid,
  }
  export enum PaymentMethod {
    Unknown = 0,
    Swipe,
    Points,
    Cash,
    CreditCard,
  }
}
