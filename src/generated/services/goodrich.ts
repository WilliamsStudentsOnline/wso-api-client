/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
import {
  GoodrichCreateOrderParams,
  GoodrichOrderLease,
  GoodrichTimeSlot,
  GoodrichUpdateMenuItemParams,
  GoodrichUpdateOrderParams,
  ModelsGoodrichMenuItem,
  ModelsGoodrichOrder,
} from '../types';

export class GoodrichService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async createOrder(createParams: GoodrichCreateOrderParams): Promise<APIResponse<ModelsGoodrichOrder>> {
    return this.api.request('post', `/api/v2/goodrich/orders`, {
      data: createParams,
    });
  }

  async getOrder(orderID: number): Promise<APIResponse<ModelsGoodrichOrder>> {
    return this.api.request('get', `/api/v2/goodrich/orders/${orderID}`);
  }

  async getOrderLease(): Promise<APIResponse<GoodrichOrderLease>> {
    return this.api.request('get', `/api/v2/goodrich/order-lease`);
  }

  async getUserOrder(orderID: number): Promise<APIResponse<ModelsGoodrichOrder>> {
    return this.api.request('get', `/api/v2/goodrich/user/orders/${orderID}`);
  }

  async listMenu(params?: {
    all?: boolean;
  }): Promise<APIResponse<Array<ModelsGoodrichMenuItem>>> {
    return this.api.request('get', `/api/v2/goodrich/menu`, {
      params: params,
    });
  }

  async listOrders(params?: {
    offset?: number;
    limit?: number;
    sort?: string;
    date?: string;
    userID?: number;
    statuses?: Array<string>;
  }): Promise<APIResponse<Array<ModelsGoodrichOrder>>> {
    return this.api.request('get', `/api/v2/goodrich/orders`, {
      params: params,
    });
  }

  async listTimeSlots(): Promise<APIResponse<Array<GoodrichTimeSlot>>> {
    return this.api.request('get', `/api/v2/goodrich/timeslots`);
  }

  async listUserOrders(): Promise<APIResponse<Array<ModelsGoodrichOrder>>> {
    return this.api.request('get', `/api/v2/goodrich/user/orders`);
  }

  async updateMenuItem(itemID: number, updateParams: GoodrichUpdateMenuItemParams): Promise<APIResponse<ModelsGoodrichMenuItem>> {
    return this.api.request('patch', `/api/v2/goodrich/menu/${itemID}`, {
      data: updateParams,
    });
  }

  async updateOrder(orderID: number, updateParams: GoodrichUpdateOrderParams): Promise<APIResponse<ModelsGoodrichOrder>> {
    return this.api.request('patch', `/api/v2/goodrich/orders/${orderID}`, {
      data: updateParams,
    });
  }

}
