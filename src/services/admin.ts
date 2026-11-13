import { AxiosResponse } from 'axios';
import { APIResponse } from '../api';
import { AdminService as GeneratedAdminService } from '../generated/services/admin';

export class AdminService extends GeneratedAdminService {
  // raw text/plain, not the usual JSON envelope
  async getAdminJobRunLogs(id: number): Promise<APIResponse<string>> {
    const token = await this.api.auth.getToken();
    return this.api.api
      .request<string>({
        method: 'get',
        url: `/api/v2/admin/jobs/runs/${id}/logs`,
        headers: {
          Authorization: `Bearer ${token.token}`,
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
        },
        // bust browser HTTP cache — gin c.File used to 304 with an empty XHR body
        params: { _: Date.now() },
        responseType: 'text',
        validateStatus: (status: number) =>
          (status >= 200 && status < 300) || (status >= 400 && status < 500),
      })
      .then((resp: AxiosResponse<string>) => {
        if (resp.status === 304) {
          throw new Error('log response was not modified (empty cache body)');
        }
        if (resp.status >= 400) {
          let error: unknown;
          try {
            const parsed = typeof resp.data === 'string' ? JSON.parse(resp.data) : resp.data;
            error = parsed?.error;
          } catch {
            // body wasn't JSON
          }
          if (error) throw error;
          throw new Error('unknown api error');
        }
        const text = typeof resp.data === 'string' ? resp.data : '';
        return { status: resp.status, data: text };
      });
  }
}
