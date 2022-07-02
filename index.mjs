// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";function t(r,e,n,a,i,f){var s,u,o,l,d;if(f>=e.length)return r.getter(r.data,a);for(o=[],l=e[f],s=n[f],d=0;d<l;d++)u=t(r,e,n,a,i,f+1),o.push(u),a+=s;return o}function e(e,n,a,i,f){var s;if(0===n.length)return[];for(s=0;s<n.length;s++)if(0===n[s])return[];return t(r(e),n,a,i,f,0)}export{e as default};
//# sourceMappingURL=index.mjs.map
