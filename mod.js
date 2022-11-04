// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t,e){return t[e]}function e(t,e){return t.get(e)}function n(t,e,n){t[e]=n}function r(t,e,n){t.set(n,e)}function u(t,e,n,r,f,o){var a,i,c,s,g;if(o>=e.length)return t.getter(t.data,r);for(c=[],s=e[o],a=n[o],g=0;g<s;g++)i=u(t,e,n,r,f,o+1),c.push(i),r+=a;return c}function f(f,o,a,i,c){var s,g,l;if(0===o.length)return[];for(s=0;s<o.length;s++)if(0===o[s])return[];return u((g=f,l=Boolean(g.get&&g.set),{data:g,accessors:l,getter:l?e:t,setter:l?r:n}),o,a,i,c,0)}export{f as default};
//# sourceMappingURL=mod.js.map
