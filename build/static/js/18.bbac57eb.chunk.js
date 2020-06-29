webpackJsonp([18],{1459:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=n.n(i),c=n(350),u=n.n(c),f=n(351),l=n.n(f),p=n(212),d=n.n(p),h=n(352),m=n.n(h),y=n(353),g=n.n(y),v=n(1523),b=n(142),w=n(338),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),x=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={orderHistory:null,allComps:[]},n}return a(t,e),E(t,[{key:"componentDidMount",value:function(){this.getTableData()}},{key:"getAllComponents",value:function(e){var t=this,n=new v.a;e.forEach(function(e){console.log("fetching to API"),n.getFetch("component/"+e,"").then(function(n){var r=t.state.allComps;r[e]=n,t.setState({allComps:r})})})}},{key:"makeOrderHistory",value:function(e,t,n,r,o,a){return t.forEach(function(t){o++,e.push({count:o,id:r,part:n,productId:t,dateTime:a.createdAt.split("T")[0],action:"done_outline"})}),{orderHistory:e,indexComp:o}}},{key:"getTableData",value:function(){var e=this,t=Object(b.e)(),n=[],r=new v.a;console.log("fetching to API"),r.getFetch("orders/"+t,"").then(function(t){var r=[],o=0,a=0,i=void 0,s=void 0,c=void 0;t.forEach(function(t){if(o++,i=JSON.parse(t.components))for(s in i)if(i[s]&&(c=i[s].split(","),c.length>0)){n.indexOf(s)>=0||n.push(s);var u=e.makeOrderHistory(r,c,s,o,a,t);r=u.orderHistory,a=u.indexComp}}),e.getAllComponents(n),e.setState({orderHistory:r})})}},{key:"render",value:function(){var e=this.state,t=e.orderHistory,n=e.allComps;return s.a.createElement(i.Fragment,null,null!==t?s.a.createElement("div",{className:"iron-table-wrapper"},s.a.createElement(u.a,{className:"iron-table-wrap"},s.a.createElement(m.a,null,s.a.createElement(g.a,null,s.a.createElement(d.a,{className:"iron-th"},"no."),s.a.createElement(d.a,{className:"iron-th"},"order Id"),s.a.createElement(d.a,{className:"iron-th"},"part"),s.a.createElement(d.a,{className:"iron-th"},"product name"),s.a.createElement(d.a,{className:"iron-th"},"price"),s.a.createElement(d.a,{className:"iron-th"},"date"),s.a.createElement(d.a,{className:"iron-th"},"status"))),s.a.createElement(l.a,null,t.map(function(e,t){var r=n&&n[e.part]?n[e.part].find(function(t){return parseInt(t.id,10)===parseInt(e.productId,10)}):null;return s.a.createElement(g.a,{key:t},s.a.createElement(d.a,{className:"iron-td"},e.count),s.a.createElement(d.a,{className:"iron-td"},e.id),s.a.createElement(d.a,{className:"iron-td"},e.part.replace("_"," ")),s.a.createElement(d.a,{className:"iron-td"},r?r.name:null),s.a.createElement(d.a,{className:"iron-td"},"$",r?r.price:null),s.a.createElement(d.a,{className:"iron-td"},e.dateTime),s.a.createElement(d.a,{className:"iron-td"},s.a.createElement("i",{className:"material-icons"},e.action)))})))):s.a.createElement(w.a,null))}}]),t}(s.a.Component);t.default=x},1493:function(e,t,n){"use strict";function r(e){return"[object Array]"===j.call(e)}function o(e){return"[object ArrayBuffer]"===j.call(e)}function a(e){return"undefined"!==typeof FormData&&e instanceof FormData}function i(e){return"undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"===typeof e}function c(e){return"number"===typeof e}function u(e){return"undefined"===typeof e}function f(e){return null!==e&&"object"===typeof e}function l(e){return"[object Date]"===j.call(e)}function p(e){return"[object File]"===j.call(e)}function d(e){return"[object Blob]"===j.call(e)}function h(e){return"[object Function]"===j.call(e)}function m(e){return f(e)&&h(e.pipe)}function y(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function g(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function b(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function w(){function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=w(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)b(arguments[n],e);return t}function E(){function e(e,n){"object"===typeof t[n]&&"object"===typeof e?t[n]=E(t[n],e):t[n]="object"===typeof e?E({},e):e}for(var t={},n=0,r=arguments.length;n<r;n++)b(arguments[n],e);return t}function x(e,t,n){return b(t,function(t,r){e[r]=n&&"function"===typeof t?N(t,n):t}),e}var N=n(1501),C=n(1528),j=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:C,isFormData:a,isArrayBufferView:i,isString:s,isNumber:c,isObject:f,isUndefined:u,isDate:l,isFile:p,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:v,forEach:b,merge:w,deepMerge:E,extend:x,trim:g}},1501:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},1502:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(1493);e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(o.isURLSearchParams(t))a=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&"undefined"!==typeof e&&(o.isArray(e)?t+="[]":e=[e],o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},1503:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},1504:function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(1493),a=n(1533),i={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:function(){var e;return"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t)?e=n(1505):"undefined"!==typeof XMLHttpRequest&&(e=n(1505)),e}(),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){s.headers[e]={}}),o.forEach(["post","put","patch"],function(e){s.headers[e]=o.merge(i)}),e.exports=s}).call(t,n(336))},1505:function(e,t,n){"use strict";var r=n(1493),o=n(1534),a=n(1502),i=n(1536),s=n(1537),c=n(1506);e.exports=function(e){return new Promise(function(t,u){var f=e.data,l=e.headers;r.isFormData(f)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password||"";l.Authorization="Basic "+btoa(d+":"+h)}if(p.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?i(p.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?p.response:p.responseText,a={data:r,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,u,a),p=null}},p.onabort=function(){p&&(u(c("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){u(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){u(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var m=n(1538),y=(e.withCredentials||s(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;y&&(l[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&r.forEach(l,function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),u(e),p=null)}),void 0===f&&(f=null),p.send(f)})}},1506:function(e,t,n){"use strict";var r=n(1535);e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},1507:function(e,t,n){"use strict";var r=n(1493);e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],function(e){"undefined"!==typeof t[e]&&(n[e]=t[e])}),r.forEach(["headers","auth","proxy"],function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!==typeof e[o]&&(n[o]=e[o])}),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])}),n}},1508:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},1523:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(1526),a=n.n(o),i=function e(){var t=this;r(this,e),this.defaultUrl="http://localhost:8000/",this.getFetch=function(e,n){return fetch(""+t.defaultUrl+e+"?"+n,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){console.error(e)})},this.postFetch=function(e,n){var r=new FormData;for(var o in n)r.append(o,n[o]);return a.a.post(""+t.defaultUrl+e,r,{headers:{}}).then(function(e){return e}).catch(function(e){console.error(e)})},this.deleteFetch=function(e){return a.a.delete(""+t.defaultUrl+e,{headers:{}}).then(function(e){return e}).catch(function(e){console.error(e)})}};t.a=i},1526:function(e,t,n){e.exports=n(1527)},1527:function(e,t,n){"use strict";function r(e){var t=new i(e),n=a(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n(1493),a=n(1501),i=n(1529),s=n(1507),c=n(1504),u=r(c);u.Axios=i,u.create=function(e){return r(s(u.defaults,e))},u.Cancel=n(1508),u.CancelToken=n(1541),u.isCancel=n(1503),u.all=function(e){return Promise.all(e)},u.spread=n(1542),e.exports=u,e.exports.default=u},1528:function(e,t){e.exports=function(e){return null!=e&&null!=e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},1529:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=n(1493),a=n(1502),i=n(1530),s=n(1531),c=n(1507);r.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=c(this.defaults,e),e.method=e.method?e.method.toLowerCase():"get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},r.prototype.getUri=function(e){return e=c(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},o.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},1530:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(1493);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},1531:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(1493),a=n(1532),i=n(1503),s=n(1504),c=n(1539),u=n(1540);e.exports=function(e){return r(e),e.baseURL&&!c(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return r(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(r(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},1532:function(e,t,n){"use strict";var r=n(1493);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},1533:function(e,t,n){"use strict";var r=n(1493);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},1534:function(e,t,n){"use strict";var r=n(1506);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},1535:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},1536:function(e,t,n){"use strict";var r=n(1493),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}}),i):i}},1537:function(e,t,n){"use strict";var r=n(1493);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},1538:function(e,t,n){"use strict";var r=n(1493);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},1539:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},1540:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},1541:function(e,t,n){"use strict";function r(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(1508);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},1542:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}});
//# sourceMappingURL=18.bbac57eb.chunk.js.map