import axios, { AxiosError } from "axios";

type QuerySurveys = {
  offset?: string;
  limit?: number;
  professorID?: number;
  courseID?: number;
  userID?: number;
  preload?: string[];
  populateAgreements?: boolean;
  populateClientAgreement?: boolean;
};

type QueryProfessors = {
  offset?: string;
  limit?: number;
  courseID?: number;
  areaOfStudyID?: number;
  departmentID?: number;
  preload?: string[];
  q?: string;
};

type QueryCourses = {
  offset?: string;
  limit?: number;
  preload?: string[];
  q?: string;
  areaOfStudyID?: number;
  departmentID?: number;
  professorID?: number;
};

type Agreement = {
  agree: boolean;
};

type NewSurvey = {
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

type UpdatedSurvey = {
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
const getAreasOfStudy = async (token: string): Promise<any> => {
  return axios({
    url: "/api/v2/factrak/areas-of-study",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Retrieves one Area of Study based on the area id passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} areaID - The id of the area of study to be retrieved.
 * @return {Promise<any>} Returns the response from the server.
 */
const getAreaOfStudy = async (token: string, areaID: number): Promise<any> => {
  return axios({
    url: `/api/v2/factrak/areas-of-study/${areaID}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Retrieves the list of departments.
 *
 * @param {string} token - The auth token to be used.
 * @return {Promise<any>} Returns the response from the server.
 */
const getDepartments = async (token: string): Promise<any> => {
  return axios({
    url: "/api/v2/factrak/departments",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Retrieves the list of Factrak surveys based on the parameters passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {QuerySurveys} params - the query paramters
 * @return {Promise<any>} Returns the response from the server.
 */
const getSurveys = async (
  token: string,
  params: QuerySurveys
): Promise<any> => {
  return axios({
    url: "/api/v2/factrak/surveys",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Retrieves the list of flagged Factrak surveys based on the parameters passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {QuerySurveys} params - the query paramters
 * @return {Promise<any>} Returns the response from the server.
 */
const getFlagged = async (
  token: string,
  params: QuerySurveys
): Promise<any> => {
  return axios({
    url: `/api/v2/factrak/admin/surveys`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Unflag a survey given by the survey ID passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to be unflagged.
 * @return {Promise<any>} Returns the response from the server.
 */
const unflagSurvey = async (token: string, surveyID: number): Promise<any> => {
  return axios({
    url: `/api/v2/factrak/admin/surveys/${surveyID}/flag`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "delete",
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Delete a survey given by the survey ID passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to be deleted.
 * @return {Promise<any>} Returns the response from the server.
 */
const deleteSurvey = async (token: string, surveyID: number): Promise<any> => {
  return axios({
    url: `/api/v2/factrak/surveys/${surveyID}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "delete",
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Retrieves a FactrakCourse based on the courseID passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} courseID - ID of course to be retrieved.
 * @return {Promise<any>} Returns the response from the server.
 */
const getCourse = async (token: string, courseID: number): Promise<any> => {
  return axios({
    url: `/api/v2/factrak/courses/${courseID}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

// TODO talk more about behavior
/**
 * Create Survey Agreement
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to create an agreement.
 * @param {Agreement} createParams - Agreement to be tied to the survey.
 * @return {Promise<any>} Returns the response from the server.
 */
const postSurveyAgreement = async (
  token: string,
  surveyID: number,
  createParams: Agreement
): Promise<any> => {
  return axios({
    url: `/api/v2/factrak/surveys/${surveyID}/agreement`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: createParams,
    method: "post",
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

// TODO specify behavior
/**
 * Update Survey Agreement.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to update an agreement.
 * @param {Agreement} updateParams - Agreement to be tied to the survey.
 * @return {Promise<any>} Returns the response from the server.
 */
const patchSurveyAgreement = async (
  token: string,
  surveyID: number,
  updateParams: Agreement
): Promise<any> => {
  return axios({
    url: `/api/v2/factrak/surveys/${surveyID}/agreement`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: updateParams,
    method: "patch",
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Delete Survey Agreement.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to be deleted.
 * @return {Promise<any>} Returns the response from the server.
 */
const deleteSurveyAgreement = async (
  token: string,
  surveyID: number
): Promise<any> => {
  return axios({
    url: `/api/v2/factrak/surveys/${surveyID}/agreement`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "delete",
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Flag a survey given by the survey ID passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to be flagged.
 * @return {Promise<any>} Returns the response from the server.
 */
const flagSurvey = async (token: string, surveyID: number): Promise<any> => {
  return axios({
    url: `/api/v2/factrak/surveys/${surveyID}/flag`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "post",
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Retrieves a list of professors based on query parameters.
 *
 * @param {string} token - The auth token to be used.
 * @param {QueryProfessors} params - Parameters used to query for professors.
 * @return {Promise<any>} Returns the response from the server.
 */
const getProfessors = async (
  token: string,
  params: QueryProfessors
): Promise<any> => {
  return axios({
    url: "/api/v2/factrak/professors",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Retrieves a professor by id, with optional courseID parameter passed in for
 * reviews limited to a certain course.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} professorID - Professor's ID.
 * @param {number} [courseID = -1] - Course ID.
 * @return {Promise<any>} Returns the response from the server.
 */
const getProfessor = async (
  token: string,
  professorID: number,
  courseID: number = -1
): Promise<any> => {
  let request: Object;
  if (courseID === -1 || typeof courseID !== "number") {
    request = {
      url: `/api/v2/factrak/professors/${professorID}`,
      headers: { Authorization: `Bearer ${token}` },
    };
  } else {
    request = {
      url: `/api/v2/factrak/professors/${professorID}`,
      headers: { Authorization: `Bearer ${token}` },
      params: { courseID },
    };
  }

  return axios(request).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Retrieves a single survey by id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - Survey ID.
 * @return {Promise<any>} Returns the response from the server.
 */
const getSurvey = async (token: string, surveyID: number): Promise<any> => {
  return axios({
    url: `/api/v2/factrak/surveys/${surveyID}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Retrieves a department by id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} departmentID - Department ID.
 * @return {Promise<any>} Returns the response from the server.
 */
const getDepartment = async (
  token: string,
  departmentID: number
): Promise<any> => {
  return axios({
    url: `/api/v2/factrak/departments/${departmentID}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Retrieves a professor's rating by id, with optional courseID parameter passed in for
 * ratings limited to a certain course.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} professorID - Professor's ID.
 * @param {number} [courseID = -1] - Course ID.
 * @return {Promise<any>} Returns the response from the server.
 */
const getProfessorRatings = async (
  token: string,
  professorID: number,
  courseID: number = -1
): Promise<any> => {
  let request: Object;
  if (courseID === -1 || typeof courseID !== "number") {
    request = {
      url: `/api/v2/factrak/professors/${professorID}/ratings`,
      headers: { Authorization: `Bearer ${token}` },
    };
  } else {
    request = {
      url: `/api/v2/factrak/professors/${professorID}/ratings`,
      headers: { Authorization: `Bearer ${token}` },
      params: { courseID },
    };
  }

  return axios(request).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Retrieves a course's rating by id, with optional professorID parameter passed in for
 * ratings limited to a certain professor.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} [professorID = -1] - Professor's ID.
 * @param {number} courseID - Course ID.
 * @return {Promise<any>} Returns the response from the server.
 */
const getCourseRatings = async (
  token: string,
  professorID: number = -1,
  courseID: number
): Promise<any> => {
  let request: Object;
  if (professorID === -1 || typeof professorID !== "number") {
    request = {
      url: `/api/v2/factrak/courses/${courseID}/ratings`,
      headers: { Authorization: `Bearer ${token}` },
    };
  } else {
    request = {
      url: `/api/v2/factrak/courses/${courseID}/ratings`,
      headers: { Authorization: `Bearer ${token}` },
      params: { professorID },
    };
  }

  return axios(request).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Creates a new Factrak survey.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewSurvey} createParams - New Survey.
 * @return {Promise<any>} Returns the response from the server.
 */
const postSurvey = async (
  token: string,
  createParams: NewSurvey
): Promise<any> => {
  return axios({
    url: `/api/v2/factrak/surveys`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "post",
    data: createParams,
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Updates a Factrak survey.
 *
 * @param {string} token - The auth token to be used.
 * @param {UpdatedSurvey} updateParams - Updated Survey.
 * @param {number} surveyID - Survey ID.
 * @return {Promise<any>} Returns the response from the server.
 */
const patchSurvey = async (
  token: string,
  updateParams: UpdatedSurvey,
  surveyID: number
): Promise<any> => {
  return axios({
    url: `/api/v2/factrak/surveys/${surveyID}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "patch",
    data: updateParams,
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

/**
 * Lists all courses satisfying the query parameters.
 *
 * @param {string} token - The auth token to be used.
 * @param {QueryCourses} params - Updated Survey.
 * @return {Promise<any>} Returns the response from the server.
 */
const getCourses = async (
  token: string,
  params: QueryCourses
): Promise<any> => {
  return axios({
    url: "/api/v2/factrak/courses",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  }).catch((error: AxiosError) => {
    return error.response;
  });
};

export {
  getAreasOfStudy,
  getDepartments,
  getSurveys,
  getSurvey,
  getAreaOfStudy,
  getFlagged,
  getCourse,
  getCourses,
  postSurveyAgreement,
  patchSurveyAgreement,
  deleteSurveyAgreement,
  unflagSurvey,
  flagSurvey,
  deleteSurvey,
  getProfessor,
  getProfessors,
  getDepartment,
  getProfessorRatings,
  getCourseRatings,
  postSurvey,
  patchSurvey,
};
