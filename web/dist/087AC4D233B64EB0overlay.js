/*! 
 Build based on gin-vue-admin 
 Time : 1709213701000 */
import{C as e,D as o,a4 as l,bn as a,b0 as n,bG as t,O as s,a as u,ci as c,cj as r,F as d,Q as i,ck as p,Y as f,U as y,T as v,X as m,aD as C,bj as B}from"./087AC4D233B64EB0index.js";import{i as b}from"./087AC4D233B64EB0isUndefined.js";const g=e({center:Boolean,alignCenter:Boolean,closeIcon:{type:o},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""},ariaLevel:{type:String,default:"2"}}),D={close:()=>!0},S=e({...g,appendToBody:Boolean,appendTo:{type:l(String),default:"body"},beforeClose:{type:l(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1},headerAriaLevel:{type:String,default:"2"}}),F={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[a]:e=>n(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},x=(e,o)=>{var l;const n=m().emit,{nextZIndex:g}=t();let D="";const S=s(),F=s(),x=u(!1),A=u(!1),I=u(!1),O=u(null!=(l=e.zIndex)?l:g());let h,k;const w=c("namespace",r),E=d((()=>{const o={},l="--".concat(w.value,"-dialog");return e.fullscreen||(e.top&&(o["".concat(l,"-margin-top")]=e.top),e.width&&(o["".concat(l,"-width")]=i(e.width))),o})),j=d((()=>e.alignCenter?{display:"flex"}:{}));function z(){null==k||k(),null==h||h(),e.openDelay&&e.openDelay>0?({stop:h}=C((()=>T()),e.openDelay)):T()}function L(){null==h||h(),null==k||k(),e.closeDelay&&e.closeDelay>0?({stop:k}=C((()=>M()),e.closeDelay)):M()}function N(){e.beforeClose?e.beforeClose((function(e){e||(A.value=!0,x.value=!1)})):L()}function T(){B&&(x.value=!0)}function M(){x.value=!1}return e.lockScroll&&p(x),f((()=>e.modelValue),(l=>{l?(A.value=!1,z(),I.value=!0,O.value=b(e.zIndex)?g():O.value++,y((()=>{n("open"),o.value&&(o.value.scrollTop=0)}))):x.value&&L()})),f((()=>e.fullscreen),(e=>{o.value&&(e?(D=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=D)})),v((()=>{e.modelValue&&(x.value=!0,I.value=!0,z())})),{afterEnter:function(){n("opened")},afterLeave:function(){n("closed"),n(a,!1),e.destroyOnClose&&(I.value=!1)},beforeLeave:function(){n("close")},handleClose:N,onModalClick:function(){e.closeOnClickModal&&N()},close:L,doClose:M,onOpenAutoFocus:function(){n("openAutoFocus")},onCloseAutoFocus:function(){n("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&N()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:S,bodyId:F,closed:A,style:E,overlayDialogStyle:j,rendered:I,visible:x,zIndex:O}};export{D as a,S as b,F as c,g as d,x as u};