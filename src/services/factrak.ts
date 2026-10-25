import { APIResponse } from '../api';
import { FactrakService as GeneratedFactrakService } from '../generated/services/factrak';
import { ModelsCourse, ModelsFactrakSurveyAvgRatings, ModelsUser } from './types';

export enum FactrakProfessorMetric {
  Approachability = 'approachability',
  CourseWorkload = 'course_workload',
  LeadLecture = 'lead_lecture',
  OutsideHelpfulness = 'outside_helpfulness',
  PromoteDiscussion = 'promote_discussion',
  WouldTakeAnother = 'would_take_another',
  CourseStimulating = 'course_stimulating',
}

export enum FactrakCourseMetric {
  WouldRecommendCourse = 'would_recommend_course',
  CourseWorkload = 'course_workload',
  CourseStimulating = 'course_stimulating',
}

/** Positional optional query args for older call sites. */
export class FactrakService extends GeneratedFactrakService {
  async getCourse(
    courseID: number,
    professorIDOrParams?: number | { professorID?: number }
  ): Promise<APIResponse<ModelsCourse>> {
    const params =
      typeof professorIDOrParams === 'number'
        ? { professorID: professorIDOrParams }
        : professorIDOrParams;
    return super.getCourse(courseID, params);
  }

  async getCourseRatings(
    courseID: number,
    professorIDOrParams?: number | { professorID?: number }
  ): Promise<APIResponse<ModelsFactrakSurveyAvgRatings>> {
    const params =
      typeof professorIDOrParams === 'number'
        ? { professorID: professorIDOrParams }
        : professorIDOrParams;
    return super.getCourseRatings(courseID, params);
  }

  async getProfessor(
    professorID: number,
    courseIDOrParams?: number | { courseID?: number }
  ): Promise<APIResponse<ModelsUser>> {
    const params =
      typeof courseIDOrParams === 'number' ? { courseID: courseIDOrParams } : courseIDOrParams;
    return super.getProfessor(professorID, params);
  }

  async getProfessorRatings(
    professorID: number,
    params?: { courseID?: number; metric?: FactrakProfessorMetric | string }
  ): Promise<APIResponse<ModelsFactrakSurveyAvgRatings>> {
    return super.getProfessorRatings(professorID, params as any);
  }

  async listCourses(params?: {
    offset?: number;
    limit?: number;
    preload?: string[];
    q?: string;
    areaOfStudyID?: string | number;
    departmentID?: string | number;
    professorID?: string | number;
    metric?: string;
    direction?: boolean;
    ascending?: boolean;
  }): Promise<APIResponse<ModelsCourse[]>> {
    const { ascending, areaOfStudyID, departmentID, professorID, ...rest } =
      params || {};
    return super.listCourses({
      ...rest,
      direction: rest.direction ?? ascending,
      areaOfStudyID:
        areaOfStudyID === undefined ? undefined : String(areaOfStudyID),
      departmentID:
        departmentID === undefined ? undefined : String(departmentID),
      professorID: professorID === undefined ? undefined : String(professorID),
    });
  }

  async listSurveys(params?: Record<string, any>): Promise<APIResponse<any>> {
    if (!params) return super.listSurveys();
    const { start, ...rest } = params;
    // old clients passed `start: Date`; API expects offset string — drop silently
    void start;
    return super.listSurveys(rest);
  }
}
