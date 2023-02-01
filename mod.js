// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t,e){return t[e]}function e(t,e){return t.get(e)}function n(t,e,n){t[e]=n}function r(t,e,n){t.set(n,e)}function u(t,e,n,r,o,f){var a,s,c,i,g;if(f>=e.length)return t.accessors[0](t.data,r);for(c=[],i=e[f],a=n[f],g=0;g<i;g++)s=u(t,e,n,r,o,f+1),c.push(s),r+=a;return c}function o(o,f,a,s,c){var i,g,l;if(0===f.length)return[];for(i=0;i<f.length;i++)if(0===f[i])return[];return u((g=o,l=Boolean(g.get&&g.set),{data:g,accessors:l,getter:l?e:t,setter:l?r:n}),f,a,s,c,0)}export{o as default};
//# sourceMappingURL=mod.js.map
