/*! 
 Build based on gin-vue-admin 
 Time : 1709213701000 */
import{k as t,g as e,s as r,a as n,b as a,c as o,n as c,d as s,i as b,S as i,e as u}from"./087AC4D233B64EB0_Uint8Array.js";import{bM as j,bN as f,b7 as y,bc as A,bO as l}from"./087AC4D233B64EB0index.js";import{c as p,k as v,g as d,a as m,b as w,d as g,e as x,i as B}from"./087AC4D233B64EB0_initCloneObject.js";const O=Object.getOwnPropertySymbols?function(t){for(var r=[];t;)n(r,e(t)),t=d(t);return r}:r;function S(t){return a(t,v,O)}var U=Object.prototype.hasOwnProperty;var E=/\w*$/;var I=j?j.prototype:void 0,h=I?I.valueOf:void 0;var D="[object Boolean]",C="[object Date]",F="[object Map]",M="[object Number]",k="[object RegExp]",N="[object Set]",P="[object String]",R="[object Symbol]",V="[object ArrayBuffer]",_="[object DataView]",G="[object Float32Array]",L="[object Float64Array]",W="[object Int8Array]",$="[object Int16Array]",q="[object Int32Array]",z="[object Uint8Array]",H="[object Uint8ClampedArray]",J="[object Uint16Array]",K="[object Uint32Array]";function Q(t,e,r){var n,a,o,c=t.constructor;switch(e){case V:return m(t);case D:case C:return new c(+t);case _:return function(t,e){var r=e?m(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case G:case L:case W:case $:case q:case z:case H:case J:case K:return w(t,r);case F:return new c;case M:case P:return new c(t);case k:return(o=new(a=t).constructor(a.source,E.exec(a))).lastIndex=a.lastIndex,o;case N:return new c;case R:return n=t,h?Object(h.call(n)):{}}}var T=c&&c.isMap;const X=T?s(T):function(t){return f(t)&&"[object Map]"==o(t)};var Y=c&&c.isSet;const Z=Y?s(Y):function(t){return f(t)&&"[object Set]"==o(t)};var tt="[object Arguments]",et="[object Function]",rt="[object Object]",nt={};function at(r,n,a,c,s,j){var f,d=1&n,m=2&n,w=4&n;if(a&&(f=s?a(r,c,s,j):a(r)),void 0!==f)return f;if(!y(r))return r;var E=A(r);if(E){if(f=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&U.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(r),!d)return g(r,f)}else{var I=o(r),h=I==et||"[object GeneratorFunction]"==I;if(b(r))return x(r,d);if(I==rt||I==tt||h&&!s){if(f=m||h?{}:B(r),!d)return m?function(t,e){return p(t,O(t),e)}(r,function(t,e){return t&&p(e,v(e),t)}(f,r)):function(t,r){return p(t,e(t),r)}(r,function(e,r){return e&&p(r,t(r),e)}(f,r))}else{if(!nt[I])return s?r:{};f=Q(r,I,d)}}j||(j=new i);var D=j.get(r);if(D)return D;j.set(r,f),Z(r)?r.forEach((function(t){f.add(at(t,n,a,t,r,j))})):X(r)&&r.forEach((function(t,e){f.set(e,at(t,n,a,e,r,j))}));var C=E?void 0:(w?m?S:u:m?v:t)(r);return function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););}(C||r,(function(t,e){C&&(t=r[e=t]),l(f,e,at(t,n,a,e,r,j))})),f}nt[tt]=nt["[object Array]"]=nt["[object ArrayBuffer]"]=nt["[object DataView]"]=nt["[object Boolean]"]=nt["[object Date]"]=nt["[object Float32Array]"]=nt["[object Float64Array]"]=nt["[object Int8Array]"]=nt["[object Int16Array]"]=nt["[object Int32Array]"]=nt["[object Map]"]=nt["[object Number]"]=nt[rt]=nt["[object RegExp]"]=nt["[object Set]"]=nt["[object String]"]=nt["[object Symbol]"]=nt["[object Uint8Array]"]=nt["[object Uint8ClampedArray]"]=nt["[object Uint16Array]"]=nt["[object Uint32Array]"]=!0,nt["[object Error]"]=nt[et]=nt["[object WeakMap]"]=!1;export{at as b};
