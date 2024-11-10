import { API, APIResponse } from '../api';
import { CourseSelectionSetRequest, ModelsCourseSelectionString } from './types';
export class CourseSchedulerService {
    private api: API;

    constructor(api: API) {
        this.api = api;
    }

    async getSelections(unixID: number): Promise<APIResponse<ModelsCourseSelectionString>> {
        return this.api.request('get', '/api/v2/course-selections/' + unixID)
    }

    async setSelection(unixID: number, body: CourseSelectionSetRequest) {
        return this.api.request('post', '/api/v2/course-selections/' + unixID, {
            data: body,
        })
    }
}