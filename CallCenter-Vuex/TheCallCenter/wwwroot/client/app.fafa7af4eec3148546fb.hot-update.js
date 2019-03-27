webpackHotUpdate("app",{

/***/ "./src/alertplugin.js":
/*!****************************!*\
  !*** ./src/alertplugin.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (store) {\n  store.subscribe(function (mutation, state) {\n    if (mutation.type === \"removeCall\") {\n      alert(\"Call removed!\");\n    }\n  });\n  store.subscribeAction({\n    after: function after(action, state) {\n      if (action.type === \"load\") {\n        alert(\"loading data\");\n      }\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWxlcnRwbHVnaW4uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWxlcnRwbHVnaW4uanM/YmE0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBzdG9yZSA9PiB7XHJcbiAgc3RvcmUuc3Vic2NyaWJlKChtdXRhdGlvbiwgc3RhdGUpID0+IHtcclxuICAgIGlmIChtdXRhdGlvbi50eXBlID09PSBcInJlbW92ZUNhbGxcIikge1xyXG4gICAgICBhbGVydChcIkNhbGwgcmVtb3ZlZCFcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHN0b3JlLnN1YnNjcmliZUFjdGlvbih7XHJcbiAgICBhZnRlcjogKGFjdGlvbiwgc3RhdGUpID0+IHtcclxuICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBcImxvYWRcIikge1xyXG4gICAgICAgIGFsZXJ0KFwibG9hZGluZyBkYXRhXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/alertplugin.js\n");

/***/ })

})