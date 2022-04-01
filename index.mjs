// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";var t=function r(t,e,n,a,i,f){var s,u,o,l,d;if(f>=e.length)return t.getter(t.data,a);for(o=[],l=e[f],s=n[f],d=0;d<l;d++)u=r(t,e,n,a,i,f+1),o.push(u),a+=s;return o},e=r,n=t;var a=function(r,t,a,i,f){var s;if(0===t.length)return[];for(s=0;s<t.length;s++)if(0===t[s])return[];return n(e(r),t,a,i,f,0)};export{a as default};
//# sourceMappingURL=index.mjs.map
