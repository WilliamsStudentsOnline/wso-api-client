function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import axios from "axios";
/**
 * Returns the autocomplete results for tags, limited to 5.
 *
 * @param {string} token - The auth token to be used.
 * @param {string} query - The query to be searched.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */

var autocompleteTags = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(token, query) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", axios.get("/api/v2/autocomplete/tag", {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              params: {
                q: query,
                limit: 5
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

  return function autocompleteTags(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Returns the autocomplete results for Factrak (Professors/Courses), limited to 5.
 *
 * @param {string} token - The auth token to be used.
 * @param {string} query - The query to be searched.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


var autocompleteFactrak = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(token, query) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", axios.get("/api/v2/autocomplete/factrak", {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              params: {
                q: query,
                limit: 5
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

  return function autocompleteFactrak(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

export { autocompleteTags, autocompleteFactrak };