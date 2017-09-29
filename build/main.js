require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuxt_config_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuxt_config_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__nuxt_config_js__);



// import api from './api/api'
// import Halaman from './Halaman'


var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

// connect ke mongo ketika app sudah di inisialisasi
__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.Promise = global.Promise;
var uri = 'mongodb://localhost/project1';
__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connect(uri);
app.set(port);

// Mengimport routes Halaman
// app.use('/Halaman', Halaman)

// Mengimport dan Menge-set Nuxt.js Options

// let config = require('../nuxt.config.js')
__WEBPACK_IMPORTED_MODULE_3__nuxt_config_js___default.a.dev = !("development" === 'production');

// inisialisasi Nuxt.js
var nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](__WEBPACK_IMPORTED_MODULE_3__nuxt_config_js___default.a);

// Build di mode dev
if (__WEBPACK_IMPORTED_MODULE_3__nuxt_config_js___default.a.dev) {
    new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt).build();
}

// Memberi nuxt middleware ke express
app.use(nuxt.render);

// Listening the server
app.listen(port, host);
console.log('Server berjalan di ' + host + ':' + port);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = {

  /*
  ** Headers of the page
  */
  head: {
    title: 'project-1',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project + express.js' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }]
  },
  plugins: ['~/plugins/vuetify.js', '~/plugins/babel-plugin.js'],
  css: ['~/assets/style/app.styl'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extend: function extend(config, _ref) {
      var dev = _ref.dev,
          isServer = _ref.isServer;

      config.node = {
        fs: 'empty', net: 'empty', tls: 'empty', module: 'empty'
        // childCompiler.plugin("compilation", function(compilation) {
        //   if(compilation.cache) {
        //     if(!compilation.cache[compilerName])
        //       compilation.cache[compilerName] = {};
        //     compilation.cache = compilation.cache[compilerName];
        //   }
        // });
      };
    },

    vendor: ['vuetify', 'axios', 'mongoose', 'express', 'mongodb'],
    extractCSS: true
    /*
    ** Run ESLINT on save
    */
  }
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map