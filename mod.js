// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=function(t,r){return t[r]},r=function(t,r){return t.get(r)},n=function(t,r,n){t[r]=n},e=function(t,r,n){t.set(n,r)};var u=function(u){var a=Boolean(u.get&&u.set);return{data:u,accessors:a,getter:a?r:t,setter:a?e:n}};function a(t,r,n,e,u,f){var o,i,c,s,g;if(f>=r.length)return t.getter(t.data,e);for(c=[],s=r[f],o=n[f],g=0;g<s;g++)i=a(t,r,n,e,u,f+1),c.push(i),e+=o;return c}function f(t,r,n,e,f){var o;if(0===r.length)return[];for(o=0;o<r.length;o++)if(0===r[o])return[];return a(u(t),r,n,e,f,0)}export{f as default};
//# sourceMappingURL=mod.js.map
