(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 6 */
/***/ (function(module) {

module.exports = {"data":{"logo":{"small":"https://drive.google.com/uc?id=1DAAK0B1QdOhl63e5_scpUCV_E4mrye38","medium":"https://drive.google.com/uc?id=1b35WHYBM_AsvKE9vRGl7kHIOK2MdWfXU","big":"https://drive.google.com/uc?id=1nPDZs2xH9XyhalaOlPO76jfiEIRKhy7t","large":"https://drive.google.com/uc?id=1nPDZs2xH9XyhalaOlPO76jfiEIRKhy7t"},"phone":{"small":"https://drive.google.com/uc?id=1AFH7OT3xh-Ol0MYEhtJbkvL7JKxEm2uh","medium":"https://drive.google.com/uc?id=1Hch1iwDc4NAhvtfBNFk85UWL_eJPksY_","big":"https://drive.google.com/uc?id=1F636F9qr0stZFDBIctNdMq5JAtYN-54v","large":"https://drive.google.com/uc?id=1pBP0HEBrvGUsQYeLJJvpwQUYEN3SX6yR"},"message":{"small":"https://drive.google.com/uc?id=1PF2kAsNavVuksmrH91gDQOHdKJDpG0Ux","medium":"https://drive.google.com/uc?id=14cI7loh5LdsYkHwo9MlBX9oVcAy5dO_y","big":"https://drive.google.com/uc?id=1btBRBYyNTNLwLNbP5NB6JZxCSIhea1X4","large":"https://drive.google.com/uc?id=1q7s1tPecTX1fxCRBmYNOgcEBMLotYusk"},"policy":{"small":"https://drive.google.com/uc?id=1qJY5GN_P42aHjn4Lxis_CoL-IcneLHGu","medium":"https://drive.google.com/uc?id=1acS0ywsoVAOSBt7adRiH3jXcmwE3_Hyg","big":"https://drive.google.com/uc?id=1b-hk8XoKa2eghQBMxtgEsxtyVGX6Fo_4","large":"https://drive.google.com/uc?id=1QUVDLxAFbnc-7UjTkxx9zpCfBCDa62Rh","source":"https://drive.google.com/uc?id=1plFomls8sJb4DJp_1pABriuN-wp_t92A"},"background":{"small":"https://drive.google.com/uc?id=1ZysmslRV8_044DMkWQYvz7zJc6r_ry2L","medium":"https://drive.google.com/uc?id=1LW24B16uytnQV0YkQKKQvsTqd1Sb4XEE","big":"https://drive.google.com/uc?id=1zTa001C61aUQINI5WAR7RcrHYAPMqS_w","large":"https://drive.google.com/uc?id=1mE-ZMUQKToCqAFVS-uviT8ACu1cJS4QU"}}};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 8 */
/***/ (function(module) {

module.exports = {"data":{"name":"misc.aboutUs","title":"https://drive.google.com/uc?id=1U8BxqKlh1IhJvix-_d1HZKzr69ZBPW1X","background":"https://drive.google.com/uc?id=14-LPG_HsstwERFPwJrbzEKfQdtLF5og9","backgroundLarge":"https://drive.google.com/uc?id=1gP2_fZk9gWwQI067gsUfzJJoUMHF6xWP","photoColor":"https://drive.google.com/uc?id=1GxJMVcsRpv2HRzGzzy3yCrozufqOhdg6","photoColorMedio":"https://drive.google.com/uc?id=1tueBOGwWujLST5rtifCgyjWAjRou-jjG","photoNegro":"https://drive.google.com/uc?id=1zpM_0hObeSXz2nHtsq6C8vCwPRS-GpA2","description":"about.description","textTitle":"about.phil.title","text":"about.phil.phrase","logo":"https://drive.google.com/uc?id=1Oem-kGU51J5i4_3yAXCZWrj874iouGDw","logoLarge":"https://drive.google.com/uc?id=1jLlkyUsWccYu6sNHDOv5VgW6HUSwtWXy","textDescription":"about.phil.explain","puntosSuperiores":"https://drive.google.com/uc?id=1A4z5HNgxtE-Dh-WN_0kd19_THdhraKeC","puntosSuperioresMedio":"https://drive.google.com/uc?id=1GlMkUjWCMbcE2_OVeg0hG_P0TNM1za-c","puntosInferiores":"https://drive.google.com/uc?id=1aC7-IowesuvDMwQCtpkvyOypfatfg1Mr"}};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reloadRouteData = reloadRouteData;
exports.getRouteInfo = getRouteInfo;
exports.prefetchData = prefetchData;
exports.prefetchTemplate = prefetchTemplate;
exports.prefetch = prefetch;
exports.getCurrentRoutePath = getCurrentRoutePath;
exports.registerTemplateForPath = exports.registerTemplates = exports.templateUpdated = exports.templateErrorByPath = exports.templatesByPath = exports.templates = exports.registerPlugins = exports.plugins = exports.sharedDataByHash = exports.routeErrorByPath = exports.routeInfoByPath = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(11));

var _axios = _interopRequireDefault(__webpack_require__(26));

var _utils = __webpack_require__(16);

var _Visibility = _interopRequireDefault(__webpack_require__(27));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
} // RouteInfo / RouteData


var routeInfoByPath = {};
exports.routeInfoByPath = routeInfoByPath;
var routeErrorByPath = {};
exports.routeErrorByPath = routeErrorByPath;
var sharedDataByHash = {};
exports.sharedDataByHash = sharedDataByHash;
var inflightRouteInfo = {};
var inflightPropHashes = {};
var requestPool = (0, _utils.createPool)({
  concurrency: Number("5")
}); // Plugins

var plugins = [];
exports.plugins = plugins;

var registerPlugins = function registerPlugins(newPlugins) {
  plugins.splice.apply(plugins, [0, Infinity].concat(_toConsumableArray(newPlugins)));
}; // Templates


exports.registerPlugins = registerPlugins;
var templates = {};
exports.templates = templates;
var templatesByPath = {};
exports.templatesByPath = templatesByPath;
var templateErrorByPath = {};
exports.templateErrorByPath = templateErrorByPath;
var templateUpdated = {
  cb: function cb() {}
};
exports.templateUpdated = templateUpdated;

var registerTemplates = function registerTemplates(tmps, notFoundKey) {
  Object.keys(templates).forEach(function (key) {
    delete templates[key];
  });
  Object.keys(tmps).forEach(function (key) {
    templates[key] = tmps[key];
  });
  templatesByPath['404'] = templates[notFoundKey];
  templateUpdated.cb();
};

exports.registerTemplates = registerTemplates;

var registerTemplateForPath = function registerTemplateForPath(path, template) {
  path = (0, _utils.getRoutePath)(path);
  templatesByPath[path] = templates[template];
};

exports.registerTemplateForPath = registerTemplateForPath;
init(); // When in development, init a socket to listen for data changes
// When the data changes, we invalidate and reload all of the route data

function init() {
  // In development, we need to open a socket to listen for changes to data
  if (false) { var run, io; }

  if (true) startPreloader();
}

function startPreloader() {
  if (typeof document !== 'undefined') {
    var run = function run() {
      var els = [].slice.call(document.getElementsByTagName('a'));
      els.forEach(function (el) {
        var href = el.getAttribute('href');
        var shouldPrefetch = !(el.getAttribute('prefetch') === 'false');

        if (href && shouldPrefetch) {
          (0, _Visibility.default)(el, function () {
            prefetch(href);
          });
        }
      });
    };

    setInterval(run, Number("300"));
  }
}

function reloadRouteData() {
  // Delete all cached data
  ;
  [routeInfoByPath, sharedDataByHash, routeErrorByPath, inflightRouteInfo, inflightPropHashes].forEach(function (part) {
    Object.keys(part).forEach(function (key) {
      delete part[key];
    });
  }); // Force each RouteData component to reload

  global.reloadAll();
}

function getRouteInfo(_x) {
  return _getRouteInfo.apply(this, arguments);
}

function _getRouteInfo() {
  _getRouteInfo = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(path) {
    var _ref4,
        priority,
        routeInfo,
        _ref7,
        data,
        routeInfoRoot,
        cacheBuster,
        getPath,
        _ref8,
        _data,
        _ref9,
        _data2,
        _args2 = arguments;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ref4 = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {}, priority = _ref4.priority;
            path = (0, _utils.getRoutePath)(path); // Check if we should fetch RouteData for this url et all.

            if ((0, _utils.isPrefetchableRoute)(path)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return");

          case 4:
            if (!routeInfoByPath[path]) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 6:
            if (!routeErrorByPath[path]) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return");

          case 8:
            _context2.prev = 8;

            if (true) {
              _context2.next = 18;
              break;
            } // In dev, request from the webpack dev server


            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = _axios.default.get("/__react-static__/routeInfo/".concat(path === '/' ? '' : path));
            }

            _context2.next = 13;
            return inflightRouteInfo[path];

          case 13:
            _ref7 = _context2.sent;
            data = _ref7.data;
            routeInfo = data;
            _context2.next = 35;
            break;

          case 18:
            // In production, fetch the JSON file
            // Find the location of the routeInfo.json file
            routeInfoRoot = ( false ? undefined : "/") || false;
            cacheBuster = process.env.REACT_STATIC_CACHE_BUST ? "?".concat(process.env.REACT_STATIC_CACHE_BUST) : '';
            getPath = "".concat(routeInfoRoot).concat((0, _utils.pathJoin)(path, 'routeInfo.json')).concat(cacheBuster); // If this is a priority call bypass the queue

            if (!priority) {
              _context2.next = 29;
              break;
            }

            _context2.next = 24;
            return _axios.default.get(getPath);

          case 24:
            _ref8 = _context2.sent;
            _data = _ref8.data;
            routeInfo = _data;
            _context2.next = 35;
            break;

          case 29:
            // Otherwise, add it to the queue
            if (!inflightRouteInfo[path]) {
              inflightRouteInfo[path] = requestPool.add(function () {
                return _axios.default.get(getPath);
              });
            }

            _context2.next = 32;
            return inflightRouteInfo[path];

          case 32:
            _ref9 = _context2.sent;
            _data2 = _ref9.data;
            routeInfo = _data2;

          case 35:
            _context2.next = 43;
            break;

          case 37:
            _context2.prev = 37;
            _context2.t0 = _context2["catch"](8); // If there was an error, mark the path as errored

            routeErrorByPath[path] = true; // Unless we already fetched the 404 page,
            // try to load info for the 404 page

            if (!(!routeInfoByPath['404'] && !routeErrorByPath['404'])) {
              _context2.next = 42;
              break;
            }

            return _context2.abrupt("return", getRouteInfo('404', {
              priority: priority
            }));

          case 42:
            return _context2.abrupt("return");

          case 43:
            if (!priority) {
              delete inflightRouteInfo[path];
            }

            if (_typeof(routeInfo) !== 'object' || !routeInfo.path) {
              // routeInfo must have returned 200, but is not actually
              // a routeInfo object. Mark it as an error and move on silently
              routeErrorByPath[path] = true;
            } else {
              routeInfoByPath[path] = routeInfo;
            }

            return _context2.abrupt("return", routeInfoByPath[path]);

          case 46:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[8, 37]]);
  }));
  return _getRouteInfo.apply(this, arguments);
}

function prefetchData(_x2) {
  return _prefetchData.apply(this, arguments);
}

function _prefetchData() {
  _prefetchData = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee4(path) {
    var _ref5,
        priority,
        routeInfo,
        _args4 = arguments;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref5 = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {}, priority = _ref5.priority;
            _context4.next = 3;
            return getRouteInfo(path, {
              priority: priority
            });

          case 3:
            routeInfo = _context4.sent;

            if (routeInfo) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return");

          case 6:
            if (!routeInfo.sharedData) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt("return");

          case 8:
            // Request and build the props one by one
            routeInfo.sharedData = {}; // Request the template and loop over the routeInfo.sharedHashesByProp, requesting each prop

            _context4.next = 11;
            return Promise.all(Object.keys(routeInfo.sharedHashesByProp).map(
            /*#__PURE__*/
            function () {
              var _ref10 = _asyncToGenerator(
              /*#__PURE__*/
              _regenerator.default.mark(function _callee3(key) {
                var hash, _ref11, prop, _ref12, _prop;

                return _regenerator.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        hash = routeInfo.sharedHashesByProp[key]; // Check the sharedDataByHash first

                        if (sharedDataByHash[hash]) {
                          _context3.next = 24;
                          break;
                        }

                        _context3.prev = 2;

                        if (!priority) {
                          _context3.next = 11;
                          break;
                        }

                        _context3.next = 6;
                        return _axios.default.get((0, _utils.pathJoin)("", "staticData/".concat(hash, ".json")));

                      case 6:
                        _ref11 = _context3.sent;
                        prop = _ref11.data;
                        sharedDataByHash[hash] = prop;
                        _context3.next = 17;
                        break;

                      case 11:
                        // Non priority, share inflight requests and use pool
                        if (!inflightPropHashes[hash]) {
                          inflightPropHashes[hash] = requestPool.add(function () {
                            return _axios.default.get((0, _utils.pathJoin)("", "staticData/".concat(hash, ".json")));
                          });
                        }

                        _context3.next = 14;
                        return inflightPropHashes[hash];

                      case 14:
                        _ref12 = _context3.sent;
                        _prop = _ref12.data; // Place it in the cache

                        sharedDataByHash[hash] = _prop;

                      case 17:
                        _context3.next = 23;
                        break;

                      case 19:
                        _context3.prev = 19;
                        _context3.t0 = _context3["catch"](2);
                        console.log('Error: There was an error retrieving a prop for this route! hashID:', hash);
                        console.error(_context3.t0);

                      case 23:
                        if (!priority) {
                          delete inflightPropHashes[hash];
                        }

                      case 24:
                        // Otherwise, just set it as the key
                        routeInfo.sharedData[key] = sharedDataByHash[hash];

                      case 25:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this, [[2, 19]]);
              }));

              return function (_x5) {
                return _ref10.apply(this, arguments);
              };
            }()));

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _prefetchData.apply(this, arguments);
}

function prefetchTemplate(_x3) {
  return _prefetchTemplate.apply(this, arguments);
}

function _prefetchTemplate() {
  _prefetchTemplate = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee5(path) {
    var _ref6,
        priority,
        routeInfo,
        Template,
        _args5 = arguments;

    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _ref6 = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : {}, priority = _ref6.priority; // Clean the path

            path = (0, _utils.getRoutePath)(path); // Get route info so we can check if path has any data

            _context5.next = 4;
            return getRouteInfo(path, {
              priority: priority
            });

          case 4:
            routeInfo = _context5.sent;

            if (routeInfo) {
              // Make sure to use the path as defined in the routeInfo object here.
              // This will make sure 404 route info returned from getRouteInfo is handled correctly.
              registerTemplateForPath(routeInfo.path, routeInfo.template);
            } // Preload the template if available


            Template = templatesByPath[path];

            if (Template) {
              _context5.next = 10;
              break;
            } // If no template was found, mark it with an error


            templateErrorByPath[path] = true;
            return _context5.abrupt("return");

          case 10:
            if (routeInfo) {
              _context5.next = 12;
              break;
            }

            return _context5.abrupt("return");

          case 12:
            if (!(routeInfo && !routeInfo.templateLoaded && Template.preload)) {
              _context5.next = 21;
              break;
            }

            if (!priority) {
              _context5.next = 18;
              break;
            }

            _context5.next = 16;
            return Template.preload();

          case 16:
            _context5.next = 20;
            break;

          case 18:
            _context5.next = 20;
            return requestPool.add(function () {
              return Template.preload();
            });

          case 20:
            routeInfo.templateLoaded = true;

          case 21:
            return _context5.abrupt("return", Template);

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));
  return _prefetchTemplate.apply(this, arguments);
}

function prefetch(_x4) {
  return _prefetch.apply(this, arguments);
}

function _prefetch() {
  _prefetch = _asyncToGenerator(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee6(path) {
    var options,
        type,
        _args6 = arguments;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            options = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {}; // Clean the path

            path = (0, _utils.getRoutePath)(path);
            type = options.type; // If it's priority, we stop the queue temporarily

            if (options.priority) {
              requestPool.stop();
            }

            if (!(type === 'data')) {
              _context6.next = 9;
              break;
            }

            _context6.next = 7;
            return prefetchData(path, options);

          case 7:
            _context6.next = 16;
            break;

          case 9:
            if (!(type === 'template')) {
              _context6.next = 14;
              break;
            }

            _context6.next = 12;
            return prefetchTemplate(path, options);

          case 12:
            _context6.next = 16;
            break;

          case 14:
            _context6.next = 16;
            return Promise.all([prefetchData(path, options), prefetchTemplate(path, options)]);

          case 16:
            // If it was priority, start the queue again
            if (options.priority) {
              requestPool.start();
            }

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));
  return _prefetch.apply(this, arguments);
}

function getCurrentRoutePath() {
  // If in the browser, use the window
  if (typeof document !== 'undefined') {
    return (0, _utils.getRoutePath)(decodeURIComponent(window.location.href));
  }
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(routeInfoByPath, "routeInfoByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(routeErrorByPath, "routeErrorByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(sharedDataByHash, "sharedDataByHash", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightRouteInfo, "inflightRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(inflightPropHashes, "inflightPropHashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(requestPool, "requestPool", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(plugins, "plugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerPlugins, "registerPlugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templates, "templates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templatesByPath, "templatesByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateErrorByPath, "templateErrorByPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(templateUpdated, "templateUpdated", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerTemplates, "registerTemplates", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(registerTemplateForPath, "registerTemplateForPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(init, "init", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(startPreloader, "startPreloader", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(reloadRouteData, "reloadRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getRouteInfo, "getRouteInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchData, "prefetchData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetchTemplate, "prefetchTemplate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(prefetch, "prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  reactHotLoader.register(getCurrentRoutePath, "getCurrentRoutePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 13 */
/***/ (function(module) {

module.exports = {"data":[{"name":"Ashara Studios","backgroundColor":"radial-gradient(ellipse at center, rgba(255,255,255,1) 10%,rgba(200,200,200,1) 100%)","logo":"https://drive.google.com/uc?id=1wN_CYtHGR0OK6pdGpR2NlIUaym904oBx","logo2":"https://drive.google.com/uc?id=1heG3NY7MzdpVI0_o8_tSxYI0gyhkB8fw","title":"home.slogan","description":"home.description","color":"#666666","redesMessage":"home.redesMsg","redes":[{"id":"3","red":"facebook","logo":"https://drive.google.com/uc?id=1U2oegI-UkR9RYJshWRhSSLxDkpXJbXLM","link":"https://www.facebook.com/AsharaStudios","color":"#666666","fafa":"fab fa-facebook fa-3x"},{"id":"4","red":"twitter","logo":"https://drive.google.com/uc?id=1dWBkirvL2vt5AyouYZI6bdEkU_WAqV_t","link":"https://twitter.com/Ashara_Studios","color":"#666666","fafa":"fab fa-twitter fa-3x"},{"id":"5","red":"instagram","logo":"https://drive.google.com/uc?id=1x7Noqjy4QzXUWACni3SjjCY-hqJX6_Z7","link":"https://www.instagram.com/asharastudios/","color":"#666666","fafa":"fab fa-instagram fa-3x"},{"id":"1","red":"youtube","logo":"https://drive.google.com/uc?id=1xbrhLLluZZnDvuGMwwHjHvnaiXe7SHGQ","link":"https://www.youtube.com/channel/UCKtLoZ8R_ieK6N4o2L9i44A","color":"#666666","fafa":"fab fa-youtube fa-3x"},{"id":"2","red":"linkedin","logo":"https://drive.google.com/uc?id=1hjxjHCuU4NwMisPukW3XHKzQQLXg1Kqx","link":"https://www.linkedin.com/company/asharastudios/","color":"#666666","fafa":"fab fa-linkedin fa-3x"}]},{"name":"Ashara Soft","backgroundColor":"radial-gradient(ellipse at center, rgba(255,255,255,1) 10%,rgba(231, 239, 241,1) 100%)","logo":"https://drive.google.com/uc?id=1rYOJy1fxMp8SCnEfqqUaqxK2_LFIo_NU","icon":"https://drive.google.com/uc?id=1HuZq-FPuQv3QJEevNFMFGQxcJTnDQ_vv","title":"units.soft.call2action","color":"#005959","link":"/soft"},{"name":"Ashara Science","backgroundColor":"radial-gradient(ellipse at center, rgba(255,255,255,1) 10%,rgba(248, 250, 237,1) 100%)","logo":"https://drive.google.com/uc?id=1AAwSCW31eGOeFaSzm_rKK4dUFi_oin6J","icon":"https://drive.google.com/uc?id=1HhzUnQXC83SRUD4A8w5YXtu2Glpv6KZR","title":"units.science.call2action","color":"#576615","link":"/science"},{"name":"Ashara Games","backgroundColor":"radial-gradient(ellipse at center, rgba(255,255,255,1) 10%,rgba(238, 247, 254,1) 100%)","logo":"https://drive.google.com/uc?id=1699MBbd43t5GkCbieRrWKNaUioBvxfeX","icon":"https://drive.google.com/uc?id=1q3scZ3Qs9de-WEyuZzkJgXlPdrY9w3Ts","title":"units.games.call2action","color":"#004466","link":"/games"},{"name":"Ashara IoT","backgroundColor":"radial-gradient(ellipse at center, rgba(255,255,255,1) 10%,rgba(227, 230, 245,1) 100%)","logo":"https://drive.google.com/uc?id=1VMA53GlL9bRpKpbRVLNeLsKeGul78g4a","icon":"https://drive.google.com/uc?id=1hA6YhySZB_AiBelDRJxabW2OzRgTEE-M","title":"units.iot.call2action","color":"#1c3661","link":"/iot"},{"name":"Ashara School","backgroundColor":"radial-gradient(ellipse at center, rgba(255,255,255,1) 10%,rgba(254, 241, 225,1) 100%)","logo":"https://drive.google.com/uc?id=1KVlJl_F2HJYSxUvCG-sNo-LuB4E1Zaub","icon":"https://drive.google.com/uc?id=1Xtg8hPLybAC60qLiD6gzHgYbWepp6EPQ","title":"units.school.call2action","color":"#cc7912","link":"/school"},{"name":"Ashara Media","backgroundColor":"radial-gradient(ellipse at center, rgba(255,255,255,1) 10%,rgba(255, 233, 219,1) 100%)","logo":"https://drive.google.com/uc?id=1ct2W8rWvK8OK87XCtaz33bUQLp-zIrK4","icon":"https://drive.google.com/uc?id=1QRajsiq_GIUnldgNENjhaDWYcIg4eYjt","title":"units.media.call2action","color":"#eb650a","link":"/media"}]};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(44);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(46);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(29);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(47);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(21);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var _render = userRender || (0, _utils.createDefaultRender)(Loading, Err);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2.default)(asyncModule, options, props),
            requireSync = _req2.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = {
        error: null
      };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req3 = (0, _requireUniversalModule2.default)(asyncModule, options, this.props),
            addModule = _req3.addModule,
            requireSync = _req3.requireSync,
            requireAsync = _req3.requireAsync,
            asyncOnly = _req3.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({
            error: error
          });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({
            mod: mod
          }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2.default)(asyncModule, options, nextProps, this.props),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var mod = void 0;

            try {
              mod = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _mod = requireSync(nextProps, this.context);

            this.setState({
              mod: function mod() {
                return null;
              }
            }); // HMR /w Redux and HOCs can be finicky, so we

            setTimeout(function () {
              return _this2.setState({
                mod: _mod
              });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.mod && loadingTransition) {
          this.update({
            mod: null
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (mod) {
          var state = {
            mod: mod
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({
            error: error
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return _render(props, mod, isLoading, userError || error);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}

exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 15 */
/***/ (function(module) {

module.exports = {"marcoMobile":"https://drive.google.com/uc?id=1Gwzb9gFt4viH_o10PQDrFd_YW5gW4Ohm","marco1Desktop":"https://drive.google.com/uc?id=1Wk96hH2n6IP6kIsLcCNqSMgn5gg5du-4","marco2Desktop":"https://drive.google.com/uc?id=1k2MakLo1I3LisZlcJHWxvAo186Gep5_B","marcoText":"https://drive.google.com/uc?id=1sTCPPd2DmyWoI0Wgs7Z4AwlH2XbJaPEv","lineas":"https://drive.google.com/uc?id=1NZD7vdb7waXqL4xHVlOzom-v7j7c1SO3","heroes":[{"photo":"https://drive.google.com/uc?id=13ciVSfHuo9c4Twaf0DJe8FRE3Un__vBQ","name":"Andres Rodriguez","description":"heroes.andresRodriguez"},{"photo":"https://drive.google.com/uc?id=1XV2FYOBFHM0IXJ4FAgA_i0deZ0xtZ2d7","name":"Andrea Ramirez","description":"heroes.andreaRamirez"},{"photo":"https://drive.google.com/uc?id=1E_BgvP97HpsdYiUpo6QV_SFf2JOWFg9E","name":"Carlos Becerra","description":"heroes.carlosBecerra"},{"photo":"https://drive.google.com/uc?id=1NacrTnFT11ZD3xsLwvC2LdU6J2Q9eLXM","name":"Diego Mena","description":"heroes.diegoMena"},{"photo":"https://drive.google.com/uc?id=1oE6IYBGi28wPUEbU33F6MzyYWQLTCoDb","name":"Diego Tabares","description":"heroes.diegoTabares"},{"photo":"https://drive.google.com/uc?id=1efhj1CTDAk1nRCrckpcLpP3hWzjUkXcR","name":"Esteban Martínez","description":"heroes.estebanMartinez"},{"photo":"https://drive.google.com/uc?id=18oFj4qg-HjkOPtZx7Ww7fn5IU59o26A9","name":"Juan Jauregui","description":"heroes.juanJauregui"},{"photo":"https://drive.google.com/uc?id=10g7C5vtafRQMnf7jvksFqNMlW5pxG8hF","name":"Leonardo Cucaita","description":"heroes.leonardoCucaita"},{"photo":"https://drive.google.com/uc?id=1OSxmK5UYXEGvUAmj9hdGY-EK8Gkx9m30","name":"Sandra Castro","description":"heroes.sandraCastro"},{"photo":"https://drive.google.com/uc?id=1cNFcHqwzf3Vku2hXLeEfKykx226AsxnY","name":"Andrés Cabrera","description":"heroes.andresCabrera"},{"photo":"https://drive.google.com/uc?id=1-2FtgnePo9es7XhR6nuowRY2GhJz0sM8","name":"Camilo Torres","description":"heroes.camiloTorres"},{"photo":"https://drive.google.com/uc?id=13Ul1B_s54KcFemD7A6I8TdkO-ptF4NYp","name":"Daniel Florez","description":"heroes.danielFlorez"},{"photo":"https://drive.google.com/uc?id=19Fpg4c2PfhxBugTnuXd8BrLoDVG-msMI","name":"Diego Guerra","description":"heroes.diegoGuerra"},{"photo":"https://drive.google.com/uc?id=1FwDvgXDJRFCDEIIFEE9P9wmnqz7rGBsG","name":"Erick Garzón","description":"heroes.erickGarzon"},{"photo":"https://drive.google.com/uc?id=1qZSA44qiQqEq1SCGzGXl9mTkPdh3oU80","name":"Felipe Montoya","description":"heroes.felipeMontoya"},{"photo":"https://drive.google.com/uc?id=1PFfSVRE3hFcduPm9YbjrFg2WmWPxx_2E","name":"Fredy Rodriguez","description":"heroes.fredyRodriguez"},{"photo":"https://drive.google.com/uc?id=1J6Pp8nSfwLebzGqBQpmf8tkx1Izq5MDu","name":"Miguel Ramirez","description":"heroes.miguelRamirez"},{"photo":"https://drive.google.com/uc?id=1nzNLK9AkCp_0PtaEOr3dvLrGVFwAxA0W","name":"Natalia Barbosa","description":"heroes.nataliaBarbosa"},{"photo":"https://drive.google.com/uc?id=1_bqby3QA6fhdREEvN5GHzy3Mf6MdCxoR","name":"Sebastian Orozco","description":"heroes.sebastianOrozco"},{"photo":"https://drive.google.com/uc?id=1C_2CE5RC_F7ATTa8bfzcKf_jv0Sgwg8L","name":"Sebastian Tabares","description":"heroes.sebastianTabares"},{"photo":"https://drive.google.com/uc?id=1tgqpYjjf-ZDpQN8iT1jTmdrcQlyFV1UB","name":"Alex Bustos","description":"heroes.alexBustos"},{"photo":"https://drive.google.com/uc?id=1Copq7eJCoTTNp_HGD9xl-7phwqOxQfCI","name":"Rodrigo Alvarez","description":"heroes.rodrigoAlvarez"},{"photo":"https://drive.google.com/uc?id=1ml1SC_lcEZFiM6Znn1Gdsyxo_GgH0Vyd","name":"Carlos Acosta","description":"heroes.carlosAcosta"},{"photo":"https://drive.google.com/uc?id=1x34qhUqQC3e2eW2tDbdVAfZxfsAoG4gv","name":"Maribel Lopez","description":"heroes.maribelLopez"},{"photo":"https://drive.google.com/uc?id=1StffyEuKqkKb-U0-wM2srkVR7w7wbTHR","name":"Miguel Buitrago","description":"heroes.miguelBuitrago"},{"photo":"https://drive.google.com/uc?id=1ps1VYNLmLN7fgSQjG5hReL29JnOoPDzL","name":"Juan Pablo Moreno","description":"heroes.juanPabloMoreno"}]};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathJoin = pathJoin;
exports.getRoutePath = getRoutePath;
exports.unwrapArray = unwrapArray;
exports.isObject = isObject;
exports.deprecate = deprecate;
exports.removal = removal;
exports.isAbsoluteUrl = isAbsoluteUrl;
exports.makePathAbsolute = makePathAbsolute;
exports.makeHookReducer = makeHookReducer;
exports.makeHookMapper = makeHookMapper;
exports.isSSR = isSSR;
exports.getBasePath = getBasePath;
exports.isPrefetchableRoute = isPrefetchableRoute;
Object.defineProperty(exports, "poolAll", {
  enumerable: true,
  get: function get() {
    return _swimmer.poolAll;
  }
});
Object.defineProperty(exports, "createPool", {
  enumerable: true,
  get: function get() {
    return _swimmer.createPool;
  }
});
exports.cleanSlashes = exports.trimDoubleSlashes = exports.trimTrailingSlashes = exports.trimLeadingSlashes = exports.cutPathToRoot = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(11));

var _swimmer = __webpack_require__(41);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var REGEX_TO_CUT_TO_ROOT = /(\..+?)\/.*/g;
var REGEX_TO_REMOVE_LEADING_SLASH = /^\/{1,}/g;
var REGEX_TO_REMOVE_TRAILING_SLASH = /\/{1,}$/g;
var REGEX_TO_REMOVE_DOUBLE_SLASH = /\/{2,}/g;

var cutPathToRoot = function cutPathToRoot() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_CUT_TO_ROOT, '$1');
};

exports.cutPathToRoot = cutPathToRoot;

var trimLeadingSlashes = function trimLeadingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_LEADING_SLASH, '');
};

exports.trimLeadingSlashes = trimLeadingSlashes;

var trimTrailingSlashes = function trimTrailingSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return string.replace(REGEX_TO_REMOVE_TRAILING_SLASH, '');
};

exports.trimTrailingSlashes = trimTrailingSlashes;

var trimDoubleSlashes = function trimDoubleSlashes() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (isAbsoluteUrl(string)) {
    var _string$split = string.split('://'),
        _string$split2 = _slicedToArray(_string$split, 2),
        _string$split2$ = _string$split2[0],
        scheme = _string$split2$ === void 0 ? '' : _string$split2$,
        _string$split2$2 = _string$split2[1],
        path = _string$split2$2 === void 0 ? '' : _string$split2$2;

    return [scheme, path.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/')].join('://');
  }

  return string.replace(REGEX_TO_REMOVE_DOUBLE_SLASH, '/');
};

exports.trimDoubleSlashes = trimDoubleSlashes;

var cleanSlashes = function cleanSlashes(string) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!string) return '';
  var _options$leading = options.leading,
      leading = _options$leading === void 0 ? true : _options$leading,
      _options$trailing = options.trailing,
      trailing = _options$trailing === void 0 ? true : _options$trailing,
      _options$double = options.double,
      double = _options$double === void 0 ? true : _options$double;
  var cleanedString = string;

  if (leading) {
    cleanedString = trimLeadingSlashes(cleanedString);
  }

  if (trailing) {
    cleanedString = trimTrailingSlashes(cleanedString);
  }

  if (double) {
    cleanedString = trimDoubleSlashes(cleanedString);
  }

  return cleanedString;
};

exports.cleanSlashes = cleanSlashes;

function pathJoin() {
  for (var _len = arguments.length, paths = new Array(_len), _key = 0; _key < _len; _key++) {
    paths[_key] = arguments[_key];
  }

  var newPath = paths.map(cleanSlashes).join('/');

  if (!newPath || newPath === '/') {
    return '/';
  }

  newPath = cleanSlashes(newPath);

  if (newPath.includes('?')) {
    newPath = newPath.substring(0, newPath.indexOf('?'));
  }

  return newPath;
} // This function is for extracting a routePath from a path or string
// RoutePaths do not have query params, basePaths, and should
// resemble the same string as passed in the static.config.js routes


function getRoutePath(routePath) {
  // Detect falsey paths and the root path
  if (!routePath || routePath === '/') {
    return '/';
  } // Remove origin, hashes, and query params


  if (typeof document !== 'undefined') {
    routePath = routePath.replace(window.location.origin, '');
    routePath = routePath.replace(/#.*/, '');
    routePath = routePath.replace(/\?.*/, '');
  } // Be sure to remove the base path


  if (false) {}

  routePath = routePath || '/';
  return pathJoin(routePath);
}

function unwrapArray(arg, defaultValue) {
  arg = Array.isArray(arg) ? arg[0] : arg;

  if (!arg && defaultValue) {
    return defaultValue;
  }

  return arg;
}

function isObject(a) {
  return !Array.isArray(a) && _typeof(a) === 'object' && a !== null;
}

function deprecate(from, to) {
  console.warn("React-Static deprecation notice: ".concat(from, " will be deprecated in favor of ").concat(to, " in the next major release."));
}

function removal(from) {
  console.warn("React-Static removal notice: ".concat(from, " is no longer supported in this version of React-Static. Please refer to the CHANGELOG for details."));
}

function isAbsoluteUrl(url) {
  if (typeof url !== 'string') {
    return false;
  }

  return /^[a-z][a-z0-9+.-]*:/.test(url);
}

function makePathAbsolute(path) {
  if (typeof path !== 'string') {
    return '/';
  }

  if (isAbsoluteUrl(path)) {
    return path;
  }

  return "/".concat(trimLeadingSlashes(path));
}

function makeHookReducer() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hook = arguments.length > 1 ? arguments[1] : undefined;

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      sync = _ref.sync;

  var hooks = flattenHooks(plugins, hook); // Returns a runner that takes a value (and opts) and
  // reduces the value through each hook, returning the
  // final value
  // compare is a function which is used to compare
  // the prev and next value and decide which to use.
  // By default, if undefined is returned from a reducer, the prev value
  // is retained

  if (sync) {
    return function (value, opts) {
      return hooks.reduce(function (prev, hook) {
        var next = hook(prev, opts);
        return typeof next !== 'undefined' ? next : prev;
      }, value);
    };
  }

  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2(value, opts) {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return hooks.reduce(
                /*#__PURE__*/
                function () {
                  var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee(prevPromise, hook) {
                    var prev, next;
                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return prevPromise;

                          case 2:
                            prev = _context.sent;
                            _context.next = 5;
                            return hook(prev, opts);

                          case 5:
                            next = _context.sent;
                            return _context.abrupt("return", typeof next !== 'undefined' ? next : prev);

                          case 7:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));

                  return function (_x3, _x4) {
                    return _ref3.apply(this, arguments);
                  };
                }(), Promise.resolve(value));

              case 2:
                value = _context2.sent;
                return _context2.abrupt("return", value);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}

function makeHookMapper() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var hook = arguments.length > 1 ? arguments[1] : undefined;
  var hooks = flattenHooks(plugins, hook); // Returns a runner that takes options and returns
  // a flat array of values mapped from each hook

  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(opts) {
        var vals;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                vals = [];
                _context4.next = 3;
                return hooks.reduce(
                /*#__PURE__*/
                function () {
                  var _ref5 = _asyncToGenerator(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee3(prevPromise, hook) {
                    var val;
                    return _regenerator.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return prevPromise;

                          case 2:
                            _context3.next = 4;
                            return hook(opts);

                          case 4:
                            val = _context3.sent;
                            vals.push(val);

                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function (_x6, _x7) {
                    return _ref5.apply(this, arguments);
                  };
                }(), Promise.resolve());

              case 3:
                return _context4.abrupt("return", vals.filter(function (d) {
                  return typeof d !== 'undefined';
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}

function flattenHooks(plugins, hook) {
  // The flat hooks
  var hooks = []; // Adds a plugin hook to the hook list

  var addToHooks = function addToHooks(plugin) {
    // Add the hook
    hooks.push(plugin.hooks[hook]); // Recurse into sub plugins if needs be

    if (plugin.plugins) {
      plugin.plugins.forEach(addToHooks);
    }
  }; // Start with the config plugins


  plugins.forEach(addToHooks); // Filter out falsey entries

  return hooks.filter(Boolean);
}

function isSSR() {
  return typeof document === 'undefined';
}

function getBasePath() {
  return  false ? undefined : "";
}

function isPrefetchableRoute(path) {
  // when rendering static pages we dont need this et all
  if (isSSR()) {
    return false;
  } // script links
  // eslint-disable-next-line


  if (path.indexOf('javascript:') === 0) {
    return false;
  }

  var self = document.location;
  var link;

  try {
    link = new URL(path);
  } catch (e) {
    // if a path is not parsable by URL its a local relative path
    return true;
  } // if the hostname/port/proto doesnt match its not a route link


  if (self.hostname !== link.hostname || self.port !== link.port || self.protocol !== link.protocol) {
    return false;
  } // deny all files with extension other than .html


  if (link.pathname.includes('.') && !link.pathname.includes('.html')) {
    return false;
  }

  return true;
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REGEX_TO_CUT_TO_ROOT, "REGEX_TO_CUT_TO_ROOT", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_LEADING_SLASH, "REGEX_TO_REMOVE_LEADING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_TRAILING_SLASH, "REGEX_TO_REMOVE_TRAILING_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(REGEX_TO_REMOVE_DOUBLE_SLASH, "REGEX_TO_REMOVE_DOUBLE_SLASH", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(cutPathToRoot, "cutPathToRoot", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimLeadingSlashes, "trimLeadingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimTrailingSlashes, "trimTrailingSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(trimDoubleSlashes, "trimDoubleSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(cleanSlashes, "cleanSlashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(pathJoin, "pathJoin", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(getRoutePath, "getRoutePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(unwrapArray, "unwrapArray", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isObject, "isObject", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(deprecate, "deprecate", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(removal, "removal", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isAbsoluteUrl, "isAbsoluteUrl", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makePathAbsolute, "makePathAbsolute", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makeHookReducer, "makeHookReducer", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(makeHookMapper, "makeHookMapper", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(flattenHooks, "flattenHooks", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isSSR, "isSSR", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(getBasePath, "getBasePath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  reactHotLoader.register(isPrefetchableRoute, "isPrefetchableRoute", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(21);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(45)("" + id);
  }

  return __webpack_require__('' + id);
};

exports.default = requireById;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStaticInfo = useStaticInfo;
exports.withStaticInfo = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
} // eslint-disable-next-line


var context = _react.default.createContext({});

if (typeof document !== 'undefined') {
  context = _react.default.createContext(window.__routeInfo);
}

var _default = context;
var _default2 = _default;
exports.default = _default2;

var StaticInfo = function StaticInfo(_ref) {
  var children = _ref.children;
  return _react.default.createElement(context.Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children);
};

var withStaticInfo = function withStaticInfo(Comp) {
  return function (props) {
    return _react.default.createElement(StaticInfo, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, function (staticInfo) {
      return _react.default.createElement(Comp, _extends({}, props, {
        staticInfo: staticInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }));
    });
  };
};

exports.withStaticInfo = withStaticInfo;

function useStaticInfo() {
  return _react.default.useContext(context);
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(context, "context", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(StaticInfo, "StaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(withStaticInfo, "withStaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(useStaticInfo, "useStaticInfo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/StaticInfo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Loading: true,
  withLoading: true,
  onLoading: true,
  removal: true,
  getRoutePath: true,
  getBasePath: true,
  Head: true,
  scrollTo: true,
  RouteData: true,
  withRouteData: true,
  SiteData: true,
  withSiteData: true,
  Prefetch: true,
  Routes: true,
  Root: true
};
Object.defineProperty(exports, "removal", {
  enumerable: true,
  get: function get() {
    return _utils.removal;
  }
});
Object.defineProperty(exports, "getRoutePath", {
  enumerable: true,
  get: function get() {
    return _utils.getRoutePath;
  }
});
Object.defineProperty(exports, "getBasePath", {
  enumerable: true,
  get: function get() {
    return _utils.getBasePath;
  }
});
Object.defineProperty(exports, "Head", {
  enumerable: true,
  get: function get() {
    return _reactHelmet.Helmet;
  }
});
Object.defineProperty(exports, "scrollTo", {
  enumerable: true,
  get: function get() {
    return _scrollTo.default;
  }
});
Object.defineProperty(exports, "RouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.default;
  }
});
Object.defineProperty(exports, "withRouteData", {
  enumerable: true,
  get: function get() {
    return _RouteData.withRouteData;
  }
});
Object.defineProperty(exports, "SiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.default;
  }
});
Object.defineProperty(exports, "withSiteData", {
  enumerable: true,
  get: function get() {
    return _SiteData.withSiteData;
  }
});
Object.defineProperty(exports, "Prefetch", {
  enumerable: true,
  get: function get() {
    return _Prefetch.default;
  }
});
Object.defineProperty(exports, "Routes", {
  enumerable: true,
  get: function get() {
    return _Routes.default;
  }
});
Object.defineProperty(exports, "Root", {
  enumerable: true,
  get: function get() {
    return _Root.default;
  }
});
exports.onLoading = exports.withLoading = exports.Loading = void 0;

var _utils = __webpack_require__(16);

var _reactHelmet = __webpack_require__(50);

var _browser = __webpack_require__(12);

Object.keys(_browser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _browser[key];
    }
  });
});

var _scrollTo = _interopRequireDefault(__webpack_require__(30));

var _RouteData = _interopRequireWildcard(__webpack_require__(51));

var _SiteData = _interopRequireWildcard(__webpack_require__(52));

var _Prefetch = _interopRequireDefault(__webpack_require__(53));

var _Routes = _interopRequireDefault(__webpack_require__(32));

var _Root = _interopRequireDefault(__webpack_require__(54));

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})(); // Migration Hints


var Loading = function Loading() {
  (0, _utils.removal)('Loading');
};

exports.Loading = Loading;

var withLoading = function withLoading() {
  (0, _utils.removal)('withLoading');
};

exports.withLoading = withLoading;

var onLoading = function onLoading() {
  (0, _utils.removal)('onLoading');
};

exports.onLoading = onLoading;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, "Loading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  reactHotLoader.register(withLoading, "withLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  reactHotLoader.register(onLoading, "onLoading", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redes_general_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85);
/* harmony import */ var _redes_general_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redes_general_css__WEBPACK_IMPORTED_MODULE_2__);
function RedesGeneral(props){var _useTranslation=Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),t=_useTranslation.t,i18n=_useTranslation.i18n;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"redes-container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",{className:"redes-title"},t('misc.followus')),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"redes-icon-container"},props.redesData.data[0].redes.map(function(red){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:red.link,key:red.id,target:"_blank"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i",{className:red.fafa,style:{color:red.color}}));})));}/* harmony default export */ __webpack_exports__["a"] = (RedesGeneral);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(17);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2.default)(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spinner;

var _react = _interopRequireDefault(__webpack_require__(0));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Spinner.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function Spinner() {
  return _react.default.createElement("div", {
    className: "react-static-loading",
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'center',
      padding: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, _react.default.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "\n        @keyframes react-static-loader {\n          0% {\n            transform: rotate(0deg)\n          }\n          100% {\n            transform: rotate(360deg)\n          }\n        }\n      "), _react.default.createElement("svg", {
    style: {
      width: '50px',
      height: '50px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, _react.default.createElement("circle", {
    style: {
      transformOrigin: '50% 50% 0px',
      animation: 'react-static-loader 1s infinite',
      r: 20,
      stroke: 'rgba(0,0,0,0.4)',
      strokeWidth: 4,
      cx: 25,
      cy: 25,
      strokeDasharray: 10.4,
      strokeLinecap: 'round',
      fill: 'transparent'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })));
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Spinner, "Spinner", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Spinner.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Imports
// Plugins
var plugins=[{location:"/builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara",plugins:[],hooks:{}}];// Export em!
/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onVisible;

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

if (typeof document !== 'undefined') {
  // Polyfill that shiz!
  __webpack_require__(42); // Do manual polling for intersections every second. This isn't very fast
  // but should handle most edge cases for now


  IntersectionObserver.POLL_INTERVAL = 1000;
}

var list = new Map();

function onVisible(element, callback) {
  if (list.get(element)) {
    return;
  }

  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      // Edge doesn't support isIntersecting. intersectionRatio > 0 works as a fallback
      if (element === entry.target && (entry.isIntersecting || entry.intersectionRatio > 0)) {
        io.unobserve(element);
        io.disconnect();
        callback();
      }
    });
  });
  io.observe(element);
  list.set(element, true);
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(list, "list", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Visibility.js");
  reactHotLoader.register(onVisible, "onVisible", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Visibility.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _builds_AsharaStudios_Soft_AsharaWebPage_pag_ashara_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _builds_AsharaStudios_Soft_AsharaWebPage_pag_ashara_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_builds_AsharaStudios_Soft_AsharaWebPage_pag_ashara_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__);
Object(_builds_AsharaStudios_Soft_AsharaWebPage_pag_ashara_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2__["setHasBabelPlugin"])();var universalOptions={loading:function loading(){return null;},error:function error(props){console.error(props.error);return React.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.");}};var t_0=_builds_AsharaStudios_Soft_AsharaWebPage_pag_ashara_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../node_modules/react-static/lib/browser/components/Default404",load:function load(){return Promise.all([Promise.resolve(/* import() | node_modules-react-static-lib-browser-components-Default404 */).then(__webpack_require__.t.bind(null, 34, 7))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../node_modules/react-static/lib/browser/components/Default404');},resolve:function resolve(){return /*require.resolve*/(34);},chunkName:function chunkName(){return"node_modules-react-static-lib-browser-components-Default404";}}),universalOptions);var t_1=_builds_AsharaStudios_Soft_AsharaWebPage_pag_ashara_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/views/home/Home",load:function load(){return Promise.all([Promise.resolve(/* import() | src-views-home-Home */).then(__webpack_require__.bind(null, 37))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/views/home/Home');},resolve:function resolve(){return /*require.resolve*/(37);},chunkName:function chunkName(){return"src-views-home-Home";}}),universalOptions);var t_2=_builds_AsharaStudios_Soft_AsharaWebPage_pag_ashara_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/views/units/Unit",load:function load(){return Promise.all([Promise.resolve(/* import() | src-views-units-Unit */).then(__webpack_require__.bind(null, 36))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/views/units/Unit');},resolve:function resolve(){return /*require.resolve*/(36);},chunkName:function chunkName(){return"src-views-units-Unit";}}),universalOptions);var t_3=_builds_AsharaStudios_Soft_AsharaWebPage_pag_ashara_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/views/contact-us/ContactUs",load:function load(){return Promise.all([Promise.resolve(/* import() | src-views-contact-us-ContactUs */).then(__webpack_require__.bind(null, 35))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/views/contact-us/ContactUs');},resolve:function resolve(){return /*require.resolve*/(35);},chunkName:function chunkName(){return"src-views-contact-us-ContactUs";}}),universalOptions);var t_4=_builds_AsharaStudios_Soft_AsharaWebPage_pag_ashara_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_2___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({id:"../src/views/about-us/AboutUs",load:function load(){return Promise.all([Promise.resolve(/* import() | src-views-about-us-AboutUs */).then(__webpack_require__.bind(null, 38))]).then(function(proms){return proms[0];});},path:function path(){return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname,'../src/views/about-us/AboutUs');},resolve:function resolve(){return /*require.resolve*/(38);},chunkName:function chunkName(){return"src-views-about-us-AboutUs";}}),universalOptions);// Template Map
/* harmony default export */ __webpack_exports__["default"] = ({'../node_modules/react-static/lib/browser/components/Default404':t_0,'../src/views/home/Home':t_1,'../src/views/units/Unit':t_2,'../src/views/contact-us/ContactUs':t_3,'../src/views/about-us/AboutUs':t_4});var notFoundTemplate="../node_modules/react-static/lib/browser/components/Default404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = scrollTo;

var _raf = _interopRequireDefault(__webpack_require__(31));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} //


var ease = function ease(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

var defaultOptions = {
  duration: 800,
  offset: 0,
  context: typeof document !== 'undefined' && window
};

var getTop = function getTop(element, offset, contextScrollHeight, contextVisibleHeight) {
  return Math.min(element.getBoundingClientRect().top + window.pageYOffset + offset, contextScrollHeight - contextVisibleHeight);
};

var getPosition = function getPosition(start, end, elapsed, duration, easeFn) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeFn(elapsed / duration);
};

function scrollTo(element, options) {
  var _defaultOptions$optio = _objectSpread({}, defaultOptions, options),
      duration = _defaultOptions$optio.duration,
      offset = _defaultOptions$optio.offset,
      context = _defaultOptions$optio.context;

  var start = window.pageYOffset;
  var innerHeight;
  var scrollHeight;

  if (context !== window) {
    innerHeight = context.offsetHeight;
    scrollHeight = context.scrollHeight;
  } else {
    innerHeight = window.innerHeight;
    scrollHeight = document.body.scrollHeight;
  }

  var clock = Date.now() - 1;
  return new Promise(function (resolve) {
    var step = function step() {
      var elapsed = Date.now() - clock;
      var end = typeof element === 'number' ? parseInt(element) : getTop(element, offset, scrollHeight, innerHeight);

      if (context !== window) {
        context.scrollTop = getPosition(start, end, elapsed, duration, ease);
      } else {
        window.scroll(0, getPosition(start, end, elapsed, duration, ease));
      }

      if (typeof duration === 'undefined' || elapsed > duration) {
        resolve();
        return;
      } // Sanity check to prevent taking over the scroll once we prematurely got to the element


      if (start === end) {
        resolve();
        return;
      }

      (0, _raf.default)(step);
    };

    step();
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ease, "ease", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(defaultOptions, "defaultOptions", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(getTop, "getTop", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(getPosition, "getPosition", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  reactHotLoader.register(scrollTo, "scrollTo", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/scrollTo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("raf");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.withRoutePathContext = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(11));

var _react = _interopRequireWildcard(__webpack_require__(0));

var _ = __webpack_require__(12);

var _StaticInfo = __webpack_require__(18);

var _utils = __webpack_require__(16);

var _Location = _interopRequireDefault(__webpack_require__(33));

var _Spinner = _interopRequireDefault(__webpack_require__(22));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js",
    _class,
    _temp;

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var RoutePathContext = _react.default.createContext();

var withRoutePathContext = function withRoutePathContext(Comp) {
  return function (props) {
    return _react.default.createElement(RoutePathContext.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, function (routePath) {
      return _react.default.createElement(Comp, _extends({}, props, {
        routePath: routePath,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    });
  };
};

exports.withRoutePathContext = withRoutePathContext;
var componentCache = new WeakMap();

function with404Prop(Component) {
  // If the wrapped Component is currently in cached, return it from cache.
  if (componentCache.has(Component)) {
    return componentCache.get(Component);
  } // Otherwise, create a new wrapped Component...


  var WrappedComponent = function WrappedComponent(props) {
    return _react.default.createElement(Component, _extends({
      is404: true
    }, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  }; // ...and cache it


  componentCache.set(Component, WrappedComponent);
  return WrappedComponent;
}

var _default = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Routes);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Routes)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeForceUpdate", function () {
      if (_this.unmounted) {
        return;
      }

      _this.forceUpdate();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getComponentForPath", function (routePath) {
      var Loader = _this.props.Loader; // Clean the path

      routePath = (0, _utils.getRoutePath)(routePath); // Try and get the component

      var Comp = _.templatesByPath[routePath]; // Detect a 404

      var is404 = routePath === '404'; // Detect a failed template

      if (_.templateErrorByPath[routePath]) {
        is404 = true;
        Comp = _.templatesByPath['404'];
      } // Detect an unloaded template
      // TODO:suspense - This will become a suspense resource


      if (!Comp) {
        if (is404) {
          throw new Error('This page template could not be found and a 404 template could not be found to fall back on. This means something is terribly wrong and you should probably file an issue!');
        }

        ;

        _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all([(0, _.prefetch)(routePath, {
                    priority: true
                  }), new Promise(function (resolve) {
                    return setTimeout(resolve, "200");
                  })]);

                case 2:
                  _this.safeForceUpdate();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();

        return Loader;
      }

      return is404 ? with404Prop(Comp) : Comp;
    });

    return _this;
  }

  _createClass(Routes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _.templateUpdated.cb = function () {
        return _this2.safeForceUpdate();
      };

      this.offLocationChange = (0, _Location.default)(function () {
        return _this2.safeForceUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
      if (this.offLocationChange) this.offLocationChange();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          staticInfo = _this$props.staticInfo;
      var routePath = (0, _utils.isSSR)() ? staticInfo.path : (0, _.getCurrentRoutePath)();
      var Comp = this.getComponentForPath(routePath);
      return _react.default.createElement(RoutePathContext.Provider, {
        value: routePath,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, children ? children({
        routePath: routePath,
        getComponentForPath: this.getComponentForPath
      }) : _react.default.createElement(Comp, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Routes;
}(_react.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp));

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RoutePathContext, "RoutePathContext", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(withRoutePathContext, "withRoutePathContext", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(componentCache, "componentCache", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(with404Prop, "with404Prop", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Routes.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var locationSubscribers = [];

var triggerLocationChange = function triggerLocationChange(location) {
  return locationSubscribers.forEach(function (s) {
    return s(location);
  });
};

var onLocationChange = function onLocationChange(cb) {
  locationSubscribers.push(cb);
  return function () {
    locationSubscribers = locationSubscribers.filter(function (d) {
      return d !== cb;
    });
  };
};

init();
var _default = onLocationChange;
var _default2 = _default;
exports.default = _default2;

function init() {
  if (typeof document !== 'undefined') {
    var oldPopstate = window.onpopstate;

    window.onpopstate = function () {
      if (oldPopstate) {
        oldPopstate.apply(void 0, arguments);
      }

      triggerLocationChange(window.location);
    };

    ['pushState', 'replaceState'].forEach(function (methodName) {
      var old = window.history[methodName];

      window.history[methodName] = function () {
        setTimeout(function () {
          return triggerLocationChange(window.location);
        }, 0);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return old.apply(window.history, args);
      };
    });
  }
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(locationSubscribers, "locationSubscribers", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(triggerLocationChange, "triggerLocationChange", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(onLocationChange, "onLocationChange", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(init, "init", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/utils/Location.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Default404.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

var _default = function _default() {
  return _react.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "404 - We couldn't find the page you're looking for!");
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Default404.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var data_home_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
var data_home_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(13, 1);
/* harmony import */ var _ContactUs_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84);
/* harmony import */ var _ContactUs_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ContactUs_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_redes_general_redes_general_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var ContactUs=/*#__PURE__*/function(_Component){_inherits(ContactUs,_Component);function ContactUs(){_classCallCheck(this,ContactUs);return _possibleConstructorReturn(this,_getPrototypeOf(ContactUs).apply(this,arguments));}_createClass(ContactUs,[{key:"render",value:function render(){var _this$props=this.props,t=_this$props.t,i18n=_this$props.i18n;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",{className:"contact-us"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:"dots-upside",src:"https://drive.google.com/uc?id=1nfhc0yuLr4sPFakuHiVg5SVx1zgvx54T",alt:""}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:"dots-downside",src:"https://drive.google.com/uc?id=1lW65O-36ascigIx56srkoihj7Z3mOAG7",alt:""}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:"contact-back",src:"https://drive.google.com/uc?id=1f8jBneXIql0FsyLDPHkbBLxoeFnl3zAJ",alt:"fondo"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"contact-container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,t("misc.contactUs")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"contact-left"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,t("about.phil.phrase")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:"contact-logo logo-small",src:"https://drive.google.com/uc?id=1LYBjluPVs4dqJQ7ZD4BumWny_NJ6cCKQ",alt:"logo"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:"contact-logo logo-medium",src:"https://drive.google.com/uc?id=1nADnYC_0IrtOtyh-T82KJIGVvKpzgaJ3",alt:"logo"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:"contact-logo logo-big",src:"https://drive.google.com/uc?id=18yizHknzmJtpNBXTzazw2H7D76WCgXbo",alt:"logo"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:"contact-logo logo-large",src:"https://drive.google.com/uc?id=1guy4BGWJWz309LM6AM9e6NFV01n5w4Lr",alt:"logo"})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form",{className:"contact-right",method:"post",action:"https://formsubmit.co/7290a8119f764ca83e19d0a0db092e9f  "},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{htmlFor:"email",className:"contact-label"},t("misc.email")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"email",name:"email",id:"email",className:"contact-field",placeholder:t("contact.emailPlaceholder")})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{htmlFor:"subject",className:"contact-label"},t("misc.subject")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",name:"subject",id:"subject",className:"contact-field",placeholder:t("contact.subjectPlaceholder")})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"form-group"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{htmlFor:"message",className:"contact-label"},t("misc.message")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea",{name:"message",id:"message",className:"contact-field contact-message",placeholder:t("contact.msgPlaceholder")})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"hidden",name:"_captcha",value:"false"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"hidden",name:"_subject",value:"New contact request"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text",name:"_honey",className:"honey"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"submit",className:"contact-submit",value:t("misc.send")})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_redes_general_redes_general_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],{redesData:data_home_json__WEBPACK_IMPORTED_MODULE_2__})));}}]);return ContactUs;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["withTranslation"])()(ContactUs));

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(2);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(19);

// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/description/Description.css
var Description = __webpack_require__(69);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/description/Description.js
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var Description_DescriptionClass=/*#__PURE__*/function(_Component){_inherits(DescriptionClass,_Component);function DescriptionClass(){_classCallCheck(this,DescriptionClass);return _possibleConstructorReturn(this,_getPrototypeOf(DescriptionClass).apply(this,arguments));}_createClass(DescriptionClass,[{key:"render",value:function render(){var _this$props=this.props,t=_this$props.t,i18n=_this$props.i18n;return external_react_default.a.createElement("div",{className:"description"},external_react_default.a.createElement("div",{className:"container"},external_react_default.a.createElement("img",{className:"puntos",src:this.props.unity.puntos,alt:this.props.unity.name}),external_react_default.a.createElement("div",{className:"logo-container"},external_react_default.a.createElement("img",{className:"logo",src:this.props.unity.logo,alt:this.props.unity.name})),external_react_default.a.createElement("p",{style:{color:this.props.unity.color},className:"description-text"}," ",t(this.props.unity.description)),external_react_default.a.createElement("img",{className:"icon",src:this.props.unity.icon,alt:this.props.unity.name})));}}]);return DescriptionClass;}(external_react_["Component"]);var UnityDescription=Object(external_react_i18next_["withTranslation"])()(Description_DescriptionClass);/* harmony default export */ var description_Description = (UnityDescription);
// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/service/Service.css
var service_Service = __webpack_require__(70);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/service/Service.js
function Service_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Service_typeof=function _typeof(obj){return typeof obj;};}else{Service_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return Service_typeof(obj);}function Service_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function Service_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function Service_createClass(Constructor,protoProps,staticProps){if(protoProps)Service_defineProperties(Constructor.prototype,protoProps);if(staticProps)Service_defineProperties(Constructor,staticProps);return Constructor;}function Service_possibleConstructorReturn(self,call){if(call&&(Service_typeof(call)==="object"||typeof call==="function")){return call;}return Service_assertThisInitialized(self);}function Service_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function Service_getPrototypeOf(o){Service_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return Service_getPrototypeOf(o);}function Service_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)Service_setPrototypeOf(subClass,superClass);}function Service_setPrototypeOf(o,p){Service_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return Service_setPrototypeOf(o,p);}var Service_Service=/*#__PURE__*/function(_Component){Service_inherits(Service,_Component);function Service(){Service_classCallCheck(this,Service);return Service_possibleConstructorReturn(this,Service_getPrototypeOf(Service).apply(this,arguments));}Service_createClass(Service,[{key:"render",value:function render(){var _this$props=this.props,t=_this$props.t,style=_this$props.style;return external_react_default.a.createElement("div",{className:"Service"},external_react_default.a.createElement("div",{className:"Service-container"},external_react_default.a.createElement("div",{className:"Service-logoContainer"},external_react_default.a.createElement("img",{className:"Service-logo",src:this.props.service.icon,alt:t(this.props.service.title)}),external_react_default.a.createElement("p",{style:{color:style.title},className:"Service-title"},t(this.props.service.title),external_react_default.a.createElement("img",{className:"Service-title-marco",src:this.props.marcoServices,alt:t(this.props.service.title)}))),external_react_default.a.createElement("p",{style:{color:style.general},className:"Service-description"}," ",t(this.props.service.description))));}}]);return Service;}(external_react_["Component"]);/* harmony default export */ var units_service_Service = (Object(external_react_i18next_["withTranslation"])()(Service_Service));
// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/client/Client.css
var client_Client = __webpack_require__(71);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/client/Client.js
function Client_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Client_typeof=function _typeof(obj){return typeof obj;};}else{Client_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return Client_typeof(obj);}function Client_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function Client_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function Client_createClass(Constructor,protoProps,staticProps){if(protoProps)Client_defineProperties(Constructor.prototype,protoProps);if(staticProps)Client_defineProperties(Constructor,staticProps);return Constructor;}function Client_possibleConstructorReturn(self,call){if(call&&(Client_typeof(call)==="object"||typeof call==="function")){return call;}return Client_assertThisInitialized(self);}function Client_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function Client_getPrototypeOf(o){Client_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return Client_getPrototypeOf(o);}function Client_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)Client_setPrototypeOf(subClass,superClass);}function Client_setPrototypeOf(o,p){Client_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return Client_setPrototypeOf(o,p);}var Client_Client=/*#__PURE__*/function(_Component){Client_inherits(Client,_Component);function Client(){Client_classCallCheck(this,Client);return Client_possibleConstructorReturn(this,Client_getPrototypeOf(Client).apply(this,arguments));}Client_createClass(Client,[{key:"render",value:function render(){return external_react_default.a.createElement("div",{className:"Client"},external_react_default.a.createElement("div",{className:"Client-container"},external_react_default.a.createElement("div",{className:"Client-marcoContainer"},external_react_default.a.createElement("p",{style:{color:this.props.color},className:"Client-title"},this.props.client.title,external_react_default.a.createElement("img",{className:"Client-title-marco",src:"https://drive.google.com/uc?id=1dSVYvj0EpilweE03K7Tn0NUUEhvD5J0q",alt:this.props.client.title})),external_react_default.a.createElement("a",{href:this.props.client.link,target:"_blank"},external_react_default.a.createElement("img",{className:"Client-logo",src:this.props.client.icon,alt:this.props.client.title})))));}}]);return Client;}(external_react_["Component"]);/* harmony default export */ var units_client_Client = (Client_Client);
// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/technology/Technology.css
var technology_Technology = __webpack_require__(72);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/technology/Technology.js
function Technology_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Technology_typeof=function _typeof(obj){return typeof obj;};}else{Technology_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return Technology_typeof(obj);}function Technology_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function Technology_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function Technology_createClass(Constructor,protoProps,staticProps){if(protoProps)Technology_defineProperties(Constructor.prototype,protoProps);if(staticProps)Technology_defineProperties(Constructor,staticProps);return Constructor;}function Technology_possibleConstructorReturn(self,call){if(call&&(Technology_typeof(call)==="object"||typeof call==="function")){return call;}return Technology_assertThisInitialized(self);}function Technology_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function Technology_getPrototypeOf(o){Technology_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return Technology_getPrototypeOf(o);}function Technology_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)Technology_setPrototypeOf(subClass,superClass);}function Technology_setPrototypeOf(o,p){Technology_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return Technology_setPrototypeOf(o,p);}var Technology_Technology=/*#__PURE__*/function(_Component){Technology_inherits(Technology,_Component);function Technology(){Technology_classCallCheck(this,Technology);return Technology_possibleConstructorReturn(this,Technology_getPrototypeOf(Technology).apply(this,arguments));}Technology_createClass(Technology,[{key:"render",value:function render(){var style=this.props.style;return external_react_default.a.createElement("div",{className:"Technology"},external_react_default.a.createElement("div",{className:"Technology-container"},external_react_default.a.createElement("div",{className:"Technology-iconContainer"},external_react_default.a.createElement("img",{className:"Technology-icon",src:this.props.technology.icon,alt:this.props.technology.title}),external_react_default.a.createElement("p",{style:{color:style.general},className:"Technology-title"},this.props.technology.title))));}}]);return Technology;}(external_react_["Component"]);/* harmony default export */ var units_technology_Technology = (Technology_Technology);
// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/portfolioCompleted/PortfolioCompleted.css
var portfolioCompleted_PortfolioCompleted = __webpack_require__(73);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/portfolioCompleted/PortfolioCompleted.js
function PortfolioCompleted_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){PortfolioCompleted_typeof=function _typeof(obj){return typeof obj;};}else{PortfolioCompleted_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return PortfolioCompleted_typeof(obj);}function PortfolioCompleted_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function PortfolioCompleted_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function PortfolioCompleted_createClass(Constructor,protoProps,staticProps){if(protoProps)PortfolioCompleted_defineProperties(Constructor.prototype,protoProps);if(staticProps)PortfolioCompleted_defineProperties(Constructor,staticProps);return Constructor;}function PortfolioCompleted_possibleConstructorReturn(self,call){if(call&&(PortfolioCompleted_typeof(call)==="object"||typeof call==="function")){return call;}return PortfolioCompleted_assertThisInitialized(self);}function PortfolioCompleted_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function PortfolioCompleted_getPrototypeOf(o){PortfolioCompleted_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return PortfolioCompleted_getPrototypeOf(o);}function PortfolioCompleted_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)PortfolioCompleted_setPrototypeOf(subClass,superClass);}function PortfolioCompleted_setPrototypeOf(o,p){PortfolioCompleted_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return PortfolioCompleted_setPrototypeOf(o,p);}var PortfolioCompleted_PortfolioCompleted=/*#__PURE__*/function(_Component){PortfolioCompleted_inherits(PortfolioCompleted,_Component);function PortfolioCompleted(){PortfolioCompleted_classCallCheck(this,PortfolioCompleted);return PortfolioCompleted_possibleConstructorReturn(this,PortfolioCompleted_getPrototypeOf(PortfolioCompleted).apply(this,arguments));}PortfolioCompleted_createClass(PortfolioCompleted,[{key:"render",value:function render(){var _this$props=this.props,t=_this$props.t,style=_this$props.style;return external_react_default.a.createElement("div",{className:"portfolio-completed"},external_react_default.a.createElement("div",{className:"container"},external_react_default.a.createElement("div",{className:"marcoContainer"},external_react_default.a.createElement("p",{style:{color:style.title},className:"title"},t(this.props.portfolioCompleted.title),external_react_default.a.createElement("img",{className:"title-marco",id:"marco-".concat(this.props.index),src:this.props.marcoServices,alt:t(this.props.portfolioCompleted.title)}))),external_react_default.a.createElement("p",{style:{color:style.title},className:"link"}," ",this.props.portfolioCompleted.link)));}}]);return PortfolioCompleted;}(external_react_["Component"]);/* harmony default export */ var units_portfolioCompleted_PortfolioCompleted = (Object(external_react_i18next_["withTranslation"])()(PortfolioCompleted_PortfolioCompleted));
// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/portfolio/Portfolio.css
var portfolio_Portfolio = __webpack_require__(74);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/portfolio/Portfolio.js
function Portfolio_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Portfolio_typeof=function _typeof(obj){return typeof obj;};}else{Portfolio_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return Portfolio_typeof(obj);}function Portfolio_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function Portfolio_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function Portfolio_createClass(Constructor,protoProps,staticProps){if(protoProps)Portfolio_defineProperties(Constructor.prototype,protoProps);if(staticProps)Portfolio_defineProperties(Constructor,staticProps);return Constructor;}function Portfolio_possibleConstructorReturn(self,call){if(call&&(Portfolio_typeof(call)==="object"||typeof call==="function")){return call;}return Portfolio_assertThisInitialized(self);}function Portfolio_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function Portfolio_getPrototypeOf(o){Portfolio_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return Portfolio_getPrototypeOf(o);}function Portfolio_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)Portfolio_setPrototypeOf(subClass,superClass);}function Portfolio_setPrototypeOf(o,p){Portfolio_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return Portfolio_setPrototypeOf(o,p);}var Portfolio_Portfolio=/*#__PURE__*/function(_Component){Portfolio_inherits(Portfolio,_Component);function Portfolio(){Portfolio_classCallCheck(this,Portfolio);return Portfolio_possibleConstructorReturn(this,Portfolio_getPrototypeOf(Portfolio).apply(this,arguments));}Portfolio_createClass(Portfolio,[{key:"render",value:function render(){var _this$props=this.props,t=_this$props.t,style=_this$props.style,portfolioOngoing=_this$props.portfolioOngoing;return external_react_default.a.createElement("div",{className:"portfolio-ongoing"},external_react_default.a.createElement("div",{className:"container"},portfolioOngoing.backgroundLarge||portfolioOngoing.background?external_react_default.a.createElement("img",{className:"background",src:portfolioOngoing.backgroundLarge?portfolioOngoing.backgroundLarge:portfolioOngoing.background,alt:portfolioOngoing.title}):"",external_react_default.a.createElement("div",{className:"logoContainer",id:"001"},external_react_default.a.createElement("img",{className:"marco2",src:portfolioOngoing.marcoDesktop?portfolioOngoing.marcoDesktop:portfolioOngoing.marco,alt:""}),external_react_default.a.createElement("img",{className:"logo2",src:portfolioOngoing.icon,alt:portfolioOngoing.title}),portfolioOngoing.background?external_react_default.a.createElement("img",{className:"background-mobile",src:portfolioOngoing.background,alt:portfolioOngoing.title}):"",external_react_default.a.createElement("img",{className:"marco",src:portfolioOngoing.marco,alt:""}),external_react_default.a.createElement("img",{className:"logo",src:portfolioOngoing.icon,alt:portfolioOngoing.title}),portfolioOngoing.iconSmall?external_react_default.a.createElement(external_react_default.a.Fragment,null,external_react_default.a.createElement("a",{href:portfolioOngoing.link,rel:"noreferrer noopener",target:"_blank",style:{display:"block"}},external_react_default.a.createElement("img",{className:"logo3",src:portfolioOngoing.iconSmall,alt:portfolioOngoing.title})),external_react_default.a.createElement("p",{style:{color:style.link},className:"txtLink"},t(this.props.portfolioOngoing.txtLink))):""),external_react_default.a.createElement("div",{className:"textContainer"},external_react_default.a.createElement("p",{style:{color:style.title},className:"title"},t(portfolioOngoing.title)),external_react_default.a.createElement("p",{style:{color:style.general},className:"description-text"}," ",t(portfolioOngoing.description))),portfolioOngoing.link?external_react_default.a.createElement("a",{style:{color:style.link},href:portfolioOngoing.link,target:"_blank"// see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
,rel:"noreferrer noopener",className:"link"}," ",portfolioOngoing.linkTitle):""));}}]);return Portfolio;}(external_react_["Component"]);/* harmony default export */ var units_portfolio_Portfolio = (Object(external_react_i18next_["withTranslation"])()(Portfolio_Portfolio));
// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/event/Event.css
var event_Event = __webpack_require__(75);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/event/Event.js
function Event_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Event_typeof=function _typeof(obj){return typeof obj;};}else{Event_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return Event_typeof(obj);}function Event_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function Event_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function Event_createClass(Constructor,protoProps,staticProps){if(protoProps)Event_defineProperties(Constructor.prototype,protoProps);if(staticProps)Event_defineProperties(Constructor,staticProps);return Constructor;}function Event_possibleConstructorReturn(self,call){if(call&&(Event_typeof(call)==="object"||typeof call==="function")){return call;}return Event_assertThisInitialized(self);}function Event_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function Event_getPrototypeOf(o){Event_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return Event_getPrototypeOf(o);}function Event_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)Event_setPrototypeOf(subClass,superClass);}function Event_setPrototypeOf(o,p){Event_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return Event_setPrototypeOf(o,p);}var Event_Event=/*#__PURE__*/function(_Component){Event_inherits(Event,_Component);function Event(){Event_classCallCheck(this,Event);return Event_possibleConstructorReturn(this,Event_getPrototypeOf(Event).apply(this,arguments));}Event_createClass(Event,[{key:"render",value:function render(){var _this$props=this.props,t=_this$props.t,style=_this$props.style;return external_react_default.a.createElement("div",{className:"Event"},external_react_default.a.createElement("div",{className:"Event-container"},external_react_default.a.createElement("img",{className:"Event-photo",src:this.props.event.photo,alt:this.props.event.title}),external_react_default.a.createElement("img",{className:"Event-photoTransparent",src:this.props.event.photoTransparent,alt:this.props.event.title}),external_react_default.a.createElement("div",{className:"Event-textContainer"},external_react_default.a.createElement("img",{className:"Event-title-marco",src:this.props.marcoServices,alt:this.props.event.title}),external_react_default.a.createElement("p",{style:{color:style.general},className:"Event-title"},t(this.props.event.title)),external_react_default.a.createElement("p",{style:{color:style.subTitle},className:"Event-subtitle"}," (",t(this.props.event.subtitle),")"),external_react_default.a.createElement("p",{style:{color:style.general},className:"Event-description"}," ",t(this.props.event.description)))));}}]);return Event;}(external_react_["Component"]);/* harmony default export */ var units_event_Event = (Object(external_react_i18next_["withTranslation"])()(Event_Event));
// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/redes/Redes.css
var Redes = __webpack_require__(76);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/redes/Redes.js
function Redes_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Redes_typeof=function _typeof(obj){return typeof obj;};}else{Redes_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return Redes_typeof(obj);}function Redes_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function Redes_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function Redes_createClass(Constructor,protoProps,staticProps){if(protoProps)Redes_defineProperties(Constructor.prototype,protoProps);if(staticProps)Redes_defineProperties(Constructor,staticProps);return Constructor;}function Redes_possibleConstructorReturn(self,call){if(call&&(Redes_typeof(call)==="object"||typeof call==="function")){return call;}return Redes_assertThisInitialized(self);}function Redes_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function Redes_getPrototypeOf(o){Redes_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return Redes_getPrototypeOf(o);}function Redes_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)Redes_setPrototypeOf(subClass,superClass);}function Redes_setPrototypeOf(o,p){Redes_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return Redes_setPrototypeOf(o,p);}var Redes_RedesUnity=/*#__PURE__*/function(_Component){Redes_inherits(RedesUnity,_Component);function RedesUnity(){Redes_classCallCheck(this,RedesUnity);return Redes_possibleConstructorReturn(this,Redes_getPrototypeOf(RedesUnity).apply(this,arguments));}Redes_createClass(RedesUnity,[{key:"render",value:function render(){var _this$props=this.props,t=_this$props.t,i18n=_this$props.i18n;return external_react_default.a.createElement("div",{className:"RedesUnity"},external_react_default.a.createElement("img",{className:"RedesUnity-background",src:this.props.redes.puntos,alt:"background redes"}),external_react_default.a.createElement("div",{className:"RedesUnity-container"},external_react_default.a.createElement("div",{className:"RedesUnity-logoContainer"},external_react_default.a.createElement("p",{style:{color:this.props.redes.color},className:"RedesUnity-followUs"},t('misc.followus')),external_react_default.a.createElement("div",null,external_react_default.a.createElement("a",{href:this.props.redes.facebook,target:"_blank"},external_react_default.a.createElement("i",{className:"fab fa-facebook-f fa-3x",style:{color:this.props.redes.color}})),external_react_default.a.createElement("a",{href:this.props.redes.twitter,target:"_blank"},external_react_default.a.createElement("i",{className:"fab fa-twitter fa-3x",style:{color:this.props.redes.color}})),external_react_default.a.createElement("a",{href:this.props.redes.instagram,target:"_blank"},external_react_default.a.createElement("i",{className:"fab fa-instagram fa-3x",style:{color:this.props.redes.color}})),external_react_default.a.createElement("a",{href:this.props.redes.youtube,target:"_blank"},external_react_default.a.createElement("i",{className:"fab fa-youtube fa-3x",style:{color:this.props.redes.color}})),external_react_default.a.createElement("a",{href:this.props.redes.linkedin,target:"_blank"},external_react_default.a.createElement("i",{className:"fab fa-linkedin fa-3x",style:{color:this.props.redes.color}}))))));}}]);return RedesUnity;}(external_react_["Component"]);/* harmony default export */ var redes_Redes = (Object(external_react_i18next_["withTranslation"])()(Redes_RedesUnity));
// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/Unit.css
var units_Unit = __webpack_require__(77);

// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/styles/Unit-Soft.css
var Unit_Soft = __webpack_require__(78);

// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/styles/Unit-IoT.css
var Unit_IoT = __webpack_require__(79);

// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/styles/Unit-Games.css
var Unit_Games = __webpack_require__(80);

// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/styles/Unit-Science.css
var Unit_Science = __webpack_require__(81);

// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/styles/Unit-School.css
var Unit_School = __webpack_require__(82);

// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/styles/Unit-Media.css
var Unit_Media = __webpack_require__(83);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/units/Unit.js
function Unit_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Unit_typeof=function _typeof(obj){return typeof obj;};}else{Unit_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return Unit_typeof(obj);}function Unit_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function Unit_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function Unit_createClass(Constructor,protoProps,staticProps){if(protoProps)Unit_defineProperties(Constructor.prototype,protoProps);if(staticProps)Unit_defineProperties(Constructor,staticProps);return Constructor;}function Unit_possibleConstructorReturn(self,call){if(call&&(Unit_typeof(call)==="object"||typeof call==="function")){return call;}return Unit_assertThisInitialized(self);}function Unit_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function Unit_getPrototypeOf(o){Unit_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return Unit_getPrototypeOf(o);}function Unit_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)Unit_setPrototypeOf(subClass,superClass);}function Unit_setPrototypeOf(o,p){Unit_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return Unit_setPrototypeOf(o,p);}// Custom styles from units (don't break generality):
var Unit_Unit=/*#__PURE__*/function(_Component){Unit_inherits(Unit,_Component);function Unit(){Unit_classCallCheck(this,Unit);return Unit_possibleConstructorReturn(this,Unit_getPrototypeOf(Unit).apply(this,arguments));}Unit_createClass(Unit,[{key:"render",value:function render(){var _this$props=this.props,t=_this$props.t,data=_this$props.data;return external_react_default.a.createElement("div",{className:"Unit ".concat(data.unit),style:{background:"radial-gradient(ellipse at center,#fff 10%,".concat(data.style.background," 100%)")}},external_react_default.a.createElement(description_Description,{unity:data}),data.services&&data.services.active?external_react_default.a.createElement("div",null," ",external_react_default.a.createElement("p",{style:{color:data.style.title},className:"title-services"},t('unit.services')),external_react_default.a.createElement("div",{className:"container-services"},data.services.backgrounds.map(function(back,index){return external_react_default.a.createElement("img",{key:index,className:"background-services ".concat(back.class),src:back.url,alt:"service-background-".concat(index)});}),data.services.list.map(function(service,index){return external_react_default.a.createElement("div",{key:index,className:"container-service"},external_react_default.a.createElement(units_service_Service,{service:service,style:data.style,marcoServices:data.marcoServices}));}))):"",data.clients&&data.clients.active?external_react_default.a.createElement("div",null," ",external_react_default.a.createElement("p",{style:{color:data.style.title},className:"title-services"},t('unit.clients')),external_react_default.a.createElement("div",{className:"container-clients"},data.clients.list.map(function(client,index){return external_react_default.a.createElement(units_client_Client,{key:index,client:client,color:data.style.general});}))):"",data.portfolio&&data.portfolio.active?external_react_default.a.createElement("div",null," ",external_react_default.a.createElement("p",{style:{color:data.style.title},className:"title-services"},t('unit.portfolio')),external_react_default.a.createElement("div",{className:"container-portfolioCompleted"},data.portfolio.completed.map(function(portfolioCompleted,index){return external_react_default.a.createElement(units_portfolioCompleted_PortfolioCompleted,{key:index,index:index,portfolioCompleted:portfolioCompleted,style:data.style,marcoServices:data.marcoServices});})),external_react_default.a.createElement("div",{className:"container-portfolioOngoing"},data.portfolio.ongoing.map(function(portfolioOngoing,index){return external_react_default.a.createElement(units_portfolio_Portfolio,{key:index,index:index,portfolioOngoing:portfolioOngoing,marcoLargelOngoing:data.marcoLargelOngoing,style:data.style});}))):"",data.technologies&&data.technologies.active?external_react_default.a.createElement("div",null," ",external_react_default.a.createElement("p",{style:{color:data.style.title},className:"title-services"},external_react_default.a.createElement(external_react_i18next_["Trans"],{i18nKey:"unit.techs"},"1",external_react_default.a.createElement("br",null),"2")),external_react_default.a.createElement("div",{className:"container-allTechnologies"},data.technologies.list.map(function(techType,index){return external_react_default.a.createElement("div",{key:index,className:"container-technologies"},techType.name!=="default"?external_react_default.a.createElement("p",{style:{color:data.style.subTitle},className:"technology-title"},t("".concat(data.traduction,".technologies.").concat(techType.name))):"",techType.list.map(function(technology,index){return external_react_default.a.createElement("div",{key:index,className:"container-technology"},external_react_default.a.createElement(units_technology_Technology,{technology:technology,style:data.style}));}));}))):"",data.events&&data.events.active?external_react_default.a.createElement("div",null," ",external_react_default.a.createElement("p",{style:{color:data.style.title},className:"title-services"},t('unit.events')),external_react_default.a.createElement("div",{className:"container-events"},data.events.list.map(function(event,index){return external_react_default.a.createElement(units_event_Event,{key:index,event:event,style:data.style,marcoServices:data.marcoServices});})),external_react_default.a.createElement(redes_Redes,{redes:data.redes})):"");}}]);return Unit;}(external_react_["Component"]);/* harmony default export */ var views_units_Unit = __webpack_exports__["default"] = (Object(lib["withRouteData"])(Object(external_react_i18next_["withTranslation"])()(Unit_Unit)));

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(5);

// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/data/home.json
var home = __webpack_require__(13);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(2);

// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/home/unity/Unity.css
var unity_Unity = __webpack_require__(65);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/home/unity/Unity.js
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var Unity_Unity=/*#__PURE__*/function(_Component){_inherits(Unity,_Component);function Unity(){_classCallCheck(this,Unity);return _possibleConstructorReturn(this,_getPrototypeOf(Unity).apply(this,arguments));}_createClass(Unity,[{key:"render",value:function render(){var _this$props=this.props,t=_this$props.t,i18n=_this$props.i18n;return external_react_default.a.createElement("div",{className:"Unity",style:{background:this.props.unity.backgroundColor}},external_react_default.a.createElement("div",{className:"Unity-container"},external_react_default.a.createElement("div",{className:"Unity-logoContainer"},external_react_default.a.createElement("img",{className:"Unity-logo",src:this.props.unity.logo,alt:this.props.unity.name}),external_react_default.a.createElement("p",{style:{color:this.props.unity.color}},t(this.props.unity.title))),external_react_default.a.createElement("div",{className:"Unity-iconContainer"},external_react_default.a.createElement("img",{style:{width:this.props.width},className:"Unity-icon",src:this.props.unity.icon,alt:this.props.unity.name}))));}}]);return Unity;}(external_react_["Component"]);/* harmony default export */ var home_unity_Unity = (Object(external_react_i18next_["withTranslation"])()(Unity_Unity));
// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/home/asharastudios/AsharaStudios.css
var asharastudios_AsharaStudios = __webpack_require__(66);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/home/asharastudios/AsharaStudios.js
function AsharaStudios_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){AsharaStudios_typeof=function _typeof(obj){return typeof obj;};}else{AsharaStudios_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return AsharaStudios_typeof(obj);}function AsharaStudios_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function AsharaStudios_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function AsharaStudios_createClass(Constructor,protoProps,staticProps){if(protoProps)AsharaStudios_defineProperties(Constructor.prototype,protoProps);if(staticProps)AsharaStudios_defineProperties(Constructor,staticProps);return Constructor;}function AsharaStudios_possibleConstructorReturn(self,call){if(call&&(AsharaStudios_typeof(call)==="object"||typeof call==="function")){return call;}return AsharaStudios_assertThisInitialized(self);}function AsharaStudios_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function AsharaStudios_getPrototypeOf(o){AsharaStudios_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return AsharaStudios_getPrototypeOf(o);}function AsharaStudios_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)AsharaStudios_setPrototypeOf(subClass,superClass);}function AsharaStudios_setPrototypeOf(o,p){AsharaStudios_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return AsharaStudios_setPrototypeOf(o,p);}var AsharaStudios_AsharaStudios=/*#__PURE__*/function(_Component){AsharaStudios_inherits(AsharaStudios,_Component);function AsharaStudios(){AsharaStudios_classCallCheck(this,AsharaStudios);return AsharaStudios_possibleConstructorReturn(this,AsharaStudios_getPrototypeOf(AsharaStudios).apply(this,arguments));}AsharaStudios_createClass(AsharaStudios,[{key:"render",value:function render(){var _this$props=this.props,t=_this$props.t,unity=_this$props.unity;return external_react_default.a.createElement("div",{className:"AsharaStudios",style:{background:unity.backgroundColor}},external_react_default.a.createElement("div",{className:"AsharaStudios-container"},external_react_default.a.createElement("div",{className:"AsharaStudios-logoContainer"},external_react_default.a.createElement("img",{className:"AsharaStudios-logo",src:unity.logo,alt:unity.name}),external_react_default.a.createElement("img",{className:"AsharaStudios-logo2",src:unity.logo2,alt:unity.name}),external_react_default.a.createElement("p",{style:{color:unity.color},className:"AsharaStudios-title"},external_react_default.a.createElement(external_react_i18next_["Trans"],{i18nKey:unity.title},"1",external_react_default.a.createElement("br",null),"2"),external_react_default.a.createElement("br",null))),external_react_default.a.createElement("p",{style:{color:unity.color},className:"AsharaStudios-description"},external_react_default.a.createElement(external_react_i18next_["Trans"],null,unity.description))));}}]);return AsharaStudios;}(external_react_["Component"]);/* harmony default export */ var home_asharastudios_AsharaStudios = (Object(external_react_i18next_["withTranslation"])()(AsharaStudios_AsharaStudios));
// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/home/redesSociales/RedesSociales.css
var RedesSociales = __webpack_require__(67);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/home/redesSociales/RedesSociales.js
function RedesSociales_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){RedesSociales_typeof=function _typeof(obj){return typeof obj;};}else{RedesSociales_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return RedesSociales_typeof(obj);}function RedesSociales_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function RedesSociales_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function RedesSociales_createClass(Constructor,protoProps,staticProps){if(protoProps)RedesSociales_defineProperties(Constructor.prototype,protoProps);if(staticProps)RedesSociales_defineProperties(Constructor,staticProps);return Constructor;}function RedesSociales_possibleConstructorReturn(self,call){if(call&&(RedesSociales_typeof(call)==="object"||typeof call==="function")){return call;}return RedesSociales_assertThisInitialized(self);}function RedesSociales_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function RedesSociales_getPrototypeOf(o){RedesSociales_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return RedesSociales_getPrototypeOf(o);}function RedesSociales_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)RedesSociales_setPrototypeOf(subClass,superClass);}function RedesSociales_setPrototypeOf(o,p){RedesSociales_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return RedesSociales_setPrototypeOf(o,p);}var RedesSociales_RedesSocialesClass=/*#__PURE__*/function(_Component){RedesSociales_inherits(RedesSocialesClass,_Component);function RedesSocialesClass(){RedesSociales_classCallCheck(this,RedesSocialesClass);return RedesSociales_possibleConstructorReturn(this,RedesSociales_getPrototypeOf(RedesSocialesClass).apply(this,arguments));}RedesSociales_createClass(RedesSocialesClass,[{key:"render",value:function render(){var _this$props=this.props,t=_this$props.t,i18n=_this$props.i18n;return external_react_default.a.createElement("div",{className:"RedesSociales"},external_react_default.a.createElement("img",{className:"RedesSociales-backgroundLarge",src:"https://drive.google.com/uc?id=12z1zIBojWHJpSCHrQp_su6t71-PJDvBH",alt:"redes sociales"}),external_react_default.a.createElement("img",{className:"RedesSociales-background",src:"https://drive.google.com/uc?id=1Bl1HusLNO8m3EXmaTXHGzAYy3TF3eV61",alt:"redes sociales"}),external_react_default.a.createElement("div",{className:"RedesSociales-container"},external_react_default.a.createElement("div",{className:"RedesSociales-logoContainer"},external_react_default.a.createElement("p",{className:"RedesSociales-description"},t(this.props.homeData.redesMessage)),external_react_default.a.createElement("p",{className:"RedesSociales-followUs"},t('misc.followus')),external_react_default.a.createElement("div",null,external_react_default.a.createElement("a",{href:"https://www.facebook.com/AsharaStudios/",target:"_blank"},external_react_default.a.createElement("i",{className:"fab fa-facebook-f fa-3x",style:{color:'#666666'}})),external_react_default.a.createElement("a",{href:"https://twitter.com/asharastudios",target:"_blank"},external_react_default.a.createElement("i",{className:"fab fa-twitter fa-3x",style:{color:'#666666'}})),external_react_default.a.createElement("a",{href:"https://www.instagram.com/asharastudios/",target:"_blank"},external_react_default.a.createElement("i",{className:"fab fa-instagram fa-3x",style:{color:'#666666'}})),external_react_default.a.createElement("a",{href:"https://www.youtube.com/channel/UCKtLoZ8R_ieK6N4o2L9i44A",target:"_blank"},external_react_default.a.createElement("i",{className:"fab fa-youtube fa-3x",style:{color:'#666666'}})),external_react_default.a.createElement("a",{href:"https://www.linkedin.com/company/asharastudios/",target:"_blank"},external_react_default.a.createElement("i",{className:"fab fa-linkedin fa-3x",style:{color:'#666666'}}))))));}}]);return RedesSocialesClass;}(external_react_["Component"]);var RedesSociales_RedesSociales=Object(external_react_i18next_["withTranslation"])()(RedesSociales_RedesSocialesClass);/* harmony default export */ var redesSociales_RedesSociales = (RedesSociales_RedesSociales);
// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/home/Home.css
var home_Home = __webpack_require__(68);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/home/Home.js
function Home_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Home_typeof=function _typeof(obj){return typeof obj;};}else{Home_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return Home_typeof(obj);}function Home_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function Home_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function Home_createClass(Constructor,protoProps,staticProps){if(protoProps)Home_defineProperties(Constructor.prototype,protoProps);if(staticProps)Home_defineProperties(Constructor,staticProps);return Constructor;}function Home_possibleConstructorReturn(self,call){if(call&&(Home_typeof(call)==="object"||typeof call==="function")){return call;}return Home_assertThisInitialized(self);}function Home_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function Home_getPrototypeOf(o){Home_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return Home_getPrototypeOf(o);}function Home_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)Home_setPrototypeOf(subClass,superClass);}function Home_setPrototypeOf(o,p){Home_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return Home_setPrototypeOf(o,p);}var Home_Home=/*#__PURE__*/function(_Component){Home_inherits(Home,_Component);function Home(){Home_classCallCheck(this,Home);return Home_possibleConstructorReturn(this,Home_getPrototypeOf(Home).apply(this,arguments));}Home_createClass(Home,[{key:"render",value:function render(){return external_react_default.a.createElement("div",{className:"Home"},home.data.map(function(unity,index){if(index===0){return external_react_default.a.createElement(home_asharastudios_AsharaStudios,{key:index,unity:unity});}else if(index===7){return external_react_default.a.createElement(router_["Link"],{key:index,to:unity.link},external_react_default.a.createElement(home_unity_Unity,{unity:unity,width:"67%",style:{textDecoration:'none',color:'white'}}));}else if(index!==0){return external_react_default.a.createElement(router_["Link"],{key:index,to:unity.link},external_react_default.a.createElement(home_unity_Unity,{unity:unity,width:"100%",style:{textDecoration:'none',color:'white'}})," ");}return"";}),external_react_default.a.createElement(redesSociales_RedesSociales,{homeData:home.data[0]}));}}]);return Home;}(external_react_["Component"]);/* harmony default export */ var views_home_Home = __webpack_exports__["default"] = (Home_Home);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(2);

// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/components/redes-general/redes-general.js
var redes_general = __webpack_require__(20);

// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/data/aboutUs.json
var aboutUs = __webpack_require__(8);

// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/data/home.json
var home = __webpack_require__(13);

// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/data/heroes.json
var heroes = __webpack_require__(15);

// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/about-us/hero/Hero.css
var hero_Hero = __webpack_require__(86);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/about-us/hero/Hero.js
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var Hero_Hero=/*#__PURE__*/function(_Component){_inherits(Hero,_Component);function Hero(){_classCallCheck(this,Hero);return _possibleConstructorReturn(this,_getPrototypeOf(Hero).apply(this,arguments));}_createClass(Hero,[{key:"render",value:function render(){var _this$props=this.props,t=_this$props.t,hero=_this$props.hero;return external_react_default.a.createElement("div",{className:"Hero"},external_react_default.a.createElement("div",{className:"Hero-mobile-container"},external_react_default.a.createElement("img",{className:"Hero-marco",src:this.props.marcoMobile,alt:"marcoHero"}),external_react_default.a.createElement("img",{className:"Hero-marco-desktop",src:this.props.marco1Desktop,alt:"marcoHero"}),external_react_default.a.createElement("img",{className:"Hero-marco2-desktop",src:this.props.marco2Desktop,alt:"marcoHero"}),external_react_default.a.createElement("img",{className:"Hero-lineas",src:this.props.lineas,alt:"marcoHero"}),external_react_default.a.createElement("img",{className:"Hero-photo",src:hero.photo,alt:"photoHero"}),external_react_default.a.createElement("p",{className:"Hero-name"},hero.name,external_react_default.a.createElement("img",{className:"Hero-marco-text",src:this.props.marcoText,alt:"marcoTextHero"}))),external_react_default.a.createElement("p",{className:"Hero-description"},t(hero.description)));}}]);return Hero;}(external_react_["Component"]);/* harmony default export */ var about_us_hero_Hero = (Object(external_react_i18next_["withTranslation"])()(Hero_Hero));
// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/about-us/AboutUs.css
var about_us_AboutUs = __webpack_require__(87);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/views/about-us/AboutUs.js
function AboutUs_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){AboutUs_typeof=function _typeof(obj){return typeof obj;};}else{AboutUs_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return AboutUs_typeof(obj);}function AboutUs_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function AboutUs_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function AboutUs_createClass(Constructor,protoProps,staticProps){if(protoProps)AboutUs_defineProperties(Constructor.prototype,protoProps);if(staticProps)AboutUs_defineProperties(Constructor,staticProps);return Constructor;}function AboutUs_possibleConstructorReturn(self,call){if(call&&(AboutUs_typeof(call)==="object"||typeof call==="function")){return call;}return AboutUs_assertThisInitialized(self);}function AboutUs_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function AboutUs_getPrototypeOf(o){AboutUs_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return AboutUs_getPrototypeOf(o);}function AboutUs_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)AboutUs_setPrototypeOf(subClass,superClass);}function AboutUs_setPrototypeOf(o,p){AboutUs_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return AboutUs_setPrototypeOf(o,p);}var AboutUs_AboutUs=/*#__PURE__*/function(_Component){AboutUs_inherits(AboutUs,_Component);function AboutUs(){AboutUs_classCallCheck(this,AboutUs);return AboutUs_possibleConstructorReturn(this,AboutUs_getPrototypeOf(AboutUs).apply(this,arguments));}AboutUs_createClass(AboutUs,[{key:"render",value:function render(){var t=this.props.t;return external_react_default.a.createElement("div",{className:"AboutUs"},external_react_default.a.createElement("div",{className:"hero"},external_react_default.a.createElement("img",{className:"hero-img",alt:"",src:aboutUs.data.puntosSuperiores}),external_react_default.a.createElement("img",{className:"hero-img-medium",alt:"",src:aboutUs.data.puntosSuperioresMedio}),external_react_default.a.createElement("p",null,t(aboutUs.data.name))),external_react_default.a.createElement("div",{className:"team-photo"},external_react_default.a.createElement("img",{className:"team-photo-img",alt:"",src:aboutUs.data.photoColor}),external_react_default.a.createElement("img",{className:"team-photo-img-medium",alt:"",src:aboutUs.data.photoColorMedio})),external_react_default.a.createElement("div",{className:"aboutUs-description"},external_react_default.a.createElement("div",{className:"description"},external_react_default.a.createElement("p",{className:"description-title"},aboutUs.data.name),external_react_default.a.createElement("div",{className:"container-description-details"},external_react_default.a.createElement("p",{className:"description-details"},t(aboutUs.data.description)))),external_react_default.a.createElement("div",{className:"philosophy"},external_react_default.a.createElement("p",{className:"philosophy-text"},t(aboutUs.data.textTitle)),external_react_default.a.createElement("p",{className:"philosophy-detail"},t(aboutUs.data.text)),external_react_default.a.createElement("img",{className:"philosophy-logo",alt:"",src:aboutUs.data.logo}),external_react_default.a.createElement("p",{className:"philosophy-description"},t(aboutUs.data.textDescription)))),external_react_default.a.createElement("p",{className:"philosophy-text ourheroes"},t("about.heroesTitle")),external_react_default.a.createElement("div",{className:"Heroes-container"},heroes.heroes.map(function(hero,index){return external_react_default.a.createElement(about_us_hero_Hero,{key:index,index:index,marcoMobile:heroes.marcoMobile,marco1Desktop:heroes.marco1Desktop,marco2Desktop:heroes.marco2Desktop,lineas:heroes.lineas,marcoText:heroes.marcoText,hero:hero});})),external_react_default.a.createElement("div",{className:"padder"},external_react_default.a.createElement(redes_general["a" /* default */],{redesData:home})));}}]);return AboutUs;}(external_react_["Component"]);/* harmony default export */ var views_about_us_AboutUs = __webpack_exports__["default"] = (Object(external_react_i18next_["withTranslation"])()(AboutUs_AboutUs));

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40);
__webpack_require__(43);
module.exports = __webpack_require__(48);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();
/* eslint-disable import/no-dynamic-require */


var plugins = __webpack_require__(25).default;

var _require = __webpack_require__(12),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(25).default);
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(plugins, "plugins", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapPlugins.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("swimmer");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("intersection-observer");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(28),
    templates = _require.default,
    notFoundTemplate = _require.notFoundTemplate;

var _require2 = __webpack_require__(12),
    registerTemplates = _require2.registerTemplates;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(28),
        templates = _require3.default,
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports.default = requireUniversalModule;

var _utils = __webpack_require__(21);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 17,
	"./": 17,
	"./index": 17,
	"./index.js": 17
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 45;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(29);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _StaticInfo = _interopRequireDefault(__webpack_require__(18));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var App = __webpack_require__(88).default;

var _default = function _default(staticInfo) {
  return function (props) {
    return _react.default.createElement(_StaticInfo.default.Provider, {
      value: staticInfo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, _react.default.createElement(App, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    })));
  };
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/bootstrapApp.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  padding: 0;\n}\n", ""]);



/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withRouteData = withRouteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(11));

var _react = _interopRequireDefault(__webpack_require__(0));

var _ = __webpack_require__(12);

var _Spinner = _interopRequireDefault(__webpack_require__(22));

var _StaticInfo = __webpack_require__(18);

var _Routes = __webpack_require__(32);

var _class,
    _temp,
    _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var instances = [];

global.reloadAll = function () {
  instances.forEach(function (instance) {
    return instance.safeForceUpdate();
  });
};

var RouteData = (0, _StaticInfo.withStaticInfo)((0, _Routes.withRoutePathContext)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouteData, _React$Component);

  function RouteData() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouteData);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouteData)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeForceUpdate", function () {
      if (_this.unmounted) {
        return;
      }

      _this.forceUpdate();
    });

    return _this;
  }

  _createClass(RouteData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      instances.push(this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      instances = instances.filter(function (d) {
        return d !== _this2;
      });
      this.unmounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader,
          routePath = _this$props.routePath;
      var routeError = _.routeErrorByPath[routePath];
      var routeInfo = routeError ? _.routeInfoByPath['404'] : _.routeInfoByPath[routePath]; // If there was an error reported for this path, throw an error
      // unless there is data for the 404 page

      if (routeError && (!routeInfo || !routeInfo.data)) {
        throw new Error("React-Static: <RouteData> could not find any data for this route: ".concat(routePath, ". If this is a dynamic route, please remove any reliance on RouteData or withRouteData from this routes components"));
      } // If we haven't requested the routeInfo and its shared data yet, or it's loading
      // Show a spinner and prefetch the data
      // TODO:suspense - This will become a suspense resource


      if (shouldLoadData(routeInfo)) {
        ;

        _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Promise.all([(0, _.prefetch)(routePath, {
                    priority: true
                  }), new Promise(function (resolve) {
                    return setTimeout(resolve, "200");
                  })]);

                case 2:
                  _this3.safeForceUpdate();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }))();

        return _react.default.createElement(Loader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        });
      } // Otherwise, get it from the routeInfoByPath (subsequent client side)
      // and merge it with the shared data


      var fullData = _objectSpread({}, routeInfo.data, routeInfo.sharedData);

      return children(fullData);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouteData;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp)));

function shouldLoadData(routeInfo) {
  if (!routeInfo || !routeInfo.data) {
    return true;
  }

  return shouldLoadSharedData(routeInfo);
}

function shouldLoadSharedData(routeInfo) {
  return hasPropHashes(routeInfo) && !routeInfo.sharedData;
}

function hasPropHashes(routeInfo) {
  return routeInfo.sharedHashesByProp && Object.keys(routeInfo.sharedHashesByProp).length > 0;
}

var _default = RouteData;
var _default2 = _default;
exports.default = _default2;

function withRouteData(Comp) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (props) {
    return _react.default.createElement(RouteData, _extends({}, opts, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), function (routeData) {
      return _react.default.createElement(Comp, _extends({}, routeData, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }));
    });
  };
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(instances, "instances", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(RouteData, "RouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(shouldLoadData, "shouldLoadData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(shouldLoadSharedData, "shouldLoadSharedData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(hasPropHashes, "hasPropHashes", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(withRouteData, "withRouteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/RouteData.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSiteData = withSiteData;
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(11));

var _react = _interopRequireDefault(__webpack_require__(0));

var _axios = _interopRequireDefault(__webpack_require__(26));

var _Spinner = _interopRequireDefault(__webpack_require__(22));

var _StaticInfo = __webpack_require__(18);

var _class,
    _temp,
    _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // Share a single promise for all siteData requests


var siteDataPromise;
var SiteData = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SiteData, _React$Component);

  function SiteData(props) {
    var _this;

    _classCallCheck(this, SiteData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SiteData).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "safeSetState", function () {
      var _this2;

      if (_this.unmounted) {
        return;
      }

      (_this2 = _this).setState.apply(_this2, arguments);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchSiteData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      var _ref2, siteData;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (true) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return function () {
                if (siteDataPromise) {
                  return siteDataPromise;
                }

                siteDataPromise = _axios.default.get('/__react-static__/siteData');
                return siteDataPromise;
              }();

            case 3:
              _ref2 = _context.sent;
              siteData = _ref2.data;

              _this.safeSetState({
                siteData: siteData
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    var staticInfo = _this.props.staticInfo;
    _this.state = {
      // Default siteData to use the staticInfo if possible
      // This will be undefined in development, which will
      // then be requested at runtime.
      siteData: staticInfo ? staticInfo.siteData : null
    };
    return _this;
  }

  _createClass(SiteData, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchSiteData();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unmounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          Loader = _this$props.Loader;
      var _this$state = this.state,
          siteData = _this$state.siteData,
          siteDataError = _this$state.siteDataError; // If there was a fetch error in dev, throw it to the nearest ErrorBoundary

      if (siteDataError) {
        throw siteDataError;
      }

      if (!siteData) {
        return _react.default.createElement(Loader, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        });
      }

      return children(siteData);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SiteData;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  Loader: _Spinner.default
}), _temp));
var _default = SiteData;
var _default2 = _default;
exports.default = _default2;

function withSiteData(Comp) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (props) {
    return _react.default.createElement(SiteData, _extends({}, opts, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), function (siteData) {
      return _react.default.createElement(Comp, _extends({}, siteData, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }));
    });
  };
}

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(siteDataPromise, "siteDataPromise", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(SiteData, "SiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(withSiteData, "withSiteData", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/SiteData.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(11));

var _react = _interopRequireDefault(__webpack_require__(0));

var _utils = __webpack_require__(16);

var _ = __webpack_require__(12);

var _Visibility = _interopRequireDefault(__webpack_require__(27));

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Prefetch.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Prefetch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Prefetch, _React$Component);

  function Prefetch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Prefetch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Prefetch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "runPrefetch", function () {
      return _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this$props, path, onLoad, cleanedPath, data;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, path = _this$props.path, onLoad = _this$props.onLoad;
                cleanedPath = (0, _utils.getRoutePath)(path);
                _context.next = 4;
                return (0, _.prefetch)(cleanedPath);

              case 4:
                data = _context.sent;
                onLoad(data, cleanedPath);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }))();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleRef", function (el) {
      if (!_this.props.force && el) {
        (0, _Visibility.default)(el, _this.runPrefetch);
      }
    });

    return _this;
  }

  _createClass(Prefetch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.force) {
        this.runPrefetch();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          rest = _objectWithoutProperties(_this$props2, ["children"]);

      if (children) {
        return children({
          handleRef: this.handleRef
        });
      }

      return _react.default.createElement("div", _extends({
        ref: this.handleRef
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Prefetch;
}(_react.default.Component);

exports.default = Prefetch;

_defineProperty(Prefetch, "defaultProps", {
  children: null,
  path: null,
  force: false,
  onLoad: function onLoad() {}
});

;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Prefetch, "Prefetch", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Prefetch.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _router = __webpack_require__(5);

var _ = __webpack_require__(12);

var _utils = __webpack_require__(16);

var _ErrorBoundary = _interopRequireDefault(__webpack_require__(55));

var _HashScroller = _interopRequireDefault(__webpack_require__(56));

var _StaticInfo = __webpack_require__(18);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js",
    _class,
    _temp;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var DefaultPath = function DefaultPath(_ref) {
  var render = _ref.render;
  return render;
};

var DefaultRouter = function DefaultRouter(_ref2) {
  var children = _ref2.children,
      basepath = _ref2.basepath,
      staticInfo = _ref2.staticInfo;
  children = _react.default.createElement(_router.Router, {
    basepath: basepath,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, _react.default.createElement(DefaultPath, {
    default: true,
    render: children,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }));
  return typeof document === 'undefined' ? _react.default.createElement(_router.ServerLocation, {
    url: (0, _utils.makePathAbsolute)(staticInfo.path),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, children) : children;
};

var RouterHook = (0, _utils.makeHookReducer)(_.plugins, 'Router', {
  sync: true
});
var ResolvedRouter = RouterHook(DefaultRouter);
var Root = (0, _StaticInfo.withStaticInfo)((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    var _this;

    _classCallCheck(this, Root);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Root).call(this));
    var staticInfo = props.staticInfo;

    if ( true && staticInfo) {
      var path = staticInfo.path,
          sharedData = staticInfo.sharedData,
          sharedHashesByProp = staticInfo.sharedHashesByProp,
          template = staticInfo.template; // Hydrate routeInfoByPath with the embedded routeInfo

      _.routeInfoByPath[path] = staticInfo; // Hydrate sharedDataByHash with the embedded routeInfo

      Object.keys(sharedHashesByProp).forEach(function (propKey) {
        _.sharedDataByHash[sharedHashesByProp[propKey]] = sharedData[propKey];
      }); // In SRR and production, synchronously register the template for the
      // initial path

      (0, _.registerTemplateForPath)(path, template); // For a 404 route we will register the current route as invalid

      if (path === '404') {
        var currentPath = (0, _.getCurrentRoutePath)(); // As long as we didn't navigate to the 404.html page directly

        if (currentPath !== '404') {
          _.routeErrorByPath[currentPath] = true;
          _.templateErrorByPath[currentPath] = true;
        }
      }
    }

    return _this;
  }

  _createClass(Root, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disableScroller = _this$props.disableScroller,
          autoScrollToTop = _this$props.autoScrollToTop,
          autoScrollToHash = _this$props.autoScrollToHash,
          scrollToTopDuration = _this$props.scrollToTopDuration,
          scrollToHashDuration = _this$props.scrollToHashDuration,
          scrollToHashOffset = _this$props.scrollToHashOffset,
          staticInfo = _this$props.staticInfo;
      var scrollerProps = {
        autoScrollToTop: autoScrollToTop,
        autoScrollToHash: autoScrollToHash,
        scrollToTopDuration: scrollToTopDuration,
        scrollToHashDuration: scrollToHashDuration,
        scrollToHashOffset: scrollToHashOffset
      };

      var Wrapper = function Wrapper(_ref3) {
        var children = _ref3.children;
        return children;
      };

      var basepath = (0, _utils.getBasePath)(); // Add the scroller if not disabled

      if (!disableScroller) {
        Wrapper = function Wrapper(_ref4) {
          var children = _ref4.children;
          return _react.default.createElement(_HashScroller.default, _extends({}, scrollerProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          }), children);
        };
      }

      return _react.default.createElement(_ErrorBoundary.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, _react.default.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, _react.default.createElement(ResolvedRouter, {
        basepath: basepath,
        staticInfo: staticInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, children)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Root;
}(_react.default.Component), _defineProperty(_class, "defaultProps", {
  disableScroller: false,
  // TODO:v6 document this!
  autoScrollToTop: true,
  autoScrollToHash: true,
  scrollToTopDuration: 0,
  scrollToHashDuration: 800,
  scrollToHashOffset: 0
}), _temp));
var _default = Root;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(DefaultPath, "DefaultPath", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(DefaultRouter, "DefaultRouter", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(RouterHook, "RouterHook", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(ResolvedRouter, "ResolvedRouter", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(Root, "Root", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  reactHotLoader.register(_default, "default", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/Root.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _utils = __webpack_require__(16);

var _jsxFileName = "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorBoundary.js";

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var ErrorBoundary =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ErrorBoundary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      error: false
    });

    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error) {
      if (typeof document === 'undefined') {
        throw error;
      }

      this.setState({
        error: error
      });
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.error;

      if (error) {
        return _react.default.createElement("div", {
          style: {
            margin: '1rem',
            padding: '1rem',
            background: 'rgba(0,0,0,0.05)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, _react.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, "Oh-no! Something\u2019s gone wrong!"), _react.default.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }), _react.default.createElement("button", {
          size: "s",
          onClick: function onClick() {
            return window.location.reload();
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, "Reload"));
      }

      return (0, _utils.unwrapArray)(this.props.children);
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ErrorBoundary;
}(_react.default.Component);

exports.default = ErrorBoundary;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ErrorBoundary, "ErrorBoundary", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/ErrorBoundary.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof2 = __webpack_require__(7);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _raf = _interopRequireDefault(__webpack_require__(31));

var _Location = _interopRequireDefault(__webpack_require__(33));

var _scrollTo = _interopRequireDefault(__webpack_require__(30));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

(function () {
  var enterModule = __webpack_require__(1).enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var RouterScroller =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RouterScroller, _React$Component);

  function RouterScroller() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RouterScroller);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RouterScroller)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToTop", function () {
      var _this$props = _this.props,
          autoScrollToTop = _this$props.autoScrollToTop,
          scrollToTopDuration = _this$props.scrollToTopDuration;

      if (autoScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToTopDuration
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollToHash", function (hash) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$orScrollToTop = _ref.orScrollToTop,
          orScrollToTop = _ref$orScrollToTop === void 0 ? true : _ref$orScrollToTop;

      var _this$props2 = _this.props,
          scrollToHashDuration = _this$props2.scrollToHashDuration,
          autoScrollToHash = _this$props2.autoScrollToHash,
          scrollToHashOffset = _this$props2.scrollToHashOffset;

      if (!autoScrollToHash) {
        return;
      }

      if (hash) {
        var resolvedHash = hash.substring(1);

        if (resolvedHash) {
          // We must attempt to scroll synchronously or we risk the browser scrolling for us
          var element = document.getElementById(resolvedHash);

          if (element !== null) {
            (0, _scrollTo.default)(element, {
              duration: scrollToHashDuration,
              offset: scrollToHashOffset
            });
          } else {
            (0, _raf.default)(function () {
              var element = document.getElementById(resolvedHash);

              if (element !== null) {
                (0, _scrollTo.default)(element, {
                  duration: scrollToHashDuration,
                  offset: scrollToHashOffset
                });
              }
            });
          }
        }
      } else if (orScrollToTop) {
        (0, _scrollTo.default)(0, {
          duration: scrollToHashDuration
        });
      }
    });

    return _this;
  }

  _createClass(RouterScroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this; // Do not scroll to top on initial page load if hash does not exist


      this.scrollToHash(window.location.hash, {
        orScrollToTop: false
      });
      (0, _Location.default)(function (_ref2) {
        var hash = _ref2.hash,
            pathname = _ref2.pathname;

        if (_this2.prevPathname !== pathname && !hash) {
          _this2.scrollToTop();
        } else if (_this2.prevHash !== hash) {
          _this2.scrollToHash(hash);
        }

        _this2.prevPathname = pathname;
        _this2.prevHash = hash;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return RouterScroller;
}(_react.default.Component);

exports.default = RouterScroller;
;

(function () {
  var reactHotLoader = __webpack_require__(1).default;

  var leaveModule = __webpack_require__(1).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RouterScroller, "RouterScroller", "/Users/tannerlinsley/GitHub/react-static/packages/react-static/src/browser/components/HashScroller.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)(module)))

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "body {\n    margin: 0;\n    font-family: 'bebas_neue';\n}\n\n@font-face {\n    font-family: 'bebas_neue';\n    src: url('/fonts/BebasNeue/BebasNeue.otf');\n}\n\n.cursorPointer {\n    cursor: pointer;\n}\n\n.Header {\n    color: white;\n    letter-spacing: 1px;\n    font-size: 18px;\n    position: fixed;\n    width: 100%;\n    z-index: 9999;\n    top: 0;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n}\n\n.header .underline {\n    text-decoration: underline !important;\n}\n\n.header .logoLink {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.header .logoText {\n    white-space: nowrap;\n    margin-left: .5em;\n    letter-spacing: 2px;\n}\n\n.UnitsMain {\n    margin-top: 65px;\n}\n\n.header ul {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    list-style-type: none;\n}\n\n.header a {\n    color: white;\n    letter-spacing: 1px;\n    white-space: nowrap;\n    text-decoration: none;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.header .textMenu {\n    color: white;\n    letter-spacing: 1px;\n    white-space: nowrap;\n    margin: 0;\n    cursor: pointer;\n    text-decoration: none;\n    -webkit-tap-highlight-color: transparent;\n}\n\n#cbxMenu {\n    display: none;\n}\n\n.header .cover {\n    margin: 0;\n    width: 100%;\n}\n\n.header .cover img {\n    width: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n}\n\n.header {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    width: 100%;\n    z-index: 1000;\n    -webkit-transition: all 0.5s;\n    /* Safari */\n    -o-transition: all 0.5s;\n    transition: all 0.5s;\n    /* box-shadow: 3px 4px 4px rgba(255, 255, 255, 0.1); */\n    -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);\n            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);\n}\n\n.header .container {\n    width: 100%;\n    -ms-flex: 1 1;\n        flex: 1 1;\n    margin: 0 auto;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    height: inherit;\n    -ms-flex-wrap: inherit;\n        flex-wrap: inherit;\n    max-width: 1200px;\n}\n\n.header .headerBackground {\n    height: 56px;\n    /* opacity: .98; */\n    background-repeat: no-repeat;\n}\n\n.header .logoContainer {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    color: white;\n    -ms-flex-align: center;\n        align-items: center;\n    letter-spacing: 2px;\n    margin: 0 0 0 1em;\n}\n\n.header .logoContainer p {\n    margin: .5em;\n    white-space: nowrap;\n}\n\n.header .logoHeader {\n    width: 90px;\n}\n\n.header .logoMenu {\n    display: none;\n}\n\n.header .logoMenu img {\n    width: 64px;\n    padding-top: .5em;\n}\n\n.header .menuIcon {\n    display: none;\n}\n\n.header .menuBorder {\n    cursor: pointer;\n    z-index: 2;\n    margin: 0 17px 6px 0;\n    width: 56px;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.header .menuBorder img {\n    width: 100%;\n}\n\n.header .barrasContainer {\n    position: absolute;\n    opacity: .6;\n    margin: -4px 37px;\n    z-index: 1;\n    right: 0;\n    width: 15px;\n}\n\n.header .barrasContainer img {\n    width: 100%;\n}\n\n.header .modules {\n    width: 60%;\n}\n\n.header .modules li {\n    margin-right: 5em;\n}\n\n.header .units {\n    height: 100%;\n}\n\n.header .unitsIcon {\n    display: none;\n}\n\n.header .unitsDetailsHide {\n    display: none;\n    /* -webkit-animation: hideWithOpacity .5s ease-out ;\n    -moz-animation: hideWithOpacity .5s ease-out ;\n    -ms-animation: hideWithOpacity .5s ease-out ;\n    -o-animation: hideWithOpacity .5s ease-out ;\n    animation: hideWithOpacity .5s ease-out ; */\n}\n\n.header .unitsDetails {\n    -webkit-transition: all 0.5s;\n    -o-transition: all 0.5s;\n    transition: all 0.5s;\n    width: 100%;\n    /* padding-top: .7em;\n    padding-bottom: .7em; */\n    position: fixed;\n    background: #0f0f0f;\n    z-index: 9998;\n    top: 90px;\n    left: 0;\n}\n\n.header .unitsDetails ul {\n    margin: 0;\n}\n\n.header .unitsDetails li {\n    margin-right: 2em;\n}\n\n.header .unitLink {\n    margin-right: 1em;\n    margin-left: 1em;\n    height: 2.5em;\n    padding-top: 0.6em;\n}\n\n.header .modulesElements {\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n\n.header .animateRight {\n    -webkit-animation: rotateRight .5s ease-out;\n    /* infinite */\n    animation: rotateRight .5s ease-out;\n}\n\n.header .animateLeft {\n    -webkit-animation: rotateLeft .5s ease-out;\n    /* infinite */\n    animation: rotateLeft .5s ease-out;\n}\n\n/* prueba menu */\n\n.headerDropDownMenu {\n    display: block;\n}\n\n.headerActivateMenu {\n    display: none;\n}\n\n.headerActivateMenu:checked~.headerDropDown {\n    max-height: 2.5em;\n}\n\n.headerDropDown {\n    max-height: 0;\n    overflow: hidden;\n}\n\n.header .unitsLinksContainer {\n    -ms-flex-pack: center;\n        justify-content: center;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n/* prueba menu */\n\n@-webkit-keyframes rotateRight\n/* Safari and Chrome */\n\n    {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes rotateRight\n/* Safari and Chrome */\n\n    {\n    0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n}\n\n@-webkit-keyframes rotateLeft\n/* Safari and Chrome */\n\n    {\n    0% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n    100% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n}\n\n@keyframes rotateLeft\n/* Safari and Chrome */\n\n    {\n    0% {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg);\n    }\n    100% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n    }\n}\n\n@-webkit-keyframes hideWithOpacity\n/* Safari and Chrome */\n\n    {\n    0% {\n        display: block;\n        opacity: 1;\n    }\n    1% {\n        display: block;\n        opacity: 1;\n    }\n    100% {\n        display: none;\n        opacity: 0;\n    }\n}\n\n@keyframes hideWithOpacity\n/* Safari and Chrome */\n\n    {\n    0% {\n        display: block;\n        opacity: 1;\n    }\n    1% {\n        display: block;\n        opacity: 1;\n    }\n    100% {\n        display: none;\n        opacity: 0;\n    }\n}\n\n@-webkit-keyframes showWithOpacity\n/* Safari and Chrome */\n\n    {\n    0% {\n        display: none;\n        opacity: 0;\n    }\n    1% {\n        display: block;\n        opacity: 0;\n    }\n    100% {\n        display: block;\n        opacity: 1;\n    }\n}\n\n@keyframes showWithOpacity\n/* Safari and Chrome */\n\n    {\n    0% {\n        display: none;\n        opacity: 0;\n    }\n    1% {\n        display: block;\n        opacity: 0;\n    }\n    100% {\n        display: block;\n        opacity: 1;\n    }\n}\n\n@media screen and (min-width: 1920px) {\n    .headerBackground {\n        background-color: #000;\n        background-image: url(\"https://drive.google.com/uc?id=1ESdaoVQJ9AKf1Ofit28d9Aomu9bhIv39\");\n        background-size: 100% 100%;\n    }\n}\n\n@media screen and (min-width: 1024px) {\n .UnitsMain {\n        margin-top: 90px;\n    }\n}\n\n@media screen and (min-width: 769px) {\n    .Header {\n        font-size: 1.2em;\n    }\n    .header {\n        height: 90px;\n    }\n    .headerBackground {\n        background-color: #000;\n        background-image: url(\"https://drive.google.com/uc?id=1lTNYWzHjwAZKPeiIJLt7Nlpr4DYXxK7p\");\n        background-size: 100% 100%;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    #units {\n        display: block;\n    }\n    .headerDropDown, .menu a, .headerDropDownMenu {\n        -webkit-transform: translateZ(0);\n        -webkit-transition: all 0.3s;\n        -o-transition: all 0.3s;\n        transition: all 0.3s;\n    }\n    .headerDropDown a {\n        min-width: 90px;\n        display: block;\n    }\n    .headerActivateMenu:checked~.headerDropDown {\n        max-height: 280px\n    }\n    .header .unitsDetails {\n        height: auto;\n    }\n    .header .unitsDetails a {\n        padding: 0.5em;\n        height: auto;\n        margin: 0;\n    }\n    .header .unitsLinksContainer {\n        -ms-flex-pack: center;\n            justify-content: center;\n        display: initial;\n    }\n    .header .unitLink {\n        width: 30%;\n        margin: 0 auto;\n        border-bottom: 1px solid;\n        padding: 0;\n        height: auto;\n    }\n    Header a {\n        display: block;\n    }\n    /* fin prueba */\n    .header .cover {\n        display: none;\n    }\n    #cbxMenu:checked~.modules {\n        -webkit-transform: translateY(0%);\n            -ms-transform: translateY(0%);\n                transform: translateY(0%);\n    }\n    .header .container {\n        -ms-flex-align: unset;\n            align-items: unset;\n    }\n    .header {\n        padding-top: 9px;\n    }\n    .header .logoMenu {\n        display: initial;\n    }\n    .header .borderMenuNone {\n        border: none !important;\n    }\n    .header .borderMenuTop {\n        border-top: 1px solid white;\n    }\n    .header .borderMenuBottom {\n        border-bottom: 1px solid white;\n    }\n    .header .textMenu {\n        text-decoration: none;\n        width: 65%;\n        margin: 0 auto;\n        padding-top: 1em;\n        padding-bottom: 1em;\n    }\n    .Header ul {\n        display: inline;\n        padding: 0;\n        margin: 0;\n        width: 100%;\n    }\n    .header .unitsIcon {\n        display: initial;\n    }\n    .header .unitsDetails {\n        position: initial;\n        padding: 0;\n    }\n    .headerBackground {\n        background-color: #000;\n        background-image: url(\"https://drive.google.com/uc?id=1-z3gfXSoJzD04oq6IvF--Qg293sUEjsV\");\n        background-size: 100% 100%;\n        background-position: right;\n        height: 65px;\n    }\n    .header .modules {\n        margin-top: -7px;\n        width: 100%;\n        -webkit-transform: translateY(-130%);\n            -ms-transform: translateY(-130%);\n                transform: translateY(-130%);\n        -webkit-transition: all 0.5s;\n        -o-transition: all 0.5s;\n        transition: all 0.5s;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-align: start;\n            align-items: flex-start;\n        -ms-flex-pack: center;\n            justify-content: center;\n        z-index: -1;\n        /* height: 100vh;\n        background-size: 100% auto;\n        background-image: url(https://drive.google.com/uc?id=18OyGE8vdaPiiecozBXN4VcDVfc3GsL29); */\n        /* background-image: url(https://drive.google.com/uc?id=1K6DpadTV4yGYH_Hfo-rKqduMtsqNwByP); */\n        background: url(https://drive.google.com/uc?id=1K6DpadTV4yGYH_Hfo-rKqduMtsqNwByP) right top no-repeat, url(https://drive.google.com/uc?id=1OdEPLYG6d18NIvc8LN7AxOkj-V8_BhD1) left top no-repeat, black;\n    }\n    .header .modules a {\n        text-decoration: none;\n    }\n    .header .modules li {\n        margin-right: 0;\n    }\n    .header .modulesElements li {\n        width: 30%;\n        margin: 0 auto;\n        border-bottom: 1px solid;\n        padding: 0.5em;\n    }\n    .header .modulesElements a {\n        text-decoration: none;\n    }\n    .header .logoContainer {\n        margin: 0 10px 6px;\n    }\n    .header .logoContainer p {\n        white-space: nowrap;\n    }\n    .header .logoHeader {\n        width: 90px;\n    }\n    .header .menuIcon {\n        display: initial;\n    }\n    .header .menuBorder {\n        margin: 0 17px 6px 0;\n        width: 50px;\n    }\n    .header .barrasContainer {\n        margin: 15px 36px;\n        z-index: 1;\n        right: 0;\n        width: 13px;\n    }\n}\n\n@media screen and (max-width: 740px) {\n    .headerBackground {\n        background-color: #000;\n        background-image: url(\"https://drive.google.com/uc?id=1-z3gfXSoJzD04oq6IvF--Qg293sUEjsV\");\n        background-size: auto 100%;\n        background-position: right;\n        height: 65px;\n    }\n}\n\n@media screen and (max-width: 576px) {\n    .header .logoContainer {\n        margin: 0 10px 0px;\n    }\n    .header .logoHeader {\n        width: 80px;\n        margin-top: -10px;\n    }\n    .header .menuBorder {\n        margin: 0 14px 6px 0;\n        width: 45px;\n    }\n    .header .barrasContainer {\n        margin: 11px 31px;\n        z-index: 1;\n        right: 0;\n        width: 11px;\n    }\n    .header .headerBackground {\n        height: 56px;\n    }\n    .header .modules {\n        background: url(https://drive.google.com/uc?id=1H5iuBCkQnummwj9JTYEbOOEDEUEDIAb6) right top no-repeat, url(https://drive.google.com/uc?id=1V8xtObhvpQSna7gFv0uI8su8Ik1mO6cM) left top no-repeat, black;\n    }\n}\n\n@media screen and (max-width: 470px) {\n    .header .modules {\n        background: url(https://drive.google.com/uc?id=1DQnURTfubMBQ9XOoWIE2G6rprvTBwENe) right top no-repeat, url(https://drive.google.com/uc?id=1fkxfGd8g6DDFDSHIYIyVF86IGG6ngdXl) left top no-repeat, black;\n    }\n}", ""]);



/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "/* Styles for the Footer component*/\n@font-face {\n  font-family: 'Bebas Neue';\n  src: url('/fonts/BebasNeue/BebasNeue.otf');\n}\n\n@font-face {\n  font-family: 'Raleway Thin';\n  src: url('/fonts/Raleway/Raleway-Thin.ttf');\n}\n\n.footer-container {\n  -ms-flex: none;\n      flex: none;\n}\n\n.text1{\n  font-family: 'Bebas Neue';\n  font-size: 1em;\n  margin: 0.5em;\n  letter-spacing: 3px;\n}\n\n.text2{\n  font-family: 'Raleway Thin';\n  color: white;\n  text-decoration: none;\n  font-size: 0.7em;\n  margin: 0 auto;\n}\n\n.footer {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n.footer-back {\n  width: 100%;\n}\n\n.fa-2x{\n  padding-right: 5%;\n}\n\n.footer-grid-container {\n  display: grid;\n  color: white;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;  \n  width: 100%;\n  height: 100%;\n  font-size: 13px;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-areas: \"logo filler filler filler\"\n                      \"logo emailme emailme emailme\"\n                      \"logo callme callme callme\"\n                      \"logo closing closing .\";\n}\n\n.footer-grid-container .logo {\n  grid-area: logo;\n  margin: auto;\n}\n\n.filler {\n  grid-area: filler;\n  margin: auto;\n  height: 32px;\n}\n\n.emailme {\n  grid-area: emailme;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n}\n\n.callme {\n  grid-area: callme;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n}\n\n.closing {\n  grid-area: closing;\n  display: block;\n}\n\n.privacy {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\n@media screen and (min-width: 320px) {\n  .footer-back-small {\n    display: initial;\n  }\n  .footer-back-medium {\n    display: none;\n  }\n  .footer-back-big {\n    display: none;\n  }\n  .footer-back-large {\n    display: none;\n  }\n  .filler {\n    height: 16px;\n  }\n  .text1 {\n    letter-spacing: 2px;\n  }\n}\n\n@media screen and (min-width: 576px) {\n  .footer-back-small {\n    display: none;\n  }\n  .footer-back-medium {\n    display: initial;\n  }\n  .footer-back-big {\n    display: none;\n  }\n  .footer-back-large {\n    display: none;\n  }\n  .footer-grid-container {\n    font-size: 25px;\n  }\n  .text1 {\n    letter-spacing: 3px;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .footer-grid-container {\n    font-size: 31px;\n    padding: 0 2%;\n  }\n  .filler {\n    padding: 2% 0;\n  }\n  .footer-back-small {\n    display: none;\n  }\n  .footer-back-medium {\n    display: none;\n  }\n  .footer-back-big {\n    display: initial;\n  }\n  .footer-back-large {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 1280px) {\n  .footer-back-small {\n    display: none;\n  }\n  .footer-back-medium {\n    display: none;\n  }\n  .footer-back-big {\n    display: none;\n  }\n  .footer-back-large {\n    display: initial;\n  }\n  .footer-grid-container {\n    padding: 0 10%;\n  }\n  .filler {\n    padding: 0;\n  }\n  .text1 {\n    margin: 0.5em;\n  }\n  .logo {\n    margin: 0;\n  }\n  .fa-2x{\n    padding-right: 0%;\n  }\n}\n\n", ""]);



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".icon-container {\n  margin: auto 0;\n  padding: 0 0.5em;\n}\n\n@media screen and (min-width: 320px) {\n  .footer-icon-small {\n    display: initial;\n  }\n  .footer-icon-medium {\n    display: none;\n  }\n  .footer-icon-big {\n    display: none;\n  }\n  .footer-icon-large {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 576px) {\n  .footer-icon-small {\n    display: none;\n  }\n  .footer-icon-medium {\n    display: initial;\n  }\n  .footer-icon-big {\n    display: none;\n  }\n  .footer-icon-large {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .footer-icon-small {\n    display: none;\n  }\n  .footer-icon-medium {\n    display: none;\n  }\n  .footer-icon-big {\n    display: initial;\n  }\n  .footer-icon-large {\n    display: none;\n  }\n  .footer-icon {\n    width: 100%;\n  }\n}\n\n@media screen and (min-width: 1280px) {\n  .footer-icon-small {\n    display: none;\n  }\n  .footer-icon-medium {\n    display: none;\n  }\n  .footer-icon-big {\n    display: none;\n  }\n  .footer-icon-large {\n    display: initial;\n  }\n}\n\n\n", ""]);



/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "/* Styles for the App component*/\n.App {\n  text-align: center;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-height: 100vh;\n}\n\n.UnitsMain {\n  min-height: 100vh;\n  -ms-flex: 1 1;\n      flex: 1 1;\n}\n\n", ""]);



/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("i18next-xhr-backend");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),
/* 63 */
/***/ (function(module) {

module.exports = {"about":{"description":"We are a leading company in the creation of ideas with the technological development that is transformed in a positive way the environment in which we live as the projects of our clients through the planes of the technological development that involves custom software, video games / gamification, research and simulations as our main tools to provide quality to our products and services.","phil":{"title":"PHILOSOPHY","phrase":"\"The butterfly flutter can generate a tornado on the other side of the world\"","explain":"As in the theory of chaos and the example of the butterfly, we understand the importance of small changes that generate currents of global character, in a constant cycle of evolution and improvement, learning every day to create real changes that improve the world where we all live."},"heroesTitle":"OUR HEROES"},"contact":{"emailPlaceholder":"Your@email.com","subjectPlaceholder":"subject...","msgPlaceholder":"...what you want to tell us"},"heroes":{"andreaRamirez":"CMO Ashara Studios / Front-end Developer","andresRodriguez":"CEO Ashara Studios","carlosBecerra":"Video Game Developer","diegoMena":"Commercial Director / IoT Developer","diegoTabares":"Anatomist / Plastic Artist","estebanMartinez":"Graphic Designer / Illustrator / 3D Modeler ","juanJauregui":"CSO Ashara Studios / Musician ","leonardoCucaita":"Graphic Designer / Animator / 3D Modeler","sandraCastro":"CCO Ashara Studios / Audiovisual Producer / Content Producer / Screenwriter","andresCabrera":"CFO Ashara Studios","camiloTorres":"CGO Ashara Games","danielFlorez":"Research","diegoGuerra":"Full Stack Developer","erickGarzon":"IoT Developer","felipeMontoya":"CLO Ashara Studios","fredyRodriguez":"Video Game / Front End Developer","miguelRamirez":"CTO Ashara Studios","nataliaBarbosa":"IoT Developer","sebastianOrozco":"Front End Developer","sebastianTabares":"CTO Ashara IoT","alexBustos":"CIoT Ashara IoT","rodrigoAlvarez":"Animator / Illustrator","carlosAcosta":"CRO Ashara Science","maribelLopez":"Graphic Designer / Illustrator","miguelBuitrago":"CTO Ashara Science","juanPabloMoreno":"Full Stack / Video Game Developer"},"home":{"slogan":"Transcending the present<1 />to create the future","description":"We are a company dedicated to the creation of disruptive ideas, with the aim of providing technological solutions to our clients and their organizations, through services that improve their business models from different approaches such as software, science, video games, internet of things , education and marketing.","redesMsg":"Each project is a new opportunity to learn, grow and continue to advance step by step, to reach our goal of impacting the world in a positive way."},"misc":{"aboutUs":"About Us","alphaDownload":"Download the Alpha!!","comingSoon":"Coming Soon!!","contactUs":"Contact Us","copy":"Copyright © Ashara Studios 2019","email":"E-Mail","followus":"Follow Us","message":"Message","policies":"Privacy policies","send":"Send","subject":"Subject","units":"Units"},"unit":{"animProgs":"Animation Programs","clients":"Our clients","completed":"Completed","devEngines":"Developer Engines","events":"Events","illustration":"Ilustration","ongoing":"On Going","portfolio":"Portfolio","projects":"Projects","publishers":"Publishers","services":"Services","socialNetworksCall":"Follow us ...","techs":"Technologies<1 />that we use"},"units":{"energy":{"call2action":"","description":"Unit dedicated to provide energy services as suppliers and marketers of green energy, seeking the highest cost efficiency through the use of clean energy for our customers and consulting services to transform the way we consume it and make it friendly with the environment.","service":{"calculoCompensaciones":{"title":"CONSULTING ON COMPENSATION CALCULATION","desc":"Follow-up to the compensations that the user is entitled to through the resolution CREG 067/2010, comparing the calculation of compensations of Ashara Energy with the marketing provider of the service."},"eficienciaEnergetica":{"title":"ENERGY EFFICIENCY ADVISORY","desc":"We propose energy consumption strategies according to the opportunities presented by the market."},"cumplimientoCreg38_2014":{"title":"COMPLIANCE WITH THE CODE OF MEASURE CREG 038 OF 2014 CONSULTANCY","desc":"Process by which a claim is requested to the marketing provider of the service through two decrees issued by the Ministry of Finance and Public Credit; 2860 of December 9, 2013 customers whose main economic activity is registered in the RUT in codes 011 to 360, 581 and 411 to 439 can receive the benefit to the contribution in electrical energy."},"proyectosEolicosSolares":{"title":"WIND AND SOLAR PROJECTS ADVISORY","desc":"The hourly consumption curve compared with the solar potential in the place of installation is taken as a basis to determine the size of the wind or solar system that allows the client to reduce part of their consumption of the conventional network to consume clean and free energy in the period of generation of the plant."},"contratacionEnergia":{"title":"CONTRACT FOR THE SUPPLY OF ELECTRICAL ENERGY ADVISORY","desc":""},"exencionContribucion":{"title":"EXEMPTION FROM CONTRIBUTION","desc":""}}},"games":{"call2action":"Come and live a great adventure","description":"Unit dedicated to the design and development of multiplatform videogames.","events":{"sofa2017":{"sub":"Pre-Alpha of Exorcist","desc":"Exhibitors in the Third Version of Made With Unity Colombia in SOFA 2017."},"unityDevD":{"desc":"Exhibitors at Unity Developer Day Colombia - 2017."}},"portfolio":{"exorcist":"Exorcist is a mobile game where the player takes the role of an exorcist and fights against creatures of the underworld to exorcise them and record them in their shadow book. By drawing glyphs, patterns that are made by connecting several points, it is possible to attack the creatures that the exorcist finds","infection":"Bullet-hell where we must face all the bacteria and viruses inside our body","sc":"Spin-off de Exorcist. El jugador debe luchar y dominar lujuriosas chicas para poder escapar del segundo círculo del infierno"},"publishers":{"superhippo":"Leader in the freemium industry of videogames. Superhippo has worked to establish itself in the market as a successful publisher, with more than 40 titles available in different distribution channels."},"service":{"vg_devel":{"title":"VIDEO GAMES DEVELOPMENT","desc":"Videogames Development built transdisciplinary, looking to impact in a playful, educational and artistic way, covering both desktop and mobile platforms."},"vg_design":{"title":"VIDEO GAMES DESIGN","desc":"We design custom-made video games according to the requirements and the approach that you want to give, which can be oriented from marketing to loyalty processes."},"concept_art":{"title":"CONCEPTUAL ART","desc":"We make wonderful concept art, focused on scenarios or interactions of the different components within a game."},"2Danimation":{"title":"2D ANIMATION","desc":"Our animation team handles specialized tools for 2D animation that allows to achieve the highest quality from frame to frame animation to deformations to achieve great realism."},"uiux_design":{"title":"UI / UX DESIGN","desc":"We design the best user experience accompanied by a fundamental aesthetic to generate re-gameplay and retention in any type of video game."},"trainings":{"title":"TRAINING","desc":"We train in all aspects of videogame development."}}},"iot":{"call2action":"Connecting your world","description":"Unit responsible for designing, developing and implementing software and hardware that solve problems using automations and devices that connect to the Internet for the purpose of remotely monitoring and controlling situations or performing any specific remote action from anywhere in the world or within an area of coverage.","events":{"ane2018":{"title":"VIII INTERNATIONAL CONGRESS OF THE SPECTRUM","sub":"Assistants and Reviewers","desc":"Constantly contributing to the project of regulatory simplification of the regulation of the spectrum in free band."},"angelhack":{"title":"AngelHack Bogotá 2018","sub":"Awarded by Hurify e IBM","desc":"IoT for the interaction of people"},"hackRRR":{"title":"HACKATHON: Reinventa, Realiza y Respira","sub":"First Place","desc":"IoT for air quality monitoring"},"ibm":{"title":"Selection of StartUps by IBM","sub":"Winners of services in the cloud","desc":"Computational Power in the Cloud for the IoT"}},"portfolio":{"nympha":"Agricultural technology LED lighting."},"service":{"solsElectronicas":{"title":"ELECTRONIC SOLUTIONS","desc":"Advice, design and implementation of electronic projects, efficient and robust. Some of its areas: telematics, telecommunications, telemetry, control, industrial instrumentation and power electronics, among others."},"solsIoT":{"title":"IOT SOLUTIONS","desc":"We connect your devices to the Internet, bringing the Internet of Things (IoT) closer to your solution. We have experience in various communication technologies. We advise you on the technology appropriate to your IoT needs."}}},"media":{"call2action":"Show your best face","description":"Unit dedicated to the design, and implementation of communication strategies, mass media and merchandising; We develop projects that fit the needs of our customers.","events":{"meetUp":{"sub":"First Meet-up","desc":"Development of videogames: where do I start?"}},"portfolio":{"zonavj":"Video Game Developers Community"},"service":{"campsMarketing":{"title":"MARKETING CAMPAINGS","desc":"We design marketing campaigns specialized in generating high impact according to your project from social initiatives to entertainment in video games from start to finish."},"edicionVideo":{"title":"AUDIOVISUAL PRODUCTION","desc":"From the script, through the stages of pre-production and ending in the post-production of high-quality videos, we build the essential product to show your idea with the best quality."},"fotografia":{"title":"PHOTOGRAPHY","desc":"Professional photography that adjusts to the needs of your products and services, in this way show it with the best quality."}}},"school":{"call2action":"Feed your mind","description":"Unit dedicated to transdisciplinary teaching through effective education through courses and community strengthening.","events":{"gameAudioTalks":{"title":"Let's talk about Game Audio","sub":"Weekly streaming","desc":"Podcast to talk about the audio game."}},"portfolio":{"cursoProdMus":{"title":"Musical production","desc":"Introductory course on videogame-oriented music production."}},"service":{"cursos":{"title":"COURSES","desc":"We teach courses in any of the areas that we handle in a professional manner; video games, software development, science, internet of things, marketing and communications, among others."}}},"science":{"call2action":"Discover the complexity of the universe","description":"Unit dedicated to the investigation, simulation and prototyping of complex environments, using tools of analysis and obtaining of information such as data mining, analysis of raster data, metaheuristics; In addition to training and scientific dissemination.","events":{"meetup":{"sub":"First Meetup","desc":"Fractals, Chaos, Complexity everywhere"},"hackamericas":{"sub":"TOP 5","desc":"Hackathon of Mobility and Air Quality"}},"portfolio":{"satyrium":"Project to monitor, simulate and improve air quality"},"service":{"investigacion":{"title":"SCIENTIFIC INVESTIGATION","desc":"Our scientific unit seeks to build technology-based and organizational products to solve real problems that are subject to multiple disciplines based on the tools of the complexity sciences."},"simulaciones":{"title":"SIMULATIONS","desc":"We perform simulations of complex environments where they interact from biological, social, psychological components and whatever is necessary to help decision making in real time."},"datasets":{"title":"DATA-SETS","desc":"We build and offer customized data sets using data-science tools to obtain any type of requested information."},"divulgacion":{"title":"SCIENTIFIC DISCLOSURE","desc":"As a dedicated and specialized unit in the complexity sciences, we love to share our knowledge to any kind of person as a very important entry portal in the construction of great ideas."}}},"soft":{"call2action":"We build your ideas","description":"Unit dedicated to the design, development, implementation and deployment of technological platforms such as web pages, web platforms, desktop applications, mobile applications, applications in Unity for 3D projects and gamification.","events":{"i6k_bogota":{"sub":"Bogotá Circuit","desc":"Best innovators from Bogotá."},"i6k_colombia":{"sub":"Colombia Circuit","desc":"Top 8 innovators of Colombia."},"nequi":{"sub":"Game+Code","desc":"Selected to propose gamification within the Nequi platform"}},"portfolio":{"completed":{"arc":"Website and Administrative Platform of ARC Lawyers","ashara":"Ashara Studios Website","complexud":" ComplexUD Website ","globalplate":"Global Palate Website","hsabogal":"Horti Sabogal Website"},"ongoing":{"actis":"Suit of Software services for public and private entities","chainomy":"Social Network to support collaborative economies."}},"service":{"pagWeb":{"title":"WEBSITES","desc":"Development of pages oriented to marketing processes, custom built hand-in-hand with our clients looking for the easiest and simplest administration for their contents. Every detail has its right care, so our products have SEO applied and a friendly design."},"platWeb":{"title":"WEB PLATFORMS","desc":"Specialized services that seek accessibility, automation, optimization, growth and scalability of your business model, focused on increasing your productivity and positioning of your company in the global field, supported by all the benefits offered by the latest advances in technology."},"platMoviles":{"title":"MOBILE PLATFORMS","desc":"We turn your business idea in a real product, with our engineering advice we introduce your product in the most important mobile application stores: Play Store and App Store. Using the principles of design, pioneers in the aesthetics and usability of mobile applications you will receive a product that fits your needs."},"platMultimedia":{"title":"MULTIMEDIA PLATFORMS","desc":"We create platforms that interact in multiple ways with the environment using connections between different experiences such as 2D or 3D environments, and hardware through the internet of things."},"gamificacion":{"title":"GAMIFICATION","desc":"We build platforms focused on the rewards, generating loyalty and use processes in any device, from the gamification of your web or mobile platform it can scale to a next level in terms of fun and usability."},"ingRequerimientos":{"title":"ENGINEERING REQUIREMENTS","desc":"We use our knowledge to characterize and quantify what your business needs accompanied by models, functional and non-functional specifications. In addition to the prioritization criteria that you must take into account to carry out your project."}}}}};

/***/ }),
/* 64 */
/***/ (function(module) {

module.exports = {"about":{"description":"Somos una compañía líder en la creación de ideas con desarrollo tecnológico que transforman de una manera positiva tanto el entorno en el que vivimos como los proyectos de nuestros clientes a través de planes de desarrollo tecnológico que involucran software a medida, vídeo juegos/gamificación, investigación y simulaciones como nuestras principales herramientas para brindar calidad a nuestros productos y servicios.","phil":{"title":"FILOSOFÍA","phrase":"\"El aleteo de una mariposa puede generar un tornado al otro lado del mundo\"","explain":"Como en la teoría del caos y el ejemplo de la mariposa, nosotros entendemos la sensibilidad a los pequeños cambios para generar corrientes de carácter global, en un ciclo constante de evolución y mejoramiento, aprendiendo día a día para crear cambios reales que mejoren el mundo donde todos nosotros vivimos."},"heroesTitle":"NUESTROS HEROES"},"contact":{"emailPlaceholder":"tu@correo.com","subjectPlaceholder":"resume...","msgPlaceholder":"...lo que nos quieras decir"},"heroes":{"andreaRamirez":"Directora de Marketing / Community Manager / Front-end Developer ","andresRodriguez":"Director Ejecutivo / Scrum Master / Back-end Developer ","carlosBecerra":" Video Game Developer / Unity Developer ","diegoMena":"Director Comercial / IoT Developer ","diegoTabares":"Anatomista / Artista Plástico","estebanMartinez":"Diseñador Gráfico / Ilustrador / Modelador 3D","juanJauregui":"Director de Ashara School / Músico","leonardoCucaita":"Diseñador Gráfico / Animador / Modelador 3D","sandraCastro":"Directora de Comunicaciones / Productora Audiovisual / Advocacy","andresCabrera":"Director Financiero","camiloTorres":"Director de Ashara Games / Líder Diseñador de Juegos ","danielFlorez":"Analista de Datos / Investigador","diegoGuerra":" Full Stack Developer","erickGarzon":"Desarrollador de Sistemas y Dispositivos Electrónicos / Analista de Seguridad","felipeMontoya":"Director Legal / Asesor Comercial / Scrum Master","fredyRodriguez":" Video Game Developer / Front-end Developer ","miguelRamirez":"Director de Tecnologías","nataliaBarbosa":" IoT Developer ","sebastianOrozco":"Front-end Developer ","sebastianTabares":"Director de Tecnologías Ashara IoT / IoT Developer / Full Stack Developer ","alexBustos":"Director de Ashara IoT / Director de Proyectos Electrónicos / IOT Developer","rodrigoAlvarez":"Animador / Ilustrador","carlosAcosta":"Director de Ashara Science / Arquitecto / Modelador 3D","maribelLopez":"Diseñadora Gráfica / Ilustradora / Artista de Concepto","miguelBuitrago":" Full Stack Developer /Unity Developer / Investigador","juanPabloMoreno":" Video Game Developer / Full Stack Developer / Administrador de Bases de Datos (DBA)"},"home":{"slogan":"Trascendiendo el presente<1/>para crear el futuro","description":"Somos una compañía dedicada a la creación de ideas disruptivas, con el objetivo de brindar soluciones tecnológicas a nuestros clientes y sus organizaciones, a través de servicios que mejoran sus modelos de negocio desde diferentes enfoques como software, ciencia, vídeo juegos, internet de las cosas, educación y marketing.","redesMsg":"Vemos cada proyecto como una nueva oportunidad de aprender, crecer y continuar avanzando paso a paso, para alcanzar nuestro objetivo de impactar el mundo de una manera positiva."},"misc":{"aboutUs":"Nosotros","alphaDownload":"¡¡Descarga el Alfa!!","comingSoon":"¡¡Próximamente!!","contactUs":"Contáctenos","copy":"Copyright © Ashara Studios 2019","email":"Correo Electrónico","followus":"Síguenos en","message":"Mensaje","policies":"Políticas de Privacidad","send":"Enviar","subject":"Asunto","units":"Unidades"},"unit":{"clients":"Nuestros Clientes","completed":"Realizados","events":"Eventos","ongoing":"En Marcha","portfolio":"Portafolio","projects":"Proyectos","publishers":"Publicadores","services":"Servicios","socialNetworksCall":"Síganos en ...","techs":"Tecnologías<1/>que usamos"},"units":{"energy":{"call2action":"","description":"Unidad dedicada a prestar servicios entorno a la energía siendo proveedores y comercializadores de energías verdes, buscando la mayor eficiencia en costos para nuestros clientes a través del uso de energías limpias y servicios de consultoría para transformar la forma en que la consumimos y hacerla amigable con el medio ambiente. ","service":{"calculoCompensaciones":{"title":"CONSULTORÍA CÁLCULO DE COMPENSACIONES","desc":"Seguimiento a las compensaciones que tiene derecho el usuario por resolución CREG 067/2010, comparando el cálculo de compensaciones de Ashara Energy con el comercializador prestador del servicio."},"eficienciaEnergetica":{"title":"ASESORÍA EFICIENCIA ENERGÉTICA","desc":"Proponemos estrategias de consumo de energía de acuerdo con las oportunidades que presenta el mercado."},"cumplimientoCreg38_2014":{"title":"ASESORÍA PARA CUMPLIMIENTO DE CÓDIGO DE MEDIDA CREG 038 DE 2014","desc":"Proceso por el cual se solicita una reclamación al comercializador prestador del servicio a través de dos decretos otorgados por el Ministerio de Hacienda y Crédito Público; el 2860 del 9 de diciembre de 2013 los clientes cuya actividad económica principal esté registrada en el RUT en los códigos 011 a 360, 581 y 411 a 439 pueden recibir el beneficio a la contribución en energía eléctrica."},"proyectosEolicosSolares":{"title":"ASESORÍA PROYECTOS EÓLICOS Y SOLARES","desc":"Se toma como base la curva de consumo horaria comparada con el potencial solar en el lugar de la instalación para determinar el tamaño del sistema eólico o solar que permita al cliente reducir parte de su consumo de la red convencional para consumir energía limpia y gratuita en el periodo de generación de la planta."},"contratacionEnergia":{"title":"ASESORÍA CONTRATACIÓN SUMINISTRO ENERGÍA ELÉCTRICA","desc":""},"exencionContribucion":{"title":"EXENCIÓN DE CONTRIBUCIÓN","desc":""}}},"games":{"call2action":"Ven a vivir una gran aventura","description":"Unidad dedicada al diseño y desarrollo de videojuegos para móviles y pc; además realiza capacitaciones de diseño y desarrollo de videojuegos.","technologies":{"ilustration":"Ilustración","animation":"Programas de Animación","development":"Motores de Desarrollo"},"events":{"sofa2017":{"sub":"Pre-Alfa de Exorcist","desc":"Expositores en la Tercer Versión del Made With Unity Colombia en SOFA 2017."},"unityDevD":{"desc":"Expositores en el Unity Developer Day Colombia."}},"portfolio":{"exorcist":"Exorcist es un juego para móvil, donde el jugador toma el rol de un exorcista, el cual lucha contra criaturas del inframundo para exorcizarlas y poder grabarlas en su libro de sombras. Por medio de una mecánica de dibujar glifos, patrones que se hacen al conectar varios puntos, es posible atacar a las criaturas que el exorcista encuentra","infection":"Bullet-hell donde deberemos enfrentarnos a todas las bacterias y virus dentro de nuestro cuerpo","sc":"Spin-off de Exorcist. El jugador debe luchar y dominar lujuriosas chicas para poder escapar del segundo círculo del infierno"},"publishers":{"superhippo":"Líder en la industria freemium de los videojuegos. Superhippo ha trabajado para establecerse en el mercado como un publicador exitoso, con más de 40 títulos disponibles en diferentes canales de distribución."},"service":{"vg_devel":{"title":"DESARROLLO DE VIDEOJUEGOS","desc":"Desarrollo de videojuegos construidos de manera transdisciplinar buscando impactar de manera lúdica, educativa y artística cubriendo plataformas tanto de escritorio como móviles."},"vg_design":{"title":"DISEÑO DE VIDEOJUEGOS","desc":"Realizamos diseño de videojuegos a medida de acuerdo a los requerimientos y el enfoque que se quiera dar, el cual puede estar orientado desde el marketing hasta procesos de fidelización."},"concept_art":{"title":"ARTE CONCEPTUAL","desc":"Hacemos maravillosos concept art enfocados a escenarios o interacciones de los diferentes componentes dentro de un juego."},"2Danimation":{"title":"ANIMACIÓN 2D","desc":"Nuestro equipo de animación maneja herramientas especializadas para la animación 2D que permite lograr la mayor calidad, desde animación frame to frame hasta deformaciones para alcanzar gran realismo."},"uiux_design":{"title":"DISEÑO UI/UX","desc":"Diseñamos la mejor experiencia de usuario acompañada de una estética fundamental para generar re-jugabilidad y retención en cualquier tipo de videojuego."},"trainings":{"title":"CAPACITACIONES","desc":"Capacitamos en todos los aspectos de desarrollo en videojuegos."}}},"iot":{"call2action":"Conectamos tu mundo","description":"Unidad de Ashara Studios encargada de diseñar, desarrollar e implementar software y hardware para solucionar problemas empleando automatismos y dispositivos que se conectan a internet con el propósito de monitorear y controlar remotamente situaciones o bien realizar alguna acción remota en específico desde cualquier parte del mundo o dentro de una zona de cobertura.","technologies":{"comunication":"Comunicación","design":"Diseño","platforms":"Plataformas","protocols":"Protocolos"},"events":{"ane2018":{"title":"VIII CONGRESO INTERNACIONAL DEL ESPECTRO","sub":"Asistentes y Revisores","desc":"Aportando continuamente al proyecto de simplificación normativa de la regulación del espectro en banda libre"},"angelhack":{"title":"AngelHack Bogotá 2018","sub":"Premiados por Hurify e IBM","desc":"IoT para la interacción de personas"},"hackRRR":{"title":"HACKATHON: Reinventa, Realiza y Respira","sub":"Primer Lugar","desc":"IoT para el monitoreo de calidad del aire"},"ibm":{"title":"Selección de StartUps de IBM","sub":"Ganadores de servicios en la nube","desc":"Poder Computacional en la Nube para el IoT"}},"portfolio":{"nympha":"Tecnología agrícola de iluminación LED."},"service":{"solsElectronicas":{"title":"SOLUCIONES ELECTRÓNICAS","desc":"Asesoramiento, diseño e implementación de proyectos electrónicos, eficientes y robustos. Algunas de sus áreas: telemática, telecomunicaciones, telemetría, control, instrumentación industrial y electrónica de potencia, entre otras."},"solsIoT":{"title":"SOLUCIONES IOT","desc":"Conectamos sus dispositivos a Internet, acercando el Internet de las Cosas (IoT, Internet of Things) a su solución. Tenemos experiencia en diversas tecnologías de comunicaciones. Le asesoramos en la tecnología adecuada a sus necesidades de IoT."}}},"media":{"call2action":"Muestra tu mejor cara","description":"Unidad dedicada al diseño, e implementación de estrategias de comunicación, mass media y merchandising; desarrollamos proyectos que se ajustan a las necesidades de nuestros clientes.","events":{"meetUp":{"sub":"Primer Meet-up","desc":"Desarrollo de videojuegos: ¿por dónde comienzo?"}},"portfolio":{"zonavj":"Comunidad de desarrolladores de videojuegos"},"service":{"campsMarketing":{"title":"CAMPAÑAS DE MARKETING","desc":"Diseñamos campañas de marketing especializadas en la generación de gran impacto acorde a tu proyecto desde iniciativas sociales hasta entretenimiento en video juegos de principio a fin."},"edicionVideo":{"title":"PRODUCCIÓN AUDIOVISUAL","desc":"Construimos desde el guion, pasando por las etapas de pre-producción y terminando en la post-producción de vídeos de alta calidad, fundamentales para mostrar tu idea con la mejor calidad."},"fotografia":{"title":"FOTOGRAFÍA","desc":"Fotografía profesional que se ajusta a las necesidades de tus productos y servicios, de esta forma mostrar lo con la mejor calidad. "}}},"school":{"call2action":"Alimenta tu mente","description":"Unidad dedicada a la enseñanza transdisciplinar por medio de educación efectiva a través de cursos y fortalecimiento de comunidades.","events":{"gameAudioTalks":{"title":"Hablemos de Game Audio","sub":"Streaming semanal","desc":"Espacio para hablar sobre el Game audio"}},"portfolio":{"cursoProdMus":{"title":"Producción Musical","desc":"Curso de introducción a la producción musical orientado a videojuegos"}},"service":{"cursos":{"title":"Cursos","desc":"Dictamos cursos en cualquiera de los ámbitos que manejamos de manera profesional; video juegos, desarrollo de software, ciencia, internet de las cosas, marketing y comunicaciones, entre otros."}}},"science":{"call2action":"Descubre la complejidad del universo","description":"Unidad dedicada a la investigación, simulación y prototipado de entornos complejos, utilizando herramientas de análisis y obtención de información como minería de datos, análisis de datos ráster, metaheurísticas; además de capacitación y divulgación científica. ","events":{"meetup":{"sub":"Primer Meetup","desc":"Fractales, Caos, Complejidad por todos lados"},"hackamericas":{"sub":"TOP 5","desc":"Hackathon de Movilidad y Calidad del Aire"}},"portfolio":{"satyrium":"Proyecto para monitorizar, simular y mejorar la calidad de aire"},"service":{"investigacion":{"title":"INVESTIGACIÓN CIENTÍFICA","desc":"Nuestra unidad científica busca construir productos de base tecnológica y organizativa para solucionar problemas reales que son objeto de múltiples disciplinas basados en las herramientas de las ciencias de la complejidad."},"simulaciones":{"title":"SIMULACIONES","desc":"Realizamos simulaciones de entornos complejos donde interactúan desde componentes biológicos, sociales, psicológicos y cualquiera que sea necesario, para ayudar a la toma de decisiones en tiempo real."},"datasets":{"title":"DATA-SETS","desc":"Construimos y ofrecemos set de datos a medida, utilizando herramientas de data-science para obtener cualquier tipo de información solicitada."},"divulgacion":{"title":"DIVULGACIÓN CIENTÍFICA","desc":"Como unidad dedicada y especializada en las ciencias de la complejidad, nos encanta compartir nuestro conocimiento a cualquier tipo de persona como un portal de entrada muy importante en la construcción de grandes ideas."}}},"soft":{"call2action":"Construimos tus ideas","description":"Unidad dedicada al diseño, desarrollo, implementación y despliegue de plataformas tecnológicas como páginas web, plataformas web, aplicaciones de escritorio, aplicaciones móviles, aplicaciones en Unity para proyectos 3D y gamificación.","technologies":{"frontend":"FrontEnd","backend":"BackEnd","db":"Base de Datos","dev-ops":"DevOps","ai":"Inteligencia Artificial","cms":"CMS"},"events":{"i6k_bogota":{"sub":"Circuito Bogotá","desc":"Mejores innovadores de Bogotá"},"i6k_colombia":{"sub":"Circuito Colombia","desc":"Top 8 innovadores de Colombia."},"nequi":{"sub":"Game+Code","desc":"Seleccionados para proponer gamificación dentro de la plataforma Nequi"}},"portfolio":{"completed":{"arc":"Sitio Web y Plataforma Administrativa de ARC Abogados","ashara":"Sitio Web de Ashara Studios","complexud":"Sitio Web de ComplexUD","globalplate":"Sitio Web de Global Palate","hsabogal":"Sitio Web de Horti Sabogal"},"ongoing":{"actis":"Suit de servicios de Software para entidades públicas y privadas","chainomy":"Red Social para soportar economías colaborativas"}},"service":{"pagWeb":{"title":"PÁGINAS WEB","desc":"Desarrollo de páginas orientadas a procesos de mercadeo, construidas a medida de mano con nuestros clientes buscando la administración más amigable y sencilla para sus contenidos. Cada detalle tiene su justo cuidado, por ello nuestros productos tienen posicionamiento en buscadores online y cercano a los visitantes."},"platWeb":{"title":"PLATAFORMAS WEB","desc":"Servicios especializados que buscan la accesibilidad, automatización, optimización, crecimiento y escalabilidad de su modelo de negocio, enfocado en aumentar su productividad y posicionamiento de su compañía en el ámbito global, apoyado de todas las bondades que ofrecen los últimos avances de la tecnología."},"platMoviles":{"title":"PLATAFORMAS MÓVILES","desc":"Volvemos tu idea de negocio un producto real, con nuestro asesoramiento en ingeniería introducimos tu producto en las tiendas de aplicaciones móviles más importantes: Play Store y App Store. Utilizando los principios de diseño, pioneros en la estética y usabilidad de aplicaciones móviles recibirás un producto que se ajusta a tus necesidades."},"platMultimedia":{"title":"PLATAFORMAS MULTIMEDIA","desc":"Creamos plataformas que interactúan de múltiples maneras con el entorno utilizando conexiones entre diferentes experiencias como ambientes 3D, 2D y hardware a través de internet de las cosas."},"gamificacion":{"title":"GAMIFICACIÓN","desc":"Construimos plataformas enfocadas a las recompensas, generando procesos de fidelización y uso en cualquier dispositivo, a partir de la gamificación tu plataforma web o móvil puede escalar a un siguiente nivel en términos de diversión y usabilidad."},"ingRequerimientos":{"title":"INGENIERÍA DE REQUERIMIENTOS","desc":"Utilizamos nuestros conocimientos para caracterizar y cuantificar lo que necesita su negocio acompañado de los modelos, las especificaciones funcionales y no funcionales. Además de los criterios de priorización que debe tener en cuenta para llevar su proyecto a cabo."}}}}};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".Unity{\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    margin-bottom: 3%;\n}\n\n.Unity-container{\n    width: 100%;\n    height: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.Unity-logoContainer{\n    width: 100%\n}\n\n.Unity-logo{\n    width: 39%;\n    margin-top: 7%;\n}\n\n.Unity-iconContainer{\n    width: 59%;\n}\n\n.Unity-icon{\n    margin: 6% 0;\n}\n\n@font-face {\n    font-family: \"Raleway SemiBold\";\n    src: url(\"/fonts/Raleway/Raleway-SemiBold.ttf\");\n  }\n\n.Unity p{\n    font-family: \"Raleway SemiBold\";\n    font-size: 15px;\n    margin-bottom: 0;\n    padding: 0 16%;\n}\n\na{\n    text-decoration: none;\n  }\n\n@media screen and (min-width: 576px){\n    .Unity p{\n        font-size: 26px;\n    }\n}\n\n@media screen and (min-width: 768px){\n    .Unity p{\n        font-size: 35px;\n    }\n}\n\n@media screen and (min-width: 1280px){\n    .Unity{\n        margin: 0;\n    }\n\n    .Unity p{\n        font-size: 22px;\n        padding: 0;\n    }\n\n    .Unity-icon {\n        width: 100%;\n        margin: 0;\n    }\n    \n    .Unity-iconContainer{\n        width: 34%;\n        margin: 3% 0;\n    }\n\n    .Unity-logo {\n        width: 100%;\n        margin: 0;\n    }\n\n    .Unity-container{\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n    }\n\n    .Unity-logoContainer{\n        width: 22%;\n    }\n\n}", ""]);



/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".AsharaStudios{\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n    margin-bottom: 3%;\n}\n\n.AsharaStudios-container{\n    width: 100%;\n    height: 100%;\n    margin-top: 5%;\n    margin-bottom: 1%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.AsharaStudios-logo{\n    width: 54%;\n    margin-top: 4%;\n}\n\n.AsharaStudios-logo2 {\n    display: none;\n}\n\n@font-face {\n    font-family: \"Raleway Medium\";\n    src: url(\"/fonts/Raleway/Raleway-Medium.ttf\");\n  }\n\n  @font-face {\n    font-family: \"Bebas Neue\";\n    src: url(\"/fonts/BebasNeue/BebasNeue.otf\");\n  }\n\n.AsharaStudios-title{\n    font-family: \"Bebas Neue\";\n    font-size: 16px;\n    width: 100%;\n}\n\n.AsharaStudios-description {\n    font-family: \"Raleway Medium\";\n    font-size: 12px;\n    margin: 0;\n    padding: 0 9%;\n    margin-bottom: 4%;\n}\n\n@media screen and (min-width: 576px){\n    .AsharaStudios-title{\n        font-size: 29px;\n    }\n\n    .AsharaStudios-description{\n        font-size: 21px;\n        width: 576px;\n    }\n}\n\n@media screen and (min-width: 768px){\n    .AsharaStudios-title{\n        font-size: 38px;\n    }\n\n    .AsharaStudios-description{\n        font-size: 29px;\n        width: 768px;\n    }\n}\n\n@media screen and (min-width: 1280px){\n    .AsharaStudios{\n        margin: 0;\n    }\n\n    .AsharaStudios-logo {\n        display: none;\n    }\n\n    .AsharaStudios-logo2 {\n        display: block;\n        width: 100%;\n        margin: 0;\n    }\n\n    .AsharaStudios-description{\n        display: none;\n    }\n}", ""]);



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".RedesSociales-background{\n    width: 100%; \n}\n\n.RedesSociales{\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.RedesSociales-container{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.RedesSociales-backgroundLarge{\n    display: none;\n}\n\n@font-face {\n    font-family: \"Raleway SemiBold\";\n    src: url(\"/fonts/Raleway/Raleway-SemiBold.ttf\");\n  }\n\n  @font-face {\n    font-family: \"Raleway Medium\";\n    src: url(\"/fonts/Raleway/Raleway-Medium.ttf\");\n  }\n\n.RedesSociales-description{\n    font-family: \"Raleway Medium\";\n    font-size: 12px;\n    color: #666666;\n    padding: 0 6%;\n    margin: 0;\n}\n\n.RedesSociales-followUs{\n    font-family: \"Raleway SemiBold\";\n    font-size: 16px;\n    color: #666666;\n    margin-bottom: 3%;\n}\n\n.fa-3x{\n    margin: 0 3%;\n    font-size: 2em;\n}\n\n@media screen and (min-width: 576px){\n    .RedesSociales-description{\n        font-size: 21px;\n    }\n    \n    .RedesSociales-followUs{\n        font-size: 29px;\n    }\n\n}\n\n@media screen and (min-width: 768px){\n    .RedesSociales-description{\n        font-size: 29px;\n    }\n    \n    .RedesSociales-followUs{\n        font-size: 39px;\n    }\n\n    .fa-3x{\n        font-size: 2.5em;\n    }\n}\n\n@media screen and (min-width: 1024px){\n    .fa-3x{\n        font-size: 3em;\n    }\n}\n\n@media screen and (min-width: 1280px){\n    .RedesSociales-description{\n        font-size: 20px;\n        padding: 0;\n    }\n    \n    .RedesSociales-followUs{\n        font-family: \"Raleway SemiBold\";\n        font-size: 22px;\n    }\n\n    .RedesSociales-backgroundLarge{\n        display: block;\n        width: 100%\n    }\n\n    .RedesSociales-background{\n        display: none;\n    }\n\n    .RedesSociales-logoContainer{\n        width: 53%;\n    }\n\n    .fa-3x{\n        font-size: 3.5em;\n    }\n}", ""]);



/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".description {\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.description .container {\n    width: 100%;\n    height: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n.description .logo-container {\n    width: 50%;\n}\n\n.description .logo {\n    width: 100%;\n    margin-top: 35%;\n    margin-bottom: 10%;\n}\n\n.description .icon {\n    width: 56%;\n}\n\n.description .puntos {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    top: 0;\n}\n\n@font-face {\n    font-family: \"Raleway Regular\";\n    src: url(\"/fonts/Raleway/Raleway-Regular.ttf\");\n}\n\n@font-face {\n    font-family: \"Bebas Neue\";\n    src: url(\"/fonts/BebasNeue/BebasNeue.otf\");\n}\n\n.description .description-text {\n    font-family: \"Raleway Regular\";\n    font-size: 12px;\n    margin: 0;\n    padding: 0 22px;\n    margin-bottom: 31px;\n}\n\n@media screen and (min-width: 576px) {\n    .description .description-text {\n        font-size: 21px;\n        padding: 0 47px;\n    }\n    .description .icon {\n        width: 64%;\n    }\n}\n\n@media screen and (min-width: 768px) {\n    .description .description-text {\n        font-size: 29px;\n        padding: 0 67px;\n    }\n}\n\n@media screen and (min-width: 1280px) {\n    .description .puntos {\n        display: none;\n    }\n    .description .description-text {\n        font-size: 20px;\n        width: 40%;\n        padding: 0;\n        margin: 0;\n    }\n    .description .logo {\n        width: 17%;\n        margin-top: 5%;\n        margin-bottom: 3%;\n    }\n    .description .icon {\n        width: 25%;\n    }\n    .description .container {\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n    }\n    .description .logo-container {\n        width: 100%;\n    }\n}", ""]);



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".Service-container{\n    width: 100%;\n    height: 100%;\n}\n\n.Service-logo {\n    width: 36%;\n    position: absolute;\n    z-index: 1;\n    left: 32%;\n    top: 3%;\n}\n\n.Service-icon{\n    width: 56%;\n}\n\n.Service-title-marco{\n    width: 100%;\n    position: absolute;\n    left: 0;\n    margin-top: -4px;\n    height: 25px;\n}\n@font-face {\n    font-family: \"Raleway Regular\";\n    src: url(\"/fonts/Raleway/Raleway-Regular.ttf\");\n  }\n\n  @font-face {\n    font-family: \"Ralewey Medium\";\n    src: url(\"/fonts/Raleway/Raleway-Medium.ttf\");\n  }\n\n  @font-face {\n    font-family: \"Bebas Neue\";\n    src: url(\"/fonts/BebasNeue/BebasNeue.otf\");\n  }\n\n.Service-title{\n    font-family: \"Ralewey Medium\";\n    font-size: 14px;\n    width: 100%;\n    margin-top: 44%;\n    text-transform: uppercase;\n}\n\n.Service-description {\n    font-family: \"Raleway Regular\";\n    font-size: 12px;\n    margin: 0;\n    padding: 0 22px;\n    margin-bottom: 0px;\n}\n\n@media screen and (min-width: 576px){\n    .Service-title{\n        font-size: 25px;\n    }\n\n    .Service-description{\n        font-size: 21px;\n    }\n\n    .Service-title-marco{\n        height: 37px;\n    }\n}\n\n@media screen and (min-width: 768px){\n    .Service-title{\n        font-size: 34px;\n    }\n\n    .Service-description{\n        font-size: 29px;\n    }\n\n    .Service-title-marco{\n        height: 48px;\n    }\n}\n\n@media screen and (min-width: 1280px){\n    .Service-title{\n        font-size: 17.5px;\n    }\n\n    .Service-description{\n        font-size: 13px;\n        width: 100%;\n        padding: 0;\n        margin: 0;\n        margin-bottom: 9%;\n    }\n\n    .Service-icon {\n        width: 100%;\n    }\n\n    .Service-container{\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n        width: 90%;\n        margin: 0 10px;\n    }\n\n    .Service-logoContainer{\n        width: 100%;\n    }\n\n    .Service-title-marco{\n        width: 100%;\n        position: absolute;\n        left: 0;\n        margin-top: -3px;\n        height: 23px;\n    }\n\n    .Service-logo {\n        left: 32%;\n        width: 32%;\n    }\n    \n}", ""]);



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".Client{\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.Client-container{\n    width: 100%;\n    height: 100%;\n}\n\n.Client-logo {\n    width: 36%;\n    margin-top: 9%;\n    margin-bottom: 0%;\n}\n\n.Client-icon{\n    width: 56%;\n}\n\n.Client-title-marco{\n    width: 100%;\n    position: absolute;\n    left: 0;\n    margin-top: -4px;\n    height: 25px;\n}\n@font-face {\n    font-family: \"Raleway Regular\";\n    src: url(\"/fonts/Raleway/Raleway-Regular.ttf\");\n  }\n\n  @font-face {\n    font-family: \"Ralewey Semibold\";\n    src: url(\"/fonts/Raleway/Raleway-SemiBold.ttf\");\n  }\n\n  @font-face {\n    font-family: \"Bebas Neue\";\n    src: url(\"/fonts/BebasNeue/BebasNeue.otf\");\n  }\n\n.Client-title{\n    font-family: \"Ralewey Semibold\";\n    font-size: 14px;\n    width: 100%;\n}\n\n@media screen and (min-width: 576px){\n    .Client-title{\n        font-size: 25px;\n    }\n\n    .Client-title-marco{\n        height: 37px;\n    }\n}\n\n@media screen and (min-width: 768px){\n    .Client-title{\n        font-size: 34px;\n    }\n\n    .Client-title-marco{\n        height: 48px;\n    }\n}\n\n@media screen and (min-width: 1280px){\n    .Client-title{\n        font-size: 18px;\n    }\n\n    .Client-icon {\n        width: 100%;\n    }\n\n    .Client-container{\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n        width: 90%;\n        margin: 0 10px;\n    }\n\n    .Client-marcoContainer{\n        width: 100%;\n    }\n\n    .Client{\n        width: 33.3%;\n    }\n\n    .Client-title-marco{\n        width: 100%;\n        position: absolute;\n        left: 0;\n        margin-top: -3px;\n        height: 28px;\n    }\n    \n}", ""]);



/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".Technology-container{\n    width: 100%;\n}\n\n.Technology-icon{\n    width: 50%;\n}\n\n.Technology-title{\n    font-family: \"Ralewey Medium\";\n    font-size: 14px;\n}\n\n@media screen and (min-width: 576px){\n    .Technology-title{\n        font-size: 24px;\n    }\n\n    .Technology-container{\n        width: 185px;\n    }\n\n    .Technology-icon{\n        width: 70px;\n    }\n}\n\n@media screen and (min-width: 768px){\n    .Technology-title{\n        font-size: 30px;\n    }\n\n    .Technology-container{\n        width: 260px;\n    }\n\n    .Technology-icon{\n        width: 90px;\n    }\n}\n\n@media screen and (min-width: 1280px){\n    .Technology-title{\n        font-size: 13px;\n    }\n\n    .Technology-container{\n        width: 100%;\n    }\n\n    .Technology-icon{\n        width: 50%;\n    }\n}", ""]);



/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".portfolio-completed {\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.portfolio-completed .container{\n    width: 100%;\n    height: 100%;\n}\n\n.portfolio-completed .title-marco{\n    width: 100%;\n    position: absolute;\n    left: 0;\n    margin-top: -4px;\n    height: 25px;\n}\n  @font-face {\n    font-family: \"Ralewey Semibold\";\n    src: url(\"/fonts/Raleway/Raleway-SemiBold.ttf\");\n  }\n\n  @font-face {\n    font-family: \"RalewayItalic\";\n    src: url(\"/fonts/Raleway/Raleway-Italic.ttf\");\n  }\n\n.portfolio-completed .title{\n    font-family: \"Ralewey Semibold\";\n    font-size: 14px;\n    width: 100%;\n}\n\n#portfolio-completed-marco-0{\n    height: 41px;\n    margin-top: -21px;\n}\n\n.portfolio-completed .link{\n    font-family: \"RalewayItalic\";\n    font-size: 14px;\n    width: 100%;\n}\n\n@media screen and (min-width: 346px){\n    #portfolio-completed-marco-0{\n        margin-top: -4px;\n        height: 25px;\n    }\n\n    .portfolio-completed .link{\n        font-size: 14px;\n    }\n}\n@media screen and (min-width: 576px){\n    .portfolio-completed .title{\n        font-size: 25px;\n    }\n\n    .portfolio-completed .link{\n        font-size: 23px;\n    }\n\n    .portfolio-completed .title-marco{\n        height: 37px;\n    }\n\n    #portfolio-completed-marco-0{\n        margin-top: -30px;\n        height: 63px;\n    }\n}\n\n@media screen and (min-width: 615px){\n    #portfolio-completed-marco-0{\n        margin-top: -4px;\n        height: 37px;\n    }\n}\n\n@media screen and (min-width: 768px){\n    .portfolio-completed .title{\n        font-size: 34px;\n    }\n\n    .portfolio-completed .link{\n        font-size: 30px;\n    }\n\n    .portfolio-completed .title-marco{\n        height: 48px;\n    }\n\n    #portfolio-completed-marco-0{\n        margin-top: -39px;\n        height: 81px;\n    }\n}\n\n@media screen and (min-width: 837px){\n    #portfolio-completed-marco-0{\n        margin-top: -4px;\n        height: 48px;\n    }\n}\n\n@media screen and (min-width: 1280px){\n    .portfolio-completed .title{\n        font-size: 17.5px;\n    }\n\n    .portfolio-completed .link{\n        font-size: 15px;\n    }\n\n    .portfolio-completed .container{\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n        width: 100%;\n    }\n\n    .portfolio-completed .marcoContainer{\n        width: 100%;\n    }\n\n    .portfolio-completed{\n        width: 33.3%;\n    }\n\n    .portfolio-completed .title-marco{\n        width: 100%;\n        position: absolute;\n        left: 0;\n        margin-top: -3px;\n        height: 23px;\n    }\n\n    #portfolio-completed-marco-0{\n        margin-top: -23px;\n        height: 46px;\n    }\n    \n}\n\n@media screen and (min-width: 1449px){\n    #portfolio-completed-marco-0{\n        margin-top: -3px;\n        height: 23px;\n    }\n}", ""]);



/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".portfolio-ongoing {\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.portfolio-ongoing .container {\n    width: 100%;\n    height: 100%;\n    position: relative;\n}\n\n.portfolio-ongoing .logo {\n    width: 52%;\n    position: absolute;\n    left: 22.4%;\n    top: 13.4%;\n    border-radius: 50%;\n}\n\n.portfolio-ongoing .marco {\n    position: absolute;\n    width: 83%;\n    left: 7%;\n    top: 0;\n}\n\n.portfolio-ongoing .marco2 {\n    display: none;\n}\n\n.portfolio-ongoing .logo2 {\n    display: none;\n    border-radius: 50%;\n}\n\n.portfolio-ongoing .logo3 {\n    width: 50%;\n    position: absolute;\n    left: 26%;\n    top: 56%;\n}\n\n.portfolio-ongoing .textContainer {\n    width: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n\n.portfolio-ongoing .txtLink {\n    font-family: \"Ralewey SemiBold\";\n    font-size: 15px;\n    padding: 0 34%;\n    margin-top: 84%;\n}\n\n.portfolio-ongoing .background-mobile {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    bottom: 5%;\n}\n\n.portfolio-ongoing .background {\n    display: none;\n}\n\n@font-face {\n    font-family: \"Raleway Regular\";\n    src: url(\"/fonts/Raleway/Raleway-Regular.ttf\");\n}\n\n@font-face {\n    font-family: \"Ralewey Bold\";\n    src: url(\"/fonts/Raleway/Raleway-Bold.ttf\");\n}\n\n@font-face {\n    font-family: \"Bebas Neue\";\n    src: url(\"/fonts/BebasNeue/BebasNeue.otf\");\n}\n\n@font-face {\n    font-family: \"Ralewey SamiBold\";\n    src: url(\"/fonts/Raleway/Raleway-SemiBold.ttf\");\n}\n\n.portfolio-ongoing .title {\n    font-family: \"Ralewey Bold\";\n    font-size: 20px;\n    width: 100%;\n    margin-bottom: 0;\n    margin-top: 90%;\n}\n\n.portfolio-ongoing .description-text {\n    font-family: \"Raleway Regular\";\n    font-size: 12px;\n    margin: 0;\n    padding: 0 22px;\n    margin-bottom: 1%;\n    /* width: 40%; */\n}\n\n.portfolio-ongoing .link {\n    text-decoration: none;\n    font-family: \"Ralewey SamiBold\";\n    font-size: 12px;\n}\n\n@media screen and (min-width: 576px) {\n    .portfolio-ongoing .title {\n        font-size: 25px;\n    }\n    .portfolio-ongoing .description-text {\n        font-size: 21px;\n    }\n    .portfolio-ongoing .link {\n        font-size: 21px;\n    }\n    .portfolio-ongoing .txtLink {\n        font-size: 27px;\n    }\n}\n\n@media screen and (min-width: 768px) {\n    .portfolio-ongoing .title {\n        font-size: 40px;\n    }\n    .portfolio-ongoing .description-text {\n        font-size: 29px;\n    }\n    .portfolio-ongoing .link {\n        font-size: 39px;\n    }\n    .portfolio-ongoing .txtLink {\n        font-size: 36px;\n    }\n}\n\n@media screen and (min-width: 1280px) {\n    .portfolio-ongoing .title {\n        font-size: 30px;\n        margin: 0;\n    }\n    .portfolio-ongoing .description-text {\n        font-size: 17.5px;\n        width: 100%;\n        padding: 0;\n        margin: 0;\n    }\n    .portfolio-ongoing .link {\n        font-size: 17.5px;\n        position: absolute;\n        left: 45%;\n        top: 70%;\n    }\n    .portfolio-ongoing .container {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-align: center;\n            align-items: center;\n    }\n    .portfolio-ongoing .logoContainer {\n        width: 45%;\n        position: unset;\n    }\n    .portfolio-ongoing .marco2 {\n        display: block;\n        position: absolute;\n        left: 4%;\n        top: 15%;\n        width: 29%;\n    }\n    .portfolio-ongoing .logo2 {\n        display: block;\n        width: 40%;\n        margin-left: 21.1%;\n        margin-top: 21.3%;\n    }\n    .portfolio-ongoing .logo3 {\n        position: absolute;\n        left: 43.5%;\n        width: 12%;\n        top: 86%;\n    }\n    .portfolio-ongoing .textContainer {\n        width: 50%;\n        text-align: left;\n        margin-top: 4%;\n    }\n    .PortfolioIoT {\n        width: 100%;\n        margin-bottom: 3%;\n    }\n    .portfolio-ongoing .background-mobile {\n        display: none;\n    }\n    .portfolio-ongoing .logo {\n        display: none;\n    }\n    .portfolio-ongoing .background {\n        position: absolute;\n        top: 12%;\n        width: 100%;\n        display: block;\n        /* max-height: 480px; */\n    }\n    .portfolio-ongoing .marco {\n        display: none;\n    }\n    .portfolio-ongoing .txtLink {\n        position: absolute;\n        padding: 0;\n        font-size: 15px;\n        left: 56%;\n        width: 8%;\n        margin-top: 3%;\n    }\n}", ""]);



/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "\n\n.Event-container{\n    width: 100%;\n    height: 100%;\n}\n\n.Event-photo {\n    width: 100%;\n    margin-top: 9%;\n    margin-bottom: 0%;\n}\n\n.Event-title-marco{\n    width: 100%;\n    position: absolute;\n    left: 0;\n    margin-top: -2px;\n    height: 25px;\n}\n@font-face {\n    font-family: \"Raleway Regular\";\n    src: url(\"/fonts/Raleway/Raleway-Regular.ttf\");\n  }\n\n  @font-face {\n    font-family: \"Ralewey Light Italic\";\n    src: url(\"/fonts/Raleway/Raleway-LightItalic.ttf\");\n  }\n\n  @font-face {\n    font-family: \"Bebas Neue\";\n    src: url(\"/fonts/BebasNeue/BebasNeue.otf\");\n  }\n\n.Event-title{\n    font-family: \"Bebas Neue\";\n    font-size: 20px;\n    width: 100%;\n    margin-bottom: 0;\n}\n\n.Event-subtitle{\n    font-family: \"Ralewey Light Italic\";\n    font-size: 18px;\n    width: 100%;\n    margin-bottom: 0;\n}\n\n.Event-description {\n    font-family: \"Raleway Regular\";\n    font-size: 12px;\n    margin: 0;\n    padding: 0 22px;\n    margin-bottom: 1%;\n}\n\n.Event-photoTransparent {\n    display: none;\n}\n\n@media screen and (min-width: 576px){\n    .Event-title{\n        font-size: 36px;\n    }\n\n    .Event-subtitle{\n        font-size: 33px;\n    }\n\n    .Event-description{\n        font-size: 21px;\n    }\n\n    .Event-title-marco{\n        height: 37px;\n        margin-top: 1px;\n    }\n}\n\n@media screen and (min-width: 768px){\n    .Event-title{\n        font-size: 48px;\n    }\n\n    .Event-subtitle{\n        font-size: 44px;\n    }\n\n    .Event-description{\n        font-size: 29px;\n    }\n\n    .Event-title-marco{\n        height: 48px;\n        margin-top: 1px;\n    }\n}\n\n@media screen and (min-width: 1280px){\n    .Event-textContainer{\n        width: 100%;\n        position: absolute;\n        top: 29%;\n    }\n\n    .Event-title {\n        font-size: 25px;\n        opacity: 0;\n    }\n\n    .Event-subtitle{\n        font-size: 22.5px;\n        opacity: 0;\n    }\n\n    .Event-description {\n        font-size: 15px;\n        width: 100%;\n        padding: 0;\n        margin: 0;\n        opacity: 0;\n    }\n\n    .Event{\n        position: relative;\n        width: 44%;\n        height: 100%;\n        margin: 0 3%;\n        margin-bottom: 2%;\n    }\n\n    .Event:hover p{\n        -webkit-animation: reversepulse 0.3s linear;\n                animation: reversepulse 0.3s linear;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards;\n    }\n    @-webkit-keyframes reversepulse {\n        0% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n      }\n    @keyframes reversepulse {\n        0% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n      }\n\n    .Event:hover .Event-photoTransparent{\n        opacity: 0.15;\n        -webkit-transition: opacity 0.3s linear;\n        -o-transition: opacity 0.3s linear;\n        transition: opacity 0.3s linear;\n    }\n\n    .Event-photo{\n        display: none;\n    }\n\n    .Event-photoTransparent {\n        opacity: 1;\n        left: 0;\n        width: 100%;\n        display: block;\n        -webkit-transition: opacity 0.3s linear;\n        -o-transition: opacity 0.3s linear;\n        transition: opacity 0.3s linear;\n    }\n\n    .Event-title-marco{\n        width: 100%;\n        position: absolute;\n        height: 28px;\n        top: 20%;\n        opacity: 0;\n    }\n    \n}", ""]);



/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".RedesUnity-background{\n    width: 100%; \n}\n\n.RedesUnity{\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.RedesUnity-container{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-align: center;\n        align-items: center;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n\n@font-face {\n    font-family: \"Raleway SemiBold\";\n    src: url(\"/fonts/Raleway/Raleway-SemiBold.ttf\");\n  }\n\n.RedesUnity-followUs{\n    font-family: \"Raleway SemiBold\";\n    font-size: 16px;\n    margin-bottom: 8%;\n}\n\n.RedesUnity-logoContainer{\n    width: 100%;\n}\n\n.RedesUnity-icon{\n    width: 9%;\n    margin: 0 3%;\n}\n\n@media screen and (min-width: 576px){\n    .RedesUnity-followUs{\n        font-size: 29px;\n    }\n}\n\n@media screen and (min-width: 768px){\n    .RedesUnity-followUs{\n        font-size: 39px;\n    }\n}\n\n@media screen and (min-width: 1280px){\n    \n    .RedesUnity-followUs{\n        font-size: 32px;\n    }\n\n    .RedesUnity-background{\n        display: none;\n    }\n\n    .RedesUnity-logoContainer{\n        width: 43%;\n    }\n\n    .RedesUnity-icon{\n        margin: 0 5%;\n        margin-top: 5%;\n    }\n\n    .RedesUnity-container{\n        position: static;\n    }\n\n    .RedesUnity{\n        padding-bottom: 5%;\n    }\n}", ""]);



/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "@font-face {\n    font-family: \"Bebas Neue\";\n    src: url(\"/fonts/BebasNeue/BebasNeue.otf\");\n}\n\n.Unit .title-services {\n    font-family: \"Bebas Neue\";\n    font-size: 40px;\n    width: 100%;\n    margin-bottom: 6%;\n    line-height: 35px;\n}\n\n.Unit .container-services {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    position: relative;\n}\n\n.Unit .container-service {\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-align: center;\n        align-items: center;\n}\n\n.Unit .container-technologies {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: center;\n        justify-content: center;\n    margin-top: 3%;\n}\n\n.Unit .completed-title {\n    font-family: \"Bebas Neue\";\n    font-size: 20px;\n    margin-bottom: 0;\n}\n\n.Unit .background1-portfolioCompleted {\n    position: absolute;\n    z-index: 1;\n    top: 25%;\n    height: 80%;\n}\n\n.Unit .container-background1-portfolioCompleted {\n    display: none;\n}\n\n.Unit .container-portfolioCompleted {\n    position: relative;\n}\n\n.Unit .background2-portfolioCompleted {\n    position: absolute;\n    z-index: 1;\n    top: 25%;\n    height: 80%;\n    width: 100%;\n    left: 0;\n}\n\n.Unit .container-portfolioOngoing {\n    padding-bottom: 10%;\n}\n\n.Unit .container-technologies {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: center;\n        justify-content: center;\n    margin-top: 3%;\n}\n\n.Unit .container-technology{\n    width: 25%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n\n.Unit .completed-title,  .Unit .technology-title{\n    font-family: \"Bebas Neue\";\n    font-size: 20px;\n    margin-bottom: 0;\n}\n\n.Unit .technology-title{\n    width: 100%;\n    margin-bottom: 3%;\n}\n\n@media screen and (min-width: 576px) {\n    .Unit .title-services {\n        font-size: 72px;\n        margin-bottom: 6%;\n        line-height: 58px;\n    }\n    .Unit .completed-title {\n        font-size: 36px;\n    }\n}\n\n@media screen and (min-width: 768px) {\n    .Unit .title-services {\n        font-size: 96px;\n        line-height: 75px;\n    }\n    .Unit .completed-title {\n        font-size: 48px;\n    }\n}\n\n@media screen and (min-width: 1280px) {\n    .Unit .title-services {\n        font-size: 75px;\n        line-height: 58px;\n    }\n    .Unit .container-services {\n        padding: 0 15%;\n        position: relative;\n        padding-top: 3%;\n    }\n    .Unit .container-service {\n        width: 41%;\n    }\n    .Unit .background11-services {\n        display: none;\n        position: absolute;\n        left: 0;\n        width: 16%;\n    }\n    .Unit .background21-services {\n        display: block;\n        position: absolute;\n        left: 0;\n        z-index: 1;\n        height: 100%;\n        top: 2%;\n    }\n    .Unit .container-clients {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        -ms-flex-pack: safe;\n            justify-content: safe;\n        margin-top: 3%;\n    }\n    .Unit .container-portfolioCompleted {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        -ms-flex-pack: safe;\n            justify-content: safe;\n        margin-top: 3%;\n        position: relative;\n    }\n    .Unit .completed-title {\n        font-size: 30px;\n        width: 100%;\n    }\n    .Unit .container-background1-portfolioCompleted, .Unit .container-background2-services {\n        width: 100%;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-pack: center;\n            justify-content: center;\n    }\n    .Unit .background2-portfolioCompleted {\n        display: none;\n    }\n    .Unit .container-portfolioOngoing {\n        padding-bottom: 5%;\n    }\n    .Unit .container-events {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        -ms-flex-pack: center;\n            justify-content: center;\n        margin-top: 3%;\n    }\n    .Unit .container-allTechnologies {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        position: relative;\n        -ms-flex-pack: center;\n            justify-content: center;\n    }\n    .Unit .technology-title {\n        font-size: 30px;\n    }\n    .Unit .container-background-technologies {\n        width: 100%;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-pack: center;\n            justify-content: center;\n    }\n    .Unit .container-technologies {\n        width: 33%;\n    }\n}", ""]);



/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".Soft .service-background1 {\n    position: absolute;\n    left: 0;\n    width: 89%;\n    z-index: 1;\n}\n\n.Soft .service-background2 {\n    position: absolute;\n    right: 0;\n    width: 16%;\n    -webkit-transform: scaleX(-1);\n        -ms-transform: scaleX(-1);\n            transform: scaleX(-1);\n    display: none;\n}\n\n.Soft .service-background3 {\n    position: absolute;\n    width: 96%;\n    right: 0;\n    bottom: 0;\n    z-index: 1;\n}\n\n.Soft .service-background4 {\n    position: absolute;\n    width: 15%;\n    -webkit-transform: scaleX(-1);\n        -ms-transform: scaleX(-1);\n            transform: scaleX(-1);\n    display: none;\n    left: 55%;\n    top: -9%;\n    z-index: 1;\n}\n\n@media screen and (min-width: 1280px){\n\n    .Soft .service-background1 {\n        position: absolute;\n        left: 0;\n        width: 16%;\n    }\n\n    .Soft .service-background2 {\n        display: block;\n    }\n\n    .Soft .service-background3 {\n        position: absolute;\n        width: 15%;\n        right: 55%;\n        top: -9%;\n        z-index: 1;\n    }\n    .Soft .service-background4 {\n        display: block;\n    }\n}", ""]);



/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".IoT .service-background1 {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    z-index: 1;\n}\n\n.IoT .service-background2 {\n    display: none;\n    position: absolute;\n    width: 96%;\n    right: 0;\n    bottom: 0;\n    z-index: 1;\n}\n\n\n.IoT .portfolio-ongoing .logo {\n    top: 14%;\n}\n\n@media screen and (min-width: 1280px) {\n    .IoT .service-background1 {\n        display: none;\n        position: absolute;\n        left: 0;\n        width: 16%;\n    }\n    .IoT .service-background2 {\n        display: block;\n        position: absolute;\n        left: 0;\n        z-index: 1;\n        height: 100%;\n        top: 2%;\n    }\n}", ""]);



/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".Games .service-background1 {\n    display: none;\n    position: absolute;\n    width: 96%;\n    right: 0;\n    bottom: 0;\n    z-index: 1;\n}\n\n.Games .portfolio-ongoing .logo {\n    position: static;\n    width: 80%;\n}\n\n.Games .portfolio-ongoing .title {\n    margin-top: 0%;\n}\n\n.Games .textContainer .description-text {\n    display: none;\n}\n\n@media screen and (min-width: 1280px) {\n    .Games .textContainer .description-text {\n        display: block;\n    }\n    .Games .service-background1 {\n        display: block;\n        position: absolute;\n        left: 0;\n        z-index: 1;\n        height: 100%;\n        top: 2%;\n    }\n    .Games .portfolio-ongoing {\n        margin-bottom: 10%;\n    }\n    .Games .portfolio-ongoing .container {\n        margin-bottom: 5%;\n    }\n    .Games .portfolio-ongoing .logo2 {\n        display: block;\n        width: 50%;\n        margin-top: 2%;\n        margin-left: 30%;\n    }\n    .Games .portfolio-ongoing .marco2 {\n        left: 11.5%;\n        top: -4%;\n        width: 43%;\n    }\n    .Games .portfolio-ongoing .background {\n        top: -10%;\n    }\n}", ""]);



/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".Science .service-background1 {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    z-index: 1;\n}\n\n.Science .service-background2 {\n    display: none;\n    position: absolute;\n    width: 96%;\n    right: 0;\n    bottom: 0;\n    z-index: 1;\n}\n\n.Science .portfolio-ongoing .logo {\n    position: relative;\n    display: block;\n    width: 51%;\n    margin: 10% auto;\n    left: 0;\n}\n\n.Science .portfolio-ongoing .background-mobile {\n    top: 0%;\n}\n\n.Science .portfolio-ongoing .title {\n    margin-top: 0%;\n}\n\n.Science .portfolio-ongoing .textContainer {\n    margin-top: 10%;\n}\n\n@media screen and (min-width: 1280px) {\n    .Science .service-background1 {\n        display: none;\n        position: absolute;\n        left: 0;\n        width: 16%;\n    }\n    .Science .service-background2 {\n        display: block;\n        position: absolute;\n        left: 0;\n        z-index: 1;\n        height: 100%;\n        bottom: 2%;\n    }\n    .Science .portfolio-ongoing .logo {\n        display: none;\n    }\n    .Science .portfolio-ongoing .logo2 {\n        display: block;\n        width: 50%;\n        margin-top: 13.5%;\n        margin-left: 31%;\n    }\n}", ""]);



/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".School .portfolio-ongoing .logo {\n    width: 52%;\n    position: absolute;\n    left: 22.6%;\n    top: 14%;\n}\n\n@media screen and (min-width: 1280px) {\n    .School .portfolio-ongoing .logo2 {\n        display: block;\n        width: 48%;\n        margin-left: 26%;\n        margin-top: 18%;\n    }\n}", ""]);



/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".Media .service-background1 {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    z-index: 1;\n}\n\n.Media .service-background2 {\n    display: none;\n    position: absolute;\n    width: 96%;\n    right: 0;\n    bottom: 0;\n    z-index: 1;\n}\n\n\n.Media .portfolio-ongoing {\n    margin-bottom: 5%;\n}\n.Media .portfolio-ongoing .logo {\n    top: 6%;\n}\n\n.Media .portfolio-ongoing .title {\n    margin-top: 65%;\n}\n\n@media screen and (min-width: 1280px) {\n    .Media .portfolio-ongoing .title {\n        font-size: 30px;\n        margin: 0;\n    }\n    .Media .service-background1 {\n        display: none;\n        position: absolute;\n        left: 0;\n        width: 16%;\n    }\n    .Media .service-background2 {\n        display: block;\n        position: absolute;\n        left: 0;\n        z-index: 1;\n        height: 100%;\n        top: 2%;\n    }\n    .Media .portfolio-ongoing .logo2 {\n        margin-left: 24.5%;\n        margin-top: 16%;\n        width: 49%;\n    }\n    .Media .portfolio-ongoing .marco2 {\n        left: 4%;\n        top: 15%;\n        width: 36%;\n    }\n}", ""]);



/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: 'Bebas Neue';\n  src: url('/fonts/BebasNeue/BebasNeue.otf')\n}\n\n@font-face {\n  font-family: 'Raleway Semibold';\n  src: url('/fonts/Raleway/Raleway-SemiBold.ttf')\n}\n\n@font-face {\n  font-family: 'Raleway Semibold Italic';\n  src: url('/fonts/Raleway/Raleway-SemiBoldItalic.ttf')\n}\n\n@font-face {\n  font-family: 'Raleway regular';\n  src: url('/fonts/Raleway/Raleway-Regular.ttf')\n}\n\n.contact-us h1 {\n  font-family: 'Bebas Neue';\n  font-weight: 550;\n  letter-spacing: 3px;\n  margin: 1.2em 0;\n  font-size: 40px;\n}\n\n.contact-us p{\n  font-family: 'Raleway Semibold Italic';\n  margin: 0;\n  font-size: 15px;\n}\n\n.contact-us {\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  color: #666666;\n  background: -webkit-radial-gradient(center, ellipse, rgba(255,255,255,1) 10%,rgba(200,200,200,1) 100%);\n  background: -o-radial-gradient(center, ellipse, rgba(255,255,255,1) 10%,rgba(200,200,200,1) 100%);\n  background: radial-gradient(ellipse at center, rgba(255,255,255,1) 10%,rgba(200,200,200,1) 100%);\n  min-height: 100vh;\n}\n\n.contact-container {\n  margin: 0 2em;\n}\n\n.contact-back {\n  width: 100%;\n}\n\n.dots-upside {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n}\n\n.dots-downside {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.contact-logo {\n  margin: 0.5em 0;\n}\n\n.form-group {\n  display: block;\n}\n\n.contact-label {\n  font-family: 'Bebas Neue';\n  font-size: 20px;\n}\n\n.contact-field {\n  font-family: 'Raleway regular';\n  font-size: 12px;\n  width: 100%;\n  border: none;\n  background: none;\n  text-align: center;\n  background-image: url('https://drive.google.com/uc?id=1Fqm7qhfeJ16PwMUJBmGYo21h1BlcSa0j');\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-size: contain;\n  height: 2.5em;\n  margin-top: 1em;\n  margin-bottom: 2em; \n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.contact-field:focus {\n  outline: none;\n}\n\n.contact-message {\n  background-image: url('https://drive.google.com/uc?id=10Pu1FisSBgq_VKAYgHRE7MDI32Cz9YSp');\n  min-height: 166px;\n  resize: none;\n}\n\n.contact-submit {\n  font-family: 'Raleway regular';\n  font-size: 12px;\n  background: none;\n  background-image: url('https://drive.google.com/uc?id=1oXTBeUFd839J0LHxIt0aE1OV7-IFqzJA');\n  background-repeat: no-repeat;\n  background-position-x: center;\n  border: none;\n  color: white;\n  width: 130px;\n  height: 50px;\n}\n\n.honey {\n  display: none;\n}\n\n@media screen and (min-width: 320px) {\n  .logo-small {\n    display: inline;\n  }\n  .logo-medium {\n    display: none;\n  }\n  .logo-big {\n    display: none;\n  }\n  .contact-back,\n  .logo-large {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 576px) {\n  .logo-small {\n    display: none;\n  }\n  .logo-medium {\n    display: inline;\n  }\n  .logo-big {\n    display: none;\n  }\n  .logo-large {\n    display: none;\n  }\n  .contact-field {\n    background-image: url('https://drive.google.com/uc?id=1JD3cuzhb2fkOV2HjPBRx5uaNARoGrbC0');\n    background-size: contain;\n    min-height: 65px;\n    font-size: 22px;\n  }\n  .contact-message {\n    background-image: url('https://drive.google.com/uc?id=1zcivyP6Xr4lP-uFqs-uSh_Or7Ebl829d');\n    min-height: 313px;\n  }\n  .contact-submit {\n    background-image: url('https://drive.google.com/uc?id=1vzg__76kG5yNWY5RTIX1iLn17iRkigbb');\n    width: 221px;\n    height: 90px;\n    font-size: 21px;\n  }\n  .contact-us h1 {\n    font-size: 72px;\n    margin: 0.8em 0;\n  }\n  .contact-us p {\n    font-size: 27px;\n  }\n  .contact-label {\n    font-size: 37px;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .logo-small {\n    display: none;\n  }\n  .logo-medium {\n    display: none;\n  }\n  .logo-big {\n    display: inline;\n  }\n  .logo-large {\n    display: none;\n  }\n  .contact-field {\n    background-image: url('https://drive.google.com/uc?id=158LoNz5x0K3l56vQML0lkFtkC1Gm7_Ju');\n    min-height: 82px;\n    font-size: 29px;\n  }\n  .contact-message {\n    background-image: url('https://drive.google.com/uc?id=1zzgsykYEichUomgMqKhaZhBGop9GSn8n');\n    min-height: 398px;\n  }\n  .contact-us h1 {\n    font-size: 96px;\n  }\n  .contact-us p {\n    font-size: 36px;\n  }\n  .contact-label {\n    font-size: 48px;\n  }\n  .contact-submit {\n    font-size: 29px;\n    background-image: url('https://drive.google.com/uc?id=1FpBaRnIu_2As3HyZMJBiv5hr-qfnbMWg');\n    width: 294px;\n    height: 120px;\n  }\n}\n\n@media screen and (min-width: 1280px) {\n  .dots-upside,\n  .dots-downside {\n    display: none;\n  }\n  .logo-small {\n    display: none;\n  }\n  .logo-medium {\n    display: none;\n  }\n  .logo-big {\n    display: none;\n  }\n  .contact-back,\n  .logo-large {\n    display: inline;\n  }\n  .contact-us {\n    position: relative;\n  }\n  .contact-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \"up up\"\n                        \"left right\"\n                        \"down down\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    padding: 0 10%;\n  }\n  .contact-us h1 {\n    font-size: 75px;\n    grid-area: up;\n    margin: 0.5em 0;\n  }\n  .contact-us p {\n    font-size: 25px;\n    padding: 0 1.5em;\n  }\n  .contact-label {\n    font-size: 23px;\n  }\n  .contact-field {\n    font-size: 15px;\n    background-image: url('https://drive.google.com/uc?id=1ozhrCL3T8Hp8GqzopiHaSvAALcSW_5zQ');\n    min-height: 29px;\n  }\n  .contact-message {\n    background-image: url('https://drive.google.com/uc?id=1xMwHkqvgr6LO3J313dfYrJ4QqsamEe0P');\n    min-height: 170px;\n  }\n  .contact-submit {\n    font-size: 15px;\n    background-image: url('https://drive.google.com/uc?id=1ID3jsL-jmQQ1duPvvvcjXjvG2Ylaj3KE');\n    width: 131px;\n    height: 47px;\n  }\n  .contact-left {\n    grid-area: left;\n  }\n  .contact-right {\n    grid-area: right;\n  }\n  .redes-container {\n    grid-area: down;\n  }\n  .contact-field {\n    margin-top: 0.2em;\n    margin-bottom: 1em; \n  }\n}", ""]);



/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: 'Raleway Semibold';\n  src: url('/fonts/Raleway/Raleway-SemiBold.ttf')\n}\n\n.redes-title {\n  font-family: 'Raleway Semibold';\n  font-size: 16px;\n  font-style: normal;\n}\n\n.redes-container {\n  padding-top: 5em;\n  padding-bottom: 2em;\n}\n\n.redes-icon-container {\n  display: inline;\n  margin: 2em 0;\n}\n\n.redes-icon {\n  margin: 0 0.5em;\n  width: 8%;\n}\n\n@media screen and (min-width: 576px) {\n  .redes-title {\n    font-size: 29px;\n  }\n  .redes-container {\n    padding-top: 10em;\n    padding-bottom: 2.5em;\n  }\n  .redes-icon {\n    margin: 0 0.75em;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .redes-title {\n    font-size: 39px;\n  }\n  .redes-container {\n    padding-top: 12em;\n    padding-bottom: 4em;\n  }\n  .redes-icon {\n    margin: 0 1em;\n  }\n}\n\n@media screen and (min-width: 1280px) {\n  .redes-title {\n    font-size: 22px;\n    margin-top: 3em;\n    margin-bottom: 3em;\n  }\n  .redes-container {\n    padding-top: 0;\n    padding-bottom: 3em;\n  }\n  .redes-icon {\n    width: 6%;\n  }\n}", ""]);



/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "\n@font-face {\n    font-family: \"Raleway Italic\";\n    src: url(\"/fonts/Raleway/Raleway-Italic.ttf\");\n  }\n\n.Hero-mobile-container{\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: center;\n        justify-content: center;\n}\n.Hero-marco{\n    position: absolute;\n    width: 52%;\n}\n\n.Hero-marco-desktop,.Hero-marco2-desktop,.Hero-lineas{\n    display: none;\n}\n\n.Hero-photo{\n    position: absolute;\n    width: 46.3%;\n    top: 5.6%;\n}\n\n.Hero-marco-text{\n    position: absolute;\n    width: 100%;\n    margin-top: -0.2%;\n    height: 43px;\n    left: 0;\n}\n\n.Hero-name{\n    font-family: \"Bebas Neue\";\n    font-size: 37px;\n    margin-top: 58%;\n    margin-bottom: 0;\n}\n\n.Hero-description{\n    font-family: \"Raleway Italic\";\n    font-size: 22px;\n    margin-bottom: 8%;\n}\n\n@media screen and (min-width: 1024px){\n    .Hero{\n        width: 30%;\n        margin: 0;\n    }\n\n    .Hero-marco-desktop,.Hero-marco2-desktop{\n        display: block;\n        -webkit-transition: -webkit-transform 0.3s linear;\n        transition: -webkit-transform 0.3s linear;\n        -o-transition: transform 0.3s linear;\n        transition: transform 0.3s linear;\n        transition: transform 0.3s linear, -webkit-transform 0.3s linear;\n    }\n    \n    .Hero-lineas{\n        display: block;\n        position: absolute;\n        width: 58%;\n        top: -5%;\n        opacity: 0;\n        -webkit-transition: opacity 0.3s linear,-webkit-transform 0.3s linear;\n        transition: opacity 0.3s linear,-webkit-transform 0.3s linear;\n        -o-transition: transform 0.3s linear,opacity 0.3s linear;\n        transition: transform 0.3s linear,opacity 0.3s linear;\n        transition: transform 0.3s linear,opacity 0.3s linear,-webkit-transform 0.3s linear;\n    }\n\n    .Hero-photo{\n        position: absolute;\n        width: 48%;\n        top: 3.7%;\n        left: 26%;\n        -webkit-filter: grayscale(100%);\n                filter: grayscale(100%);\n        -webkit-transition: -webkit-transform 0.3s linear,-webkit-filter 0.3s linear;\n        transition: -webkit-transform 0.3s linear,-webkit-filter 0.3s linear;\n        -o-transition: transform 0.3s linear,filter 0.3s linear;\n        transition: transform 0.3s linear,filter 0.3s linear;\n        transition: transform 0.3s linear,filter 0.3s linear,-webkit-transform 0.3s linear,-webkit-filter 0.3s linear;\n    }\n\n    .Hero:hover .Hero-marco-desktop{\n        -webkit-transform: scale(0.975) rotate(-20deg);\n            -ms-transform: scale(0.975) rotate(-20deg);\n                transform: scale(0.975) rotate(-20deg);\n        -webkit-transition: -webkit-transform 0.3s linear;\n        transition: -webkit-transform 0.3s linear;\n        -o-transition: transform 0.3s linear;\n        transition: transform 0.3s linear;\n        transition: transform 0.3s linear, -webkit-transform 0.3s linear;\n    }\n    \n    .Hero:hover .Hero-marco2-desktop{\n        -webkit-transform: scale(1.05) rotate(-20deg);\n            -ms-transform: scale(1.05) rotate(-20deg);\n                transform: scale(1.05) rotate(-20deg);\n        -webkit-transition: -webkit-transform 0.3s linear;\n        transition: -webkit-transform 0.3s linear;\n        -o-transition: transform 0.3s linear;\n        transition: transform 0.3s linear;\n        transition: transform 0.3s linear, -webkit-transform 0.3s linear;\n    }\n\n    .Hero:hover .Hero-photo{\n        -webkit-transform: scale(1.05);\n            -ms-transform: scale(1.05);\n                transform: scale(1.05);\n        -webkit-filter: grayscale(0%);\n                filter: grayscale(0%);\n        -webkit-transition: -webkit-transform 0.3s linear,-webkit-filter 0.3s linear;\n        transition: -webkit-transform 0.3s linear,-webkit-filter 0.3s linear;\n        -o-transition: transform 0.3s linear,filter 0.3s linear;\n        transition: transform 0.3s linear,filter 0.3s linear;\n        transition: transform 0.3s linear,filter 0.3s linear,-webkit-transform 0.3s linear,-webkit-filter 0.3s linear;\n    }\n\n\n    .Hero:hover .Hero-lineas{\n        -webkit-transform: scale(0.975) rotate(-20deg);\n            -ms-transform: scale(0.975) rotate(-20deg);\n                transform: scale(0.975) rotate(-20deg);\n        opacity: 1;\n        -webkit-transition: opacity 0.3s linear,-webkit-transform 0.3s linear;\n        transition: opacity 0.3s linear,-webkit-transform 0.3s linear;\n        -o-transition: transform 0.3s linear,opacity 0.3s linear;\n        transition: transform 0.3s linear,opacity 0.3s linear;\n        transition: transform 0.3s linear,opacity 0.3s linear,-webkit-transform 0.3s linear;\n    } \n\n    .Heroes-container{\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly;\n    }\n\n    .Hero-marco{\n        display: none;\n    }\n\n    .Hero-marco-desktop{\n        position: absolute;\n        width: 57%;\n        top: -4%;\n    }\n\n    .Hero-marco2-desktop{\n        position: absolute;\n        width: 52%;\n    }\n\n    \n}", ""]);



/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "/* Styles for the AboutUs component*/\n@font-face {\n  font-family: \"Bebas Neue\";\n  src: url(\"/fonts/BebasNeue/BebasNeue.otf\");\n}\n\n@font-face {\n  font-family: \"Raleway Medium\";\n  src: url(\"/fonts/Raleway/Raleway-Medium.ttf\");\n}\n\n\n@font-face {\n  font-family: \"Raleway Semibold\";\n  src: url(\"/fonts/Raleway/Raleway-SemiBoldItalic.ttf\");\n}\n\n.AboutUs {\n  background:  -webkit-radial-gradient(center, ellipse, rgba(255,255,255,1) 10%,rgba(200,200,200,1) 100%);\n  background:  -o-radial-gradient(center, ellipse, rgba(255,255,255,1) 10%,rgba(200,200,200,1) 100%);\n  background:  radial-gradient(ellipse at center, rgba(255,255,255,1) 10%,rgba(200,200,200,1) 100%);\n  color: #666666;\n}\n\n.hero {\n  position: relative;\n  display: block;\n  padding: 30% 0%;\n}\n\n.hero p{  \n  position: inherit;\n  font-family: \"Bebas Neue\";\n  color: #000000;\n  font-size: 6.25em;\n  margin: 0;\n  z-index: 1;\n}\n\n.hero-img {  \n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 0;\n}\n\n.hero-img-medium{\n  display: none;\n}\n\n.team-photo-img {\n  width: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  margin: -14% 0;\n}\n\n.team-photo-img-medium{\n  display: none;\n}\n\n.aboutUs-description {\n  padding: 25% 5% 1%;  \n}\n\n.description-title {\n  font-family: \"Bebas Neue\";\n  font-size: 4em;\n  margin: 0;\n  display: none;\n}\n\n.description-details {\n  font-family: \"Raleway Medium\";\n  font-size: 12px;\n  letter-spacing: -10;\n  line-height: 15px;\n  margin: 0;\n  text-align: center;\n}\n\n.philosophy {\n  margin: 50px 0;\n}\n\n.philosophy-text {\n  font-family: \"Bebas Neue\";\n  font-size: 40px;\n  margin: 0;\n}\n\n.philosophy-detail {\n  font-family: \"Raleway Semibold\";\n  font-size: 18px;\n  font-style: italic;\n}\n\n.philosophy-logo {\n  width: 74%;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto;\n}\n.philosophy-description {\n  font-family: \"Raleway Medium\";\n  font-size: 12px;\n  text-align: center;\n\n}\n\n.ourheroes{\n  margin-bottom: 50px;\n}\n\n.padder {\n  margin: 0 2em;\n}\n\n@media screen and (min-width: 576px){\n\n  .hero p {\n    font-size: 180px;\n  }\n\n  .hero-img {\n    display: none;\n  }\n  .hero-img-medium{\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 0;\n  }\n\n  .team-photo-img {\n    display: none;\n  }\n  .team-photo-img-medium {\n    width: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    margin: -14% 0;\n  }\n\n  .aboutUs-description {\n    padding: 20% 5% 1%;\n  }\n\n  .description-details {\n    font-size: 21px;\n    line-height: 115%;\n    margin: 2% 0 16%;\n  }\n\n  .philosophy-text {\n    font-size: 72px;    \n  }\n\n  .philosophy-detail {\n    font-size: 34px;\n    margin: 6% auto 2%;\n  }\n\n  .philosophy-logo{\n    width: 75%;\n  }\n\n  .philosophy-description {\n    font-size: 21px;\n  }\n}\n\n@media screen and (min-width: 768px){\n\n  .hero p {\n    font-size: 241px;\n  }\n\n  .description-details {\n    font-size: 29px;\n    line-height: 115%;\n    margin: 2% 0 16%;\n  }\n\n  .philosophy-text {\n    font-size: 96px;    \n  }\n\n  .philosophy-detail {\n    font-size: 45px;\n    width: 100%;\n  }\n\n  .philosophy-logo{\n    width: 76%;\n  }\n  .philosophy-description {\n    font-size: 29px;\n  }\n\n}\n\n@media screen and (min-width: 1024px){\n  .hero {   \n    padding: 10% 0% 5%; \n  }\n\n  .hero img {\n    display: none;\n  }\n\n  .hero p {\n    font-size: 315px;\n  }\n\n  .aboutUs-description {    \n    padding: 13% 22% 3%;\n  }\n\n  .container-description-details {\n    position: relative;\n  }\n\n  .container-description-details::before {   \n    display: block;\n    content: \"\";\n    width: 111px;\n    height: 76px;\n    position: absolute;\n    top: -23px;\n    left: 0px;\n    border-top: 1px solid #000;\n    border-left: 1px solid #000;\n  }\n\n  .description-details::before {   \n    display: block;\n    content: \"\";\n    width: 111px;\n    height: 76px;\n    position: absolute;\n    top: -14px;\n    left: -14px;\n    border-top: 1px solid #000;\n    border-left: 1px solid #000;\n  }\n  .container-description-details::after {   \n    display: block;\n    content: \"\";\n    width: 111px;\n    height: 76px;\n    position: absolute;\n    bottom: -23px;\n    right: 0px;\n    border-bottom: 1px solid #000;\n    border-right: 1px solid #000;\n  }\n\n  .description-details::after {   \n    display: block;\n    content: \"\";\n    width: 111px;\n    height: 76px;\n    position: absolute;\n    bottom: -14px;\n    right: -14px;\n    border-bottom: 1px solid #000;\n    border-right: 1px solid #000;\n  }\n \n  .description-details {\n    text-align: justify;\n    font-size: 18px;\n    margin: 2% 3% 12%;\n    position: relative;\n  }\n\n  .philosophy-text {\n    font-size: 75px;    \n  }\n\n  .philosophy-detail {\n    font-size: 25px;    \n    width: 57%;\n    margin: 1% auto;\n  }\n\n  .philosophy-logo {\n    width: 65%;\n  }\n\n  .philosophy-description {\n    text-align: justify;\n    font-size: 18px;\n    margin: 8% 2%;\n  }\n  .padder {\n    margin: 0 10%;\n  }\n}\n\n@media screen and (min-width: 1920px){\n  .container-description-details::before {   \n    left: 9px;\n  }\n\n  .container-description-details::after {   \n    right: 9px;\n  } \n\n}", ""]);



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(23);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/index.css
var src = __webpack_require__(49);

// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(2);

// EXTERNAL MODULE: ../lib/index.js
var lib = __webpack_require__(19);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(5);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(11);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/components/header/Header.css
var header_Header = __webpack_require__(57);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/components/header/Header.js
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err);}_next(undefined);});};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}var Header_Header=/*#__PURE__*/function(_Component){_inherits(Header,_Component);function Header(){_classCallCheck(this,Header);return _possibleConstructorReturn(this,_getPrototypeOf(Header).apply(this,arguments));}_createClass(Header,[{key:"render",value:function render(){var _this$props=this.props,t=_this$props.t,i18n=_this$props.i18n;return external_react_default.a.createElement("div",{className:"Header"},external_react_default.a.createElement("header",{id:"header",className:"headerTop header headerBackground"},external_react_default.a.createElement("div",{className:"container"},external_react_default.a.createElement("figure",{className:"logoContainer"},external_react_default.a.createElement(router_["Link"],{className:"logoLink externalMenu",to:"/"},external_react_default.a.createElement("img",{src:"https://drive.google.com/uc?id=1x8AjooD16XjYfABZW5SfDbN9d6NK275T",alt:"",className:"logoHeader"}),external_react_default.a.createElement("p",{className:"logoText"},"Ashara Studios"))),external_react_default.a.createElement("figure",{id:"menu",className:"menuBorder menuIcon"},external_react_default.a.createElement("img",{id:"bordeMenu",src:"https://drive.google.com/uc?id=1T6fAa3OBfP1wOXKpAkLznjk8jSSqPADu",alt:""})),external_react_default.a.createElement("figure",{className:"barrasContainer menuIcon"},external_react_default.a.createElement("img",{src:"https://drive.google.com/uc?id=1iDZSKpZ2oHDCl81bW131b_17JlmA0ByU",alt:""})),external_react_default.a.createElement("input",{type:"checkbox",id:"cbxMenu"}),external_react_default.a.createElement("div",{className:"modules"},external_react_default.a.createElement("ul",null,external_react_default.a.createElement("li",{className:"logoMenu"},external_react_default.a.createElement("img",{src:"https://drive.google.com/uc?id=1etH6wKHI6JBnKxydOeHoUDnpGG_EwnCq",alt:""})),external_react_default.a.createElement("li",null,external_react_default.a.createElement("nav",{className:"headerDropDownMenu"},external_react_default.a.createElement("input",{type:"checkbox",className:"headerActivateMenu",id:"headerAccordion",name:"headerAccordion"}),external_react_default.a.createElement("p",{className:"textMenu borderMenuBottom"},external_react_default.a.createElement("label",{id:"units",className:"cursorPointer",htmlFor:"headerAccordion"},t("misc.units"),external_react_default.a.createElement("span",{id:"unitsIcon",className:"unitsIcon"},"+"))),external_react_default.a.createElement("div",{className:"headerDropDown unitsDetails"},external_react_default.a.createElement("div",{className:"unitsLinksContainer"},external_react_default.a.createElement("div",{className:"units unitLink"},external_react_default.a.createElement(router_["Link"],{className:"link soft",to:"/soft"},"SOFT")),external_react_default.a.createElement("div",{className:"units unitLink"},external_react_default.a.createElement(router_["Link"],{className:"link science",to:"/science"},"SCIENCE")),external_react_default.a.createElement("div",{className:"units unitLink"},external_react_default.a.createElement(router_["Link"],{className:"link games",to:"/games"},"GAMES")),external_react_default.a.createElement("div",{className:"units unitLink"},external_react_default.a.createElement(router_["Link"],{className:"link iot",to:"/iot"},"IOT")),external_react_default.a.createElement("div",{className:"units unitLink"},external_react_default.a.createElement(router_["Link"],{className:"link school",to:"/school"},"SCHOOL")),external_react_default.a.createElement("div",{className:"units unitLink"},external_react_default.a.createElement(router_["Link"],{className:"link media",to:"/media"},"MEDIA")))))),external_react_default.a.createElement("li",null,external_react_default.a.createElement("p",{id:"aboutUs",className:"units textMenu externalMenu"},external_react_default.a.createElement(router_["Link"],{to:"/aboutus"},t("misc.aboutUs")))),external_react_default.a.createElement("li",null,external_react_default.a.createElement("p",{id:"contactUs",className:"units textMenu borderMenuTop externalMenu"},external_react_default.a.createElement(router_["Link"],{to:"/contactus"},t("misc.contactUs")))))))));}//----->ANIMACIONES
},{key:"componentDidMount",value:function componentDidMount(){var menuMobile=document.getElementById('menu');var menu=document.getElementsByClassName('units');var externalMenu=document.getElementsByClassName('externalMenu');//headerAccordion
var cbxHeaderAccordion=document.getElementById('headerAccordion');var cbxMenu=document.getElementById('cbxMenu');var bordeMenu=document.getElementById('bordeMenu');var units=document.getElementById('units');var unitsIcon=document.getElementById('unitsIcon');this.adicionarEventosMenu(menu,cbxMenu,bordeMenu,units,unitsIcon,externalMenu,cbxHeaderAccordion,menuMobile);}},{key:"adicionarEventosMenu",value:function(){var _adicionarEventosMenu=_asyncToGenerator(/*#__PURE__*/regenerator_default.a.mark(function _callee(menu,cbxMenu,bordeMenu,units,unitsIcon,externalMenu,cbxHeaderAccordion,menuMobile){var _this=this;var i,_loop,_i;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:if(units){units.addEventListener('click',function(){unitsIcon.innerHTML=unitsIcon.innerHTML==="-"?"+":"-";});}if(externalMenu){for(i=0;i<externalMenu.length;i++){externalMenu[i].addEventListener('click',function(){cbxHeaderAccordion.checked=false;unitsIcon.innerHTML="+";});}}if(menuMobile){menuMobile.addEventListener('click',function(){if(window.innerWidth<=768){cbxMenu.checked=!cbxMenu.checked;_this.changeAnimationClass(cbxMenu,bordeMenu);}});menuMobile.addEventListener('animationend',function(){_this.animateButtonMenuMobile(bordeMenu);});}if(menu){_loop=function _loop(_i){menu[_i].addEventListener('click',function(){_this.manageSelectedMenu(menu,_i);window.scrollTo(0,0);if(window.innerWidth<=768){cbxMenu.checked=!cbxMenu.checked;_this.changeAnimationClass(cbxMenu,bordeMenu);}});menu[_i].addEventListener('animationend',function(){_this.animateButtonMenuMobile(bordeMenu);});};for(_i=0;_i<menu.length;_i++){_loop(_i);}}case 4:case"end":return _context.stop();}}},_callee,this);}));function adicionarEventosMenu(_x,_x2,_x3,_x4,_x5,_x6,_x7,_x8){return _adicionarEventosMenu.apply(this,arguments);}return adicionarEventosMenu;}()},{key:"changeAnimationClass",value:function changeAnimationClass(cbxMenu,bordeMenu){cbxMenu.checked===true?bordeMenu.classList.add('animateLeft'):bordeMenu.classList.add('animateRight');}},{key:"manageSelectedMenu",value:function manageSelectedMenu(menu,selectedMenu){for(var i=0;i<menu.length;i++){menu[i].classList.remove('underline');}menu[selectedMenu].classList.add('underline');}},{key:"animateButtonMenuMobile",value:function animateButtonMenuMobile(bordeMenu){if(window.innerWidth<=768){bordeMenu.classList.remove('animateRight','animateLeft');}}//-----<ANIMACIONES
}]);return Header;}(external_react_["Component"]);/* harmony default export */ var components_header_Header = (Object(external_react_i18next_["withTranslation"])()(Header_Header));
// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/components/footer/Footer.css
var footer_Footer = __webpack_require__(58);

// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/components/footer/footer-icon/FooterIcon.css
var footer_icon_FooterIcon = __webpack_require__(59);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/components/footer/footer-icon/FooterIcon.js
function FooterIcon_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){FooterIcon_typeof=function _typeof(obj){return typeof obj;};}else{FooterIcon_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return FooterIcon_typeof(obj);}function FooterIcon_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function FooterIcon_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function FooterIcon_createClass(Constructor,protoProps,staticProps){if(protoProps)FooterIcon_defineProperties(Constructor.prototype,protoProps);if(staticProps)FooterIcon_defineProperties(Constructor,staticProps);return Constructor;}function FooterIcon_possibleConstructorReturn(self,call){if(call&&(FooterIcon_typeof(call)==="object"||typeof call==="function")){return call;}return FooterIcon_assertThisInitialized(self);}function FooterIcon_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function FooterIcon_getPrototypeOf(o){FooterIcon_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return FooterIcon_getPrototypeOf(o);}function FooterIcon_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)FooterIcon_setPrototypeOf(subClass,superClass);}function FooterIcon_setPrototypeOf(o,p){FooterIcon_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return FooterIcon_setPrototypeOf(o,p);}var FooterIcon_FooterIcon=/*#__PURE__*/function(_Component){FooterIcon_inherits(FooterIcon,_Component);function FooterIcon(){FooterIcon_classCallCheck(this,FooterIcon);return FooterIcon_possibleConstructorReturn(this,FooterIcon_getPrototypeOf(FooterIcon).apply(this,arguments));}FooterIcon_createClass(FooterIcon,[{key:"render",value:function render(){return external_react_default.a.createElement("div",{className:"icon-container"},external_react_default.a.createElement("img",{alt:"footer-icon",className:"footer-icon footer-icon-small",src:this.props.smallIcon}),external_react_default.a.createElement("img",{alt:"footer-icon",className:"footer-icon footer-icon-medium",src:this.props.medIcon}),external_react_default.a.createElement("img",{alt:"footer-icon",className:"footer-icon footer-icon-big",src:this.props.bigIcon}),external_react_default.a.createElement("img",{alt:"footer-icon",className:"footer-icon footer-icon-large",src:this.props.largeIcon}));}}]);return FooterIcon;}(external_react_["Component"]);/* harmony default export */ var footer_footer_icon_FooterIcon = (FooterIcon_FooterIcon);
// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/data/footer.json
var footer = __webpack_require__(6);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/components/footer/Footer.js
function Footer_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){Footer_typeof=function _typeof(obj){return typeof obj;};}else{Footer_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return Footer_typeof(obj);}function Footer_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function Footer_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function Footer_createClass(Constructor,protoProps,staticProps){if(protoProps)Footer_defineProperties(Constructor.prototype,protoProps);if(staticProps)Footer_defineProperties(Constructor,staticProps);return Constructor;}function Footer_possibleConstructorReturn(self,call){if(call&&(Footer_typeof(call)==="object"||typeof call==="function")){return call;}return Footer_assertThisInitialized(self);}function Footer_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function Footer_getPrototypeOf(o){Footer_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return Footer_getPrototypeOf(o);}function Footer_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)Footer_setPrototypeOf(subClass,superClass);}function Footer_setPrototypeOf(o,p){Footer_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return Footer_setPrototypeOf(o,p);}var Footer_Footer=/*#__PURE__*/function(_Component){Footer_inherits(Footer,_Component);function Footer(){Footer_classCallCheck(this,Footer);return Footer_possibleConstructorReturn(this,Footer_getPrototypeOf(Footer).apply(this,arguments));}Footer_createClass(Footer,[{key:"render",value:function render(){var _this$props=this.props,t=_this$props.t,i18n=_this$props.i18n;return external_react_default.a.createElement("footer",{className:"footer-container"},external_react_default.a.createElement("section",{className:"footer"},external_react_default.a.createElement("img",{className:"footer-back footer-back-small",src:footer.data.background.small,alt:"footer background"}),external_react_default.a.createElement("img",{className:"footer-back footer-back-medium",src:footer.data.background.medium,alt:"footer background"}),external_react_default.a.createElement("img",{className:"footer-back footer-back-big",src:footer.data.background.big,alt:"footer background"}),external_react_default.a.createElement("img",{className:"footer-back footer-back-large",src:footer.data.background.large,alt:"footer background"}),external_react_default.a.createElement("div",{className:"footer-grid-container"},external_react_default.a.createElement("div",{className:"logo"},external_react_default.a.createElement(footer_footer_icon_FooterIcon,{smallIcon:footer.data.logo.small,medIcon:footer.data.logo.medium,bigIcon:footer.data.logo.big,largeIcon:footer.data.logo.large})),external_react_default.a.createElement("div",{className:"filler"}),external_react_default.a.createElement("div",{className:"emailme"},external_react_default.a.createElement("p",{className:"text1"},"INFO@ASHARASTUDIOS.COM"),external_react_default.a.createElement("i",{className:"fas fa-envelope fa-2x",style:{color:'#fff'}})),external_react_default.a.createElement("div",{className:"callme"},external_react_default.a.createElement("p",{className:"text1"},"+57 3142114475"),external_react_default.a.createElement("i",{className:"fas fa-phone fa-2x",style:{color:'#fff'}})),external_react_default.a.createElement("div",{className:"closing"},external_react_default.a.createElement("div",{className:"privacy"},external_react_default.a.createElement(footer_footer_icon_FooterIcon,{smallIcon:footer.data.policy.small,medIcon:footer.data.policy.medium,bigIcon:footer.data.policy.big,largeIcon:footer.data.policy.large}),external_react_default.a.createElement("a",{href:footer.data.policy.source,className:"text2"},t("misc.policies"))),external_react_default.a.createElement("p",{className:"text2"},t("misc.copy"))))));}}]);return Footer;}(external_react_["Component"]);/* harmony default export */ var components_footer_Footer = (Object(external_react_i18next_["withTranslation"])()(Footer_Footer));
// EXTERNAL MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/components/app/App.css
var app_App = __webpack_require__(60);

// EXTERNAL MODULE: external "i18next"
var external_i18next_ = __webpack_require__(24);
var external_i18next_default = /*#__PURE__*/__webpack_require__.n(external_i18next_);

// EXTERNAL MODULE: external "i18next-xhr-backend"
var external_i18next_xhr_backend_ = __webpack_require__(61);

// EXTERNAL MODULE: external "i18next-browser-languagedetector"
var external_i18next_browser_languagedetector_ = __webpack_require__(62);

// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/i18n.js
var resources={en:{translation:__webpack_require__(63)},es:{translation:__webpack_require__(64)}};external_i18next_default.a// load translation using xhr -> see /public/locales
// learn more: https://github.com/i18next/i18next-xhr-backend
// .use(Backend)
// detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
// .use(LanguageDetector)
// pass the i18n instance to react-i18next.
.use(external_react_i18next_["initReactI18next"])// init i18next
// for all options read: https://www.i18next.com/overview/configuration-options
.init({resources:resources,lng:'es',fallbackLng:'en',load:'languageOnly',debug:true,ns:['translation'],defaultNS:'translation',interpolation:{escapeValue:false// not needed for react as it escapes by default
}});/* harmony default export */ var src_i18n = (external_i18next_default.a);
// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/components/app/App.js
function App_typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){App_typeof=function _typeof(obj){return typeof obj;};}else{App_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return App_typeof(obj);}function App_classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function App_defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function App_createClass(Constructor,protoProps,staticProps){if(protoProps)App_defineProperties(Constructor.prototype,protoProps);if(staticProps)App_defineProperties(Constructor,staticProps);return Constructor;}function App_possibleConstructorReturn(self,call){if(call&&(App_typeof(call)==="object"||typeof call==="function")){return call;}return App_assertThisInitialized(self);}function App_assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function App_getPrototypeOf(o){App_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return App_getPrototypeOf(o);}function App_inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)App_setPrototypeOf(subClass,superClass);}function App_setPrototypeOf(o,p){App_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return App_setPrototypeOf(o,p);}// Static Site Support
var App_App=/*#__PURE__*/function(_Component){App_inherits(App,_Component);function App(){App_classCallCheck(this,App);return App_possibleConstructorReturn(this,App_getPrototypeOf(App).apply(this,arguments));}App_createClass(App,[{key:"render",value:function render(){var Main=function Main(_ref){var children=_ref.children;return external_react_default.a.createElement("div",{className:"UnitsMain"},external_react_default.a.createElement(components_header_Header,null),children,external_react_default.a.createElement(components_footer_Footer,null));};return external_react_default.a.createElement(lib["Root"],null,external_react_default.a.createElement("div",{className:"App"},external_react_default.a.createElement(external_react_i18next_["I18nextProvider"],{i18n:src_i18n},external_react_default.a.createElement(router_["Router"],null,external_react_default.a.createElement(Main,{path:"/"},external_react_default.a.createElement(lib["Routes"],{default:true}))))));}}]);return App;}(external_react_["Component"]);/* harmony default export */ var components_app_App = (App_App);
// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/serviceWorker.js
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
function register(config){if(typeof window!=='undefined'||typeof navigator!=='undefined'){var isLocalhost=Boolean(window.location.hostname==='localhost'||// [::1] is the IPv6 localhost address.
window.location.hostname==='[::1]'||// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));if( true&&'serviceWorker'in navigator){// The URL constructor is available in all browsers that support SW.
var publicUrl=new URL(process.env.PUBLIC_URL,window.location.href);if(publicUrl.origin!==window.location.origin){// Our service worker won't work if PUBLIC_URL is on a different origin
// from what our page is served on. This might happen if a CDN is used to
// serve assets; see https://github.com/facebook/create-react-app/issues/2374
return;}window.addEventListener('load',function(){var swUrl="".concat(process.env.PUBLIC_URL,"/service-worker.js");if(isLocalhost){// This is running on localhost. Let's check if a service worker still exists or not.
checkValidServiceWorker(swUrl,config);// Add some additional logging to localhost, pointing developers to the
// service worker/PWA documentation.
navigator.serviceWorker.ready.then(function(){console.log('This web app is being served cache-first by a service '+'worker. To learn more, visit http://bit.ly/CRA-PWA');});}else{// Is not localhost. Just register service worker
registerValidSW(swUrl,config);}});}}}function registerValidSW(swUrl,config){navigator.serviceWorker.register(swUrl).then(function(registration){registration.onupdatefound=function(){var installingWorker=registration.installing;if(installingWorker==null){return;}installingWorker.onstatechange=function(){if(installingWorker.state==='installed'){if(navigator.serviceWorker.controller){// At this point, the updated precached content has been fetched,
// but the previous service worker will still serve the older
// content until all client tabs are closed.
console.log('New content is available and will be used when all '+'tabs for this page are closed. See http://bit.ly/CRA-PWA.');// Execute callback
if(config&&config.onUpdate){config.onUpdate(registration);}}else{// At this point, everything has been precached.
// It's the perfect time to display a
// "Content is cached for offline use." message.
console.log('Content is cached for offline use.');// Execute callback
if(config&&config.onSuccess){config.onSuccess(registration);}}}};};}).catch(function(error){console.error('Error during service worker registration:',error);});}function checkValidServiceWorker(swUrl,config){// Check if the service worker can be found. If it can't reload the page.
fetch(swUrl).then(function(response){// Ensure service worker exists, and that we really are getting a JS file.
var contentType=response.headers.get('content-type');if(response.status===404||contentType!=null&&contentType.indexOf('javascript')===-1){// No service worker found. Probably a different app. Reload the page.
navigator.serviceWorker.ready.then(function(registration){registration.unregister().then(function(){window.location.reload();});});}else{// Service worker found. Proceed as normal.
registerValidSW(swUrl,config);}}).catch(function(){console.log('No internet connection found. App is running in offline mode.');});}function unregister(){if(typeof navigator!=='undefined'){if('serviceWorker'in navigator){navigator.serviceWorker.ready.then(function(registration){registration.unregister();});}}}
// CONCATENATED MODULE: /builds/AsharaStudios/Soft/AsharaWebPage/pag-ashara/src/index.js
// Export your top level component as JSX (for static rendering)
/* harmony default export */ var pag_ashara_src = __webpack_exports__["default"] = (components_app_App);// Render your app
if(typeof document!=='undefined'){var renderMethod= false?undefined:external_react_dom_default.a.hydrate||external_react_dom_default.a.render;var src_render=function render(Comp){renderMethod(external_react_default.a.createElement(Comp,null),document.getElementById('root'));};// Render!
src_render(components_app_App);// Hot Module Replacement
if(false){}}// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
register();

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.85ae8bc7.js.map