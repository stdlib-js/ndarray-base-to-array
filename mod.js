// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=function(t,r){return t[r]},r=function(t,r){return t.get(r)},n=function(t,r,n){t[r]=n},e=function(t,r,n){t.set(n,r)};var u=function t(r,n,e,u,a,f){var o,i,c,s,g;if(f>=n.length)return r.getter(r.data,u);for(c=[],s=n[f],o=e[f],g=0;g<s;g++)i=t(r,n,e,u,a,f+1),c.push(i),u+=o;return c},a=function(u){var a=Boolean(u.get&&u.set);return{data:u,accessors:a,getter:a?r:t,setter:a?e:n}},f=u;var o=function(t,r,n,e,u){var o;if(0===r.length)return[];for(o=0;o<r.length;o++)if(0===r[o])return[];return f(a(t),r,n,e,u,0)};export{o as default};
//# sourceMappingURL=mod.js.map
