"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserLargePhoto = exports.getUserThumbPhoto = exports.putCurrUserPhoto = exports.putCurrUserTags = exports.patchCurrUser = exports.getUser = exports.getAllUsers = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * WSO API for services with regards to getting users.
 *
 * When using the API, take note that userID is different from unixID.
 * UserID refers to the id of the user in our database, while unixID
 * refers to the unix of the user (e.g. "gt4").
 */

/**
 * Retrieves all the users who match the search parameters
 *
 * @param {string} token - The auth token to be used.
 * @param {UsersQuery} params - The parameters used to retrieve the users.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
var getAllUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(token, params) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _axios["default"].get("/api/v2/users", {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              params: params
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

  return function getAllUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Retrieves all the user by user id.
 * By default, this function returns the user the token belongs to,
 * although you can pass in "me" as the userID to get the token user as
 * well.
 *
 * @param {string} token - The auth token to be used.
 * @param {string | number} [userID = "me"] - The user id used to search for a user. If 'me' is
 *                                 passed in, return the user of the token.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getAllUsers = getAllUsers;

var getUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(token) {
    var userID,
        _args2 = arguments;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userID = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : "me";
            return _context2.abrupt("return", _axios["default"].get("/api/v2/users/".concat(userID), {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            })["catch"](function (error) {
              throw error;
            }));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getUser(_x3) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Updates the current user (i.e. user of the token) based on the update Parameters.
 *
 * @param {string} token - The auth token to be used.
 * @param {UpdatedUser} updateParams - The update user object.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getUser = getUser;

var patchCurrUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(token, updateParams) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _axios["default"].patch("/api/v2/users/me", updateParams, {
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

  return function patchCurrUser(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Updates the current user's tags. Take note that this method will replace the
 * user's current tags with the tags that are passed in
 *
 * @param {string} token - The auth token to be used.
 * @param {UpdatedTags} updatedTags - The updated tags.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.patchCurrUser = patchCurrUser;

var putCurrUserTags = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(token, updatedTags) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _axios["default"].put("/api/v2/users/me/tags", {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              data: updatedTags
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

  return function putCurrUserTags(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Updates the current user's profile photo.
 *
 * @param {string} token - The auth token to be used.
 * @param {Blob} file - The html blob representing the file.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.putCurrUserTags = putCurrUserTags;

var putCurrUserPhoto = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(token, file) {
    var formData;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            formData = new FormData();
            formData.append("file", file);
            return _context5.abrupt("return", _axios["default"].put("/api/v2/users/me/photo", {
              headers: {
                Authorization: "Bearer ".concat(token),
                "Content-Type": "multipart/form-data"
              },
              data: formData
            })["catch"](function (error) {
              throw error;
            }));

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function putCurrUserPhoto(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
/**
 * Gets the profile picture of the user scaled to thumbnail size.
 * This image is perfect for smaller images such as in the header.
 * Returns the thumbnail photo of the token user by default, and this
 * behavior can be explicitly performed by passing "me" as the unixID.
 *
 * @param {string} token - The auth token to be used.
 * @param {string | number} [unixID = "me"] - The unix id of the user whose photo we wish to retrieve.
 *                                   Pass in "me" to get the photo of the token's user.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.putCurrUserPhoto = putCurrUserPhoto;

var getUserThumbPhoto = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(token) {
    var unixID,
        _args6 = arguments;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            unixID = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : "me";
            return _context6.abrupt("return", _axios["default"].get("/pic/thumb/".concat(unixID, ".jpg"), {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              responseType: "blob"
            })["catch"](function (error) {
              throw error;
            }));

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getUserThumbPhoto(_x10) {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * Gets the profile picture of the user scaled to the larger size.
 * This image is perfect for larger images such as in facebook results or ephmatch.
 * Returns the large photo of the token user by default, and this
 * behavior can be explicitly performed by passing "me" as the unixID.
 *
 * @param {string} token - The auth token to be used.
 * @param {string | number} [unixID = "me"] - The unix id of the user whose photo we wish to retrieve.
 *                                           Pass in "me" to get the photo of the token's user.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getUserThumbPhoto = getUserThumbPhoto;

var getUserLargePhoto = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(token) {
    var unixID,
        _args7 = arguments;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            unixID = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : "me";
            return _context7.abrupt("return", _axios["default"].get("/pic/large/".concat(unixID, ".jpg"), {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              responseType: "blob"
            })["catch"](function (error) {
              throw error;
            }));

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function getUserLargePhoto(_x11) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getUserLargePhoto = getUserLargePhoto;