function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import axios from "axios";

/**
 * Lists all Ephmatch-eligible students that the user has matched with
 *
 * @param {string} token - The auth token to be used.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
var getEphmatchMatches = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(token) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios({
              url: "/api/v2/ephmatch/matches",
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            })["catch"](function (error) {
              throw error;
            });

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getEphmatchMatches(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 *  Retrieves the Ephmatch profile of the user provided by the token.
 *
 * @param {string} token - The auth token to be used.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


var getSelfEphmatchProfile = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(token) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios({
              url: "/api/v2/ephmatch/profile",
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            })["catch"](function (error) {
              throw error;
            });

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getSelfEphmatchProfile(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 *  Retrieves the ephmatch profile of the user provided by the profile user id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} profileUserID - The user id of the Ephmatch profile to be retrieved.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


var getEphmatchProfile = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(token, profileUserID) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios({
              url: "/api/v2/ephmatch/profiles/".concat(profileUserID),
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            })["catch"](function (error) {
              throw error;
            });

          case 2:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getEphmatchProfile(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Retrieves ephmatch profiles that fit the given parameters.
 *
 * @param {string} token - The auth token to be used.
 * @param {EphmatchProfilesQuery} params - Query parameters for profile retrival.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


var getEphmatchProfiles = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(token, params) {
    var response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios({
              url: "/api/v2/ephmatch/profiles",
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              params: params
            })["catch"](function (error) {
              throw error;
            });

          case 2:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getEphmatchProfiles(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Creates a new Ephmatch profile
 *
 * @param {string} token - The auth token to be used.
 * @param {EphmatchProfilesQuery} params - Query parameters for profile retrival.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


var createEphmatchProfile = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(token, params) {
    var response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios({
              url: "/api/v2/ephmatch/profile",
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              data: params,
              method: "post"
            })["catch"](function (error) {
              throw error;
            });

          case 2:
            response = _context5.sent;
            return _context5.abrupt("return", response);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function createEphmatchProfile(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();
/**
 * Deletes token owner's Ephmatch profile
 *
 * @param {string} token - The auth token to be used.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


var deleteEphmatchProfile = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(token) {
    var response;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return axios({
              url: "/api/v2/ephmatch/profile",
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              method: "delete"
            })["catch"](function (error) {
              throw error;
            });

          case 2:
            response = _context6.sent;
            return _context6.abrupt("return", response);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteEphmatchProfile(_x9) {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * Update token owner's Ephmatch profile.
 *
 * @param {string} token - The auth token to be used.
 * @param {EphmatchProfilesUpdate} params - Update parameters.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


var updateEphmatchProfile = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(token, params) {
    var response;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return axios({
              url: "/api/v2/ephmatch/profile",
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              data: params,
              method: "patch"
            })["catch"](function (error) {
              throw error;
            });

          case 2:
            response = _context7.sent;
            return _context7.abrupt("return", response);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function updateEphmatchProfile(_x10, _x11) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Like the ephmatcher by their profile user id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} profileUserID - Profile id of the user to be liked.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


var likeEphmatcher = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(token, profileUserID) {
    var response;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return axios({
              url: "/api/v2/ephmatch/profiles/".concat(profileUserID, "/like"),
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              method: "post"
            })["catch"](function (error) {
              throw error;
            });

          case 2:
            response = _context8.sent;
            return _context8.abrupt("return", response);

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function likeEphmatcher(_x12, _x13) {
    return _ref8.apply(this, arguments);
  };
}();
/**
 * Unlike the ephmatcher by their profile user id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} profileUserID - Profile id of the user to be unliked.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


var unlikeEphmatcher = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(token, profileUserID) {
    var response;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return axios({
              url: "/api/v2/ephmatch/profiles/".concat(profileUserID, "/unlike"),
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              method: "post"
            })["catch"](function (error) {
              throw error;
            });

          case 2:
            response = _context9.sent;
            return _context9.abrupt("return", response);

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function unlikeEphmatcher(_x14, _x15) {
    return _ref9.apply(this, arguments);
  };
}();

export { getEphmatchMatches, getEphmatchProfile, getEphmatchProfiles, getSelfEphmatchProfile, unlikeEphmatcher, likeEphmatcher, updateEphmatchProfile, deleteEphmatchProfile, createEphmatchProfile };