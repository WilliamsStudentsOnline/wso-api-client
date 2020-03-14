declare type QuerySurveys = {
    offset?: string;
    limit?: number;
    professorID?: number;
    courseID?: number;
    userID?: number;
    preload?: string[];
    populateAgreements?: boolean;
    populateClientAgreement?: boolean;
};
declare type QueryProfessors = {
    offset?: string;
    limit?: number;
    courseID?: number;
    areaOfStudyID?: number;
    departmentID?: number;
    preload?: string[];
    q?: string;
};
declare type QueryCourses = {
    offset?: string;
    limit?: number;
    preload?: string[];
    q?: string;
    areaOfStudyID?: number;
    departmentID?: number;
    professorID?: number;
};
declare type Agreement = {
    agree: boolean;
};
declare type NewSurvey = {
    approachability: number;
    areaOfStudyAbbreviation: string;
    comment: string;
    courseID: number;
    courseNumber: string;
    courseStimulating: number;
    courseWorkload: number;
    gradeReceived: string;
    leadLecture: number;
    outsideHelpfulness: number;
    professorID: number;
    promoteDiscussion: number;
    wouldRecommendCourse: boolean;
    wouldTakeAnother: boolean;
};
declare type UpdatedSurvey = {
    approachability?: number;
    comment?: string;
    courseStimulating?: number;
    courseWorkload?: number;
    gradeReceived?: string;
    leadLecture?: number;
    outsideHelpfulness?: number;
    promoteDiscussion?: number;
    wouldRecommendCourse?: boolean;
    wouldTakeAnother?: boolean;
};
/**
 * Retrieves the list of Areas of Study.
 *
 * @param {string} token - The auth token to be used.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getAreasOfStudy: (token: string) => Promise<any>;
/**
 * Retrieves one Area of Study based on the area id passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} areaID - The id of the area of study to be retrieved.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getAreaOfStudy: (token: string, areaID: number) => Promise<any>;
/**
 * Retrieves the list of departments.
 *
 * @param {string} token - The auth token to be used.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getDepartments: (token: string) => Promise<any>;
/**
 * Retrieves the list of Factrak surveys based on the parameters passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {QuerySurveys} params - the query paramters
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getSurveys: (token: string, params: QuerySurveys) => Promise<any>;
/**
 * Retrieves the list of flagged Factrak surveys based on the parameters passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {QuerySurveys} params - the query paramters
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getFlagged: (token: string, params: QuerySurveys) => Promise<any>;
/**
 * Unflag a survey given by the survey ID passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to be unflagged.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const unflagSurvey: (token: string, surveyID: number) => Promise<any>;
/**
 * Delete a survey given by the survey ID passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to be deleted.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const deleteSurvey: (token: string, surveyID: number) => Promise<any>;
/**
 * Retrieves a FactrakCourse based on the courseID passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} courseID - ID of course to be retrieved.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getCourse: (token: string, courseID: number) => Promise<any>;
/**
 * Create Survey Agreement
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to create an agreement.
 * @param {Agreement} createParams - Agreement to be tied to the survey.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const postSurveyAgreement: (token: string, surveyID: number, createParams: Agreement) => Promise<any>;
/**
 * Update Survey Agreement.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to update an agreement.
 * @param {Agreement} updateParams - Agreement to be tied to the survey.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const patchSurveyAgreement: (token: string, surveyID: number, updateParams: Agreement) => Promise<any>;
/**
 * Delete Survey Agreement.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to be deleted.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const deleteSurveyAgreement: (token: string, surveyID: number) => Promise<any>;
/**
 * Flag a survey given by the survey ID passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to be flagged.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const flagSurvey: (token: string, surveyID: number) => Promise<any>;
/**
 * Retrieves a list of professors based on query parameters.
 *
 * @param {string} token - The auth token to be used.
 * @param {QueryProfessors} params - Parameters used to query for professors.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getProfessors: (token: string, params: QueryProfessors) => Promise<any>;
/**
 * Retrieves a professor by id, with optional courseID parameter passed in for
 * reviews limited to a certain course.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} professorID - Professor's ID.
 * @param {number} [courseID = -1] - Course ID.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getProfessor: (token: string, professorID: number, courseID?: number) => Promise<any>;
/**
 * Retrieves a single survey by id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - Survey ID.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getSurvey: (token: string, surveyID: number) => Promise<any>;
/**
 * Retrieves a department by id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} departmentID - Department ID.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getDepartment: (token: string, departmentID: number) => Promise<any>;
/**
 * Retrieves a professor's rating by id, with optional courseID parameter passed in for
 * ratings limited to a certain course.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} professorID - Professor's ID.
 * @param {number} [courseID = -1] - Course ID.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getProfessorRatings: (token: string, professorID: number, courseID?: number) => Promise<any>;
/**
 * Retrieves a course's rating by id, with optional professorID parameter passed in for
 * ratings limited to a certain professor.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} [professorID = -1] - Professor's ID.
 * @param {number} courseID - Course ID.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getCourseRatings: (token: string, professorID: number, courseID: number) => Promise<any>;
/**
 * Creates a new Factrak survey.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewSurvey} createParams - New Survey.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const postSurvey: (token: string, createParams: NewSurvey) => Promise<any>;
/**
 * Updates a Factrak survey.
 *
 * @param {string} token - The auth token to be used.
 * @param {UpdatedSurvey} updateParams - Updated Survey.
 * @param {number} surveyID - Survey ID.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const patchSurvey: (token: string, updateParams: UpdatedSurvey, surveyID: number) => Promise<any>;
/**
 * Lists all courses satisfying the query parameters.
 *
 * @param {string} token - The auth token to be used.
 * @param {QueryCourses} params - Updated Survey.
 * @return {Promise<any>} Returns the response from the server.
 */
declare const getCourses: (token: string, params: QueryCourses) => Promise<any>;
export { getAreasOfStudy, getDepartments, getSurveys, getSurvey, getAreaOfStudy, getFlagged, getCourse, getCourses, postSurveyAgreement, patchSurveyAgreement, deleteSurveyAgreement, unflagSurvey, flagSurvey, deleteSurvey, getProfessor, getProfessors, getDepartment, getProfessorRatings, getCourseRatings, postSurvey, patchSurvey, };
