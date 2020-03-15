"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchDormReview = exports.deleteDormReview = exports.getDormReview = exports.postDormReview = exports.getDormReviews = exports.getDormRooms = exports.getDormFacts = exports.getDorm = exports.getDorms = exports.getNeighborhoodFacts = exports.getNeighborhood = exports.getNeighborhoods = exports.getDormtrakRankings = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * Get the Dormtrak rankings based on the following metrics:
 * 1. Max/Min Single Size
 * 2. Biggest/Smallest Singles
 * 3. Max/Min Double Size
 * 4. Biggest/Smallest Doubles
 * 5. Most Singles/Doubles
 * 6. Most/Fewest Bathrooms
 *
 * Note that some of these results are dorms, and the others are specific rooms.
 *
 * @param {string} token - The auth token to be used.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
var getDormtrakRankings = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(token) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _axios["default"].get("/api/v2/dormtrak/rankings", {
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

  return function getDormtrakRankings(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Retrieves the list of Dormtrak Neighborhoods.
 *
 * @param {string} token - The auth token to be used.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getDormtrakRankings = getDormtrakRankings;

var getNeighborhoods = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(token) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _axios["default"].get("/api/v2/dormtrak/neighborhoods", {
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

  return function getNeighborhoods(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Retrieves one dormtrak neighborhood by id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} neighborhoodID - The id of the neighborhood we are interested in.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getNeighborhoods = getNeighborhoods;

var getNeighborhood = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(token, neighborhoodID) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _axios["default"].get("/api/v2/dormtrak/neighborhoods/".concat(neighborhoodID), {
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

  return function getNeighborhood(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Retrieves one dormtrak neighborhood facts by id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} neighborhoodID - The id of the neighborhood we are interested in.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getNeighborhood = getNeighborhood;

var getNeighborhoodFacts = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(token, neighborhoodID) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _axios["default"].get("/api/v2/dormtrak/neighborhoods/".concat(neighborhoodID, "/facts"), {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
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

  return function getNeighborhoodFacts(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Retrieves the list of all Dormtrak dorms.
 *
 * @param {string} token - The auth token to be used.
 * @param {DormsQuery} params - The query parameters.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getNeighborhoodFacts = getNeighborhoodFacts;

var getDorms = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(token, params) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", _axios["default"].get("/api/v2/dormtrak/dorms", {
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

  return function getDorms(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();
/**
 * Retrieves the dorm corresponding to a specific dorm id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} dormID - The id of the dorm to retrieve.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getDorms = getDorms;

var getDorm = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(token, dormID) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", _axios["default"].get("/api/v2/dormtrak/dorms/".concat(dormID), {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
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

  return function getDorm(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * Retrieves the dorm facts for the dorm corresponding to a specific dorm id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} dormID - The id of the dorm whose facts we want to retrieve.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getDorm = getDorm;

var getDormFacts = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(token, dormID) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", _axios["default"].get("/api/v2/dormtrak/dorms/".concat(dormID, "/facts"), {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
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

  return function getDormFacts(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Retrieves the dorm rooms for the dorm corresponding to a specific dorm id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} dormID - The id of the dorm whose rooms we want to retrieve.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getDormFacts = getDormFacts;

var getDormRooms = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(token, dormID) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", _axios["default"].get("/api/v2/dormtrak/dorms/".concat(dormID, "/rooms"), {
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

  return function getDormRooms(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();
/**
 * Retrieves the dorm reviews for the dorm corresponding to a specific dorm id.
 *
 * @param {string} token - The auth token to be used.
 * @param {DormReviewsQuery} [queryParams = {}] - The id of the dorm whose rooms we want to retrieve.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getDormRooms = getDormRooms;

var getDormReviews = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(token) {
    var queryParams,
        _args9 = arguments;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            queryParams = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : {};
            return _context9.abrupt("return", _axios["default"].get("/api/v2/dormtrak/reviews", {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              params: queryParams
            })["catch"](function (error) {
              throw error;
            }));

          case 2:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function getDormReviews(_x15) {
    return _ref9.apply(this, arguments);
  };
}();
/**
 * Creates a Dormtrak Review.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewDormReview} createParams - New Dormtrak Review.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getDormReviews = getDormReviews;

var postDormReview = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(token, createParams) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt("return", _axios["default"].post("/api/v2/dormtrak/reviews", {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              data: createParams
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

  return function postDormReview(_x16, _x17) {
    return _ref10.apply(this, arguments);
  };
}();
/**
 * Retrieves the Dormtrak Review corresponding to the id passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} reviewID - The id of the review to be retrieved.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.postDormReview = postDormReview;

var getDormReview = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(token, reviewID) {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt("return", _axios["default"].get("/api/v2/dormtrak/reviews/".concat(reviewID), {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
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

  return function getDormReview(_x18, _x19) {
    return _ref11.apply(this, arguments);
  };
}();
/**
 * Deletes a specific Dormtrak Review based on the review id passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} reviewID - The id of the review to be deleted.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getDormReview = getDormReview;

var deleteDormReview = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(token, reviewID) {
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt("return", _axios["default"]["delete"]("/api/v2/dormtrak/reviews/".concat(reviewID), {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
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

  return function deleteDormReview(_x20, _x21) {
    return _ref12.apply(this, arguments);
  };
}();
/**
 * Updates a specific Dormtrak Review based on the review id passed in.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} reviewID - The id of the review to be deleted.
 * @param {UpdatedDormReview} reviewParams - The updated dormtrak review.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.deleteDormReview = deleteDormReview;

var patchDormReview = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(token, reviewParams, reviewID) {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            return _context13.abrupt("return", _axios["default"].patch("/api/v2/dormtrak/reviews/".concat(reviewID), {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              data: reviewParams
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

  return function patchDormReview(_x22, _x23, _x24) {
    return _ref13.apply(this, arguments);
  };
}();

exports.patchDormReview = patchDormReview;