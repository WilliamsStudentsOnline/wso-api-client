"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshToken = exports.getCampusToken = exports.getToken = exports.updateTokenAPI = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Refreshes the auth token passed in. Marginally faster than updateToken, but
 * in general updateTokenAPI should be used, since this method does not update
 * necessary scopes and payload.
 *
 * @param {string} token - The auth token to be refreshed.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>} Returns the response from the server.
 */
var refreshToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(token) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _axios["default"].post("/api/v2/auth/refresh-token", {
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

  return function refreshToken(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Updates the auth token passed in by performing the necessary queries to the
 * database, modifying the token payload if necessary.
 *
 * @param {string} token - The auth token to be refreshed.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.refreshToken = refreshToken;

var updateTokenAPI = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(token) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _axios["default"].get("/api/v2/auth/update-token", {
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

  return function updateTokenAPI(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Attempts to authenticate the user with the provided unixID and password,
 * logging on to the server.
 *
 * @param {string} unixID - The unix id for the LDAP account.
 * @param {string} password - The password for the LDAP account.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server
 */


exports.updateTokenAPI = updateTokenAPI;

var getToken = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(unixID, password) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(!unixID || !password)) {
              _context3.next = 2;
              break;
            }

            return _context3.abrupt("return", null);

          case 2:
            return _context3.abrupt("return", _axios["default"].post("/api/v2/auth/login", {
              unixID: unixID,
              password: password
            })["catch"](function (error) {
              throw error;
            }));

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getToken(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Gets an on/off-campus token without logging in.
 *
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getToken = getToken;

var getCampusToken = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _axios["default"].post("/api/v2/auth/login", {
              unixID: "invalid",
              password: "invalid",
              useIP: true
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

  return function getCampusToken() {
    return _ref4.apply(this, arguments);
  };
}();

exports.getCampusToken = getCampusToken;