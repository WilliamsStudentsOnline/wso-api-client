"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchSurvey = exports.postSurvey = exports.getCourseRatings = exports.getProfessorRatings = exports.getDepartment = exports.getProfessors = exports.getProfessor = exports.deleteSurvey = exports.flagSurvey = exports.unflagSurvey = exports.deleteSurveyAgreement = exports.patchSurveyAgreement = exports.postSurveyAgreement = exports.getCourses = exports.getCourse = exports.getFlagged = exports.getAreaOfStudy = exports.getSurvey = exports.getSurveys = exports.getDepartments = exports.getAreasOfStudy = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Retrieves the list of Areas of Study.
 *
 * @param {string} token - The auth token to be used.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
var getAreasOfStudy = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(token) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/areas-of-study",
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAreasOfStudy(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Retrieves one Area of Study based on the area id passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} areaID - The id of the area of study to be retrieved.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getAreasOfStudy = getAreasOfStudy;

var getAreaOfStudy = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(token, areaID) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/areas-of-study/".concat(areaID),
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAreaOfStudy(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Retrieves the list of departments.
 *
 * @param {string} token - The auth token to be used.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getAreaOfStudy = getAreaOfStudy;

var getDepartments = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(token) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/departments",
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getDepartments(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Retrieves the list of Factrak surveys based on the parameters passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {QuerySurveys} params - the query paramters
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getDepartments = getDepartments;

var getSurveys = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(token, params) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/surveys",
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              params: params
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getSurveys(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Retrieves the list of flagged Factrak surveys based on the parameters passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {QuerySurveys} params - Query paramters.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getSurveys = getSurveys;

var getFlagged = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(token, params) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/admin/surveys",
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              params: params
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getFlagged(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();
/**
 * Unflag a survey given by the survey ID passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to be unflagged.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getFlagged = getFlagged;

var unflagSurvey = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(token, surveyID) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/admin/surveys/".concat(surveyID, "/flag"),
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              method: "delete"
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function unflagSurvey(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * Delete a survey given by the survey ID passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to be deleted.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.unflagSurvey = unflagSurvey;

var deleteSurvey = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(token, surveyID) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/surveys/".concat(surveyID),
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              method: "delete"
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function deleteSurvey(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Retrieves a FactrakCourse based on the courseID passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} courseID - ID of course to be retrieved.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.deleteSurvey = deleteSurvey;

var getCourse = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(token, courseID) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/courses/".concat(courseID),
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function getCourse(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();
/**
 * Create Survey Agreement
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to create an agreement.
 * @param {Agreement} createParams - Agreement to be tied to the survey.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getCourse = getCourse;

var postSurveyAgreement = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(token, surveyID, createParams) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/surveys/".concat(surveyID, "/agreement"),
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              data: createParams,
              method: "post"
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function postSurveyAgreement(_x15, _x16, _x17) {
    return _ref9.apply(this, arguments);
  };
}();
/**
 * Update Survey Agreement.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to update an agreement.
 * @param {Agreement} updateParams - Agreement to be tied to the survey.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.postSurveyAgreement = postSurveyAgreement;

var patchSurveyAgreement = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(token, surveyID, updateParams) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/surveys/".concat(surveyID, "/agreement"),
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              data: updateParams,
              method: "patch"
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function patchSurveyAgreement(_x18, _x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
/**
 * Delete Survey Agreement.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to be deleted.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.patchSurveyAgreement = patchSurveyAgreement;

var deleteSurveyAgreement = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(token, surveyID) {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/surveys/".concat(surveyID, "/agreement"),
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              method: "delete"
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function deleteSurveyAgreement(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
/**
 * Flag a survey given by the survey ID passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - ID of survey to be flagged.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.deleteSurveyAgreement = deleteSurveyAgreement;

var flagSurvey = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(token, surveyID) {
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/surveys/".concat(surveyID, "/flag"),
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              method: "post"
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function flagSurvey(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
/**
 * Retrieves a list of professors based on query parameters.
 *
 * @param {string} token - The auth token to be used.
 * @param {QueryProfessors} params - Parameters used to query for professors.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.flagSurvey = flagSurvey;

var getProfessors = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(token, params) {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            return _context13.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/professors",
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              params: params
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));

  return function getProfessors(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
/**
 * Retrieves a professor by id, with optional courseID parameter passed in for
 * reviews limited to a certain course.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} professorID - Professor's ID.
 * @param {number} [courseID = -1] - Course ID.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getProfessors = getProfessors;

var getProfessor = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(token, professorID) {
    var courseID,
        request,
        _args14 = arguments;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            courseID = _args14.length > 2 && _args14[2] !== undefined ? _args14[2] : -1;

            if (courseID === -1 || typeof courseID !== "number") {
              request = {
                url: "/api/v2/factrak/professors/".concat(professorID),
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              };
            } else {
              request = {
                url: "/api/v2/factrak/professors/".concat(professorID),
                headers: {
                  Authorization: "Bearer ".concat(token)
                },
                params: {
                  courseID: courseID
                }
              };
            }

            return _context14.abrupt("return", (0, _axios["default"])(request)["catch"](function (error) {
              throw error;
            }));

          case 3:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function getProfessor(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
/**
 * Retrieves a single survey by id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} surveyID - Survey ID.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getProfessor = getProfessor;

var getSurvey = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(token, surveyID) {
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            return _context15.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/surveys/".concat(surveyID),
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));

  return function getSurvey(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
/**
 * Retrieves a department by id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} departmentID - Department ID.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getSurvey = getSurvey;

var getDepartment = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(token, departmentID) {
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            return _context16.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/departments/".concat(departmentID),
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function getDepartment(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
/**
 * Retrieves a professor's rating by id, with optional courseID parameter passed in for
 * ratings limited to a certain course.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} professorID - Professor's ID.
 * @param {number} [courseID = -1] - Course ID.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getDepartment = getDepartment;

var getProfessorRatings = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(token, professorID) {
    var courseID,
        request,
        _args17 = arguments;
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            courseID = _args17.length > 2 && _args17[2] !== undefined ? _args17[2] : -1;

            if (courseID === -1 || typeof courseID !== "number") {
              request = {
                url: "/api/v2/factrak/professors/".concat(professorID, "/ratings"),
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              };
            } else {
              request = {
                url: "/api/v2/factrak/professors/".concat(professorID, "/ratings"),
                headers: {
                  Authorization: "Bearer ".concat(token)
                },
                params: {
                  courseID: courseID
                }
              };
            }

            return _context17.abrupt("return", (0, _axios["default"])(request)["catch"](function (error) {
              throw error;
            }));

          case 3:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));

  return function getProfessorRatings(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
/**
 * Retrieves a course's rating by id, with optional professorID parameter passed in for
 * ratings limited to a certain professor.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} [professorID = -1] - Professor's ID.
 * @param {number} courseID - Course ID.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getProfessorRatings = getProfessorRatings;

var getCourseRatings = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(token) {
    var professorID,
        courseID,
        request,
        _args18 = arguments;
    return regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            professorID = _args18.length > 1 && _args18[1] !== undefined ? _args18[1] : -1;
            courseID = _args18.length > 2 ? _args18[2] : undefined;

            if (professorID === -1 || typeof professorID !== "number") {
              request = {
                url: "/api/v2/factrak/courses/".concat(courseID, "/ratings"),
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              };
            } else {
              request = {
                url: "/api/v2/factrak/courses/".concat(courseID, "/ratings"),
                headers: {
                  Authorization: "Bearer ".concat(token)
                },
                params: {
                  professorID: professorID
                }
              };
            }

            return _context18.abrupt("return", (0, _axios["default"])(request)["catch"](function (error) {
              throw error;
            }));

          case 4:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function getCourseRatings(_x35) {
    return _ref18.apply(this, arguments);
  };
}();
/**
 * Creates a new Factrak survey.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewSurvey} createParams - New Survey.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getCourseRatings = getCourseRatings;

var postSurvey = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(token, createParams) {
    return regeneratorRuntime.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            return _context19.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/surveys",
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              method: "post",
              data: createParams
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context19.stop();
        }
      }
    }, _callee19);
  }));

  return function postSurvey(_x36, _x37) {
    return _ref19.apply(this, arguments);
  };
}();
/**
 * Updates a Factrak survey.
 *
 * @param {string} token - The auth token to be used.
 * @param {UpdatedSurvey} updateParams - Updated Survey.
 * @param {number} surveyID - Survey ID.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.postSurvey = postSurvey;

var patchSurvey = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(token, updateParams, surveyID) {
    return regeneratorRuntime.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            return _context20.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/surveys/".concat(surveyID),
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              method: "patch",
              data: updateParams
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  }));

  return function patchSurvey(_x38, _x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();
/**
 * Lists all courses satisfying the query parameters.
 *
 * @param {string} token - The auth token to be used.
 * @param {QueryCourses} params - Updated Survey.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.patchSurvey = patchSurvey;

var getCourses = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(token, params) {
    return regeneratorRuntime.wrap(function _callee21$(_context21) {
      while (1) {
        switch (_context21.prev = _context21.next) {
          case 0:
            return _context21.abrupt("return", (0, _axios["default"])({
              url: "/api/v2/factrak/courses",
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              params: params
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context21.stop();
        }
      }
    }, _callee21);
  }));

  return function getCourses(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();

exports.getCourses = getCourses;