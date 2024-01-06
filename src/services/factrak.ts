import { API, APIResponse } from '../api';
import {
  FactrakAgreementCreateParams,
  FactrakAgreementUpdateParams,
  FactrakSurveyCreateParams,
  FactrakSurveyUpdateParams,
  ModelsAreaOfStudy,
  ModelsCourse,
  ModelsDepartment,
  ModelsFactrakAgreement,
  ModelsFactrakSurvey,
  ModelsFactrakSurveyAvgRatings,
  ModelsUser,
} from './types';

export enum FactrakMetric {
  Approachability = 'approachability',
  CourseWorkload = 'course_workload',
  LeadLecture = 'lead_lecture',
  OutsideHelpfulness = 'outside_helpfulness',
  PromoteDiscussion = 'promote_discussion',
  WouldTakeAnother = 'would_take_another',
  CourseStimulating = 'course_stimulating',
}

export class FactrakService {
  private api: API;

  constructor(api: API) {
    this.api = api;
  }

  /* Areas of Study */

  async listAreasOfStudy(params?: {
    offset?: number;
    limit?: number;
    preload?: string[];
    sort?: string;
  }): Promise<APIResponse<ModelsAreaOfStudy[]>> {
    return this.api.request('get', `/api/v2/factrak/areas-of-study`, {
      params: params,
    });
  }

  async getAreaOfStudy(areaOfStudyID: number): Promise<APIResponse<ModelsAreaOfStudy>> {
    return this.api.request('get', `/api/v2/factrak/areas-of-study/${areaOfStudyID}`);
  }

  /* Courses */

  async listCourses(params?: {
    offset?: number;
    limit?: number;
    preload?: string[];
    areaOfStudyID?: number;
    departmentID?: number;
    professorID?: number;
  }): Promise<APIResponse<ModelsCourse[]>> {
    return this.api.request('get', `/api/v2/factrak/courses`, {
      params: params,
    });
  }

  async getCourse(courseID: number, professorID?: number): Promise<APIResponse<ModelsCourse>> {
    return this.api.request('get', `/api/v2/factrak/courses/${courseID}`, {
      params: {
        professorID: professorID,
      },
    });
  }

  async getCourseRatings(
    courseID: number,
    professorID?: number
  ): Promise<APIResponse<ModelsFactrakSurveyAvgRatings>> {
    return this.api.request('get', `/api/v2/factrak/courses/${courseID}/ratings`, {
      params: {
        professorID: professorID,
      },
    });
  }

  /* Departments */

  async listDepartments(): Promise<APIResponse<ModelsDepartment[]>> {
    return this.api.request('get', `/api/v2/factrak/departments`);
  }

  async getDepartment(departmentID: number): Promise<APIResponse<ModelsDepartment>> {
    return this.api.request('get', `/api/v2/factrak/departments/${departmentID}`);
  }

  /* Professors */
  async listProfessors(params?: {
    offset?: number;
    limit?: number;
    preload?: string[];
    areaOfStudyID?: number;
    departmentID?: number;
    courseID?: number;
    metric?: FactrakMetric;
    ascending?: boolean;
    q?: string;
  }): Promise<APIResponse<ModelsUser[]>> {
    return this.api.request('get', `/api/v2/factrak/professors`, {
      params: params,
    });
  }

  async getProfessor(professorID: number, courseID?: number): Promise<APIResponse<ModelsUser>> {
    return this.api.request('get', `/api/v2/factrak/professors/${professorID}`, {
      params: {
        courseID: courseID,
      },
    });
  }

  async getProfessorRatings(
    professorID: number,
    params?: {
      courseID?: number;
      metric?: FactrakMetric;
    }
  ): Promise<APIResponse<ModelsFactrakSurveyAvgRatings>> {
    return this.api.request('get', `/api/v2/factrak/professors/${professorID}/ratings`, {
      params: params,
    });
  }

  /* Surveys */

  async listSurveys(params?: {
    professorID?: number;
    courseID?: number;
    userID?: number;
    offset?: string;
    limit?: number;
    preload?: ('course' | 'professor')[];
    populateAgreements?: boolean;
    populateClientAgreement?: boolean;
  }): Promise<APIResponse<ModelsFactrakSurvey[]>> {
    return this.api.request('get', `/api/v2/factrak/surveys`, {
      params: params,
    });
  }

  async createSurvey(
    createParams: FactrakSurveyCreateParams
  ): Promise<APIResponse<ModelsFactrakSurvey>> {
    return this.api.request('post', `/api/v2/factrak/surveys`, {
      data: createParams,
    });
  }

  async getSurvey(surveyID: number): Promise<APIResponse<ModelsFactrakSurvey>> {
    return this.api.request('get', `/api/v2/factrak/surveys/${surveyID}`);
  }

  async deleteSurvey(surveyID: number): Promise<APIResponse<ModelsFactrakSurvey>> {
    return this.api.request('delete', `/api/v2/factrak/surveys/${surveyID}`);
  }

  async updateSurvey(
    surveyID: number,
    updateParams: FactrakSurveyUpdateParams
  ): Promise<APIResponse<ModelsFactrakSurvey>> {
    return this.api.request('patch', `/api/v2/factrak/surveys/${surveyID}`, {
      data: updateParams,
    });
  }

  async createSurveyAgreement(
    surveyID: number,
    createParams: FactrakAgreementCreateParams
  ): Promise<APIResponse<ModelsFactrakAgreement>> {
    return this.api.request('post', `/api/v2/factrak/surveys/${surveyID}/agreement`, {
      data: createParams,
    });
  }

  async getSurveyAgreement(surveyID: number): Promise<APIResponse<ModelsFactrakAgreement>> {
    return this.api.request('get', `/api/v2/factrak/surveys/${surveyID}/agreement`);
  }

  async deleteSurveyAgreement(surveyID: number): Promise<APIResponse<ModelsFactrakAgreement>> {
    return this.api.request('delete', `/api/v2/factrak/surveys/${surveyID}/agreement`);
  }

  async updateSurveyAgreement(
    surveyID: number,
    updateParams: FactrakAgreementUpdateParams
  ): Promise<APIResponse<ModelsFactrakAgreement>> {
    return this.api.request('patch', `/api/v2/factrak/surveys/${surveyID}/agreement`, {
      data: updateParams,
    });
  }

  async flagSurvey(surveyID: number): Promise<APIResponse> {
    return this.api.request('post', `/api/v2/factrak/surveys/${surveyID}/flag`);
  }

  /* Admin */

  async listFlaggedSurveysAdmin(params?: {
    professorID?: number;
    courseID?: number;
    userID?: number;
    offset?: string;
    limit?: number;
    preload?: ('course' | 'professor')[];
    populateAgreements?: boolean;
    populateClientAgreement?: boolean;
  }): Promise<APIResponse<ModelsFactrakSurvey[]>> {
    return this.api.request('get', `/api/v2/factrak/admin/surveys`, {
      params: params,
    });
  }

  async unflagSurveyAdmin(surveyID: number): Promise<APIResponse> {
    return this.api.request('delete', `/api/v2/factrak/admin/surveys/${surveyID}/flag`);
  }
}
