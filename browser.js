// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";function e(e,t){return e[t]}function t(e,t){return e.get(t)}function n(e,t,n){e[t]=n}function r(e,t,n){e.set(n,t)}function o(e,t,n,r,f,u){var i,s,a,c,d;if(u>=t.length)return e.accessors[0](e.data,r);for(a=[],c=t[u],i=n[u],d=0;d<c;d++)s=o(e,t,n,r,f,u+1),a.push(s),r+=i;return a}return function(f,u,i,s,a){var c,d,l;if(0===u.length)return[];for(c=0;c<u.length;c++)if(0===u[c])return[];return o((d=f,l=Boolean(d.get&&d.set),{data:d,accessors:l,getter:l?t:e,setter:l?r:n}),u,i,s,a,0)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ndarray2array=t();
//# sourceMappingURL=browser.js.map
