"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchRide = exports.deleteRide = exports.postRide = exports.getRides = exports.getRide = exports.patchPost = exports.deletePost = exports.getPost = exports.postPost = exports.getDiscussionPosts = exports.getDiscussions = exports.postDiscussion = exports.deleteDiscussion = exports.getDiscussion = exports.patchBulletin = exports.deleteBulletin = exports.getBulletin = exports.postBulletin = exports.getBulletins = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/** *
 ** Bulletins Section
 **
 ** Bulletins include Lost & Found, Announcements, Exchanges and Jobs.
 */

/**
 * Gets the bulletins satisfying the given parameters.
 *
 * @param {string} token - The auth token to be used.
 * @param {BulletinQuery} params - The parameters used to retrieve the bulletins.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */
var getBulletins = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(token, params) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _axios["default"].get("/api/v2/bulletin/bulletins", {
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

  return function getBulletins(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Gets a single bulletin by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} bulletinID - The id number of the bulletin to retrieve.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getBulletins = getBulletins;

var getBulletin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(token, bulletinID) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _axios["default"].get("/api/v2/bulletin/bulletins/".concat(bulletinID), {
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

  return function getBulletin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * Creates a single bulletin.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewBulletin} createParams - The parameters used to create the bulletin.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getBulletin = getBulletin;

var postBulletin = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(token, createParams) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _axios["default"].post("/api/v2/bulletin/bulletins", {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              data: createParams
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

  return function postBulletin(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * Deletes a single bulletin by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} bulletinID - The id of the bulletin.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.postBulletin = postBulletin;

var deleteBulletin = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(token, bulletinID) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _axios["default"]["delete"]("/api/v2/bulletin/bulletins/".concat(bulletinID), {
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

  return function deleteBulletin(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Updates a single bulletin.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} bulletinID - The id of the bulletin.
 * @param {UpdatedBulletin} updateParams - The parameters used to update the bulletin.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.deleteBulletin = deleteBulletin;

var patchBulletin = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(token, bulletinID, updateParams) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", _axios["default"].patch("/api/v2/bulletin/bulletins/".concat(bulletinID), {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              params: updateParams
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

  return function patchBulletin(_x9, _x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();
/** *
 ** Discussions Section
 **
 ** Discussions consist of a main discussion thread, followed by discussion posts.
 */

/**
 * Gets all the discussions.
 *
 * @param {string} token - The auth token to be used.
 * @param {DiscussionsQuery} params - The parameters used to update the bulletin.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.patchBulletin = patchBulletin;

var getDiscussions = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(token, params) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", _axios["default"].get("/api/v2/bulletin/discussions", {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              params: params
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

  return function getDiscussions(_x12, _x13) {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * Gets a discussion by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} discussionID - The id of the discussion to be retrieved.
 * @param {DiscussionQuery} params - The parameters used to get the bulletin (preload).
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getDiscussions = getDiscussions;

var getDiscussion = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(token, discussionID, params) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", _axios["default"].get("/api/v2/bulletin/discussions/".concat(discussionID), {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              params: params
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

  return function getDiscussion(_x14, _x15, _x16) {
    return _ref7.apply(this, arguments);
  };
}();
/**
 * Deletes a discussion by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} discussionID - The id of the discussion to be retrieved.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getDiscussion = getDiscussion;

var deleteDiscussion = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(token, discussionID) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", _axios["default"]["delete"]("/api/v2/bulletin/discussions/".concat(discussionID), {
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

  return function deleteDiscussion(_x17, _x18) {
    return _ref8.apply(this, arguments);
  };
}();
/**
 * Creates a new discussion.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewDiscussion} createParams - The parameters used to create the discussion.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.deleteDiscussion = deleteDiscussion;

var postDiscussion = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(token, createParams) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", _axios["default"].post("/api/v2/bulletin/discussions", {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              data: createParams
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

  return function postDiscussion(_x19, _x20) {
    return _ref9.apply(this, arguments);
  };
}();
/**
 * Gets the posts of a discussion by ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} discussionID - The id of the discussion whose posts are
 *                                to be retrieved.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.postDiscussion = postDiscussion;

var getDiscussionPosts = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(token, discussionID) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt("return", _axios["default"].get("/api/v2/bulletin/discussions/".concat(discussionID, "/posts"), {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
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

  return function getDiscussionPosts(_x21, _x22) {
    return _ref10.apply(this, arguments);
  };
}();
/**
 * Creates a new bulletin post in the discussion thread.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewDiscussionPost} createParams - The parameters of the new bulletin.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getDiscussionPosts = getDiscussionPosts;

var postPost = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(token, createParams) {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt("return", _axios["default"].post("/api/v2/bulletin/posts", {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              data: createParams
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

  return function postPost(_x23, _x24) {
    return _ref11.apply(this, arguments);
  };
}();
/**
 * Gets a bulletin post based on the post ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} postID - The id of the bulletin post to be retrieved.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.postPost = postPost;

var getPost = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(token, postID) {
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt("return", _axios["default"].get("/api/v2/bulletin/posts/".concat(postID), {
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

  return function getPost(_x25, _x26) {
    return _ref12.apply(this, arguments);
  };
}();
/**
 * Deletes a bulletin post based on the post ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} postID - The id of the bulletin post to be deleted.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getPost = getPost;

var deletePost = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(token, postID) {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            return _context13.abrupt("return", _axios["default"]["delete"]("/api/v2/bulletin/posts/".concat(postID), {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
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

  return function deletePost(_x27, _x28) {
    return _ref13.apply(this, arguments);
  };
}();
/**
 * Updates a bulletin post based on the post ID.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} postID - The id of the bulletin post to be deleted.
 * @param {UpdatedDiscussionPost} updateParams - The parameters used to update the post.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.deletePost = deletePost;

var patchPost = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(token, postID, updateParams) {
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            return _context14.abrupt("return", _axios["default"].patch("/api/v2/bulletin/posts/".concat(postID), {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              data: updateParams
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function patchPost(_x29, _x30, _x31) {
    return _ref14.apply(this, arguments);
  };
}();
/** *
 ** Rides Section
 **
 ** Rides are like bulletins, except they have an additional offer variable
 ** which indicates whether the user is offering the ride.
 */

/**
 * Gets a list of ride posts.
 *
 * @param {string} token - The auth token to be used.
 * @param {RideQuery} params - The parameters used to get the ride.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.patchPost = patchPost;

var getRides = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(token, params) {
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            return _context15.abrupt("return", _axios["default"].get("/api/v2/bulletin/rides", {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              params: params
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

  return function getRides(_x32, _x33) {
    return _ref15.apply(this, arguments);
  };
}();
/**
 * Create a new ride.
 *
 * @param {string} token - The auth token to be used.
 * @param {NewRide} createParams - The parameters used to get the ride.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getRides = getRides;

var postRide = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(token, createParams) {
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            return _context16.abrupt("return", _axios["default"].post("/api/v2/bulletin/rides", {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              data: createParams
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

  return function postRide(_x34, _x35) {
    return _ref16.apply(this, arguments);
  };
}();
/**
 * Gets a new ride by id.
 *
 * @param {string} token - The auth token to be used.
 * @param {number} rideID - The id of the ride we wish to retrieve.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.postRide = postRide;

var getRide = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(token, rideID) {
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            return _context17.abrupt("return", _axios["default"].get("/api/v2/bulletin/rides/".concat(rideID), {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context17.stop();
        }
      }
    }, _callee17);
  }));

  return function getRide(_x36, _x37) {
    return _ref17.apply(this, arguments);
  };
}();
/**
 * Deletes a single ride by id
 *
 * @param {string} token - The auth token to be used.
 * @param {number} rideID - The id of the ride to be deleted.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.getRide = getRide;

var deleteRide = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(token, rideID) {
    return regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            return _context18.abrupt("return", _axios["default"]["delete"]("/api/v2/bulletin/rides/".concat(rideID), {
              headers: {
                Authorization: "Bearer ".concat(token)
              }
            })["catch"](function (error) {
              throw error;
            }));

          case 1:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function deleteRide(_x38, _x39) {
    return _ref18.apply(this, arguments);
  };
}();
/**
 * Updates a single ride by id
 *
 * @param {string} token - The auth token to be used.
 * @param {number} rideID - The id of the ride to be updated.
 * @param {UpdatedRide} updateParams - The parameters used to update rides.
 * @throws {AxiosError<any>} Possible error returned from the server.
 * @return {Promise<AxiosResponse<any>>} Returns the response from the server.
 */


exports.deleteRide = deleteRide;

var patchRide = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(token, rideID, updateParams) {
    return regeneratorRuntime.wrap(function _callee19$(_context19) {
      while (1) {
        switch (_context19.prev = _context19.next) {
          case 0:
            return _context19.abrupt("return", _axios["default"].patch("/api/v2/bulletin/rides/".concat(rideID), {
              headers: {
                Authorization: "Bearer ".concat(token)
              },
              params: updateParams
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

  return function patchRide(_x40, _x41, _x42) {
    return _ref19.apply(this, arguments);
  };
}();

exports.patchRide = patchRide;