/*! 
 Build based on gin-vue-admin 
 Time : 1715432289000 */
!function(){function e(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);i&&(l=l.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,l)}return t}function i(i){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?e(Object(n),!0).forEach((function(e){t(i,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(n,e))}))}return i}function t(e,i,t){var l;return(i="symbol"==typeof(l=function(e,i){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var l=t.call(e,i||"default");if("object"!=typeof l)return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(i,"string"))?l:l+"")in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}System.register(["./087AC4D233B64EB0index-legacy.js"],(function(e,l){"use strict";var n,c,a,r,o,s,h,u,d,p,v,f,w,_,b,x,g,y,m,k,I,S,O,j,V,P,T,z,B,C,E,A,D,N,K,F,L,U,$,q,G,H,J,R,Y,M;return{setters:[function(e){n=e.B,c=e.db,a=e.C,r=e.a6,o=e.bo,s=e.bi,h=e.aR,u=e.aB,d=e.bg,p=e.bk,v=e.dc,f=e.v,w=e.ba,_=e.ak,b=e.x,x=e.bb,g=e.cp,y=e.D,m=e.a,k=e.T,I=e.Y,S=e.aS,O=e.U,j=e.c6,V=e.o,P=e.c,T=e.b,z=e.F,B=e.n,C=e.q,E=e.h,A=e.w,D=e.H,N=e.I,K=e.e,F=e.J,L=e.d,U=e.co,$=e.A,q=e.G,G=e.an,H=e._,J=e.V,R=e.d4,Y=e.az,M=e.K}],execute:function(){var l=document.createElement("style");l.textContent=".el-switch{--el-switch-on-color: var(--el-color-primary);--el-switch-off-color: var(--el-border-color);display:inline-flex;align-items:center;position:relative;font-size:14px;line-height:20px;height:32px;vertical-align:middle}.el-switch.is-disabled .el-switch__core,.el-switch.is-disabled .el-switch__label{cursor:not-allowed}.el-switch__label{transition:var(--el-transition-duration-fast);height:20px;display:inline-block;font-size:14px;font-weight:500;cursor:pointer;vertical-align:middle;color:var(--el-text-color-primary)}.el-switch__label.is-active{color:var(--el-color-primary)}.el-switch__label--left{margin-right:10px}.el-switch__label--right{margin-left:10px}.el-switch__label *{line-height:1;font-size:14px;display:inline-block}.el-switch__label .el-icon{height:inherit}.el-switch__label .el-icon svg{vertical-align:middle}.el-switch__input{position:absolute;width:0;height:0;opacity:0;margin:0}.el-switch__input:focus-visible~.el-switch__core{outline:2px solid var(--el-switch-on-color);outline-offset:1px}.el-switch__core{display:inline-flex;position:relative;align-items:center;min-width:40px;height:20px;border:1px solid var(--el-switch-border-color, var(--el-switch-off-color));outline:none;border-radius:10px;box-sizing:border-box;background:var(--el-switch-off-color);cursor:pointer;transition:border-color var(--el-transition-duration),background-color var(--el-transition-duration)}.el-switch__core .el-switch__inner{width:100%;transition:all var(--el-transition-duration);height:16px;display:flex;justify-content:center;align-items:center;overflow:hidden;padding:0 4px 0 18px}.el-switch__core .el-switch__inner .is-icon,.el-switch__core .el-switch__inner .is-text{font-size:12px;color:var(--el-color-white);-webkit-user-select:none;user-select:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.el-switch__core .el-switch__action{position:absolute;left:1px;border-radius:var(--el-border-radius-circle);transition:all var(--el-transition-duration);width:16px;height:16px;background-color:var(--el-color-white);display:flex;justify-content:center;align-items:center;color:var(--el-switch-off-color)}.el-switch.is-checked .el-switch__core{border-color:var(--el-switch-border-color, var(--el-switch-on-color));background-color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__action{left:calc(100% - 17px);color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__inner{padding:0 18px 0 4px}.el-switch.is-disabled{opacity:.6}.el-switch--wide .el-switch__label.el-switch__label--left span{left:10px}.el-switch--wide .el-switch__label.el-switch__label--right span{right:10px}.el-switch .label-fade-enter-from,.el-switch .label-fade-leave-active{opacity:0}.el-switch--large{font-size:14px;line-height:24px;height:40px}.el-switch--large .el-switch__label{height:24px;font-size:14px}.el-switch--large .el-switch__label *{font-size:14px}.el-switch--large .el-switch__core{min-width:50px;height:24px;border-radius:12px}.el-switch--large .el-switch__core .el-switch__inner{height:20px;padding:0 6px 0 22px}.el-switch--large .el-switch__core .el-switch__action{width:20px;height:20px}.el-switch--large.is-checked .el-switch__core .el-switch__action{left:calc(100% - 21px)}.el-switch--large.is-checked .el-switch__core .el-switch__inner{padding:0 22px 0 6px}.el-switch--small{font-size:12px;line-height:16px;height:24px}.el-switch--small .el-switch__label{height:16px;font-size:12px}.el-switch--small .el-switch__label *{font-size:12px}.el-switch--small .el-switch__core{min-width:30px;height:16px;border-radius:8px}.el-switch--small .el-switch__core .el-switch__inner{height:12px;padding:0 2px 0 14px}.el-switch--small .el-switch__core .el-switch__action{width:12px;height:12px}.el-switch--small.is-checked .el-switch__core .el-switch__action{left:calc(100% - 13px)}.el-switch--small.is-checked .el-switch__core .el-switch__inner{padding:0 14px 0 2px}\n",document.head.appendChild(l);var Q=n(i({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:c},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:a},activeActionIcon:{type:a},activeIcon:{type:a},inactiveIcon:{type:a},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:r(Function)},id:String,tabindex:{type:[String,Number]},label:{type:String,default:void 0}},o(["ariaLabel"]))),W=t(t(t({},s,(function(e){return h(e)||u(e)||d(e)})),p,(function(e){return h(e)||u(e)||d(e)})),v,(function(e){return h(e)||u(e)||d(e)})),X=["onClick"],Z=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],ee=["aria-hidden"],ie=["aria-hidden"],te=["aria-hidden"],le="ElSwitch",ne=f({name:le}),ce=f(i(i({},ne),{},{props:Q,emits:W,setup:function(e,i){var t=i.expose,l=i.emit,n=e,c=w().formItem,a=_(),r=b("switch"),o=x(n,{formItemContext:c}).inputId,u=g(y((function(){return n.loading}))),d=m(!1!==n.modelValue),f=m(),H=m(),M=y((function(){return[r.b(),r.m(a.value),r.is("disabled",u.value),r.is("checked",ae.value)]})),Q=y((function(){return[r.e("label"),r.em("label","left"),r.is("active",!ae.value)]})),W=y((function(){return[r.e("label"),r.em("label","right"),r.is("active",ae.value)]})),ne=y((function(){return{width:k(n.width)}}));I((function(){return n.modelValue}),(function(){d.value=!0}));var ce=y((function(){return!!d.value&&n.modelValue})),ae=y((function(){return ce.value===n.activeValue}));[n.activeValue,n.inactiveValue].includes(ce.value)||(l(s,n.inactiveValue),l(p,n.inactiveValue),l(v,n.inactiveValue)),I(ae,(function(e){var i;f.value.checked=e,n.validateEvent&&(null==(i=null==c?void 0:c.validate)||i.call(c,"change").catch((function(e){return S()})))}));var re=function(){var e=ae.value?n.inactiveValue:n.activeValue;l(s,e),l(p,e),l(v,e),J((function(){f.value.checked=ae.value}))},oe=function(){if(!u.value){var e=n.beforeChange;if(e){var i=e();[R(i),h(i)].includes(!0)||Y(le,"beforeChange must return type `Promise<boolean>` or `boolean`"),R(i)?i.then((function(e){e&&re()})).catch((function(e){})):i&&re()}else re()}};return O((function(){f.value.checked=ae.value})),j({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-switch",ref:"https://element-plus.org/en-US/component/switch.html"},y((function(){return!!n.label}))),t({focus:function(){var e,i;null==(i=null==(e=f.value)?void 0:e.focus)||i.call(e)},checked:ae}),function(e,i){return V(),P("div",{class:B(z(M)),onClick:G(oe,["prevent"])},[T("input",{id:z(o),ref_key:"input",ref:f,class:B(z(r).e("input")),type:"checkbox",role:"switch","aria-checked":z(ae),"aria-disabled":z(u),"aria-label":e.label||e.ariaLabel,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:z(u),tabindex:e.tabindex,onChange:re,onKeydown:C(oe,["enter"])},null,42,Z),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?K("v-if",!0):(V(),P("span",{key:0,class:B(z(Q))},[e.inactiveIcon?(V(),E(z(N),{key:0},{default:A((function(){return[(V(),E(D(e.inactiveIcon)))]})),_:1})):K("v-if",!0),!e.inactiveIcon&&e.inactiveText?(V(),P("span",{key:1,"aria-hidden":z(ae)},F(e.inactiveText),9,ee)):K("v-if",!0)],2)),T("span",{ref_key:"core",ref:H,class:B(z(r).e("core")),style:q(z(ne))},[e.inlinePrompt?(V(),P("div",{key:0,class:B(z(r).e("inner"))},[e.activeIcon||e.inactiveIcon?(V(),E(z(N),{key:0,class:B(z(r).is("icon"))},{default:A((function(){return[(V(),E(D(z(ae)?e.activeIcon:e.inactiveIcon)))]})),_:1},8,["class"])):e.activeText||e.inactiveText?(V(),P("span",{key:1,class:B(z(r).is("text")),"aria-hidden":!z(ae)},F(z(ae)?e.activeText:e.inactiveText),11,ie)):K("v-if",!0)],2)):K("v-if",!0),T("div",{class:B(z(r).e("action"))},[e.loading?(V(),E(z(N),{key:0,class:B(z(r).is("loading"))},{default:A((function(){return[L(z(U))]})),_:1},8,["class"])):z(ae)?$(e.$slots,"active-action",{key:1},(function(){return[e.activeActionIcon?(V(),E(z(N),{key:0},{default:A((function(){return[(V(),E(D(e.activeActionIcon)))]})),_:1})):K("v-if",!0)]})):z(ae)?K("v-if",!0):$(e.$slots,"inactive-action",{key:2},(function(){return[e.inactiveActionIcon?(V(),E(z(N),{key:0},{default:A((function(){return[(V(),E(D(e.inactiveActionIcon)))]})),_:1})):K("v-if",!0)]}))],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?K("v-if",!0):(V(),P("span",{key:1,class:B(z(W))},[e.activeIcon?(V(),E(z(N),{key:0},{default:A((function(){return[(V(),E(D(e.activeIcon)))]})),_:1})):K("v-if",!0),!e.activeIcon&&e.activeText?(V(),P("span",{key:1,"aria-hidden":!z(ae)},F(e.activeText),9,te)):K("v-if",!0)],2))],10,X)}}}));e("E",M(H(ce,[["__file","switch.vue"]])))}}}))}();
