/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
System.register(["react","react-dom"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react_dom__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react_dom__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_react_dom__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.svg */ \"./src/logo.svg\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nfunction App(){function swap(arr,i,j){let temp=arr[i];arr[i]=arr[j];arr[j]=temp;}function BuildHeap(arr){let len=arr.length;// 因为二叉树的特点， 当前节点 i   左子节点 2i+1  右子节点 2i+2\nlet start=Math.floor(len/2)-1;for(let i=start;i>=0;i--){heapify(arr,i,len);}}function HeapSort(arr){console.log('原数组：',arr);const result=[];let last=arr.length-1;// 1.创建小顶堆\nBuildHeap(arr);for(let i=last;i>=0;i--){console.log('堆：',arr);// 把堆顶的值和末尾的值交换\nswap(arr,0,i);// 把末尾（堆顶）的值放进结果里\nresult.push(arr.pop());// 重新构建堆的顺序\nheapify(arr,0);}return result;}function heapify(arr,i){let current=i;// 父节点 i   左子节点 2i+1  右子节点 2i+2\n//        0\n//    1       2  \n//  3   4   5   6\nlet left=2*i+1;let right=2*i+2;if(arr[current]>arr[left]){current=left;}if(arr[current]>arr[right]){current=right;}if(current!=i){swap(arr,i,current);// 当前节点和字节点替换后，针对当前节点的子节点，去跟他的左右子节点做比较替换\nheapify(arr,current);}}(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{},[window.location.href]);function countSort(arr){// 获取数组中的最大值，用于初始化计数数组\nlet maxValue=0;for(let index=0;index<arr.length;index++){if(arr[index]>maxValue){maxValue=arr[index];}}let buckenLen=maxValue+1,bucket=new Array(buckenLen),sortedIndex=0;// 遍历数组，给计数数组的指定索引赋值+1\nfor(let i=0;i<arr.length;i++){bucket[arr[i]]=Number(bucket[arr[i]]||0)+1;// 可能有多个相同值\n}for(let j=0;j<buckenLen;j++){while(bucket[j]>0){// 取出计数数组的索引，将索引值依次赋值给有序数组，有几个值就赋值几次\narr[sortedIndex]=j;sortedIndex++;bucket[j]--;}}return arr;}(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{const arr=[];for(let index=0;index<1000000;index++){arr.push(Math.floor(Math.random()*1000000));}console.log('排序后：',HeapSort([5,2,1,4,3,-1,4,6,0,8,9,72,235,23,456,62,231,12]));// console.log(countSort([5, 2, 1, 4, 3, 1, 4, 6, 8, 9, 3]))\n// console.time()\n// console.time();\n// countSort(arr)\n// console.timeEnd()\nconst container=document.querySelector(\".container\");const w=container.clientWidth;container.style.setProperty('--w',w+'px');window.onresize=e=>{const w=container.clientWidth;container.style.setProperty('--w',w+'px');};},[]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"div\",{className:\"App\",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"header\",{className:\"App-header\",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"p\",{children:[\"Edit \",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"code\",{children:\"src/App.js\"}),\" and save to reload.\"]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"a\",{className:\"App-link\",href:\"https://reactjs.org\",target:\"_blank\",rel:\"noopener noreferrer\",children:\"Learn React\"})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\",{className:\"container\",id:\"module-container\",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\",{className:\"item\"})})]});}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://react-app/./src/App.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ \"./src/reportWebVitals.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nconst root=react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));root.render(/*#__PURE__*/ // <React.StrictMode>\n(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{})// </React.StrictMode>\n);// If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\n(0,_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://react-app/./src/index.js?");

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst reportWebVitals=onPerfEntry=>{if(onPerfEntry&&onPerfEntry instanceof Function){__webpack_require__.e(/*! import() */ \"node_modules_web-vitals_dist_web-vitals_js\").then(__webpack_require__.bind(__webpack_require__, /*! web-vitals */ \"./node_modules/web-vitals/dist/web-vitals.js\")).then(_ref=>{let{getCLS,getFID,getFCP,getLCP,getTTFB}=_ref;getCLS(onPerfEntry);getFID(onPerfEntry);getFCP(onPerfEntry);getLCP(onPerfEntry);getTTFB(onPerfEntry);});}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportWebVitals);\n\n//# sourceURL=webpack://react-app/./src/reportWebVitals.js?");

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar m = __webpack_require__(/*! react-dom */ \"react-dom\");\nif (false) {} else {\n  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;\n  exports.createRoot = function (c, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.createRoot(c, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n  exports.hydrateRoot = function (c, h, o) {\n    i.usingClientEntryPoint = true;\n    try {\n      return m.hydrateRoot(c, h, o);\n    } finally {\n      i.usingClientEntryPoint = false;\n    }\n  };\n}\n\n//# sourceURL=webpack://react-app/./node_modules/react-dom/client.js?");

/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/**\n * @license React\n * react-jsx-runtime.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  (function () {\n    'use strict';\n\n    var React = __webpack_require__(/*! react */ \"react\");\n\n    // ATTENTION\n    // When adding new symbols to this file,\n    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'\n    // The Symbol used to tag the ReactElement-like types.\n    var REACT_ELEMENT_TYPE = Symbol.for('react.element');\n    var REACT_PORTAL_TYPE = Symbol.for('react.portal');\n    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');\n    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');\n    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');\n    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');\n    var REACT_CONTEXT_TYPE = Symbol.for('react.context');\n    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');\n    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');\n    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');\n    var REACT_MEMO_TYPE = Symbol.for('react.memo');\n    var REACT_LAZY_TYPE = Symbol.for('react.lazy');\n    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');\n    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;\n    var FAUX_ITERATOR_SYMBOL = '@@iterator';\n    function getIteratorFn(maybeIterable) {\n      if (maybeIterable === null || typeof maybeIterable !== 'object') {\n        return null;\n      }\n      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];\n      if (typeof maybeIterator === 'function') {\n        return maybeIterator;\n      }\n      return null;\n    }\n    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;\n    function error(format) {\n      {\n        {\n          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n            args[_key2 - 1] = arguments[_key2];\n          }\n          printWarning('error', format, args);\n        }\n      }\n    }\n    function printWarning(level, format, args) {\n      // When changing this logic, you might want to also\n      // update consoleWithStackDev.www.js as well.\n      {\n        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;\n        var stack = ReactDebugCurrentFrame.getStackAddendum();\n        if (stack !== '') {\n          format += '%s';\n          args = args.concat([stack]);\n        } // eslint-disable-next-line react-internal/safe-string-coercion\n\n        var argsWithFormat = args.map(function (item) {\n          return String(item);\n        }); // Careful: RN currently depends on this prefix\n\n        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it\n        // breaks IE9: https://github.com/facebook/react/issues/13610\n        // eslint-disable-next-line react-internal/no-production-logging\n\n        Function.prototype.apply.call(console[level], console, argsWithFormat);\n      }\n    }\n\n    // -----------------------------------------------------------------------------\n\n    var enableScopeAPI = false; // Experimental Create Event Handle API.\n    var enableCacheElement = false;\n    var enableTransitionTracing = false; // No known bugs, but needs performance testing\n\n    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber\n    // stuff. Intended to enable React core members to more easily debug scheduling\n    // issues in DEV builds.\n\n    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.\n\n    var REACT_MODULE_REFERENCE;\n    {\n      REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');\n    }\n    function isValidElementType(type) {\n      if (typeof type === 'string' || typeof type === 'function') {\n        return true;\n      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).\n\n      if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {\n        return true;\n      }\n      if (typeof type === 'object' && type !== null) {\n        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE ||\n        // This needs to include all possible module reference object\n        // types supported by any Flight configuration anywhere since\n        // we don't know which Flight build this will end up being used\n        // with.\n        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {\n          return true;\n        }\n      }\n      return false;\n    }\n    function getWrappedName(outerType, innerType, wrapperName) {\n      var displayName = outerType.displayName;\n      if (displayName) {\n        return displayName;\n      }\n      var functionName = innerType.displayName || innerType.name || '';\n      return functionName !== '' ? wrapperName + \"(\" + functionName + \")\" : wrapperName;\n    } // Keep in sync with react-reconciler/getComponentNameFromFiber\n\n    function getContextName(type) {\n      return type.displayName || 'Context';\n    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.\n\n    function getComponentNameFromType(type) {\n      if (type == null) {\n        // Host root, text node or just invalid type.\n        return null;\n      }\n      {\n        if (typeof type.tag === 'number') {\n          error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');\n        }\n      }\n      if (typeof type === 'function') {\n        return type.displayName || type.name || null;\n      }\n      if (typeof type === 'string') {\n        return type;\n      }\n      switch (type) {\n        case REACT_FRAGMENT_TYPE:\n          return 'Fragment';\n        case REACT_PORTAL_TYPE:\n          return 'Portal';\n        case REACT_PROFILER_TYPE:\n          return 'Profiler';\n        case REACT_STRICT_MODE_TYPE:\n          return 'StrictMode';\n        case REACT_SUSPENSE_TYPE:\n          return 'Suspense';\n        case REACT_SUSPENSE_LIST_TYPE:\n          return 'SuspenseList';\n      }\n      if (typeof type === 'object') {\n        switch (type.$$typeof) {\n          case REACT_CONTEXT_TYPE:\n            var context = type;\n            return getContextName(context) + '.Consumer';\n          case REACT_PROVIDER_TYPE:\n            var provider = type;\n            return getContextName(provider._context) + '.Provider';\n          case REACT_FORWARD_REF_TYPE:\n            return getWrappedName(type, type.render, 'ForwardRef');\n          case REACT_MEMO_TYPE:\n            var outerName = type.displayName || null;\n            if (outerName !== null) {\n              return outerName;\n            }\n            return getComponentNameFromType(type.type) || 'Memo';\n          case REACT_LAZY_TYPE:\n            {\n              var lazyComponent = type;\n              var payload = lazyComponent._payload;\n              var init = lazyComponent._init;\n              try {\n                return getComponentNameFromType(init(payload));\n              } catch (x) {\n                return null;\n              }\n            }\n\n          // eslint-disable-next-line no-fallthrough\n        }\n      }\n      return null;\n    }\n    var assign = Object.assign;\n\n    // Helpers to patch console.logs to avoid logging during side-effect free\n    // replaying on render function. This currently only patches the object\n    // lazily which won't cover if the log function was extracted eagerly.\n    // We could also eagerly patch the method.\n    var disabledDepth = 0;\n    var prevLog;\n    var prevInfo;\n    var prevWarn;\n    var prevError;\n    var prevGroup;\n    var prevGroupCollapsed;\n    var prevGroupEnd;\n    function disabledLog() {}\n    disabledLog.__reactDisabledLog = true;\n    function disableLogs() {\n      {\n        if (disabledDepth === 0) {\n          /* eslint-disable react-internal/no-production-logging */\n          prevLog = console.log;\n          prevInfo = console.info;\n          prevWarn = console.warn;\n          prevError = console.error;\n          prevGroup = console.group;\n          prevGroupCollapsed = console.groupCollapsed;\n          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099\n\n          var props = {\n            configurable: true,\n            enumerable: true,\n            value: disabledLog,\n            writable: true\n          }; // $FlowFixMe Flow thinks console is immutable.\n\n          Object.defineProperties(console, {\n            info: props,\n            log: props,\n            warn: props,\n            error: props,\n            group: props,\n            groupCollapsed: props,\n            groupEnd: props\n          });\n          /* eslint-enable react-internal/no-production-logging */\n        }\n        disabledDepth++;\n      }\n    }\n    function reenableLogs() {\n      {\n        disabledDepth--;\n        if (disabledDepth === 0) {\n          /* eslint-disable react-internal/no-production-logging */\n          var props = {\n            configurable: true,\n            enumerable: true,\n            writable: true\n          }; // $FlowFixMe Flow thinks console is immutable.\n\n          Object.defineProperties(console, {\n            log: assign({}, props, {\n              value: prevLog\n            }),\n            info: assign({}, props, {\n              value: prevInfo\n            }),\n            warn: assign({}, props, {\n              value: prevWarn\n            }),\n            error: assign({}, props, {\n              value: prevError\n            }),\n            group: assign({}, props, {\n              value: prevGroup\n            }),\n            groupCollapsed: assign({}, props, {\n              value: prevGroupCollapsed\n            }),\n            groupEnd: assign({}, props, {\n              value: prevGroupEnd\n            })\n          });\n          /* eslint-enable react-internal/no-production-logging */\n        }\n        if (disabledDepth < 0) {\n          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');\n        }\n      }\n    }\n    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;\n    var prefix;\n    function describeBuiltInComponentFrame(name, source, ownerFn) {\n      {\n        if (prefix === undefined) {\n          // Extract the VM specific prefix used by each line.\n          try {\n            throw Error();\n          } catch (x) {\n            var match = x.stack.trim().match(/\\n( *(at )?)/);\n            prefix = match && match[1] || '';\n          }\n        } // We use the prefix to ensure our stacks line up with native stack frames.\n\n        return '\\n' + prefix + name;\n      }\n    }\n    var reentry = false;\n    var componentFrameCache;\n    {\n      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;\n      componentFrameCache = new PossiblyWeakMap();\n    }\n    function describeNativeComponentFrame(fn, construct) {\n      // If something asked for a stack inside a fake render, it should get ignored.\n      if (!fn || reentry) {\n        return '';\n      }\n      {\n        var frame = componentFrameCache.get(fn);\n        if (frame !== undefined) {\n          return frame;\n        }\n      }\n      var control;\n      reentry = true;\n      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.\n\n      Error.prepareStackTrace = undefined;\n      var previousDispatcher;\n      {\n        previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function\n        // for warnings.\n\n        ReactCurrentDispatcher.current = null;\n        disableLogs();\n      }\n      try {\n        // This should throw.\n        if (construct) {\n          // Something should be setting the props in the constructor.\n          var Fake = function () {\n            throw Error();\n          }; // $FlowFixMe\n\n          Object.defineProperty(Fake.prototype, 'props', {\n            set: function () {\n              // We use a throwing setter instead of frozen or non-writable props\n              // because that won't throw in a non-strict mode function.\n              throw Error();\n            }\n          });\n          if (typeof Reflect === 'object' && Reflect.construct) {\n            // We construct a different control for this case to include any extra\n            // frames added by the construct call.\n            try {\n              Reflect.construct(Fake, []);\n            } catch (x) {\n              control = x;\n            }\n            Reflect.construct(fn, [], Fake);\n          } else {\n            try {\n              Fake.call();\n            } catch (x) {\n              control = x;\n            }\n            fn.call(Fake.prototype);\n          }\n        } else {\n          try {\n            throw Error();\n          } catch (x) {\n            control = x;\n          }\n          fn();\n        }\n      } catch (sample) {\n        // This is inlined manually because closure doesn't do it for us.\n        if (sample && control && typeof sample.stack === 'string') {\n          // This extracts the first frame from the sample that isn't also in the control.\n          // Skipping one frame that we assume is the frame that calls the two.\n          var sampleLines = sample.stack.split('\\n');\n          var controlLines = control.stack.split('\\n');\n          var s = sampleLines.length - 1;\n          var c = controlLines.length - 1;\n          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {\n            // We expect at least one stack frame to be shared.\n            // Typically this will be the root most one. However, stack frames may be\n            // cut off due to maximum stack limits. In this case, one maybe cut off\n            // earlier than the other. We assume that the sample is longer or the same\n            // and there for cut off earlier. So we should find the root most frame in\n            // the sample somewhere in the control.\n            c--;\n          }\n          for (; s >= 1 && c >= 0; s--, c--) {\n            // Next we find the first one that isn't the same which should be the\n            // frame that called our sample function and the control.\n            if (sampleLines[s] !== controlLines[c]) {\n              // In V8, the first line is describing the message but other VMs don't.\n              // If we're about to return the first line, and the control is also on the same\n              // line, that's a pretty good indicator that our sample threw at same line as\n              // the control. I.e. before we entered the sample frame. So we ignore this result.\n              // This can happen if you passed a class to function component, or non-function.\n              if (s !== 1 || c !== 1) {\n                do {\n                  s--;\n                  c--; // We may still have similar intermediate frames from the construct call.\n                  // The next one that isn't the same should be our match though.\n\n                  if (c < 0 || sampleLines[s] !== controlLines[c]) {\n                    // V8 adds a \"new\" prefix for native classes. Let's remove it to make it prettier.\n                    var _frame = '\\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled \"<anonymous>\"\n                    // but we have a user-provided \"displayName\"\n                    // splice it in to make the stack more readable.\n\n                    if (fn.displayName && _frame.includes('<anonymous>')) {\n                      _frame = _frame.replace('<anonymous>', fn.displayName);\n                    }\n                    {\n                      if (typeof fn === 'function') {\n                        componentFrameCache.set(fn, _frame);\n                      }\n                    } // Return the line we found.\n\n                    return _frame;\n                  }\n                } while (s >= 1 && c >= 0);\n              }\n              break;\n            }\n          }\n        }\n      } finally {\n        reentry = false;\n        {\n          ReactCurrentDispatcher.current = previousDispatcher;\n          reenableLogs();\n        }\n        Error.prepareStackTrace = previousPrepareStackTrace;\n      } // Fallback to just using the name if we couldn't make it throw.\n\n      var name = fn ? fn.displayName || fn.name : '';\n      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';\n      {\n        if (typeof fn === 'function') {\n          componentFrameCache.set(fn, syntheticFrame);\n        }\n      }\n      return syntheticFrame;\n    }\n    function describeFunctionComponentFrame(fn, source, ownerFn) {\n      {\n        return describeNativeComponentFrame(fn, false);\n      }\n    }\n    function shouldConstruct(Component) {\n      var prototype = Component.prototype;\n      return !!(prototype && prototype.isReactComponent);\n    }\n    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {\n      if (type == null) {\n        return '';\n      }\n      if (typeof type === 'function') {\n        {\n          return describeNativeComponentFrame(type, shouldConstruct(type));\n        }\n      }\n      if (typeof type === 'string') {\n        return describeBuiltInComponentFrame(type);\n      }\n      switch (type) {\n        case REACT_SUSPENSE_TYPE:\n          return describeBuiltInComponentFrame('Suspense');\n        case REACT_SUSPENSE_LIST_TYPE:\n          return describeBuiltInComponentFrame('SuspenseList');\n      }\n      if (typeof type === 'object') {\n        switch (type.$$typeof) {\n          case REACT_FORWARD_REF_TYPE:\n            return describeFunctionComponentFrame(type.render);\n          case REACT_MEMO_TYPE:\n            // Memo may contain any component type so we recursively resolve it.\n            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);\n          case REACT_LAZY_TYPE:\n            {\n              var lazyComponent = type;\n              var payload = lazyComponent._payload;\n              var init = lazyComponent._init;\n              try {\n                // Lazy may contain any component type so we recursively resolve it.\n                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);\n              } catch (x) {}\n            }\n        }\n      }\n      return '';\n    }\n    var hasOwnProperty = Object.prototype.hasOwnProperty;\n    var loggedTypeFailures = {};\n    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;\n    function setCurrentlyValidatingElement(element) {\n      {\n        if (element) {\n          var owner = element._owner;\n          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);\n          ReactDebugCurrentFrame.setExtraStackFrame(stack);\n        } else {\n          ReactDebugCurrentFrame.setExtraStackFrame(null);\n        }\n      }\n    }\n    function checkPropTypes(typeSpecs, values, location, componentName, element) {\n      {\n        // $FlowFixMe This is okay but Flow doesn't know it.\n        var has = Function.call.bind(hasOwnProperty);\n        for (var typeSpecName in typeSpecs) {\n          if (has(typeSpecs, typeSpecName)) {\n            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to\n            // fail the render phase where it didn't fail before. So we log it.\n            // After these have been cleaned up, we'll let them throw.\n\n            try {\n              // This is intentionally an invariant that gets caught. It's the same\n              // behavior as without this statement except with a better message.\n              if (typeof typeSpecs[typeSpecName] !== 'function') {\n                // eslint-disable-next-line react-internal/prod-error-codes\n                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');\n                err.name = 'Invariant Violation';\n                throw err;\n              }\n              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');\n            } catch (ex) {\n              error$1 = ex;\n            }\n            if (error$1 && !(error$1 instanceof Error)) {\n              setCurrentlyValidatingElement(element);\n              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);\n              setCurrentlyValidatingElement(null);\n            }\n            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {\n              // Only monitor this failure once because there tends to be a lot of the\n              // same error.\n              loggedTypeFailures[error$1.message] = true;\n              setCurrentlyValidatingElement(element);\n              error('Failed %s type: %s', location, error$1.message);\n              setCurrentlyValidatingElement(null);\n            }\n          }\n        }\n      }\n    }\n    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare\n\n    function isArray(a) {\n      return isArrayImpl(a);\n    }\n\n    /*\n     * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol\n     * and Temporal.* types. See https://github.com/facebook/react/pull/22064.\n     *\n     * The functions in this module will throw an easier-to-understand,\n     * easier-to-debug exception with a clear errors message message explaining the\n     * problem. (Instead of a confusing exception thrown inside the implementation\n     * of the `value` object).\n     */\n    // $FlowFixMe only called in DEV, so void return is not possible.\n    function typeName(value) {\n      {\n        // toStringTag is needed for namespaced types like Temporal.Instant\n        var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;\n        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';\n        return type;\n      }\n    } // $FlowFixMe only called in DEV, so void return is not possible.\n\n    function willCoercionThrow(value) {\n      {\n        try {\n          testStringCoercion(value);\n          return false;\n        } catch (e) {\n          return true;\n        }\n      }\n    }\n    function testStringCoercion(value) {\n      // If you ended up here by following an exception call stack, here's what's\n      // happened: you supplied an object or symbol value to React (as a prop, key,\n      // DOM attribute, CSS property, string ref, etc.) and when React tried to\n      // coerce it to a string using `'' + value`, an exception was thrown.\n      //\n      // The most common types that will cause this exception are `Symbol` instances\n      // and Temporal objects like `Temporal.Instant`. But any object that has a\n      // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this\n      // exception. (Library authors do this to prevent users from using built-in\n      // numeric operators like `+` or comparison operators like `>=` because custom\n      // methods are needed to perform accurate arithmetic or comparison.)\n      //\n      // To fix the problem, coerce this object or symbol value to a string before\n      // passing it to React. The most reliable way is usually `String(value)`.\n      //\n      // To find which value is throwing, check the browser or debugger console.\n      // Before this exception was thrown, there should be `console.error` output\n      // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the\n      // problem and how that type was used: key, atrribute, input value prop, etc.\n      // In most cases, this console output also shows the component and its\n      // ancestor components where the exception happened.\n      //\n      // eslint-disable-next-line react-internal/safe-string-coercion\n      return '' + value;\n    }\n    function checkKeyStringCoercion(value) {\n      {\n        if (willCoercionThrow(value)) {\n          error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));\n          return testStringCoercion(value); // throw (to help callers find troubleshooting comments)\n        }\n      }\n    }\n    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;\n    var RESERVED_PROPS = {\n      key: true,\n      ref: true,\n      __self: true,\n      __source: true\n    };\n    var specialPropKeyWarningShown;\n    var specialPropRefWarningShown;\n    var didWarnAboutStringRefs;\n    {\n      didWarnAboutStringRefs = {};\n    }\n    function hasValidRef(config) {\n      {\n        if (hasOwnProperty.call(config, 'ref')) {\n          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;\n          if (getter && getter.isReactWarning) {\n            return false;\n          }\n        }\n      }\n      return config.ref !== undefined;\n    }\n    function hasValidKey(config) {\n      {\n        if (hasOwnProperty.call(config, 'key')) {\n          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;\n          if (getter && getter.isReactWarning) {\n            return false;\n          }\n        }\n      }\n      return config.key !== undefined;\n    }\n    function warnIfStringRefCannotBeAutoConverted(config, self) {\n      {\n        if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {\n          var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);\n          if (!didWarnAboutStringRefs[componentName]) {\n            error('Component \"%s\" contains the string ref \"%s\". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);\n            didWarnAboutStringRefs[componentName] = true;\n          }\n        }\n      }\n    }\n    function defineKeyPropWarningGetter(props, displayName) {\n      {\n        var warnAboutAccessingKey = function () {\n          if (!specialPropKeyWarningShown) {\n            specialPropKeyWarningShown = true;\n            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);\n          }\n        };\n        warnAboutAccessingKey.isReactWarning = true;\n        Object.defineProperty(props, 'key', {\n          get: warnAboutAccessingKey,\n          configurable: true\n        });\n      }\n    }\n    function defineRefPropWarningGetter(props, displayName) {\n      {\n        var warnAboutAccessingRef = function () {\n          if (!specialPropRefWarningShown) {\n            specialPropRefWarningShown = true;\n            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);\n          }\n        };\n        warnAboutAccessingRef.isReactWarning = true;\n        Object.defineProperty(props, 'ref', {\n          get: warnAboutAccessingRef,\n          configurable: true\n        });\n      }\n    }\n    /**\n     * Factory method to create a new React element. This no longer adheres to\n     * the class pattern, so do not use new to call it. Also, instanceof check\n     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check\n     * if something is a React Element.\n     *\n     * @param {*} type\n     * @param {*} props\n     * @param {*} key\n     * @param {string|object} ref\n     * @param {*} owner\n     * @param {*} self A *temporary* helper to detect places where `this` is\n     * different from the `owner` when React.createElement is called, so that we\n     * can warn. We want to get rid of owner and replace string `ref`s with arrow\n     * functions, and as long as `this` and owner are the same, there will be no\n     * change in behavior.\n     * @param {*} source An annotation object (added by a transpiler or otherwise)\n     * indicating filename, line number, and/or other information.\n     * @internal\n     */\n\n    var ReactElement = function (type, key, ref, self, source, owner, props) {\n      var element = {\n        // This tag allows us to uniquely identify this as a React Element\n        $$typeof: REACT_ELEMENT_TYPE,\n        // Built-in properties that belong on the element\n        type: type,\n        key: key,\n        ref: ref,\n        props: props,\n        // Record the component responsible for creating this element.\n        _owner: owner\n      };\n      {\n        // The validation flag is currently mutative. We put it on\n        // an external backing store so that we can freeze the whole object.\n        // This can be replaced with a WeakMap once they are implemented in\n        // commonly used development environments.\n        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make\n        // the validation flag non-enumerable (where possible, which should\n        // include every environment we run tests in), so the test framework\n        // ignores it.\n\n        Object.defineProperty(element._store, 'validated', {\n          configurable: false,\n          enumerable: false,\n          writable: true,\n          value: false\n        }); // self and source are DEV only properties.\n\n        Object.defineProperty(element, '_self', {\n          configurable: false,\n          enumerable: false,\n          writable: false,\n          value: self\n        }); // Two elements created in two different places should be considered\n        // equal for testing purposes and therefore we hide it from enumeration.\n\n        Object.defineProperty(element, '_source', {\n          configurable: false,\n          enumerable: false,\n          writable: false,\n          value: source\n        });\n        if (Object.freeze) {\n          Object.freeze(element.props);\n          Object.freeze(element);\n        }\n      }\n      return element;\n    };\n    /**\n     * https://github.com/reactjs/rfcs/pull/107\n     * @param {*} type\n     * @param {object} props\n     * @param {string} key\n     */\n\n    function jsxDEV(type, config, maybeKey, source, self) {\n      {\n        var propName; // Reserved names are extracted\n\n        var props = {};\n        var key = null;\n        var ref = null; // Currently, key can be spread in as a prop. This causes a potential\n        // issue if key is also explicitly declared (ie. <div {...props} key=\"Hi\" />\n        // or <div key=\"Hi\" {...props} /> ). We want to deprecate key spread,\n        // but as an intermediary step, we will use jsxDEV for everything except\n        // <div {...props} key=\"Hi\" />, because we aren't currently able to tell if\n        // key is explicitly declared to be undefined or not.\n\n        if (maybeKey !== undefined) {\n          {\n            checkKeyStringCoercion(maybeKey);\n          }\n          key = '' + maybeKey;\n        }\n        if (hasValidKey(config)) {\n          {\n            checkKeyStringCoercion(config.key);\n          }\n          key = '' + config.key;\n        }\n        if (hasValidRef(config)) {\n          ref = config.ref;\n          warnIfStringRefCannotBeAutoConverted(config, self);\n        } // Remaining properties are added to a new props object\n\n        for (propName in config) {\n          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {\n            props[propName] = config[propName];\n          }\n        } // Resolve default props\n\n        if (type && type.defaultProps) {\n          var defaultProps = type.defaultProps;\n          for (propName in defaultProps) {\n            if (props[propName] === undefined) {\n              props[propName] = defaultProps[propName];\n            }\n          }\n        }\n        if (key || ref) {\n          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;\n          if (key) {\n            defineKeyPropWarningGetter(props, displayName);\n          }\n          if (ref) {\n            defineRefPropWarningGetter(props, displayName);\n          }\n        }\n        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);\n      }\n    }\n    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;\n    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;\n    function setCurrentlyValidatingElement$1(element) {\n      {\n        if (element) {\n          var owner = element._owner;\n          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);\n          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);\n        } else {\n          ReactDebugCurrentFrame$1.setExtraStackFrame(null);\n        }\n      }\n    }\n    var propTypesMisspellWarningShown;\n    {\n      propTypesMisspellWarningShown = false;\n    }\n    /**\n     * Verifies the object is a ReactElement.\n     * See https://reactjs.org/docs/react-api.html#isvalidelement\n     * @param {?object} object\n     * @return {boolean} True if `object` is a ReactElement.\n     * @final\n     */\n\n    function isValidElement(object) {\n      {\n        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n      }\n    }\n    function getDeclarationErrorAddendum() {\n      {\n        if (ReactCurrentOwner$1.current) {\n          var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);\n          if (name) {\n            return '\\n\\nCheck the render method of `' + name + '`.';\n          }\n        }\n        return '';\n      }\n    }\n    function getSourceInfoErrorAddendum(source) {\n      {\n        if (source !== undefined) {\n          var fileName = source.fileName.replace(/^.*[\\\\\\/]/, '');\n          var lineNumber = source.lineNumber;\n          return '\\n\\nCheck your code at ' + fileName + ':' + lineNumber + '.';\n        }\n        return '';\n      }\n    }\n    /**\n     * Warn if there's no key explicitly set on dynamic arrays of children or\n     * object keys are not valid. This allows us to keep track of children between\n     * updates.\n     */\n\n    var ownerHasKeyUseWarning = {};\n    function getCurrentComponentErrorInfo(parentType) {\n      {\n        var info = getDeclarationErrorAddendum();\n        if (!info) {\n          var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;\n          if (parentName) {\n            info = \"\\n\\nCheck the top-level render call using <\" + parentName + \">.\";\n          }\n        }\n        return info;\n      }\n    }\n    /**\n     * Warn if the element doesn't have an explicit key assigned to it.\n     * This element is in an array. The array could grow and shrink or be\n     * reordered. All children that haven't already been validated are required to\n     * have a \"key\" property assigned to it. Error statuses are cached so a warning\n     * will only be shown once.\n     *\n     * @internal\n     * @param {ReactElement} element Element that requires a key.\n     * @param {*} parentType element's parent's type.\n     */\n\n    function validateExplicitKey(element, parentType) {\n      {\n        if (!element._store || element._store.validated || element.key != null) {\n          return;\n        }\n        element._store.validated = true;\n        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);\n        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {\n          return;\n        }\n        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a\n        // property, it may be the creator of the child that's responsible for\n        // assigning it a key.\n\n        var childOwner = '';\n        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {\n          // Give the component that originally created this child.\n          childOwner = \" It was passed a child from \" + getComponentNameFromType(element._owner.type) + \".\";\n        }\n        setCurrentlyValidatingElement$1(element);\n        error('Each child in a list should have a unique \"key\" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);\n        setCurrentlyValidatingElement$1(null);\n      }\n    }\n    /**\n     * Ensure that every element either is passed in a static location, in an\n     * array with an explicit keys property defined, or in an object literal\n     * with valid key property.\n     *\n     * @internal\n     * @param {ReactNode} node Statically passed child of any type.\n     * @param {*} parentType node's parent's type.\n     */\n\n    function validateChildKeys(node, parentType) {\n      {\n        if (typeof node !== 'object') {\n          return;\n        }\n        if (isArray(node)) {\n          for (var i = 0; i < node.length; i++) {\n            var child = node[i];\n            if (isValidElement(child)) {\n              validateExplicitKey(child, parentType);\n            }\n          }\n        } else if (isValidElement(node)) {\n          // This element was passed in a valid location.\n          if (node._store) {\n            node._store.validated = true;\n          }\n        } else if (node) {\n          var iteratorFn = getIteratorFn(node);\n          if (typeof iteratorFn === 'function') {\n            // Entry iterators used to provide implicit keys,\n            // but now we print a separate warning for them later.\n            if (iteratorFn !== node.entries) {\n              var iterator = iteratorFn.call(node);\n              var step;\n              while (!(step = iterator.next()).done) {\n                if (isValidElement(step.value)) {\n                  validateExplicitKey(step.value, parentType);\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    /**\n     * Given an element, validate that its props follow the propTypes definition,\n     * provided by the type.\n     *\n     * @param {ReactElement} element\n     */\n\n    function validatePropTypes(element) {\n      {\n        var type = element.type;\n        if (type === null || type === undefined || typeof type === 'string') {\n          return;\n        }\n        var propTypes;\n        if (typeof type === 'function') {\n          propTypes = type.propTypes;\n        } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||\n        // Note: Memo only checks outer props here.\n        // Inner props are checked in the reconciler.\n        type.$$typeof === REACT_MEMO_TYPE)) {\n          propTypes = type.propTypes;\n        } else {\n          return;\n        }\n        if (propTypes) {\n          // Intentionally inside to avoid triggering lazy initializers:\n          var name = getComponentNameFromType(type);\n          checkPropTypes(propTypes, element.props, 'prop', name, element);\n        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {\n          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:\n\n          var _name = getComponentNameFromType(type);\n          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');\n        }\n        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {\n          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');\n        }\n      }\n    }\n    /**\n     * Given a fragment, validate that it can only be provided with fragment props\n     * @param {ReactElement} fragment\n     */\n\n    function validateFragmentProps(fragment) {\n      {\n        var keys = Object.keys(fragment.props);\n        for (var i = 0; i < keys.length; i++) {\n          var key = keys[i];\n          if (key !== 'children' && key !== 'key') {\n            setCurrentlyValidatingElement$1(fragment);\n            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);\n            setCurrentlyValidatingElement$1(null);\n            break;\n          }\n        }\n        if (fragment.ref !== null) {\n          setCurrentlyValidatingElement$1(fragment);\n          error('Invalid attribute `ref` supplied to `React.Fragment`.');\n          setCurrentlyValidatingElement$1(null);\n        }\n      }\n    }\n    var didWarnAboutKeySpread = {};\n    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {\n      {\n        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to\n        // succeed and there will likely be errors in render.\n\n        if (!validType) {\n          var info = '';\n          if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {\n            info += ' You likely forgot to export your component from the file ' + \"it's defined in, or you might have mixed up default and named imports.\";\n          }\n          var sourceInfo = getSourceInfoErrorAddendum(source);\n          if (sourceInfo) {\n            info += sourceInfo;\n          } else {\n            info += getDeclarationErrorAddendum();\n          }\n          var typeString;\n          if (type === null) {\n            typeString = 'null';\n          } else if (isArray(type)) {\n            typeString = 'array';\n          } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {\n            typeString = \"<\" + (getComponentNameFromType(type.type) || 'Unknown') + \" />\";\n            info = ' Did you accidentally export a JSX literal instead of a component?';\n          } else {\n            typeString = typeof type;\n          }\n          error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);\n        }\n        var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.\n        // TODO: Drop this when these are no longer allowed as the type argument.\n\n        if (element == null) {\n          return element;\n        } // Skip key warning if the type isn't valid since our key validation logic\n        // doesn't expect a non-string/function type and can throw confusing errors.\n        // We don't want exception behavior to differ between dev and prod.\n        // (Rendering will throw with a helpful message and as soon as the type is\n        // fixed, the key warnings will appear.)\n\n        if (validType) {\n          var children = props.children;\n          if (children !== undefined) {\n            if (isStaticChildren) {\n              if (isArray(children)) {\n                for (var i = 0; i < children.length; i++) {\n                  validateChildKeys(children[i], type);\n                }\n                if (Object.freeze) {\n                  Object.freeze(children);\n                }\n              } else {\n                error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');\n              }\n            } else {\n              validateChildKeys(children, type);\n            }\n          }\n        }\n        {\n          if (hasOwnProperty.call(props, 'key')) {\n            var componentName = getComponentNameFromType(type);\n            var keys = Object.keys(props).filter(function (k) {\n              return k !== 'key';\n            });\n            var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';\n            if (!didWarnAboutKeySpread[componentName + beforeExample]) {\n              var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';\n              error('A props object containing a \"key\" prop is being spread into JSX:\\n' + '  let props = %s;\\n' + '  <%s {...props} />\\n' + 'React keys must be passed directly to JSX without using spread:\\n' + '  let props = %s;\\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);\n              didWarnAboutKeySpread[componentName + beforeExample] = true;\n            }\n          }\n        }\n        if (type === REACT_FRAGMENT_TYPE) {\n          validateFragmentProps(element);\n        } else {\n          validatePropTypes(element);\n        }\n        return element;\n      }\n    } // These two functions exist to still get child warnings in dev\n    // even with the prod transform. This means that jsxDEV is purely\n    // opt-in behavior for better messages but that we won't stop\n    // giving you warnings if you use production apis.\n\n    function jsxWithValidationStatic(type, props, key) {\n      {\n        return jsxWithValidation(type, props, key, true);\n      }\n    }\n    function jsxWithValidationDynamic(type, props, key) {\n      {\n        return jsxWithValidation(type, props, key, false);\n      }\n    }\n    var jsx = jsxWithValidationDynamic; // we may want to special case jsxs internally to take advantage of static children.\n    // for now we can ship identical prod functions\n\n    var jsxs = jsxWithValidationStatic;\n    exports.Fragment = REACT_FRAGMENT_TYPE;\n    exports.jsx = jsx;\n    exports.jsxs = jsxs;\n  })();\n}\n\n//# sourceURL=webpack://react-app/./node_modules/react/cjs/react-jsx-runtime.development.js?");

/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ \"./node_modules/react/cjs/react-jsx-runtime.development.js\");\n}\n\n//# sourceURL=webpack://react-app/./node_modules/react/jsx-runtime.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});\n\n//# sourceURL=webpack://react-app/./src/App.css?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// extracted by mini-css-extract-plugin\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});\n\n//# sourceURL=webpack://react-app/./src/index.css?");

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6ce24c58023cc2f8fd88.svg\";\n\n//# sourceURL=webpack://react-app/./src/logo.svg?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "react-app:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_app"] = self["webpackChunkreact_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});