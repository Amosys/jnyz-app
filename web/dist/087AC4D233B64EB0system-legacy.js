/*! 
 Build based on gin-vue-admin 
 Time : 1715432289000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return u};var l,u={},n=Object.prototype,t=n.hasOwnProperty,a=Object.defineProperty||function(e,l,u){e[l]=u.value},o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",d=o.toStringTag||"@@toStringTag";function c(e,l,u){return Object.defineProperty(e,l,{value:u,enumerable:!0,configurable:!0,writable:!0}),e[l]}try{c({},"")}catch(l){c=function(e,l,u){return e[l]=u}}function m(e,l,u,n){var t=l&&l.prototype instanceof b?l:b,o=Object.create(t.prototype),r=new z(n||[]);return a(o,"_invoke",{value:E(e,u,r)}),o}function s(e,l,u){try{return{type:"normal",arg:e.call(l,u)}}catch(e){return{type:"throw",arg:e}}}u.wrap=m;var f="suspendedStart",p="suspendedYield",v="executing",V="completed",y={};function b(){}function h(){}function g(){}var _={};c(_,r,(function(){return this}));var w=Object.getPrototypeOf,U=w&&w(w(A([])));U&&U!==n&&t.call(U,r)&&(_=U);var x=g.prototype=b.prototype=Object.create(_);function q(e){["next","throw","return"].forEach((function(l){c(e,l,(function(e){return this._invoke(l,e)}))}))}function k(e,l){function u(n,a,o,r){var i=s(e[n],e,a);if("throw"!==i.type){var d=i.arg,c=d.value;return c&&"object"==typeof c&&t.call(c,"__await")?l.resolve(c.__await).then((function(e){u("next",e,o,r)}),(function(e){u("throw",e,o,r)})):l.resolve(c).then((function(e){d.value=e,o(d)}),(function(e){return u("throw",e,o,r)}))}r(i.arg)}var n;a(this,"_invoke",{value:function(e,t){function a(){return new l((function(l,n){u(e,t,l,n)}))}return n=n?n.then(a,a):a()}})}function E(e,u,n){var t=f;return function(a,o){if(t===v)throw Error("Generator is already running");if(t===V){if("throw"===a)throw o;return{value:l,done:!0}}for(n.method=a,n.arg=o;;){var r=n.delegate;if(r){var i=B(r,n);if(i){if(i===y)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(t===f)throw t=V,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);t=v;var d=s(e,u,n);if("normal"===d.type){if(t=n.done?V:p,d.arg===y)continue;return{value:d.arg,done:n.done}}"throw"===d.type&&(t=V,n.method="throw",n.arg=d.arg)}}}function B(e,u){var n=u.method,t=e.iterator[n];if(t===l)return u.delegate=null,"throw"===n&&e.iterator.return&&(u.method="return",u.arg=l,B(e,u),"throw"===u.method)||"return"!==n&&(u.method="throw",u.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=s(t,e.iterator,u.arg);if("throw"===a.type)return u.method="throw",u.arg=a.arg,u.delegate=null,y;var o=a.arg;return o?o.done?(u[e.resultName]=o.value,u.next=e.nextLoc,"return"!==u.method&&(u.method="next",u.arg=l),u.delegate=null,y):o:(u.method="throw",u.arg=new TypeError("iterator result is not an object"),u.delegate=null,y)}function j(e){var l={tryLoc:e[0]};1 in e&&(l.catchLoc=e[1]),2 in e&&(l.finallyLoc=e[2],l.afterLoc=e[3]),this.tryEntries.push(l)}function C(e){var l=e.completion||{};l.type="normal",delete l.arg,e.completion=l}function z(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function A(e){if(e||""===e){var u=e[r];if(u)return u.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function u(){for(;++n<e.length;)if(t.call(e,n))return u.value=e[n],u.done=!1,u;return u.value=l,u.done=!0,u};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return h.prototype=g,a(x,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:h,configurable:!0}),h.displayName=c(g,d,"GeneratorFunction"),u.isGeneratorFunction=function(e){var l="function"==typeof e&&e.constructor;return!!l&&(l===h||"GeneratorFunction"===(l.displayName||l.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c(e,d,"GeneratorFunction")),e.prototype=Object.create(x),e},u.awrap=function(e){return{__await:e}},q(k.prototype),c(k.prototype,i,(function(){return this})),u.AsyncIterator=k,u.async=function(e,l,n,t,a){void 0===a&&(a=Promise);var o=new k(m(e,l,n,t),a);return u.isGeneratorFunction(l)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},q(x),c(x,d,"Generator"),c(x,r,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),u.keys=function(e){var l=Object(e),u=[];for(var n in l)u.push(n);return u.reverse(),function e(){for(;u.length;){var n=u.pop();if(n in l)return e.value=n,e.done=!1,e}return e.done=!0,e}},u.values=A,z.prototype={constructor:z,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=l,this.done=!1,this.delegate=null,this.method="next",this.arg=l,this.tryEntries.forEach(C),!e)for(var u in this)"t"===u.charAt(0)&&t.call(this,u)&&!isNaN(+u.slice(1))&&(this[u]=l)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var u=this;function n(n,t){return r.type="throw",r.arg=e,u.next=n,t&&(u.method="next",u.arg=l),!!t}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],r=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=t.call(o,"catchLoc"),d=t.call(o,"finallyLoc");if(i&&d){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!d)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,l){for(var u=this.tryEntries.length-1;u>=0;--u){var n=this.tryEntries[u];if(n.tryLoc<=this.prev&&t.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=l&&l<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=l,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(o)},complete:function(e,l){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&l&&(this.next=l),y},finish:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var u=this.tryEntries[l];if(u.finallyLoc===e)return this.complete(u.completion,u.afterLoc),C(u),y}},catch:function(e){for(var l=this.tryEntries.length-1;l>=0;--l){var u=this.tryEntries[l];if(u.tryLoc===e){var n=u.completion;if("throw"===n.type){var t=n.arg;C(u)}return t}}throw Error("illegal catch attempt")},delegateYield:function(e,u,n){return this.delegate={iterator:A(e),resultName:u,nextLoc:n},"next"===this.method&&(this.arg=l),y}},u}function l(e,l,u,n,t,a,o){try{var r=e[a](o),i=r.value}catch(d){return void u(d)}r.done?l(i):Promise.resolve(i).then(n,t)}function u(e){return function(){var u=this,n=arguments;return new Promise((function(t,a){var o=e.apply(u,n);function r(e){l(o,t,a,r,i,"next",e)}function i(e){l(o,t,a,r,i,"throw",e)}r(void 0)}))}}System.register(["./087AC4D233B64EB0index-legacy.js","./087AC4D233B64EB0form-item-legacy.js","./087AC4D233B64EB0collapse-item-legacy.js","./087AC4D233B64EB0switch-legacy.js","./087AC4D233B64EB0button-legacy.js","./087AC4D233B64EB0tooltip-legacy.js","./087AC4D233B64EB0popper-legacy.js","./087AC4D233B64EB0input-legacy.js","./087AC4D233B64EB0input-number-legacy.js","./087AC4D233B64EB0checkbox-legacy.js","./087AC4D233B64EB0tag-legacy.js","./087AC4D233B64EB0select-legacy.js","./087AC4D233B64EB0scrollbar-legacy.js","./087AC4D233B64EB0system-legacy2.js","./087AC4D233B64EB0index-legacy20.js","./087AC4D233B64EB0castArray-legacy.js","./087AC4D233B64EB0_baseClone-legacy.js","./087AC4D233B64EB0_Uint8Array-legacy.js","./087AC4D233B64EB0_initCloneObject-legacy.js","./087AC4D233B64EB0index-legacy25.js","./087AC4D233B64EB0index-legacy22.js","./087AC4D233B64EB0isEqual-legacy.js","./087AC4D233B64EB0index-legacy21.js","./087AC4D233B64EB0strings-legacy.js","./087AC4D233B64EB0debounce-legacy.js","./087AC4D233B64EB0isUndefined-legacy.js"],(function(l,n){"use strict";var t,a,o,r,i,d,c,m,s,f,p,v,V,y,b,h,g,_,w,U,x,q,k,E,B,j,C,z;return{setters:[function(e){t=e.t,a=e.r,o=e.a,r=e.o,i=e.c,d=e.d,c=e.w,m=e.g,s=e.M,f=e.N,p=e.h,v=e.e,V=e.b,y=e.k,b=e.l,h=e.E},function(e){g=e.a,_=e.E},function(e){w=e.E,U=e.a},function(e){x=e.E},null,null,null,null,function(e){q=e.E},function(e){k=e.E},null,function(e){E=e.E,B=e.a},null,function(e){j=e.a,C=e.s},function(e){z=e.E},null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n=document.createElement("style");n.textContent=".system{border-radius:.25rem;--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding:2.25rem}.system h2{margin-top:.625rem;margin-bottom:.625rem;padding:.625rem;font-size:1.125rem;line-height:1.75rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}\n",document.head.appendChild(n);var A={class:"system"},D=V("h2",null,"本地文件配置",-1),L=V("h2",null,"qiniu上传配置",-1),O=V("h2",null,"腾讯云COS上传配置",-1),S=V("h2",null,"阿里云OSS上传配置",-1),M=V("h2",null,"华为云Obs上传配置",-1),N={class:"mt-4"};l("default",Object.assign({name:"Config"},{__name:"system",setup:function(l){var n=a([]),T=o({system:{"iplimit-count":0,"iplimit-time":0},jwt:{},mysql:{},pgsql:{},excel:{},autocode:{},redis:{},mongo:{coll:"",options:"",database:"",username:"",password:"","min-pool-size":"","max-pool-size":"","socket-timeout-ms":"","connect-timeout-ms":"","is-zap":"",hosts:[{host:"",port:""}]},qiniu:{},"tencent-cos":{},"aliyun-oss":{},"hua-wei-obs":{},captcha:{},zap:{},local:{},email:{},timer:{detail:{}}}),I=function(){var l=u(e().mark((function l(){var u;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:0===(u=e.sent).code&&(T.value=u.data.config);case 4:case"end":return e.stop()}}),l)})));return function(){return l.apply(this,arguments)}}();I();var P=function(){},G=function(){var l=u(e().mark((function l(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C({config:T.value});case 2:if(0!==e.sent.code){e.next=7;break}return y({type:"success",message:"配置文件设置成功"}),e.next=7,I();case 7:case"end":return e.stop()}}),l)})));return function(){return l.apply(this,arguments)}}(),F=function(){var l=u(e().mark((function l(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({url:"/email/emailTest",method:"post",data:void 0});case 2:if(0!==e.sent.code){e.next=9;break}return y({type:"success",message:"邮件发送成功"}),e.next=7,I();case 7:e.next=10;break;case 9:y({type:"error",message:"邮件发送失败"});case 10:case"end":return e.stop()}}),l)})));return function(){return l.apply(this,arguments)}}();return function(e,l){var u=E,t=B,a=g,o=b,y=k,j=q,C=z,I=w,K=h,W=x,R=U,Y=_;return r(),i("div",A,[d(Y,{ref:"form",model:T.value,"label-width":"240px"},{default:c((function(){return[d(R,{modelValue:n,"onUpdate:modelValue":l[107]||(l[107]=function(e){return function(e){throw new TypeError('"'+e+'" is read-only')}("activeNames")})},{default:c((function(){return[d(I,{title:"系统配置",name:"1"},{default:c((function(){return[d(a,{label:"环境值"},{default:c((function(){return[d(t,{modelValue:T.value.system.env,"onUpdate:modelValue":l[0]||(l[0]=function(e){return T.value.system.env=e}),style:{width:"100%"}},{default:c((function(){return[d(u,{value:"public"}),d(u,{value:"develop"})]})),_:1},8,["modelValue"])]})),_:1}),d(a,{label:"端口值"},{default:c((function(){return[d(o,{modelValue:T.value.system.addr,"onUpdate:modelValue":l[1]||(l[1]=function(e){return T.value.system.addr=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),d(a,{label:"数据库类型"},{default:c((function(){return[d(t,{modelValue:T.value.system["db-type"],"onUpdate:modelValue":l[2]||(l[2]=function(e){return T.value.system["db-type"]=e}),style:{width:"100%"}},{default:c((function(){return[d(u,{value:"mysql"}),d(u,{value:"pgsql"})]})),_:1},8,["modelValue"])]})),_:1}),d(a,{label:"Oss类型"},{default:c((function(){return[d(t,{modelValue:T.value.system["oss-type"],"onUpdate:modelValue":l[3]||(l[3]=function(e){return T.value.system["oss-type"]=e}),style:{width:"100%"}},{default:c((function(){return[d(u,{value:"local"}),d(u,{value:"qiniu"}),d(u,{value:"tencent-cos"}),d(u,{value:"aliyun-oss"}),d(u,{value:"huawei-obs"})]})),_:1},8,["modelValue"])]})),_:1}),d(a,{label:"多点登录拦截"},{default:c((function(){return[d(y,{modelValue:T.value.system["use-multipoint"],"onUpdate:modelValue":l[4]||(l[4]=function(e){return T.value.system["use-multipoint"]=e})},{default:c((function(){return[m("开启")]})),_:1},8,["modelValue"])]})),_:1}),d(a,{label:"开启redis"},{default:c((function(){return[d(y,{modelValue:T.value.system["use-redis"],"onUpdate:modelValue":l[5]||(l[5]=function(e){return T.value.system["use-redis"]=e})},{default:c((function(){return[m("开启")]})),_:1},8,["modelValue"])]})),_:1}),d(a,{label:"限流次数"},{default:c((function(){return[d(j,{modelValue:T.value.system["iplimit-count"],"onUpdate:modelValue":l[6]||(l[6]=function(e){return T.value.system["iplimit-count"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),d(a,{label:"限流时间"},{default:c((function(){return[d(j,{modelValue:T.value.system["iplimit-time"],"onUpdate:modelValue":l[7]||(l[7]=function(e){return T.value.system["iplimit-time"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),d(C,{content:"请修改完成后，注意一并修改前端env环境下的VITE_BASE_PATH",placement:"top-start"},{default:c((function(){return[d(a,{label:"全局路由前缀"},{default:c((function(){return[d(o,{modelValue:T.value.system["router-prefix"],"onUpdate:modelValue":l[8]||(l[8]=function(e){return T.value.system["router-prefix"]=e})},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),d(I,{title:"jwt签名",name:"2"},{default:c((function(){return[d(a,{label:"jwt签名"},{default:c((function(){return[d(o,{modelValue:T.value.jwt["signing-key"],"onUpdate:modelValue":l[9]||(l[9]=function(e){return T.value.jwt["signing-key"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"有效期"},{default:c((function(){return[d(o,{modelValue:T.value.jwt["expires-time"],"onUpdate:modelValue":l[10]||(l[10]=function(e){return T.value.jwt["expires-time"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"缓冲期"},{default:c((function(){return[d(o,{modelValue:T.value.jwt["buffer-time"],"onUpdate:modelValue":l[11]||(l[11]=function(e){return T.value.jwt["buffer-time"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"签发者"},{default:c((function(){return[d(o,{modelValue:T.value.jwt.issuer,"onUpdate:modelValue":l[12]||(l[12]=function(e){return T.value.jwt.issuer=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),d(I,{title:"Zap日志配置",name:"3"},{default:c((function(){return[d(a,{label:"级别"},{default:c((function(){return[d(o,{modelValue:T.value.zap.level,"onUpdate:modelValue":l[13]||(l[13]=function(e){return T.value.zap.level=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),d(a,{label:"输出"},{default:c((function(){return[d(o,{modelValue:T.value.zap.format,"onUpdate:modelValue":l[14]||(l[14]=function(e){return T.value.zap.format=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"日志前缀"},{default:c((function(){return[d(o,{modelValue:T.value.zap.prefix,"onUpdate:modelValue":l[15]||(l[15]=function(e){return T.value.zap.prefix=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"日志文件夹"},{default:c((function(){return[d(o,{modelValue:T.value.zap.director,"onUpdate:modelValue":l[16]||(l[16]=function(e){return T.value.zap.director=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"编码级"},{default:c((function(){return[d(o,{modelValue:T.value.zap["encode-level"],"onUpdate:modelValue":l[17]||(l[17]=function(e){return T.value.zap["encode-level"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"栈名"},{default:c((function(){return[d(o,{modelValue:T.value.zap["stacktrace-key"],"onUpdate:modelValue":l[18]||(l[18]=function(e){return T.value.zap["stacktrace-key"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"日志留存时间(默认以天为单位)"},{default:c((function(){return[d(o,{modelValue:T.value.zap["max-age"],"onUpdate:modelValue":l[19]||(l[19]=function(e){return T.value.zap["max-age"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),d(a,{label:"显示行"},{default:c((function(){return[d(y,{modelValue:T.value.zap["show-line"],"onUpdate:modelValue":l[20]||(l[20]=function(e){return T.value.zap["show-line"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"输出控制台"},{default:c((function(){return[d(y,{modelValue:T.value.zap["log-in-console"],"onUpdate:modelValue":l[21]||(l[21]=function(e){return T.value.zap["log-in-console"]=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),d(I,{title:"Redis admin数据库配置",name:"4"},{default:c((function(){return[d(a,{label:"库"},{default:c((function(){return[d(o,{modelValue:T.value.redis.db,"onUpdate:modelValue":l[22]||(l[22]=function(e){return T.value.redis.db=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),d(a,{label:"地址"},{default:c((function(){return[d(o,{modelValue:T.value.redis.addr,"onUpdate:modelValue":l[23]||(l[23]=function(e){return T.value.redis.addr=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"密码"},{default:c((function(){return[d(o,{modelValue:T.value.redis.password,"onUpdate:modelValue":l[24]||(l[24]=function(e){return T.value.redis.password=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),d(I,{title:"Mongo 数据库配置",name:"14"},{default:c((function(){return[d(a,{label:"collection name(表名,一般不写)"},{default:c((function(){return[d(o,{modelValue:T.value.mongo.coll,"onUpdate:modelValue":l[25]||(l[25]=function(e){return T.value.mongo.coll=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"mongodb options"},{default:c((function(){return[d(o,{modelValue:T.value.mongo.options,"onUpdate:modelValue":l[26]||(l[26]=function(e){return T.value.mongo.options=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"database name(数据库名)"},{default:c((function(){return[d(o,{modelValue:T.value.mongo.database,"onUpdate:modelValue":l[27]||(l[27]=function(e){return T.value.mongo.database=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"用户名"},{default:c((function(){return[d(o,{modelValue:T.value.mongo.username,"onUpdate:modelValue":l[28]||(l[28]=function(e){return T.value.mongo.username=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"密码"},{default:c((function(){return[d(o,{modelValue:T.value.mongo.password,"onUpdate:modelValue":l[29]||(l[29]=function(e){return T.value.mongo.password=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"最小连接池"},{default:c((function(){return[d(o,{modelValue:T.value.mongo["min-pool-size"],"onUpdate:modelValue":l[30]||(l[30]=function(e){return T.value.mongo["min-pool-size"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"最大连接池"},{default:c((function(){return[d(o,{modelValue:T.value.mongo["max-pool-size"],"onUpdate:modelValue":l[31]||(l[31]=function(e){return T.value.mongo["max-pool-size"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"socket超时时间"},{default:c((function(){return[d(o,{modelValue:T.value.mongo["socket-timeout-ms"],"onUpdate:modelValue":l[32]||(l[32]=function(e){return T.value.mongo["socket-timeout-ms"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"连接超时时间"},{default:c((function(){return[d(o,{modelValue:T.value.mongo["socket-timeout-ms"],"onUpdate:modelValue":l[33]||(l[33]=function(e){return T.value.mongo["socket-timeout-ms"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"是否开启zap日志"},{default:c((function(){return[d(y,{modelValue:T.value.mongo["is-zap"],"onUpdate:modelValue":l[34]||(l[34]=function(e){return T.value.mongo["is-zap"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"hosts"},{default:c((function(){return[(r(!0),i(s,null,f(T.value.mongo.hosts,(function(e,l){return r(),i(s,null,[(r(!0),i(s,null,f(e,(function(u,n){return r(),i("div",{key:n},[(r(),p(a,{key:l+n,label:n},{default:c((function(){return[d(o,{modelValue:e[n],"onUpdate:modelValue":function(l){return e[n]=l}},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1032,["label"]))])})),128))],64)})),256))]})),_:1})]})),_:1}),d(I,{title:"邮箱配置",name:"5"},{default:c((function(){return[d(a,{label:"接收者邮箱"},{default:c((function(){return[d(o,{modelValue:T.value.email.to,"onUpdate:modelValue":l[35]||(l[35]=function(e){return T.value.email.to=e}),placeholder:"可多个，以逗号分隔"},null,8,["modelValue"])]})),_:1}),d(a,{label:"端口"},{default:c((function(){return[d(o,{modelValue:T.value.email.port,"onUpdate:modelValue":l[36]||(l[36]=function(e){return T.value.email.port=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),d(a,{label:"发送者邮箱"},{default:c((function(){return[d(o,{modelValue:T.value.email.from,"onUpdate:modelValue":l[37]||(l[37]=function(e){return T.value.email.from=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"host"},{default:c((function(){return[d(o,{modelValue:T.value.email.host,"onUpdate:modelValue":l[38]||(l[38]=function(e){return T.value.email.host=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"是否为ssl"},{default:c((function(){return[d(y,{modelValue:T.value.email["is-ssl"],"onUpdate:modelValue":l[39]||(l[39]=function(e){return T.value.email["is-ssl"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"secret"},{default:c((function(){return[d(o,{modelValue:T.value.email.secret,"onUpdate:modelValue":l[40]||(l[40]=function(e){return T.value.email.secret=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"测试邮件"},{default:c((function(){return[d(K,{onClick:F},{default:c((function(){return[m("测试邮件")]})),_:1})]})),_:1})]})),_:1}),d(I,{title:"验证码配置",name:"7"},{default:c((function(){return[d(a,{label:"字符长度"},{default:c((function(){return[d(o,{modelValue:T.value.captcha["key-long"],"onUpdate:modelValue":l[41]||(l[41]=function(e){return T.value.captcha["key-long"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),d(a,{label:"图片宽度"},{default:c((function(){return[d(o,{modelValue:T.value.captcha["img-width"],"onUpdate:modelValue":l[42]||(l[42]=function(e){return T.value.captcha["img-width"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),d(a,{label:"图片高度"},{default:c((function(){return[d(o,{modelValue:T.value.captcha["img-height"],"onUpdate:modelValue":l[43]||(l[43]=function(e){return T.value.captcha["img-height"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1})]})),_:1}),d(I,{title:"数据库配置",name:"9"},{default:c((function(){return["mysql"===T.value.system["db-type"]?(r(),i(s,{key:0},[d(a,{label:"用户名"},{default:c((function(){return[d(o,{modelValue:T.value.mysql.username,"onUpdate:modelValue":l[44]||(l[44]=function(e){return T.value.mysql.username=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"密码"},{default:c((function(){return[d(o,{modelValue:T.value.mysql.password,"onUpdate:modelValue":l[45]||(l[45]=function(e){return T.value.mysql.password=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"地址"},{default:c((function(){return[d(o,{modelValue:T.value.mysql.path,"onUpdate:modelValue":l[46]||(l[46]=function(e){return T.value.mysql.path=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"数据库"},{default:c((function(){return[d(o,{modelValue:T.value.mysql["db-name"],"onUpdate:modelValue":l[47]||(l[47]=function(e){return T.value.mysql["db-name"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"前缀"},{default:c((function(){return[d(o,{modelValue:T.value.mysql.refix,"onUpdate:modelValue":l[48]||(l[48]=function(e){return T.value.mysql.refix=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"复数表"},{default:c((function(){return[d(W,{modelValue:T.value.mysql.singular,"onUpdate:modelValue":l[49]||(l[49]=function(e){return T.value.mysql.singular=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"引擎"},{default:c((function(){return[d(o,{modelValue:T.value.mysql.engine,"onUpdate:modelValue":l[50]||(l[50]=function(e){return T.value.mysql.engine=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"maxIdleConns"},{default:c((function(){return[d(o,{modelValue:T.value.mysql["max-idle-conns"],"onUpdate:modelValue":l[51]||(l[51]=function(e){return T.value.mysql["max-idle-conns"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),d(a,{label:"maxOpenConns"},{default:c((function(){return[d(o,{modelValue:T.value.mysql["max-open-conns"],"onUpdate:modelValue":l[52]||(l[52]=function(e){return T.value.mysql["max-open-conns"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),d(a,{label:"写入日志"},{default:c((function(){return[d(y,{modelValue:T.value.mysql["log-zap"],"onUpdate:modelValue":l[53]||(l[53]=function(e){return T.value.mysql["log-zap"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"日志模式"},{default:c((function(){return[d(o,{modelValue:T.value.mysql["log-mode"],"onUpdate:modelValue":l[54]||(l[54]=function(e){return T.value.mysql["log-mode"]=e})},null,8,["modelValue"])]})),_:1})],64)):v("",!0),"pgsql"===T.value.system["db-type"]?(r(),i(s,{key:1},[d(a,{label:"用户名"},{default:c((function(){return[d(o,{modelValue:T.value.pgsql.username,"onUpdate:modelValue":l[55]||(l[55]=function(e){return T.value.pgsql.username=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"密码"},{default:c((function(){return[d(o,{modelValue:T.value.pgsql.password,"onUpdate:modelValue":l[56]||(l[56]=function(e){return T.value.pgsql.password=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"地址"},{default:c((function(){return[d(o,{modelValue:T.value.pgsql.path,"onUpdate:modelValue":l[57]||(l[57]=function(e){return T.value.pgsql.path=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"数据库"},{default:c((function(){return[d(o,{modelValue:T.value.pgsql.dbname,"onUpdate:modelValue":l[58]||(l[58]=function(e){return T.value.pgsql.dbname=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"前缀"},{default:c((function(){return[d(o,{modelValue:T.value.pgsql.refix,"onUpdate:modelValue":l[59]||(l[59]=function(e){return T.value.pgsql.refix=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"复数表"},{default:c((function(){return[d(W,{modelValue:T.value.pgsql.singular,"onUpdate:modelValue":l[60]||(l[60]=function(e){return T.value.pgsql.singular=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"引擎"},{default:c((function(){return[d(o,{modelValue:T.value.pgsql.engine,"onUpdate:modelValue":l[61]||(l[61]=function(e){return T.value.pgsql.engine=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"maxIdleConns"},{default:c((function(){return[d(o,{modelValue:T.value.pgsql["max-idle-conns"],"onUpdate:modelValue":l[62]||(l[62]=function(e){return T.value.pgsql["max-idle-conns"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),d(a,{label:"maxOpenConns"},{default:c((function(){return[d(o,{modelValue:T.value.pgsql["max-open-conns"],"onUpdate:modelValue":l[63]||(l[63]=function(e){return T.value.pgsql["max-open-conns"]=e}),modelModifiers:{number:!0}},null,8,["modelValue"])]})),_:1}),d(a,{label:"写入日志"},{default:c((function(){return[d(y,{modelValue:T.value.pgsql["log-zap"],"onUpdate:modelValue":l[64]||(l[64]=function(e){return T.value.pgsql["log-zap"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"日志模式"},{default:c((function(){return[d(o,{modelValue:T.value.pgsql["log-mode"],"onUpdate:modelValue":l[65]||(l[65]=function(e){return T.value.pgsql["log-mode"]=e})},null,8,["modelValue"])]})),_:1})],64)):v("",!0)]})),_:1}),d(I,{title:"oss配置",name:"10"},{default:c((function(){return["local"===T.value.system["oss-type"]?(r(),i(s,{key:0},[D,d(a,{label:"本地文件访问路径"},{default:c((function(){return[d(o,{modelValue:T.value.local.path,"onUpdate:modelValue":l[66]||(l[66]=function(e){return T.value.local.path=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"本地文件存储路径"},{default:c((function(){return[d(o,{modelValue:T.value.local["store-path"],"onUpdate:modelValue":l[67]||(l[67]=function(e){return T.value.local["store-path"]=e})},null,8,["modelValue"])]})),_:1})],64)):v("",!0),"qiniu"===T.value.system["oss-type"]?(r(),i(s,{key:1},[L,d(a,{label:"存储区域"},{default:c((function(){return[d(o,{modelValue:T.value.qiniu.zone,"onUpdate:modelValue":l[68]||(l[68]=function(e){return T.value.qiniu.zone=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"空间名称"},{default:c((function(){return[d(o,{modelValue:T.value.qiniu.bucket,"onUpdate:modelValue":l[69]||(l[69]=function(e){return T.value.qiniu.bucket=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"CDN加速域名"},{default:c((function(){return[d(o,{modelValue:T.value.qiniu["img-path"],"onUpdate:modelValue":l[70]||(l[70]=function(e){return T.value.qiniu["img-path"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"是否使用https"},{default:c((function(){return[d(y,{modelValue:T.value.qiniu["use-https"],"onUpdate:modelValue":l[71]||(l[71]=function(e){return T.value.qiniu["use-https"]=e})},{default:c((function(){return[m("开启")]})),_:1},8,["modelValue"])]})),_:1}),d(a,{label:"accessKey"},{default:c((function(){return[d(o,{modelValue:T.value.qiniu["access-key"],"onUpdate:modelValue":l[72]||(l[72]=function(e){return T.value.qiniu["access-key"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"secretKey"},{default:c((function(){return[d(o,{modelValue:T.value.qiniu["secret-key"],"onUpdate:modelValue":l[73]||(l[73]=function(e){return T.value.qiniu["secret-key"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"上传是否使用CDN上传加速"},{default:c((function(){return[d(y,{modelValue:T.value.qiniu["use-cdn-domains"],"onUpdate:modelValue":l[74]||(l[74]=function(e){return T.value.qiniu["use-cdn-domains"]=e})},{default:c((function(){return[m("开启")]})),_:1},8,["modelValue"])]})),_:1})],64)):v("",!0),"tencent-cos"===T.value.system["oss-type"]?(r(),i(s,{key:2},[O,d(a,{label:"存储桶名称"},{default:c((function(){return[d(o,{modelValue:T.value["tencent-cos"].bucket,"onUpdate:modelValue":l[75]||(l[75]=function(e){return T.value["tencent-cos"].bucket=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"所属地域"},{default:c((function(){return[d(o,{modelValue:T.value["tencent-cos"].region,"onUpdate:modelValue":l[76]||(l[76]=function(e){return T.value["tencent-cos"].region=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"secretID"},{default:c((function(){return[d(o,{modelValue:T.value["tencent-cos"]["secret-id"],"onUpdate:modelValue":l[77]||(l[77]=function(e){return T.value["tencent-cos"]["secret-id"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"secretKey"},{default:c((function(){return[d(o,{modelValue:T.value["tencent-cos"]["secret-key"],"onUpdate:modelValue":l[78]||(l[78]=function(e){return T.value["tencent-cos"]["secret-key"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"路径前缀"},{default:c((function(){return[d(o,{modelValue:T.value["tencent-cos"]["path-prefix"],"onUpdate:modelValue":l[79]||(l[79]=function(e){return T.value["tencent-cos"]["path-prefix"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"访问域名"},{default:c((function(){return[d(o,{modelValue:T.value["tencent-cos"]["base-url"],"onUpdate:modelValue":l[80]||(l[80]=function(e){return T.value["tencent-cos"]["base-url"]=e})},null,8,["modelValue"])]})),_:1})],64)):v("",!0),"aliyun-oss"===T.value.system["oss-type"]?(r(),i(s,{key:3},[S,d(a,{label:"区域"},{default:c((function(){return[d(o,{modelValue:T.value["aliyun-oss"].endpoint,"onUpdate:modelValue":l[81]||(l[81]=function(e){return T.value["aliyun-oss"].endpoint=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"accessKeyId"},{default:c((function(){return[d(o,{modelValue:T.value["aliyun-oss"]["access-key-id"],"onUpdate:modelValue":l[82]||(l[82]=function(e){return T.value["aliyun-oss"]["access-key-id"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"accessKeySecret"},{default:c((function(){return[d(o,{modelValue:T.value["aliyun-oss"]["access-key-secret"],"onUpdate:modelValue":l[83]||(l[83]=function(e){return T.value["aliyun-oss"]["access-key-secret"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"存储桶名称"},{default:c((function(){return[d(o,{modelValue:T.value["aliyun-oss"]["bucket-name"],"onUpdate:modelValue":l[84]||(l[84]=function(e){return T.value["aliyun-oss"]["bucket-name"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"访问域名"},{default:c((function(){return[d(o,{modelValue:T.value["aliyun-oss"]["bucket-url"],"onUpdate:modelValue":l[85]||(l[85]=function(e){return T.value["aliyun-oss"]["bucket-url"]=e})},null,8,["modelValue"])]})),_:1})],64)):v("",!0),"huawei-obs"===T.value.system["oss-type"]?(r(),i(s,{key:4},[M,d(a,{label:"路径"},{default:c((function(){return[d(o,{modelValue:T.value["hua-wei-obs"].path,"onUpdate:modelValue":l[86]||(l[86]=function(e){return T.value["hua-wei-obs"].path=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"存储桶名称"},{default:c((function(){return[d(o,{modelValue:T.value["hua-wei-obs"].bucket,"onUpdate:modelValue":l[87]||(l[87]=function(e){return T.value["hua-wei-obs"].bucket=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"区域"},{default:c((function(){return[d(o,{modelValue:T.value["hua-wei-obs"].endpoint,"onUpdate:modelValue":l[88]||(l[88]=function(e){return T.value["hua-wei-obs"].endpoint=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"accessKey"},{default:c((function(){return[d(o,{modelValue:T.value["hua-wei-obs"]["access-key"],"onUpdate:modelValue":l[89]||(l[89]=function(e){return T.value["hua-wei-obs"]["access-key"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"secretKey"},{default:c((function(){return[d(o,{modelValue:T.value["hua-wei-obs"]["secret-key"],"onUpdate:modelValue":l[90]||(l[90]=function(e){return T.value["hua-wei-obs"]["secret-key"]=e})},null,8,["modelValue"])]})),_:1})],64)):v("",!0)]})),_:1}),d(I,{title:"Excel上传配置",name:"11"},{default:c((function(){return[d(a,{label:"合成目标地址"},{default:c((function(){return[d(o,{modelValue:T.value.excel.dir,"onUpdate:modelValue":l[91]||(l[91]=function(e){return T.value.excel.dir=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),d(I,{title:"自动化代码配置",name:"12"},{default:c((function(){return[d(a,{label:"是否自动重启(linux)"},{default:c((function(){return[d(y,{modelValue:T.value.autocode["transfer-restart"],"onUpdate:modelValue":l[92]||(l[92]=function(e){return T.value.autocode["transfer-restart"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"root(项目根路径)"},{default:c((function(){return[d(o,{modelValue:T.value.autocode.root,"onUpdate:modelValue":l[93]||(l[93]=function(e){return T.value.autocode.root=e}),disabled:""},null,8,["modelValue"])]})),_:1}),d(a,{label:"Server(后端代码地址)"},{default:c((function(){return[d(o,{modelValue:T.value.autocode["transfer-restart"],"onUpdate:modelValue":l[94]||(l[94]=function(e){return T.value.autocode["transfer-restart"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"SApi(后端api文件夹地址)"},{default:c((function(){return[d(o,{modelValue:T.value.autocode["server-api"],"onUpdate:modelValue":l[95]||(l[95]=function(e){return T.value.autocode["server-api"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"SInitialize(后端Initialize文件夹)"},{default:c((function(){return[d(o,{modelValue:T.value.autocode["server-initialize"],"onUpdate:modelValue":l[96]||(l[96]=function(e){return T.value.autocode["server-initialize"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"SModel(后端Model文件地址)"},{default:c((function(){return[d(o,{modelValue:T.value.autocode["server-model"],"onUpdate:modelValue":l[97]||(l[97]=function(e){return T.value.autocode["server-model"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"SRequest(后端Request文件夹地址)"},{default:c((function(){return[d(o,{modelValue:T.value.autocode["server-request"],"onUpdate:modelValue":l[98]||(l[98]=function(e){return T.value.autocode["server-request"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"SRouter(后端Router文件夹地址)"},{default:c((function(){return[d(o,{modelValue:T.value.autocode["server-router"],"onUpdate:modelValue":l[99]||(l[99]=function(e){return T.value.autocode["server-router"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"SService(后端Service文件夹地址)"},{default:c((function(){return[d(o,{modelValue:T.value.autocode["server-service"],"onUpdate:modelValue":l[100]||(l[100]=function(e){return T.value.autocode["server-service"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"Web(前端文件夹地址)"},{default:c((function(){return[d(o,{modelValue:T.value.autocode.web,"onUpdate:modelValue":l[101]||(l[101]=function(e){return T.value.autocode.web=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"WApi(后端WApi文件夹地址)"},{default:c((function(){return[d(o,{modelValue:T.value.autocode["web-api"],"onUpdate:modelValue":l[102]||(l[102]=function(e){return T.value.autocode["web-api"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"WForm(后端WForm文件夹地址)"},{default:c((function(){return[d(o,{modelValue:T.value.autocode["web-form"],"onUpdate:modelValue":l[103]||(l[103]=function(e){return T.value.autocode["web-form"]=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"WTable(后端WTable文件夹地址)"},{default:c((function(){return[d(o,{modelValue:T.value.autocode["web-table"],"onUpdate:modelValue":l[104]||(l[104]=function(e){return T.value.autocode["web-table"]=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),d(I,{title:"Timer(定时任务)",name:"13"},{default:c((function(){return[d(a,{label:"Start（是否启用）"},{default:c((function(){return[d(y,{modelValue:T.value.timer.start,"onUpdate:modelValue":l[105]||(l[105]=function(e){return T.value.timer.start=e})},null,8,["modelValue"])]})),_:1}),d(a,{label:"Spec(CRON表达式)"},{default:c((function(){return[d(o,{modelValue:T.value.timer.spec,"onUpdate:modelValue":l[106]||(l[106]=function(e){return T.value.timer.spec=e})},null,8,["modelValue"])]})),_:1}),(r(!0),i(s,null,f(T.value.timer.detail,(function(e,l){return r(),i(s,null,[(r(!0),i(s,null,f(e,(function(u,n){return r(),i("div",{key:n},[(r(),p(a,{key:l+n,label:n},{default:c((function(){return[d(o,{modelValue:e[n],"onUpdate:modelValue":function(l){return e[n]=l}},null,8,["modelValue","onUpdate:modelValue"])]})),_:2},1032,["label"]))])})),128))],64)})),256))]})),_:1})]})),_:1},8,["modelValue"])]})),_:1},8,["model"]),V("div",N,[d(K,{type:"primary",onClick:G},{default:c((function(){return[m("立即更新")]})),_:1}),d(K,{type:"primary",onClick:P},{default:c((function(){return[m("重启服务（开发中）")]})),_:1})])])}}}))}}}))}();
