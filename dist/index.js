"use strict";var y=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var g=y(function(B,f){
function l(t,r,a,u,n,e){var v,s,i,o,c;if(e>=r.length)return t.accessors[0](t.data,u);for(i=[],o=r[e],v=a[e],c=0;c<o;c++)s=l(t,r,a,u,n,e+1),i.push(s),u+=v;return i}f.exports=l
});var x=y(function(C,q){
var k=require('@stdlib/array-base-arraylike2object/dist'),d=g();function w(t,r,a,u,n){var e;if(r.length===0)return[];for(e=0;e<r.length;e++)if(r[e]===0)return[];return d(k(t),r,a,u,n,0)}q.exports=w
});var z=x();module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
