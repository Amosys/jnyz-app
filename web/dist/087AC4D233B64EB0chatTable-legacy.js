/*! 
 Build based on gin-vue-admin 
 Time : 1709213701000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var e,r={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},l="function"==typeof Symbol?Symbol:{},i=l.iterator||"@@iterator",c=l.asyncIterator||"@@asyncIterator",u=l.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(e){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,l=Object.create(o.prototype),i=new L(n||[]);return a(l,"_invoke",{value:C(t,r,i)}),l}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var d="suspendedStart",y="suspendedYield",h="executing",m="completed",g={};function v(){}function b(){}function w(){}var x={};s(x,i,(function(){return this}));var B=Object.getPrototypeOf,k=B&&B(B(G([])));k&&k!==n&&o.call(k,i)&&(x=k);var E=w.prototype=v.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(n,a,l,i){var c=p(t[n],t,a);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&o.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,l,i)}),(function(t){r("throw",t,l,i)})):e.resolve(s).then((function(t){u.value=t,l(u)}),(function(t){return r("throw",t,l,i)}))}i(c.arg)}var n;a(this,"_invoke",{value:function(t,o){function a(){return new e((function(e,n){r(t,o,e,n)}))}return n=n?n.then(a,a):a()}})}function C(t,r,n){var o=d;return function(a,l){if(o===h)throw new Error("Generator is already running");if(o===m){if("throw"===a)throw l;return{value:e,done:!0}}for(n.method=a,n.arg=l;;){var i=n.delegate;if(i){var c=O(i,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=h;var u=p(t,r,n);if("normal"===u.type){if(o=n.done?m:y,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=m,n.method="throw",n.arg=u.arg)}}}function O(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var l=a.arg;return l?l.done?(r[t.resultName]=l.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):l:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function G(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(typeof t+" is not iterable")}return b.prototype=w,a(E,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:b,configurable:!0}),b.displayName=s(w,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},j(_.prototype),s(_.prototype,c,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var l=new _(f(t,e,n,o),a);return r.isGeneratorFunction(e)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},j(E),s(E,u,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=G,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(D),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a],i=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var c=o.call(l,"catchLoc"),u=o.call(l,"finallyLoc");if(c&&u){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var l=a?a.completion:{};return l.type=t,l.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(l)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;D(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},r}function e(t,e,r,n,o,a,l){try{var i=t[a](l),c=i.value}catch(u){return void r(u)}i.done?e(c):Promise.resolve(c).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var l=t.apply(r,n);function i(t){e(l,o,a,i,c,"next",t)}function c(t){e(l,o,a,i,c,"throw",t)}i(void 0)}))}}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){var n;return(e="symbol"==typeof(n=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?n:String(n))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}System.register(["./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0table-column-legacy.js","./087AC4D233B64EB0checkbox-legacy.js","./087AC4D233B64EB0tooltip-legacy.js","./087AC4D233B64EB0popper-legacy.js","./087AC4D233B64EB0scrollbar-legacy.js","./087AC4D233B64EB0tag-legacy.js","./087AC4D233B64EB0form-item-legacy.js","./087AC4D233B64EB0input-legacy.js","./087AC4D233B64EB0select-legacy.js","./087AC4D233B64EB0popover-legacy.js","./087AC4D233B64EB0button-legacy.js","./087AC4D233B64EB0warningBar-legacy.js","./087AC4D233B64EB0autoCode-legacy.js","./087AC4D233B64EB0_plugin-vue_export-helper-legacy.js","./087AC4D233B64EB0index-legacy20.js","./087AC4D233B64EB0isUndefined-legacy.js","./087AC4D233B64EB0_Uint8Array-legacy.js","./087AC4D233B64EB0debounce-legacy.js","./087AC4D233B64EB0_initCloneObject-legacy.js","./087AC4D233B64EB0hasIn-legacy.js","./087AC4D233B64EB0isEqual-legacy.js","./087AC4D233B64EB0castArray-legacy.js","./087AC4D233B64EB0_baseClone-legacy.js","./087AC4D233B64EB0index-legacy21.js","./087AC4D233B64EB0strings-legacy.js","./087AC4D233B64EB0dropdown-legacy.js","./087AC4D233B64EB0icon-legacy2.js"],(function(e,n){"use strict";var a,l,i,c,u,s,f,p,d,y,h,m,g,v,b,w,x,B,k,E,j,_,C,O,A,D,L,G,P,V,N,S,T,R,F,z,I,U,q,K,$;return{setters:[function(t){a=t.x,l=t.y,i=t.O,c=t.o,u=t.c,s=t.b,f=t.G,p=t._,d=t.C,y=t.P,h=t.F,m=t.Q,g=t.B,v=t.d,b=t.n,w=t.H,x=t.t,B=t.e,k=t.K,E=t.v,j=t.a,_=t.r,C=t.w,O=t.g,A=t.M,D=t.N,L=t.h,G=t.l,P=t.E,V=t.p,N=t.i},function(t){S=t.E,T=t.a},null,null,null,null,null,function(t){R=t.a,F=t.E},null,function(t){z=t.E,I=t.a},function(t){U=t.E},null,function(t){q=t._},function(t){K=t.g},function(t){$=t._},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n=document.createElement("style");n.textContent=".el-empty{--el-empty-padding: 40px 0;--el-empty-image-width: 160px;--el-empty-description-margin-top: 20px;--el-empty-bottom-margin-top: 20px;--el-empty-fill-color-0: var(--el-color-white);--el-empty-fill-color-1: #fcfcfd;--el-empty-fill-color-2: #f8f9fb;--el-empty-fill-color-3: #f7f8fc;--el-empty-fill-color-4: #eeeff3;--el-empty-fill-color-5: #edeef2;--el-empty-fill-color-6: #e9ebef;--el-empty-fill-color-7: #e5e7e9;--el-empty-fill-color-8: #e0e3e9;--el-empty-fill-color-9: #d5d7de;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;box-sizing:border-box;padding:var(--el-empty-padding)}.el-empty__image{width:var(--el-empty-image-width)}.el-empty__image img{-webkit-user-select:none;user-select:none;width:100%;height:100%;vertical-align:top;object-fit:contain}.el-empty__image svg{color:var(--el-svg-monochrome-grey);fill:currentColor;width:100%;height:100%;vertical-align:top}.el-empty__description{margin-top:var(--el-empty-description-margin-top)}.el-empty__description p{margin:0;font-size:var(--el-font-size-base);color:var(--el-text-color-secondary)}.el-empty__bottom{margin-top:var(--el-empty-bottom-margin-top)}.secret[data-v-566bb723]{padding:30px;margin-top:20px;background:#F5F5F5}.secret p[data-v-566bb723]{line-height:30px}.query-ipt[data-v-566bb723]{width:300px;margin-right:30px}.content[data-v-566bb723]{padding:10px;width:100%;background:#F5F5F5;margin-top:30px}.content p[data-v-566bb723]{font-size:16px;line-height:20px}.tables[data-v-566bb723]{width:100%;margin-top:30px}.tables .text[data-v-566bb723]{font-size:18px;color:#6b7687;text-align:center}\n",document.head.appendChild(n);var M={viewBox:"0 0 79 86",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},Q=["id"],Y=["stop-color"],H=["stop-color"],Z=["id"],J=["stop-color"],W=["stop-color"],X=["id"],tt={id:"Illustrations",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},et={id:"B-type",transform:"translate(-1268.000000, -535.000000)"},rt={id:"Group-2",transform:"translate(1268.000000, 535.000000)"},nt=["fill"],ot=["fill"],at={id:"Group-Copy",transform:"translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"},lt=["fill"],it=["fill"],ct=["fill"],ut=["fill"],st=["fill"],ft={id:"Rectangle-Copy-17",transform:"translate(53.000000, 45.000000)"},pt=["fill","xlink:href"],dt=["fill","mask"],yt=["fill"],ht=a({name:"ImgEmpty"}),mt=a(o(o({},ht),{},{setup:function(t){var e=l("empty"),r=i();return function(t,n){return c(),u("svg",M,[s("defs",null,[s("linearGradient",{id:"linearGradient-1-".concat(f(r)),x1:"38.8503086%",y1:"0%",x2:"61.1496914%",y2:"100%"},[s("stop",{"stop-color":"var(".concat(f(e).cssVarBlockName("fill-color-1"),")"),offset:"0%"},null,8,Y),s("stop",{"stop-color":"var(".concat(f(e).cssVarBlockName("fill-color-4"),")"),offset:"100%"},null,8,H)],8,Q),s("linearGradient",{id:"linearGradient-2-".concat(f(r)),x1:"0%",y1:"9.5%",x2:"100%",y2:"90.5%"},[s("stop",{"stop-color":"var(".concat(f(e).cssVarBlockName("fill-color-1"),")"),offset:"0%"},null,8,J),s("stop",{"stop-color":"var(".concat(f(e).cssVarBlockName("fill-color-6"),")"),offset:"100%"},null,8,W)],8,Z),s("rect",{id:"path-3-".concat(f(r)),x:"0",y:"0",width:"17",height:"36"},null,8,X)]),s("g",tt,[s("g",et,[s("g",rt,[s("path",{id:"Oval-Copy-2",d:"M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",fill:"var(".concat(f(e).cssVarBlockName("fill-color-3"),")")},null,8,nt),s("polygon",{id:"Rectangle-Copy-14",fill:"var(".concat(f(e).cssVarBlockName("fill-color-7"),")"),transform:"translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",points:"13 58 53 58 42 45 2 45"},null,8,ot),s("g",at,[s("polygon",{id:"Rectangle-Copy-10",fill:"var(".concat(f(e).cssVarBlockName("fill-color-7"),")"),transform:"translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",points:"2.84078316e-14 3 18 3 23 7 5 7"},null,8,lt),s("polygon",{id:"Rectangle-Copy-11",fill:"var(".concat(f(e).cssVarBlockName("fill-color-5"),")"),points:"-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"},null,8,it),s("rect",{id:"Rectangle-Copy-12",fill:"url(#linearGradient-1-".concat(f(r),")"),transform:"translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",x:"38",y:"7",width:"17",height:"36"},null,8,ct),s("polygon",{id:"Rectangle-Copy-13",fill:"var(".concat(f(e).cssVarBlockName("fill-color-2"),")"),transform:"translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",points:"24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"},null,8,ut)]),s("rect",{id:"Rectangle-Copy-15",fill:"url(#linearGradient-2-".concat(f(r),")"),x:"13",y:"45",width:"40",height:"36"},null,8,st),s("g",ft,[s("use",{id:"Mask",fill:"var(".concat(f(e).cssVarBlockName("fill-color-8"),")"),transform:"translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ","xlink:href":"#path-3-".concat(f(r))},null,8,pt),s("polygon",{id:"Rectangle-Copy",fill:"var(".concat(f(e).cssVarBlockName("fill-color-9"),")"),mask:"url(#mask-4-".concat(f(r),")"),transform:"translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",points:"7 0 24 0 20 18 7 16.5"},null,8,dt)]),s("polygon",{id:"Rectangle-Copy-18",fill:"var(".concat(f(e).cssVarBlockName("fill-color-2"),")"),transform:"translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",points:"62 45 79 45 70 58 53 58"},null,8,yt)])])])])}}})),gt=p(mt,[["__file","img-empty.vue"]]),vt=d({image:{type:String,default:""},imageSize:Number,description:{type:String,default:""}}),bt=["src"],wt={key:1},xt=a({name:"ElEmpty"}),Bt=a(o(o({},xt),{},{props:vt,setup:function(t){var e=t,r=y().t,n=l("empty"),o=h((function(){return e.description||r("el.table.emptyText")})),a=h((function(){return{width:m(e.imageSize)}}));return function(t,e){return c(),u("div",{class:b(f(n).b())},[s("div",{class:b(f(n).e("image")),style:w(f(a))},[t.image?(c(),u("img",{key:0,src:t.image,ondragstart:"return false"},null,8,bt)):g(t.$slots,"image",{key:1},(function(){return[v(gt)]}))],6),s("div",{class:b(f(n).e("description"))},[t.$slots.description?g(t.$slots,"description",{key:0}):(c(),u("p",wt,x(f(o)),1))],2),t.$slots.default?(c(),u("div",{key:0,class:b(f(n).e("bottom"))},[g(t.$slots,"default")],2)):B("v-if",!0)],2)}}})),kt=k(p(Bt,[["__file","empty.vue"]])),Et={class:"gva-table-box"},jt={key:0},_t={class:"secret"},Ct={key:1},Ot=function(t){return V("data-v-566bb723"),t=t(),N(),t}((function(){return s("p",null,"确定要删除并返回吗？",-1)})),At={style:{"text-align":"right","margin-top":"8px"}},Dt={class:"tables"},Lt={key:1,class:"text"},Gt={__name:"chatTable",setup:function(e){var n=j(null),o=_({sk:""}),a=j(""),l=function(){var e=r(t().mark((function e(){var r;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E({url:"/chatGpt/getSK",method:"get"});case 2:r=t.sent,n.value=r.data.ok;case 4:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=r(t().mark((function e(){var r;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K();case 2:0===(r=t.sent).code&&(y.value=r.data.dbs);case 4:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();l(),i();var f=function(){var e=r(t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E({url:"/chatGpt/createSK",method:"post",data:o});case 2:if(0!==t.sent.code){t.next=6;break}return t.next=6,l();case 6:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=r(t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E({url:"/chatGpt/deleteSK",method:"delete"});case 2:if(0!==t.sent.code){t.next=6;break}return t.next=6,l();case 6:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=j({dbname:"",chat:""}),y=j([]),h=j([]),m=function(){var e=r(t().mark((function e(){var r;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e=d.value,E({url:"/chatGpt/getTable",method:"post",data:e});case 2:0===(r=t.sent).code&&(h.value=r.data.results||[]),a.value=r.data.sql;case 5:case"end":return t.stop()}var e}),e)})));return function(){return e.apply(this,arguments)}}();return function(t,e){var r=G,l=P,i=kt,g=U,b=R,w=z,x=I,B=F,k=S,E=T;return c(),u("div",Et,[v(q,{title:"使用GPT-3.5模型，存在一定不稳定性，成功率为50%左右，使用GPT-4可以极大提升成功率，但是费用较高。"}),n.value?(c(),u("div",Ct,[v(B,{model:d.value,"label-width":"120px"},{default:C((function(){return[v(b,{label:"删除当前sk："},{default:C((function(){return[v(g,{placement:"top",width:"160"},{reference:C((function(){return[v(l,{type:"primary",link:"",icon:"delete"},{default:C((function(){return[O("删除")]})),_:1})]})),default:C((function(){return[Ot,s("div",At,[v(l,{type:"primary",onClick:p},{default:C((function(){return[O("确定")]})),_:1})])]})),_:1})]})),_:1}),v(b,{label:"查询db名称："},{default:C((function(){return[v(x,{modelValue:d.value.dbname,"onUpdate:modelValue":e[1]||(e[1]=function(t){return d.value.dbname=t}),placeholder:"请选择库",style:{width:"115px"}},{default:C((function(){return[(c(!0),u(A,null,D(y.value,(function(t,e){return c(),L(w,{key:e,label:t.database,value:t.database},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),v(b,{label:"查询db描述："},{default:C((function(){return[v(r,{modelValue:d.value.chat,"onUpdate:modelValue":e[2]||(e[2]=function(t){return d.value.chat=t}),autosize:{minRows:2,maxRows:4},type:"textarea",clearable:"",placeholder:"请输入对话"},null,8,["modelValue"])]})),_:1}),v(b,{label:"GPT生成SQL:"},{default:C((function(){return[v(r,{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=function(t){return a.value=t}),autosize:{minRows:2,maxRows:4},type:"textarea",disabled:"",placeholder:"此处展示自动生成的sql"},null,8,["modelValue"])]})),_:1}),v(l,{type:"primary",onClick:m},{default:C((function(){return[O("查询")]})),_:1})]})),_:1},8,["model"]),s("div",Dt,[h.value.length?(c(),L(E,{key:0,ref:"multipleTable",data:h.value,style:{width:"100%"},"tooltip-effect":"dark",height:"400px"},{default:C((function(){return[(c(!0),u(A,null,D(h.value[0],(function(t,e){return c(),L(k,{key:e,prop:e,label:e,"min-width":"200","show-overflow-tooltip":""},null,8,["prop","label"])})),128))]})),_:1},8,["data"])):(c(),u("p",Lt,"请在对话框输入你需要AI帮你查询的内容：）"))])])):(c(),u("div",jt,[v(r,{modelValue:o.sk,"onUpdate:modelValue":e[0]||(e[0]=function(t){return o.sk=t}),class:"query-ipt",placeholder:"请输入您的ChatGpt SK",clearable:""},null,8,["modelValue"]),v(l,{type:"primary",onClick:f},{default:C((function(){return[O("保存")]})),_:1}),s("div",_t,[v(i,{description:"请到gpt网站获取您的sk：https://platform.openai.com/account/api-keys"})])]))])}}};e("default",$(Gt,[["__scopeId","data-v-566bb723"]]))}}}))}();
