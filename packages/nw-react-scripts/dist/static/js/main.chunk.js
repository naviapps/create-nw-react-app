(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['main'],
  {
    /***/ '../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./template/src/App.css':
      /*!*********************************************************************************************************************************************************************************************************************!*\
  !*** /Users/haruki/GitHub/naviapps/create-nw-react-app/node_modules/css-loader??ref--6-oneOf-3-1!/Users/haruki/GitHub/naviapps/create-nw-react-app/node_modules/postcss-loader/src??postcss!./template/src/App.css ***!
  \*********************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../../../node_modules/css-loader/lib/css-base.js */ '../../node_modules/css-loader/lib/css-base.js'
        )(false);
        // imports

        // module
        exports.push([
          module.i,
          '.App {\n  text-align: center;\n}\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes App-logo-spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n',
          '',
        ]);

        // exports

        /***/
      },

    /***/ '../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./template/src/index.css':
      /*!***********************************************************************************************************************************************************************************************************************!*\
  !*** /Users/haruki/GitHub/naviapps/create-nw-react-app/node_modules/css-loader??ref--6-oneOf-3-1!/Users/haruki/GitHub/naviapps/create-nw-react-app/node_modules/postcss-loader/src??postcss!./template/src/index.css ***!
  \***********************************************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../../../node_modules/css-loader/lib/css-base.js */ '../../node_modules/css-loader/lib/css-base.js'
        )(false);
        // imports

        // module
        exports.push([
          module.i,
          'body {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n}\n',
          '',
        ]);

        // exports

        /***/
      },

    /***/ '../../node_modules/webpack/hot sync ^\\.\\/log$':
      /*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var map = {
          './log': '../../node_modules/webpack/hot/log.js',
        };

        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          var id = map[req];
          if (!(id + 1)) {
            // check for number or string
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          }
          return id;
        }
        webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        };
        webpackContext.resolve = webpackContextResolve;
        module.exports = webpackContext;
        webpackContext.id = '../../node_modules/webpack/hot sync ^\\.\\/log$';

        /***/
      },

    /***/ './template/src/App.css':
      /*!******************************!*\
  !*** ./template/src/App.css ***!
  \******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./App.css */ '../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./template/src/App.css'
        );

        if (typeof content === 'string') content = [[module.i, content, '']];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../../../node_modules/style-loader/lib/addStyles.js */ '../../node_modules/style-loader/lib/addStyles.js'
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./App.css */ '../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./template/src/App.css',
            function() {
              var newContent = __webpack_require__(
                /*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./App.css */ '../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./template/src/App.css'
              );

              if (typeof newContent === 'string')
                newContent = [[module.i, newContent, '']];

              var locals = (function(a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  'Aborting CSS HMR due to changed css-modules locals.'
                );

              update(newContent);
            }
          );

          module.hot.dispose(function() {
            update();
          });
        }

        /***/
      },

    /***/ './template/src/App.js':
      /*!*****************************!*\
  !*** ./template/src/App.js ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Users_haruki_GitHub_naviapps_create_nw_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! /Users/haruki/GitHub/naviapps/create-nw-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ '../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js'
        );
        /* harmony import */ var _Users_haruki_GitHub_naviapps_create_nw_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! /Users/haruki/GitHub/naviapps/create-nw-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ '../../node_modules/@babel/runtime/helpers/esm/createClass.js'
        );
        /* harmony import */ var _Users_haruki_GitHub_naviapps_create_nw_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! /Users/haruki/GitHub/naviapps/create-nw-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ '../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js'
        );
        /* harmony import */ var _Users_haruki_GitHub_naviapps_create_nw_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! /Users/haruki/GitHub/naviapps/create-nw-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ '../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js'
        );
        /* harmony import */ var _Users_haruki_GitHub_naviapps_create_nw_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! /Users/haruki/GitHub/naviapps/create-nw-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ '../../node_modules/@babel/runtime/helpers/esm/inherits.js'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! react */ '../../node_modules/react/index.js'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./logo.svg */ './template/src/logo.svg'
        );
        /* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          _logo_svg__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./App.css */ './template/src/App.css'
        );
        /* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          _App_css__WEBPACK_IMPORTED_MODULE_7__
        );

        var _jsxFileName =
          '/Users/haruki/GitHub/naviapps/create-nw-react-app/packages/nw-react-scripts/template/src/App.js';

        var App =
          /*#__PURE__*/
          (function(_Component) {
            Object(
              _Users_haruki_GitHub_naviapps_create_nw_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[
                'default'
              ]
            )(App, _Component);

            function App() {
              Object(
                _Users_haruki_GitHub_naviapps_create_nw_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[
                  'default'
                ]
              )(this, App);

              return Object(
                _Users_haruki_GitHub_naviapps_create_nw_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[
                  'default'
                ]
              )(
                this,
                Object(
                  _Users_haruki_GitHub_naviapps_create_nw_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[
                    'default'
                  ]
                )(App).apply(this, arguments)
              );
            }

            Object(
              _Users_haruki_GitHub_naviapps_create_nw_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ]
            )(App, [
              {
                key: 'render',
                value: function render() {
                  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'div',
                    {
                      className: 'App',
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8,
                      },
                      __self: this,
                    },
                    react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                      'header',
                      {
                        className: 'App-header',
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 9,
                        },
                        __self: this,
                      },
                      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        'img',
                        {
                          src: _logo_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
                          className: 'App-logo',
                          alt: 'logo',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 10,
                          },
                          __self: this,
                        }
                      ),
                      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11,
                          },
                          __self: this,
                        },
                        'Edit ',
                        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                          'code',
                          {
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 12,
                            },
                            __self: this,
                          },
                          'src/App.js'
                        ),
                        ' and save to reload.'
                      ),
                      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        'a',
                        {
                          className: 'App-link',
                          href: 'https://reactjs.org',
                          target: '_blank',
                          rel: 'noopener noreferrer',
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14,
                          },
                          __self: this,
                        },
                        'Learn React'
                      )
                    )
                  );
                },
              },
            ]);

            return App;
          })(react__WEBPACK_IMPORTED_MODULE_5__['Component']);

        /* harmony default export */ __webpack_exports__['default'] = App;

        /***/
      },

    /***/ './template/src/index.css':
      /*!********************************!*\
  !*** ./template/src/index.css ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ '../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./template/src/index.css'
        );

        if (typeof content === 'string') content = [[module.i, content, '']];

        var transform;
        var insertInto;

        var options = { hmr: true };

        options.transform = transform;
        options.insertInto = undefined;

        var update = __webpack_require__(
          /*! ../../../../node_modules/style-loader/lib/addStyles.js */ '../../node_modules/style-loader/lib/addStyles.js'
        )(content, options);

        if (content.locals) module.exports = content.locals;

        if (true) {
          module.hot.accept(
            /*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ '../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./template/src/index.css',
            function() {
              var newContent = __webpack_require__(
                /*! !../../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../../node_modules/postcss-loader/src??postcss!./index.css */ '../../node_modules/css-loader/index.js?!../../node_modules/postcss-loader/src/index.js?!./template/src/index.css'
              );

              if (typeof newContent === 'string')
                newContent = [[module.i, newContent, '']];

              var locals = (function(a, b) {
                var key,
                  idx = 0;

                for (key in a) {
                  if (!b || a[key] !== b[key]) return false;
                  idx++;
                }

                for (key in b) idx--;

                return idx === 0;
              })(content.locals, newContent.locals);

              if (!locals)
                throw new Error(
                  'Aborting CSS HMR due to changed css-modules locals.'
                );

              update(newContent);
            }
          );

          module.hot.dispose(function() {
            update();
          });
        }

        /***/
      },

    /***/ './template/src/index.js':
      /*!*******************************!*\
  !*** ./template/src/index.js ***!
  \*******************************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ '../../node_modules/react/index.js'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-dom */ '../../node_modules/react-dom/index.js'
        );
        /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react_dom__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./index.css */ './template/src/index.css'
        );
        /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _index_css__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./App */ './template/src/App.js'
        );
        /* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./serviceWorker */ './template/src/serviceWorker.js'
        );
        var _jsxFileName =
          '/Users/haruki/GitHub/naviapps/create-nw-react-app/packages/nw-react-scripts/template/src/index.js';

        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _App__WEBPACK_IMPORTED_MODULE_3__['default'],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 7,
              },
              __self: undefined,
            }
          ),
          document.getElementById('root')
        ); // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: http://bit.ly/CRA-PWA

        _serviceWorker__WEBPACK_IMPORTED_MODULE_4__['unregister']();

        /***/
      },

    /***/ './template/src/logo.svg':
      /*!*******************************!*\
  !*** ./template/src/logo.svg ***!
  \*******************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + 'static/media/logo.5d5d9eef.svg';

        /***/
      },

    /***/ './template/src/serviceWorker.js':
      /*!***************************************!*\
  !*** ./template/src/serviceWorker.js ***!
  \***************************************/
      /*! exports provided: register, unregister */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'register',
          function() {
            return register;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'unregister',
          function() {
            return unregister;
          }
        );
        // This optional code is used to register a service worker.
        // register() is not called by default.
        // This lets the app load faster on subsequent visits in production, and gives
        // it offline capabilities. However, it also means that developers (and users)
        // will only see deployed updates on subsequent visits to a page, after all the
        // existing tabs open on the page have been closed, since previously cached
        // resources are updated in the background.
        // To learn more about the benefits of this model and instructions on how to
        // opt-in, read http://bit.ly/CRA-PWA
        var isLocalhost = Boolean(
          window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
          window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
        function register(config) {
          if (false) {
            var publicUrl;
          }
        }

        function registerValidSW(swUrl, config) {
          navigator.serviceWorker
            .register(swUrl)
            .then(function(registration) {
              registration.onupdatefound = function() {
                var installingWorker = registration.installing;

                if (installingWorker == null) {
                  return;
                }

                installingWorker.onstatechange = function() {
                  if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                      // At this point, the updated precached content has been fetched,
                      // but the previous service worker will still serve the older
                      // content until all client tabs are closed.
                      console.log(
                        'New content is available and will be used when all ' +
                          'tabs for this page are closed. See http://bit.ly/CRA-PWA.'
                      ); // Execute callback

                      if (config && config.onUpdate) {
                        config.onUpdate(registration);
                      }
                    } else {
                      // At this point, everything has been precached.
                      // It's the perfect time to display a
                      // "Content is cached for offline use." message.
                      console.log('Content is cached for offline use.'); // Execute callback

                      if (config && config.onSuccess) {
                        config.onSuccess(registration);
                      }
                    }
                  }
                };
              };
            })
            .catch(function(error) {
              console.error('Error during service worker registration:', error);
            });
        }

        function checkValidServiceWorker(swUrl, config) {
          // Check if the service worker can be found. If it can't reload the page.
          fetch(swUrl)
            .then(function(response) {
              // Ensure service worker exists, and that we really are getting a JS file.
              var contentType = response.headers.get('content-type');

              if (
                response.status === 404 ||
                (contentType != null &&
                  contentType.indexOf('javascript') === -1)
              ) {
                // No service worker found. Probably a different app. Reload the page.
                navigator.serviceWorker.ready.then(function(registration) {
                  registration.unregister().then(function() {
                    window.location.reload();
                  });
                });
              } else {
                // Service worker found. Proceed as normal.
                registerValidSW(swUrl, config);
              }
            })
            .catch(function() {
              console.log(
                'No internet connection found. App is running in offline mode.'
              );
            });
        }

        function unregister() {
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then(function(registration) {
              registration.unregister();
            });
          }
        }

        /***/
      },

    /***/ 0:
      /*!******************************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:3000/ (webpack)/hot/dev-server.js ./template/src/index.js ***!
  \******************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! /Users/haruki/GitHub/naviapps/create-nw-react-app/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:3000/ */ '../../node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:3000/'
        );
        __webpack_require__(
          /*! /Users/haruki/GitHub/naviapps/create-nw-react-app/node_modules/webpack/hot/dev-server.js */ '../../node_modules/webpack/hot/dev-server.js'
        );
        module.exports = __webpack_require__(
          /*! /Users/haruki/GitHub/naviapps/create-nw-react-app/packages/nw-react-scripts/template/src/index.js */ './template/src/index.js'
        );

        /***/
      },

    /***/ events:
      /*!*************************!*\
  !*** external "events" ***!
  \*************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('events');

        /***/
      },

    /***/ url:
      /*!**********************!*\
  !*** external "url" ***!
  \**********************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('url');

        /***/
      },
  },
  [[0, 'runtime~main', 0]],
]);
//# sourceMappingURL=main.chunk.js.map
