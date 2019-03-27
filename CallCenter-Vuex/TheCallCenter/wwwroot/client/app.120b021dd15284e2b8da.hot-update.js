webpackHotUpdate("app",{

/***/ "./node_modules/@aspnet/signalr/dist/esm/DefaultHttpClient.js":
false,

/***/ "./node_modules/@aspnet/signalr/dist/esm/Errors.js":
false,

/***/ "./node_modules/@aspnet/signalr/dist/esm/HttpClient.js":
false,

/***/ "./node_modules/@aspnet/signalr/dist/esm/HubConnection.js":
false,

/***/ "./node_modules/@aspnet/signalr/dist/esm/HubConnectionBuilder.js":
false,

/***/ "./node_modules/@aspnet/signalr/dist/esm/IHubProtocol.js":
false,

/***/ "./node_modules/@aspnet/signalr/dist/esm/ILogger.js":
false,

/***/ "./node_modules/@aspnet/signalr/dist/esm/ITransport.js":
false,

/***/ "./node_modules/@aspnet/signalr/dist/esm/JsonHubProtocol.js":
false,

/***/ "./node_modules/@aspnet/signalr/dist/esm/Loggers.js":
false,

/***/ "./node_modules/@aspnet/signalr/dist/esm/index.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
false,

/***/ "./src/callHub.js":
false,

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar store = new vuex__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Store({\n  strict: true,\n  state: {\n    calls: [],\n    error: \"\"\n  },\n  mutations: {\n    setError: function setError(state, msg) {\n      state.error = msg;\n      if (msg) console.log(\"Error: \".concat(msg));\n    },\n    setCalls: function setCalls(state, calls) {\n      state.calls = calls;\n    },\n    addCall: function addCall(state, call) {\n      state.calls.push(call);\n    },\n    removeCall: function removeCall(state, id) {\n      state.calls = state.calls.filter(function (c) {\n        return c.id !== id;\n      });\n    }\n  },\n  actions: {\n    load: function load(_ref) {\n      var commit = _ref.commit;\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"/api/calls\").then(function (res) {\n        var calls = res.data;\n        commit(\"setCalls\", calls);\n      }).catch(function () {\n        return commit(\"setError\", \"Failed to load the calls...\");\n      });\n    },\n    answer: function answer(_ref2, call) {\n      var commit = _ref2.commit;\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch(\"/api/calls/\".concat(call.id, \"/answer\")).then(function () {\n        commit(\"removeCall\", call);\n        CallHub.client.invoke(\"call-answered\", call.id);\n        _router__WEBPACK_IMPORTED_MODULE_3__[\"default\"].push(\"/\");\n      }).catch(function () {\n        return commit(\"setError\", \"Failed to mark it as answered\");\n      });\n    }\n  }\n}); // Setup Hub\n\nCallHub.client.on(\"call-answered\", function (id) {\n  store.commit(\"removeCall\", id);\n});\nCallHub.client.on(\"new-call\", function (call) {\n  store.commit(\"addCall\", call);\n});\nCallHub.start();\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUuanM/YzBkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIi4vcm91dGVyXCI7XG5cblZ1ZS51c2UoVnVleCk7XG5cbnZhciBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcbiAgc3RyaWN0OiB0cnVlLFxuICBzdGF0ZToge1xuICAgIGNhbGxzOiBbXSxcbiAgICBlcnJvcjogXCJcIlxuICB9LFxuICBtdXRhdGlvbnM6IHtcbiAgICBzZXRFcnJvcihzdGF0ZSwgbXNnKSB7XG4gICAgICBzdGF0ZS5lcnJvciA9IG1zZztcclxuICAgICAgaWYgKG1zZykgY29uc29sZS5sb2coYEVycm9yOiAke21zZ31gKTtcclxuICAgIH0sXG4gICAgc2V0Q2FsbHMoc3RhdGUsIGNhbGxzKSB7XG4gICAgICBzdGF0ZS5jYWxscyA9IGNhbGxzO1xyXG4gICAgfSxcbiAgICBhZGRDYWxsKHN0YXRlLCBjYWxsKSB7XG4gICAgICBzdGF0ZS5jYWxscy5wdXNoKGNhbGwpO1xyXG4gICAgfSxcbiAgICByZW1vdmVDYWxsKHN0YXRlLCBpZCkge1xuICAgICAgc3RhdGUuY2FsbHMgPSBzdGF0ZS5jYWxscy5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMuaWQgIT09IGlkOyB9KTtcclxuICAgIH1cbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGxvYWQoeyBjb21taXQgfSkge1xuICAgICAgYXhpb3MuZ2V0KFwiL2FwaS9jYWxsc1wiKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBsZXQgY2FsbHMgPSByZXMuZGF0YTtcclxuICAgICAgICAgIGNvbW1pdChcInNldENhbGxzXCIsIGNhbGxzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiBjb21taXQoXCJzZXRFcnJvclwiLCBcIkZhaWxlZCB0byBsb2FkIHRoZSBjYWxscy4uLlwiKSk7XHJcbiAgICB9LFxuICAgIGFuc3dlcih7IGNvbW1pdCB9LCBjYWxsKSB7XG4gICAgICBheGlvcy5wYXRjaChgL2FwaS9jYWxscy8ke2NhbGwuaWR9L2Fuc3dlcmApXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgY29tbWl0KFwicmVtb3ZlQ2FsbFwiLCBjYWxsKTtcclxuICAgICAgICAgIENhbGxIdWIuY2xpZW50Lmludm9rZShcImNhbGwtYW5zd2VyZWRcIiwgY2FsbC5pZCk7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gY29tbWl0KFwic2V0RXJyb3JcIiwgXCJGYWlsZWQgdG8gbWFyayBpdCBhcyBhbnN3ZXJlZFwiKSk7XHJcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBTZXR1cCBIdWJcbkNhbGxIdWIuY2xpZW50Lm9uKFwiY2FsbC1hbnN3ZXJlZFwiLCBmdW5jdGlvbiAoaWQpIHtcclxuICBzdG9yZS5jb21taXQoXCJyZW1vdmVDYWxsXCIsIGlkKTtcclxufSk7XHJcblxyXG5DYWxsSHViLmNsaWVudC5vbihcIm5ldy1jYWxsXCIsIGZ1bmN0aW9uIChjYWxsKSB7XHJcbiAgc3RvcmUuY29tbWl0KFwiYWRkQ2FsbFwiLCBjYWxsKTtcclxufSk7XHJcblxyXG5DYWxsSHViLnN0YXJ0KCk7XHJcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQWJBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQWpCQTtBQXJCQTtBQUNBO0FBMENBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store.js\n");

/***/ })

})