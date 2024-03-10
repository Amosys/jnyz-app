/*! 
 Build based on gin-vue-admin 
 Time : 1709213701000 */
import{C as e,x as a,aa as t,az as s,F as l,a as r,y as o,P as i,Q as d,o as n,h as c,d as f,w as p,a1 as u,G as b,cg as v,bH as m,b as y,al as h,am as C,n as k,c as w,B as A,t as E,e as L,J as B,bL as g,a2 as _,a3 as x,bI as R,_ as $,K as S}from"./087AC4D233B64EB0index.js";import{b as z,c as D,u as I}from"./087AC4D233B64EB0overlay.js";const q=e({...z,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),H=D,T=["aria-label","aria-labelledby","aria-describedby"],j=["id","aria-level"],F=["aria-label"],P=["id"],U=a({name:"ElDrawer",inheritAttrs:!1});const G=S($(a({...U,props:q,emits:H,setup(e,{expose:a}){const $=e,S=t();s({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},l((()=>!!S.title))),s({scope:"el-drawer",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/drawer.html#attributes",type:"Attribute"},l((()=>!!$.customClass)));const z=r(),D=r(),q=o("drawer"),{t:H}=i(),{afterEnter:U,afterLeave:G,beforeLeave:J,visible:K,rendered:M,titleId:N,bodyId:O,onModalClick:Q,onCloseRequested:V,handleClose:W}=I($,z),X=l((()=>"rtl"===$.direction||"ltr"===$.direction)),Y=l((()=>d($.size)));return a({handleClose:W,afterEnter:U,afterLeave:G}),(e,a)=>(n(),c(R,{to:"body",disabled:!e.appendToBody},[f(x,{name:b(q).b("fade"),onAfterEnter:b(U),onAfterLeave:b(G),onBeforeLeave:b(J),persisted:""},{default:p((()=>[u(f(b(v),{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:b(Q)},{default:p((()=>[f(b(m),{loop:"",trapped:b(K),"focus-trap-el":z.value,"focus-start-el":D.value,onReleaseRequested:b(V)},{default:p((()=>[y("div",h({ref_key:"drawerRef",ref:z,"aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:b(N),"aria-describedby":b(O)},e.$attrs,{class:[b(q).b(),e.direction,b(K)&&"open",e.customClass],style:b(X)?"width: "+b(Y):"height: "+b(Y),role:"dialog",onClick:a[1]||(a[1]=C((()=>{}),["stop"]))}),[y("span",{ref_key:"focusStartRef",ref:D,class:k(b(q).e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(n(),w("header",{key:0,class:k(b(q).e("header"))},[e.$slots.title?A(e.$slots,"title",{key:1},(()=>[L(" DEPRECATED SLOT ")])):A(e.$slots,"header",{key:0,close:b(W),titleId:b(N),titleClass:b(q).e("title")},(()=>[e.$slots.title?L("v-if",!0):(n(),w("span",{key:0,id:b(N),role:"heading","aria-level":e.headerAriaLevel,class:k(b(q).e("title"))},E(e.title),11,j))])),e.showClose?(n(),w("button",{key:2,"aria-label":b(H)("el.drawer.close"),class:k(b(q).e("close-btn")),type:"button",onClick:a[0]||(a[0]=(...e)=>b(W)&&b(W)(...e))},[f(b(B),{class:k(b(q).e("close"))},{default:p((()=>[f(b(g))])),_:1},8,["class"])],10,F)):L("v-if",!0)],2)):L("v-if",!0),b(M)?(n(),w("div",{key:1,id:b(O),class:k(b(q).e("body"))},[A(e.$slots,"default")],10,P)):L("v-if",!0),e.$slots.footer?(n(),w("div",{key:2,class:k(b(q).e("footer"))},[A(e.$slots,"footer")],2)):L("v-if",!0)],16,T)])),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])])),_:3},8,["mask","overlay-class","z-index","onClick"]),[[_,b(K)]])])),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}}),[["__file","drawer.vue"]]));export{G as E};