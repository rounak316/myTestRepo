var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};define("jira/legacy/config",function(){function e(e){return n&&-1!==n.indexOf(e)}var o=document.querySelector("meta[name=ajs-dev-mode]");o=o&&"true"===o.getAttribute("content");var n=document.querySelector("meta[name=ajs-enabled-dark-features]");n=n&&n.getAttribute("content")||"";var t=e("amd.loader.noglobals"),r=o||t||e("amd.loader.globals.deprecation.warning");return{hasDefineProperty:function(){try{return Object.defineProperty&&!0===Object.defineProperty({},"x",{get:function(){return!0}}).x}catch(e){}return!1}(),logDeprecationNotice:r,noGlobals:t}}),define("jira/legacy/logger",["jira/util/logger"],function(e){function o(){var o=0,n=t.length;for(console&&console.groupCollapsed&&console.groupCollapsed("Global object deprecations ("+n+")");o<n;o++)e.warn.apply(void 0,t[o]);console&&console.groupEnd&&console.groupEnd(),t.length=0}var n,t=[];return function(){t.push(Array.prototype.slice.apply(arguments)),n&&clearTimeout(n),n=setTimeout(function(){o(),n=void 0},200)}}),define("jira/legacy/deprecator",["jira/deprecator"],function(e){return e}),define("jira/legacy/namespace",["jira/legacy/config","jira/legacy/logger","jira/legacy/deprecator"],function(e,o,n){return function(t,r,a){var c,i;if(e.logDeprecationNotice&&(c=e.noGlobals?"GONE: The global object "+t+" was not created!":"DEPRECATED: The global object "+t+" is deprecated.","object"!==(void 0===a?"undefined":_typeof(a))&&"function"!=typeof a||a.__amdModuleName&&(c+=' Please use require(["'+a.__amdModuleName+'"]) instead.',delete a.__amdModuleName)),e.noGlobals)return void o(c);i=t.split("."),r=r||window;for(var l=0,u=i.length-1;l<u;l++){var d=r[i[l]];r=null!=d?d:r[i[l]]={}}return function(t){e.hasDefineProperty&&e.logDeprecationNotice?Object.defineProperty(r,i[l],{configurable:!0,get:function(){var e="";return n&&n.getDeprecatedLocation&&(e=n.getDeprecatedLocation(0)),-1===e.indexOf("internalLegacyNamespacing")&&(e&&-1===e.indexOf("AJS.namespace")?o(c,"\n"+e):o(c)),t},set:function(e){t=e}}):(e.logDeprecationNotice&&o(c),r[i[l]]=t)}(a||r[i[l]]||{}),r[i[l]]}}),AJS.namespace=require("jira/legacy/namespace"),AJS.namespace("jQuery.namespace",null,function(e){AJS.namespace(e)});