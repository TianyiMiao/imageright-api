!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("imageright-api",[],t):"object"==typeof exports?exports["imageright-api"]=t():e["imageright-api"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=30)}([function(e,t,n){"use strict";function r(e){return"[object Array]"===T.call(e)}function o(e){return"[object ArrayBuffer]"===T.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function u(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function s(e){return"number"==typeof e}function c(e){return"undefined"==typeof e}function f(e){return null!==e&&"object"==typeof e}function l(e){return"[object Date]"===T.call(e)}function p(e){return"[object File]"===T.call(e)}function d(e){return"[object Blob]"===T.call(e)}function h(e){return"[object Function]"===T.call(e)}function m(e){return f(e)&&h(e.pipe)}function y(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function w(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function b(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=b(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)w(arguments[n],e);return t}function x(e,t,n){return w(t,function(t,r){n&&"function"==typeof t?e[r]=A(t,n):e[r]=t}),e}var A=n(7),T=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isFormData:i,isArrayBufferView:u,isString:a,isNumber:s,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:v,forEach:w,merge:b,extend:x,trim:g}},function(e,t,n){"use strict";(function(t){function r(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(3):"undefined"!=typeof t&&(e=n(3)),e}var i=n(0),u=n(24),a=/^\)\]\}',?\n/,s={"Content-Type":"application/x-www-form-urlencoded"},c={adapter:o(),transformRequest:[function(e,t){return u(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e)?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(a,"");try{e=JSON.parse(e)}catch(e){}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(e){c.headers[e]={}}),i.forEach(["post","put","patch"],function(e){c.headers[e]=i.merge(s)}),e.exports=c}).call(t,n(8))},function(e,t,n){e.exports=n(10)},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(16),i=n(19),u=n(25),a=n(23),s=n(6),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(18);e.exports=function(e){return new Promise(function(f,l){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var h=new XMLHttpRequest,m="onreadystatechange",y=!1;if("test"===t.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in h||a(e.url)||(h=new window.XDomainRequest,m="onload",y=!0,h.onprogress=function(){},h.ontimeout=function(){}),e.auth){var g=e.auth.username||"",v=e.auth.password||"";d.Authorization="Basic "+c(g+":"+v)}if(h.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h[m]=function(){if(h&&(4===h.readyState||y)&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in h?u(h.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?h.response:h.responseText,r={data:n,status:1223===h.status?204:h.status,statusText:1223===h.status?"No Content":h.statusText,headers:t,config:e,request:h};o(f,l,r),h=null}},h.onerror=function(){l(s("Network Error",e)),h=null},h.ontimeout=function(){l(s("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED")),h=null},r.isStandardBrowserEnv()){var w=n(21),b=(e.withCredentials||a(e.url))&&e.xsrfCookieName?w.read(e.xsrfCookieName):void 0;b&&(d[e.xsrfHeaderName]=b)}if("setRequestHeader"in h&&r.forEach(d,function(e,t){"undefined"==typeof p&&"content-type"===t.toLowerCase()?delete d[t]:h.setRequestHeader(t,e)}),e.withCredentials&&(h.withCredentials=!0),e.responseType)try{h.responseType=e.responseType}catch(e){if("json"!==h.responseType)throw e}"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){h&&(h.abort(),l(e),h=null)}),void 0===p&&(p=null),h.send(p)})}}).call(t,n(8))},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";var r=n(15);e.exports=function(e,t,n,o){var i=new Error(e);return r(i,t,n,o)}},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function u(){m&&d&&(m=!1,d.length?h=d.concat(h):y=-1,h.length&&a())}function a(){if(!m){var e=o(u);m=!0;for(var t=h.length;t;){for(d=h,h=[];++y<t;)d&&d[y].run();y=-1,t=h.length}d=null,m=!1,i(e)}}function s(e,t){this.fun=e,this.array=t}function c(){}var f,l,p=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var d,h=[],m=!1,y=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new s(e,t)),1!==h.length||m||o(a)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.authenticate=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(28);Object.defineProperty(t,"authenticate",{enumerable:!0,get:function(){return a.authenticate}});var s=n(2),c=o(s),f=n(27),l=r(f),p=n(29),d=r(p),h="ImageRight 6.2",m=function(){function e(t,n){i(this,e),this.version=h,this.baseUrl=t,this.AccessToken=n,this.api=c.default.create({baseURL:t,AccessToken:n,headers:{Authorization:"AccessToken "+n}})}return u(e,[{key:"getAttributeById",value:function(e,t){return l.getAttributeById(this.api,e,t)}},{key:"getAttributeByName",value:function(e,t){return l.getAttributeByName(this.api,e,t)}},{key:"getAttributeByObject",value:function(e){return l.getAttributeByObject(this.api,e)}},{key:"getDrawers",value:function(){return d.getDrawers(this.api)}},{key:"getDrawerById",value:function(e){return d.getDrawerById(this.api,e)}},{key:"getDrawerByName",value:function(e){return d.getDrawerByName(this.api,e)}},{key:"getDrawersInContainer",value:function(e){return d.getDrawersInContainer(this.api,e)}},{key:"getDrawersInContainerByName",value:function(e,t){return d.getDrawersInContainerByName(this.api,e,t)}}]),e}();t.default=m},function(e,t,n){"use strict";function r(e){var t=new u(e),n=i(u.prototype.request,t);return o.extend(n,u.prototype,t),o.extend(n,t),n}var o=n(0),i=n(7),u=n(12),a=n(1),s=r(a);s.Axios=u,s.create=function(e){return r(o.merge(a,e))},s.Cancel=n(4),s.CancelToken=n(11),s.isCancel=n(5),s.all=function(e){return Promise.all(e)},s.spread=n(26),e.exports=s,e.exports.default=s},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(4);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new u,response:new u}}var o=n(1),i=n(0),u=n(13),a=n(14),s=n(22),c=n(20);r.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url));var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},i.forEach(["delete","get","head"],function(e){r.prototype[e]=function(t,n){return this.request(i.merge(n||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(i.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(0);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(0),i=n(17),u=n(5),a=n(1);e.exports=function(e){r(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||a.adapter;return t(e).then(function(t){return r(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return u(t)||(r(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";e.exports=function(e,t,n,r){return e.config=t,n&&(e.code=n),e.response=r,e}},function(e,t,n){"use strict";var r=n(6);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n)):e(n)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),u="",a=0,s=i;o.charAt(0|a)||(s="=",a%1);u+=s.charAt(63&t>>8-a%1*8)){if(n=o.charCodeAt(a+=.75),n>255)throw new r;t=t<<8|n}return u}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(0);e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(o.isURLSearchParams(t))i=t.toString();else{var u=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),u.push(r(t)+"="+r(e))}))}),i=u.join("&")}return i&&(e+=(e.indexOf("?")===-1?"?":"&")+i),e}},function(e,t,n){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,u){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),u===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";function r(e,t,n){return e.get("api/containers/"+t+"/attributes/"+n).then(function(e){return Promise.resolve(e.data)})}function o(e,t,n){return e.get("api/containers/"+t+"/attributes/"+n).then(function(e){return Promise.resolve(e.data)})}function i(e,t){return e.get("api/attributes/"+t).then(function(e){return Promise.resolve(e.data)})}Object.defineProperty(t,"__esModule",{value:!0}),t.getAttributeById=r,t.getAttributeByName=o,t.getAttributeByObject=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){var r={baseURL:e};return u.default.post("api/authenticate",{UserName:t,Password:n},r).then(function(e){return{AccessToken:e.data}})}Object.defineProperty(t,"__esModule",{value:!0}),t.authenticate=o;var i=n(2),u=r(i)},function(e,t,n){"use strict";function r(e){return e.get("api/drawers").then(function(e){return Promise.resolve(e.data)})}function o(e,t){return e.get("api/drawers/"+t).then(function(e){return Promise.resolve(e.data)})}function i(e,t){return e.get("api/drawers/"+t).then(function(e){return Promise.resolve(e.data)})}function u(e,t){return e.get("api/containers/"+t+"/drawers").then(function(e){return Promise.resolve(e.data)})}function a(e,t,n){return e.get("api/containers/"+t+"/drawers/"+n).then(function(e){return Promise.resolve(e.data)})}Object.defineProperty(t,"__esModule",{value:!0}),t.getDrawers=r,t.getDrawerById=o,t.getDrawerByName=i,t.getDrawersInContainer=u,t.getDrawersInContainerByName=a},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(9),a=r(u),s="0.0.1",c=function(){function e(t){o(this,e),this.baseUrl=t,this.version=s}return i(e,[{key:"createAPI",value:function(e){var t=e.AccessToken;return this.api=new a.default(this.baseUrl,t),Promise.resolve(this.api)}},{key:"connect",value:function(e,t){return(0,u.authenticate)(this.baseUrl,e,t).then(this.createAPI.bind(this))}}]),e}();t.default=c,e.exports=t.default}])});
//# sourceMappingURL=imageright-api.js.map