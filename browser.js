// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e=function(e,t){return e[t]},t=function(e,t){return e.get(t)},n=function(e,t,n){e[t]=n},r=function(e,t,n){e.set(n,t)},o=function(o){var f=Boolean(o.get&&o.set);return{data:o,accessors:f,getter:f?t:e,setter:f?r:n}};function f(e,t,n,r,o,u){var i,a,s,c,d;if(u>=t.length)return e.getter(e.data,r);for(s=[],c=t[u],i=n[u],d=0;d<c;d++)a=f(e,t,n,r,o,u+1),s.push(a),r+=i;return s}return function(e,t,n,r,u){var i;if(0===t.length)return[];for(i=0;i<t.length;i++)if(0===t[i])return[];return f(o(e),t,n,r,u,0)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ndarray2array=t();
//# sourceMappingURL=browser.js.map
