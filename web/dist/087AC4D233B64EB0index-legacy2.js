/*! 
 Build based on gin-vue-admin 
 Time : 1709213701000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var e,r={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},l="function"==typeof Symbol?Symbol:{},i=l.iterator||"@@iterator",s=l.asyncIterator||"@@asyncIterator",c=l.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(e){u=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var a=e&&e.prototype instanceof g?e:g,l=Object.create(a.prototype),i=new A(n||[]);return o(l,"_invoke",{value:q(t,r,i)}),l}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=d;var h="suspendedStart",p="suspendedYield",y="executing",m="completed",b={};function g(){}function v(){}function w(){}var x={};u(x,i,(function(){return this}));var E=Object.getPrototypeOf,j=E&&E(E(D([])));j&&j!==n&&a.call(j,i)&&(x=j);var B=w.prototype=g.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(n,o,l,i){var s=f(t[n],t,o);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&a.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,l,i)}),(function(t){r("throw",t,l,i)})):e.resolve(u).then((function(t){c.value=t,l(c)}),(function(t){return r("throw",t,l,i)}))}i(s.arg)}var n;o(this,"_invoke",{value:function(t,a){function o(){return new e((function(e,n){r(t,a,e,n)}))}return n=n?n.then(o,o):o()}})}function q(t,r,n){var a=h;return function(o,l){if(a===y)throw new Error("Generator is already running");if(a===m){if("throw"===o)throw l;return{value:e,done:!0}}for(n.method=o,n.arg=l;;){var i=n.delegate;if(i){var s=L(i,n);if(s){if(s===b)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===h)throw a=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=y;var c=f(t,r,n);if("normal"===c.type){if(a=n.done?m:p,c.arg===b)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=m,n.method="throw",n.arg=c.arg)}}}function L(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var o=f(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var l=o.arg;return l?l.done?(r[t.resultName]=l.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):l:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function D(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(a.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return v.prototype=w,o(B,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:v,configurable:!0}),v.displayName=u(w,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,c,"GeneratorFunction")),t.prototype=Object.create(B),t},r.awrap=function(t){return{__await:t}},_(k.prototype),u(k.prototype,s,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,a,o){void 0===o&&(o=Promise);var l=new k(d(t,e,n,a),o);return r.isGeneratorFunction(e)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},_(B),u(B,c,"Generator"),u(B,i,(function(){return this})),u(B,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=D,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,a){return i.type="throw",i.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var l=this.tryEntries[o],i=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var s=a.call(l,"catchLoc"),c=a.call(l,"finallyLoc");if(s&&c){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(s){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=t,l.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(l)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:D(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},r}function e(t,e,r,n,a,o,l){try{var i=t[o](l),s=i.value}catch(c){return void r(c)}i.done?e(s):Promise.resolve(s).then(n,a)}System.register(["./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0form-item-legacy.js","./087AC4D233B64EB0input-legacy.js","./087AC4D233B64EB0tag-legacy.js","./087AC4D233B64EB0select-legacy.js","./087AC4D233B64EB0scrollbar-legacy.js","./087AC4D233B64EB0popper-legacy.js","./087AC4D233B64EB0button-legacy.js","./087AC4D233B64EB0initdb-legacy.js","./087AC4D233B64EB0_plugin-vue_export-helper-legacy.js","./087AC4D233B64EB0castArray-legacy.js","./087AC4D233B64EB0_baseClone-legacy.js","./087AC4D233B64EB0_Uint8Array-legacy.js","./087AC4D233B64EB0_initCloneObject-legacy.js","./087AC4D233B64EB0isEqual-legacy.js","./087AC4D233B64EB0hasIn-legacy.js","./087AC4D233B64EB0index-legacy20.js","./087AC4D233B64EB0isUndefined-legacy.js","./087AC4D233B64EB0index-legacy21.js","./087AC4D233B64EB0strings-legacy.js","./087AC4D233B64EB0debounce-legacy.js"],(function(r,n){"use strict";var a,o,l,i,s,c,u,d,f,h,p,y,m,b,g,v,w,x,E,j,B,_,k,q,L;return{setters:[function(t){a=t.u,o=t.r,l=t.a,i=t.o,s=t.c,c=t.b,u=t.n,d=t.d,f=t.w,h=t.e,p=t.f,y=t.E,m=t.g,b=t.h,g=t.p,v=t.i,w=t.j,x=t.k,E=t.l},function(t){j=t.E,B=t.a},null,null,function(t){_=t.E,k=t.a},null,null,null,function(t){q=t.i},function(t){L=t._},null,null,null,null,null,null,null,null,null,null,null],execute:function(){var C=document.createElement("style");C.textContent=".slide-in-fwd-top[data-v-700abcda]{animation:slide-in-fwd-top-700abcda .4s cubic-bezier(.25,.46,.45,.94) both}.slide-out-right[data-v-700abcda]{animation:slide-out-right-700abcda .5s cubic-bezier(.55,.085,.68,.53) both}.slide-in-left[data-v-700abcda]{animation:slide-in-left-700abcda .5s cubic-bezier(.25,.46,.45,.94) both}@keyframes slide-in-fwd-top-700abcda{0%{transform:translateZ(-1400px) translateY(-800px);opacity:0}to{transform:translateZ(0) translateY(0);opacity:1}}@keyframes slide-out-right-700abcda{0%{transform:translate(0);opacity:1}to{transform:translate(1000px);opacity:0}}@keyframes slide-in-left-700abcda{0%{transform:translate(-1000px);opacity:0}to{transform:translate(0);opacity:1}}@media (max-width: 750px){.form[data-v-700abcda]{width:94vw!important;padding:0}}\n",document.head.appendChild(C);var N=""+new URL("087AC4D233B64EB0login_right_banner.jpg",n.meta.url).href,A=function(t){return g("data-v-700abcda"),t=t(),v(),t},D={class:"rounded-lg flex items-center justify-evenly w-full h-full relative bg-white md:w-screen md:h-screen md:bg-[#194bfb] overflow-hidden"},V={class:"rounded-md w-full h-full flex items-center justify-center overflow-hidden"},O=A((function(){return c("div",{class:"oblique h-[130%] w-3/5 bg-white transform -rotate-12 absolute -ml-80"},null,-1)})),T={class:"text-lg"},P=p('<div class="font-sans text-4xl font-bold text-center mb-4" data-v-700abcda>GIN-VUE-ADMIN</div><p class="text-gray-600 mb-2" data-v-700abcda>初始化须知</p><p class="text-gray-600 mb-2" data-v-700abcda>1.您需有用一定的VUE和GOLANG基础</p><p class="text-gray-600 mb-2" data-v-700abcda>2.请您确认是否已经阅读过<a class="text-blue-600 font-bold" href="https://www.gin-vue-admin.com" target="_blank" data-v-700abcda>官方文档</a> <a class="text-blue-600 font-bold" href="https://www.bilibili.com/video/BV1kv4y1g7nT?p=2" target="_blank" data-v-700abcda>初始化视频</a></p><p class="text-gray-600 mb-2" data-v-700abcda>3.请您确认是否了解后续的配置流程</p><p class="text-gray-600 mb-2" data-v-700abcda>4.如果您使用mysql数据库，请确认数据库引擎为<span class="text-red-600 font-bold text-3xl ml-2" data-v-700abcda>innoDB</span></p><p class="text-gray-600 mb-2" data-v-700abcda>注：开发组不为文档中书写过的内容提供无偿服务</p>',7),U={class:"flex items-center justify-between mt-8"},G={style:{"text-align":"right"}},F=A((function(){return c("div",{class:"hidden md:block w-1/2 h-full float-right bg-[#194bfb]"},[c("img",{class:"h-full",src:N,alt:"banner"})],-1)})),I=Object.assign({name:"Init"},{__name:"index",setup:function(r){var n=a(),p=o({showReadme:!1,showForm:!1}),g=function(){p.showReadme=!1,setTimeout((function(){p.showForm=!0}),20)},v=function(){window.open("https://www.gin-vue-admin.com/guide/start-quickly/env.html")},L=l(!1),C=o({dbType:"mysql",host:"127.0.0.1",port:"3306",userName:"root",password:"",dbName:"gva",dbPath:""}),N=function(t){switch(t){case"mysql":default:Object.assign(C,{dbType:"mysql",host:"127.0.0.1",port:"3306",userName:"root",password:"",dbName:"gva",dbPath:""});break;case"pgsql":Object.assign(C,{dbType:"pgsql",host:"127.0.0.1",port:"5432",userName:"postgres",password:"",dbName:"gva",dbPath:""});break;case"oracle":Object.assign(C,{dbType:"oracle",host:"127.0.0.1",port:"1521",userName:"oracle",password:"",dbName:"gva",dbPath:""});break;case"mssql":Object.assign(C,{dbType:"mssql",host:"127.0.0.1",port:"1433",userName:"mssql",password:"",dbName:"gva",dbPath:""});break;case"sqlite":Object.assign(C,{dbType:"sqlite",host:"",port:"",userName:"",password:"",dbName:"gva",dbPath:""})}},A=function(){var r,a=(r=t().mark((function e(){var r,a;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=w.service({lock:!0,text:"正在初始化数据库，请稍候",spinner:"loading",background:"rgba(0, 0, 0, 0.7)"}),t.prev=1,t.next=4,q(C);case 4:0===(a=t.sent).code&&(L.value=!0,x({type:"success",message:a.msg}),n.push({name:"Login"})),r.close(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r.close();case 12:case"end":return t.stop()}}),e,null,[[1,9]])})),function(){var t=this,n=arguments;return new Promise((function(a,o){var l=r.apply(t,n);function i(t){e(l,a,o,i,s,"next",t)}function s(t){e(l,a,o,i,s,"throw",t)}i(void 0)}))});return function(){return a.apply(this,arguments)}}();return function(t,e){var r=y,n=_,a=k,o=B,l=E,w=j;return i(),s("div",D,[c("div",V,[O,p.showForm?h("",!0):(i(),s("div",{key:0,class:u([p.showReadme?"slide-out-right":"slide-in-fwd-top"])},[c("div",T,[P,c("p",U,[d(r,{type:"primary",size:"large",onClick:v},{default:f((function(){return[m(" 阅读文档 ")]})),_:1}),d(r,{type:"primary",size:"large",onClick:g},{default:f((function(){return[m(" 我已确认 ")]})),_:1})])])],2)),p.showForm?(i(),s("div",{key:1,class:u([[p.showForm?"slide-in-left":"slide-out-right"],"w-96"])},[d(w,{ref:"formRef",model:C,"label-width":"100px",size:"large"},{default:f((function(){return[d(o,{label:"数据库类型"},{default:f((function(){return[d(a,{modelValue:C.dbType,"onUpdate:modelValue":e[0]||(e[0]=function(t){return C.dbType=t}),placeholder:"请选择",class:"w-full",onChange:N},{default:f((function(){return[d(n,{key:"mysql",label:"mysql",value:"mysql"}),d(n,{key:"pgsql",label:"pgsql",value:"pgsql"}),d(n,{key:"oracle",label:"oracle",value:"oracle"}),d(n,{key:"mssql",label:"mssql",value:"mssql"}),d(n,{key:"sqlite",label:"sqlite",value:"sqlite"})]})),_:1},8,["modelValue"])]})),_:1}),"sqlite"!==C.dbType?(i(),b(o,{key:0,label:"host"},{default:f((function(){return[d(l,{modelValue:C.host,"onUpdate:modelValue":e[1]||(e[1]=function(t){return C.host=t}),placeholder:"请输入数据库链接"},null,8,["modelValue"])]})),_:1})):h("",!0),"sqlite"!==C.dbType?(i(),b(o,{key:1,label:"port"},{default:f((function(){return[d(l,{modelValue:C.port,"onUpdate:modelValue":e[2]||(e[2]=function(t){return C.port=t}),placeholder:"请输入数据库端口"},null,8,["modelValue"])]})),_:1})):h("",!0),"sqlite"!==C.dbType?(i(),b(o,{key:2,label:"userName"},{default:f((function(){return[d(l,{modelValue:C.userName,"onUpdate:modelValue":e[3]||(e[3]=function(t){return C.userName=t}),placeholder:"请输入数据库用户名"},null,8,["modelValue"])]})),_:1})):h("",!0),"sqlite"!==C.dbType?(i(),b(o,{key:3,label:"password"},{default:f((function(){return[d(l,{modelValue:C.password,"onUpdate:modelValue":e[4]||(e[4]=function(t){return C.password=t}),placeholder:"请输入数据库密码（没有则为空）"},null,8,["modelValue"])]})),_:1})):h("",!0),d(o,{label:"dbName"},{default:f((function(){return[d(l,{modelValue:C.dbName,"onUpdate:modelValue":e[5]||(e[5]=function(t){return C.dbName=t}),placeholder:"请输入数据库名称"},null,8,["modelValue"])]})),_:1}),"sqlite"===C.dbType?(i(),b(o,{key:4,label:"dbPath"},{default:f((function(){return[d(l,{modelValue:C.dbPath,"onUpdate:modelValue":e[6]||(e[6]=function(t){return C.dbPath=t}),placeholder:"请输入sqlite数据库文件存放路径"},null,8,["modelValue"])]})),_:1})):h("",!0),d(o,null,{default:f((function(){return[c("div",G,[d(r,{type:"primary",onClick:A},{default:f((function(){return[m("立即初始化")]})),_:1})])]})),_:1})]})),_:1},8,["model"])],2)):h("",!0)]),F])}}});r("default",L(I,[["__scopeId","data-v-700abcda"]]))}}}))}();
