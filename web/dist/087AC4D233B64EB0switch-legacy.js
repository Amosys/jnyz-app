/*! 
 Build based on gin-vue-admin 
 Time : 1709213701000 */
!function(){function e(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);i&&(l=l.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,l)}return t}function i(i){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?e(Object(n),!0).forEach((function(e){t(i,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(n,e))}))}return i}function t(e,i,t){var l;return(i="symbol"==typeof(l=function(e,i){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var l=t.call(e,i||"default");if("object"!=typeof l)return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(i,"string"))?l:String(l))in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}System.register(["./087AC4D233B64EB0index-legacy.js"],(function(e,l){"use strict";var n,c,r,o,a,s,u,h,d,v,p,f,w,b,_,g,x,y,m,k,S,C,I,V,j,O,P,T,z,B,E,A,N,D,K,F,U,$,q,G,H,J,Q,W,X,Y;return{setters:[function(e){n=e.C,c=e.cV,r=e.D,o=e.a4,a=e.bn,s=e.b0,u=e.aC,h=e.bl,d=e.bp,v=e.cW,p=e.x,f=e.bg,w=e.aj,b=e.y,_=e.bh,g=e.c8,x=e.F,y=e.a,m=e.Q,k=e.Y,S=e.b1,C=e.T,I=e.o,V=e.c,j=e.b,O=e.G,P=e.n,T=e.q,z=e.h,B=e.w,E=e.I,A=e.J,N=e.e,D=e.t,K=e.d,F=e.aV,U=e.B,$=e.H,q=e.am,G=e._,H=e.az,J=e.U,Q=e.cS,W=e.aA,X=e.X,Y=e.K}],execute:function(){var l=document.createElement("style");l.textContent=".el-switch{--el-switch-on-color: var(--el-color-primary);--el-switch-off-color: var(--el-border-color);display:inline-flex;align-items:center;position:relative;font-size:14px;line-height:20px;height:32px;vertical-align:middle}.el-switch.is-disabled .el-switch__core,.el-switch.is-disabled .el-switch__label{cursor:not-allowed}.el-switch__label{transition:var(--el-transition-duration-fast);height:20px;display:inline-block;font-size:14px;font-weight:500;cursor:pointer;vertical-align:middle;color:var(--el-text-color-primary)}.el-switch__label.is-active{color:var(--el-color-primary)}.el-switch__label--left{margin-right:10px}.el-switch__label--right{margin-left:10px}.el-switch__label *{line-height:1;font-size:14px;display:inline-block}.el-switch__label .el-icon{height:inherit}.el-switch__label .el-icon svg{vertical-align:middle}.el-switch__input{position:absolute;width:0;height:0;opacity:0;margin:0}.el-switch__input:focus-visible~.el-switch__core{outline:2px solid var(--el-switch-on-color);outline-offset:1px}.el-switch__core{display:inline-flex;position:relative;align-items:center;min-width:40px;height:20px;border:1px solid var(--el-switch-border-color, var(--el-switch-off-color));outline:none;border-radius:10px;box-sizing:border-box;background:var(--el-switch-off-color);cursor:pointer;transition:border-color var(--el-transition-duration),background-color var(--el-transition-duration)}.el-switch__core .el-switch__inner{width:100%;transition:all var(--el-transition-duration);height:16px;display:flex;justify-content:center;align-items:center;overflow:hidden;padding:0 4px 0 18px}.el-switch__core .el-switch__inner .is-icon,.el-switch__core .el-switch__inner .is-text{font-size:12px;color:var(--el-color-white);-webkit-user-select:none;user-select:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.el-switch__core .el-switch__action{position:absolute;left:1px;border-radius:var(--el-border-radius-circle);transition:all var(--el-transition-duration);width:16px;height:16px;background-color:var(--el-color-white);display:flex;justify-content:center;align-items:center;color:var(--el-switch-off-color)}.el-switch.is-checked .el-switch__core{border-color:var(--el-switch-border-color, var(--el-switch-on-color));background-color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__action{left:calc(100% - 17px);color:var(--el-switch-on-color)}.el-switch.is-checked .el-switch__core .el-switch__inner{padding:0 18px 0 4px}.el-switch.is-disabled{opacity:.6}.el-switch--wide .el-switch__label.el-switch__label--left span{left:10px}.el-switch--wide .el-switch__label.el-switch__label--right span{right:10px}.el-switch .label-fade-enter-from,.el-switch .label-fade-leave-active{opacity:0}.el-switch--large{font-size:14px;line-height:24px;height:40px}.el-switch--large .el-switch__label{height:24px;font-size:14px}.el-switch--large .el-switch__label *{font-size:14px}.el-switch--large .el-switch__core{min-width:50px;height:24px;border-radius:12px}.el-switch--large .el-switch__core .el-switch__inner{height:20px;padding:0 6px 0 22px}.el-switch--large .el-switch__core .el-switch__action{width:20px;height:20px}.el-switch--large.is-checked .el-switch__core .el-switch__action{left:calc(100% - 21px)}.el-switch--large.is-checked .el-switch__core .el-switch__inner{padding:0 22px 0 6px}.el-switch--small{font-size:12px;line-height:16px;height:24px}.el-switch--small .el-switch__label{height:16px;font-size:12px}.el-switch--small .el-switch__label *{font-size:12px}.el-switch--small .el-switch__core{min-width:30px;height:16px;border-radius:8px}.el-switch--small .el-switch__core .el-switch__inner{height:12px;padding:0 2px 0 14px}.el-switch--small .el-switch__core .el-switch__action{width:12px;height:12px}.el-switch--small.is-checked .el-switch__core .el-switch__action{left:calc(100% - 13px)}.el-switch--small.is-checked .el-switch__core .el-switch__inner{padding:0 14px 0 2px}\n",document.head.appendChild(l);var L=n({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:c},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:r},activeActionIcon:{type:r},activeIcon:{type:r},inactiveIcon:{type:r},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:o(Function)},id:String,tabindex:{type:[String,Number]},value:{type:[Boolean,String,Number],default:!1},label:{type:String,default:void 0}}),M=t(t(t({},a,(function(e){return s(e)||u(e)||h(e)})),d,(function(e){return s(e)||u(e)||h(e)})),v,(function(e){return s(e)||u(e)||h(e)})),R=["onClick"],Z=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],ee=["aria-hidden"],ie=["aria-hidden"],te=["aria-hidden"],le="ElSwitch",ne=p({name:le}),ce=p(i(i({},ne),{},{props:L,emits:M,setup:function(e,t){var l=t.expose,n=t.emit,c=e,r=X(),o=f().formItem,u=w(),h=b("switch");[['"value"','"model-value" or "v-model"',"value"],['"active-color"',"CSS var `--el-switch-on-color`","activeColor"],['"inactive-color"',"CSS var `--el-switch-off-color`","inactiveColor"],['"border-color"',"CSS var `--el-switch-border-color`","borderColor"]].forEach((function(e){H({from:e[0],replacement:e[1],scope:le,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},x((function(){var i;return!!(null==(i=r.vnode.props)?void 0:i[e[2]])})))}));var p=_(c,{formItemContext:o}).inputId,G=g(x((function(){return c.loading}))),Y=y(!1!==c.modelValue),L=y(),M=y(),ne=x((function(){return[h.b(),h.m(u.value),h.is("disabled",G.value),h.is("checked",se.value)]})),ce=x((function(){return[h.e("label"),h.em("label","left"),h.is("active",!se.value)]})),re=x((function(){return[h.e("label"),h.em("label","right"),h.is("active",se.value)]})),oe=x((function(){return{width:m(c.width)}}));k((function(){return c.modelValue}),(function(){Y.value=!0})),k((function(){return c.value}),(function(){Y.value=!1}));var ae=x((function(){return Y.value?c.modelValue:c.value})),se=x((function(){return ae.value===c.activeValue}));[c.activeValue,c.inactiveValue].includes(ae.value)||(n(a,c.inactiveValue),n(d,c.inactiveValue),n(v,c.inactiveValue)),k(se,(function(e){var i;L.value.checked=e,c.validateEvent&&(null==(i=null==o?void 0:o.validate)||i.call(o,"change").catch((function(e){return S()})))}));var ue=function(){var e=se.value?c.inactiveValue:c.activeValue;n(a,e),n(d,e),n(v,e),J((function(){L.value.checked=se.value}))},he=function(){if(!G.value){var e=c.beforeChange;if(e){var i=e();[Q(i),s(i)].includes(!0)||W(le,"beforeChange must return type `Promise<boolean>` or `boolean`"),Q(i)?i.then((function(e){e&&ue()})).catch((function(e){})):i&&ue()}else ue()}},de=x((function(){return h.cssVarBlock(i(i(i({},c.activeColor?{"on-color":c.activeColor}:null),c.inactiveColor?{"off-color":c.inactiveColor}:null),c.borderColor?{"border-color":c.borderColor}:null))}));return C((function(){L.value.checked=se.value})),l({focus:function(){var e,i;null==(i=null==(e=L.value)?void 0:e.focus)||i.call(e)},checked:se}),function(e,i){return I(),V("div",{class:P(O(ne)),style:$(O(de)),onClick:q(he,["prevent"])},[j("input",{id:O(p),ref_key:"input",ref:L,class:P(O(h).e("input")),type:"checkbox",role:"switch","aria-checked":O(se),"aria-disabled":O(G),"aria-label":e.label,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:O(G),tabindex:e.tabindex,onChange:ue,onKeydown:T(he,["enter"])},null,42,Z),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?N("v-if",!0):(I(),V("span",{key:0,class:P(O(ce))},[e.inactiveIcon?(I(),z(O(A),{key:0},{default:B((function(){return[(I(),z(E(e.inactiveIcon)))]})),_:1})):N("v-if",!0),!e.inactiveIcon&&e.inactiveText?(I(),V("span",{key:1,"aria-hidden":O(se)},D(e.inactiveText),9,ee)):N("v-if",!0)],2)),j("span",{ref_key:"core",ref:M,class:P(O(h).e("core")),style:$(O(oe))},[e.inlinePrompt?(I(),V("div",{key:0,class:P(O(h).e("inner"))},[e.activeIcon||e.inactiveIcon?(I(),z(O(A),{key:0,class:P(O(h).is("icon"))},{default:B((function(){return[(I(),z(E(O(se)?e.activeIcon:e.inactiveIcon)))]})),_:1},8,["class"])):e.activeText||e.inactiveText?(I(),V("span",{key:1,class:P(O(h).is("text")),"aria-hidden":!O(se)},D(O(se)?e.activeText:e.inactiveText),11,ie)):N("v-if",!0)],2)):N("v-if",!0),j("div",{class:P(O(h).e("action"))},[e.loading?(I(),z(O(A),{key:0,class:P(O(h).is("loading"))},{default:B((function(){return[K(O(F))]})),_:1},8,["class"])):O(se)?U(e.$slots,"active-action",{key:1},(function(){return[e.activeActionIcon?(I(),z(O(A),{key:0},{default:B((function(){return[(I(),z(E(e.activeActionIcon)))]})),_:1})):N("v-if",!0)]})):O(se)?N("v-if",!0):U(e.$slots,"inactive-action",{key:2},(function(){return[e.inactiveActionIcon?(I(),z(O(A),{key:0},{default:B((function(){return[(I(),z(E(e.inactiveActionIcon)))]})),_:1})):N("v-if",!0)]}))],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?N("v-if",!0):(I(),V("span",{key:1,class:P(O(re))},[e.activeIcon?(I(),z(O(A),{key:0},{default:B((function(){return[(I(),z(E(e.activeIcon)))]})),_:1})):N("v-if",!0),!e.activeIcon&&e.activeText?(I(),V("span",{key:1,"aria-hidden":!O(se)},D(e.activeText),9,te)):N("v-if",!0)],2))],14,R)}}}));e("E",Y(G(ce,[["__file","switch.vue"]])))}}}))}();