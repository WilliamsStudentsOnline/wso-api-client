/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
import {
  CourseschedulerCourseSelectionsString,
} from '../types';

export class CourseSchedulerService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async getSelections(userID: number | 'me'): Promise<APIResponse<CourseschedulerCourseSelectionsString>> {
    return this.api.request('get', `/api/v2/course-selections/${userID}`);
  }

  async setSelection(userID: number | 'me', courses: string): Promise<APIResponse<any>> {
    return this.api.request('put', `/api/v2/course-selections/${userID}`, {
      data: courses,
    });
  }

}
