import { APIResponse } from '../api';
import { CourseSchedulerService as GeneratedCourseSchedulerService } from '../generated/services/coursescheduler';
import { CourseSelectionSetRequest, ModelsCourseSelectionString } from './types';

export class CourseSchedulerService extends GeneratedCourseSchedulerService {
  async getSelections(
    unixID: number | 'me'
  ): Promise<APIResponse<ModelsCourseSelectionString>> {
    return super.getSelections(unixID as any);
  }

  async setSelection(
    unixID: number | 'me',
    body: CourseSelectionSetRequest | string
  ): Promise<APIResponse<any>> {
    const courses = typeof body === 'string' ? body : body.courses || '';
    return super.setSelection(unixID as any, courses);
  }
}
