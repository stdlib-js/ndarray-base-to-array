// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";function t(r,e,n,a,s,i){var f,o,u,l,c;if(i>=e.length)return r.accessors[0](r.data,a);for(u=[],l=e[i],f=n[i],c=0;c<l;c++)o=t(r,e,n,a,s,i+1),u.push(o),a+=f;return u}function e(e,n,a,s,i){var f;if(0===n.length)return[];for(f=0;f<n.length;f++)if(0===n[f])return[];return t(r(e),n,a,s,i,0)}export{e as default};
//# sourceMappingURL=index.mjs.map
