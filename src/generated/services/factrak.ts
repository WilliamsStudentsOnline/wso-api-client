/* eslint-disable */
/** Generated from WSO OpenAPI — do not edit. */
import { API, APIResponse } from '../../api';
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
} from '../types';

export class FactrakService {
  protected api: API;

  constructor(api: API) {
    this.api = api;
  }

  async createSurvey(createParams: FactrakSurveyCreateParams): Promise<APIResponse<ModelsFactrakSurvey>> {
    return this.api.request('post', `/api/v2/factrak/surveys`, {
      data: createParams,
    });
  }

  async createSurveyAgreement(surveyID: number, createParams: FactrakAgreementCreateParams): Promise<APIResponse<ModelsFactrakAgreement>> {
    return this.api.request('post', `/api/v2/factrak/surveys/${surveyID}/agreement`, {
      data: createParams,
    });
  }

  async deleteSurvey(surveyID: number): Promise<APIResponse<ModelsFactrakSurvey>> {
    return this.api.request('delete', `/api/v2/factrak/surveys/${surveyID}`);
  }

  async deleteSurveyAgreement(surveyID: number): Promise<APIResponse<ModelsFactrakAgreement>> {
    return this.api.request('delete', `/api/v2/factrak/surveys/${surveyID}/agreement`);
  }

  async flagSurvey(surveyID: number): Promise<APIResponse<any>> {
    return this.api.request('post', `/api/v2/factrak/surveys/${surveyID}/flag`);
  }

  async getAreaOfStudy(areaOfStudyID: number): Promise<APIResponse<ModelsAreaOfStudy>> {
    return this.api.request('get', `/api/v2/factrak/areas-of-study/${areaOfStudyID}`);
  }

  async getCourse(courseID: number, params?: {
    professorID?: number;
  }): Promise<APIResponse<ModelsCourse>> {
    return this.api.request('get', `/api/v2/factrak/courses/${courseID}`, {
      params: params,
    });
  }

  async getCourseRatings(courseID: number, params?: {
    professorID?: number;
  }): Promise<APIResponse<ModelsFactrakSurveyAvgRatings>> {
    return this.api.request('get', `/api/v2/factrak/courses/${courseID}/ratings`, {
      params: params,
    });
  }

  async getDepartment(departmentID: number): Promise<APIResponse<ModelsDepartment>> {
    return this.api.request('get', `/api/v2/factrak/departments/${departmentID}`);
  }

  async getProfessor(professorID: number, params?: {
    courseID?: number;
  }): Promise<APIResponse<ModelsUser>> {
    return this.api.request('get', `/api/v2/factrak/professors/${professorID}`, {
      params: params,
    });
  }

  async getProfessorRatings(professorID: number, params?: {
    courseID?: number;
    metric?: string;
  }): Promise<APIResponse<ModelsFactrakSurveyAvgRatings>> {
    return this.api.request('get', `/api/v2/factrak/professors/${professorID}/ratings`, {
      params: params,
    });
  }

  async getSurvey(surveyID: number): Promise<APIResponse<ModelsFactrakSurvey>> {
    return this.api.request('get', `/api/v2/factrak/surveys/${surveyID}`);
  }

  async getSurveyAgreement(surveyID: number): Promise<APIResponse<ModelsFactrakAgreement>> {
    return this.api.request('get', `/api/v2/factrak/surveys/${surveyID}/agreement`);
  }

  async listAreaOfStudyCourses(areaOfStudyID: number): Promise<APIResponse<Array<ModelsCourse>>> {
    return this.api.request('get', `/api/v2/factrak/areas-of-study/${areaOfStudyID}/courses`);
  }

  async listAreaOfStudyProfessors(areaOfStudyID: number): Promise<APIResponse<Array<ModelsUser>>> {
    return this.api.request('get', `/api/v2/factrak/areas-of-study/${areaOfStudyID}/professors`);
  }

  async listAreasOfStudy(params?: {
    offset?: number;
    limit?: number;
    preload?: Array<string>;
    sort?: string;
  }): Promise<APIResponse<Array<ModelsAreaOfStudy>>> {
    return this.api.request('get', `/api/v2/factrak/areas-of-study`, {
      params: params,
    });
  }

  async listCourseProfessors(courseID: number): Promise<APIResponse<Array<ModelsUser>>> {
    return this.api.request('get', `/api/v2/factrak/courses/${courseID}/professors`);
  }

  async listCourses(params?: {
    offset?: number;
    limit?: number;
    preload?: Array<string>;
    q?: string;
    areaOfStudyID?: string;
    departmentID?: string;
    professorID?: string;
    metric?: string;
    direction?: boolean;
  }): Promise<APIResponse<Array<ModelsCourse>>> {
    return this.api.request('get', `/api/v2/factrak/courses`, {
      params: params,
    });
  }

  async listCourseSurveys(courseID: number, params?: {
    offset?: string;
    limit?: number;
    professorID?: number;
    preload?: Array<string>;
    populateAgreements?: boolean;
    populateClientAgreement?: boolean;
  }): Promise<APIResponse<Array<ModelsFactrakSurvey>>> {
    return this.api.request('get', `/api/v2/factrak/courses/${courseID}/surveys`, {
      params: params,
    });
  }

  async listDepartmentCourses(departmentID: number): Promise<APIResponse<Array<ModelsCourse>>> {
    return this.api.request('get', `/api/v2/factrak/departments/${departmentID}/courses`);
  }

  async listDepartmentProfessors(departmentID: number): Promise<APIResponse<Array<ModelsUser>>> {
    return this.api.request('get', `/api/v2/factrak/departments/${departmentID}/professors`);
  }

  async listDepartments(): Promise<APIResponse<Array<ModelsDepartment>>> {
    return this.api.request('get', `/api/v2/factrak/departments`);
  }

  async listFlaggedSurveysAdmin(params?: {
    professorID?: number;
    courseID?: number;
    userID?: number;
    offset?: string;
    limit?: number;
    preload?: Array<string>;
    populateAgreements?: boolean;
    populateClientAgreement?: boolean;
  }): Promise<APIResponse<Array<ModelsFactrakSurvey>>> {
    return this.api.request('get', `/api/v2/factrak/admin/surveys`, {
      params: params,
    });
  }

  async listProfessorCourses(professorID: number): Promise<APIResponse<Array<ModelsCourse>>> {
    return this.api.request('get', `/api/v2/factrak/professors/${professorID}/courses`);
  }

  async listProfessors(params?: {
    offset?: number;
    limit?: number;
    preload?: Array<string>;
    courseID?: number;
    departmentID?: number;
    areaOfStudyID?: number;
    q?: string;
    metric?: string;
    ascending?: boolean;
  }): Promise<APIResponse<Array<ModelsUser>>> {
    return this.api.request('get', `/api/v2/factrak/professors`, {
      params: params,
    });
  }

  async listProfessorSurveys(professorID: number, params?: {
    offset?: string;
    limit?: number;
    courseID?: number;
    preload?: Array<string>;
    populateAgreements?: boolean;
    populateClientAgreement?: boolean;
  }): Promise<APIResponse<Array<ModelsFactrakSurvey>>> {
    return this.api.request('get', `/api/v2/factrak/professors/${professorID}/surveys`, {
      params: params,
    });
  }

  async listSurveys(params?: {
    offset?: string;
    limit?: number;
    professorID?: number;
    courseID?: number;
    userID?: number;
    preload?: Array<string>;
    populateAgreements?: boolean;
    populateClientAgreement?: boolean;
  }): Promise<APIResponse<Array<ModelsFactrakSurvey>>> {
    return this.api.request('get', `/api/v2/factrak/surveys`, {
      params: params,
    });
  }

  async listUserSurveys(userID: number | 'me', params?: {
    offset?: string;
    limit?: number;
    professorID?: number;
    courseID?: number;
    preload?: Array<string>;
    populateAgreements?: boolean;
  }): Promise<APIResponse<Array<ModelsFactrakSurvey>>> {
    return this.api.request('get', `/api/v2/factrak/users/${userID}/surveys`, {
      params: params,
    });
  }

  async unflagSurveyAdmin(surveyID: number): Promise<APIResponse<any>> {
    return this.api.request('delete', `/api/v2/factrak/admin/surveys/${surveyID}/flag`);
  }

  async updateSurvey(surveyID: number, updateParams: FactrakSurveyUpdateParams): Promise<APIResponse<ModelsFactrakSurvey>> {
    return this.api.request('patch', `/api/v2/factrak/surveys/${surveyID}`, {
      data: updateParams,
    });
  }

  async updateSurveyAgreement(surveyID: number, updateParams: FactrakAgreementUpdateParams): Promise<APIResponse<ModelsFactrakAgreement>> {
    return this.api.request('patch', `/api/v2/factrak/surveys/${surveyID}/agreement`, {
      data: updateParams,
    });
  }

}
