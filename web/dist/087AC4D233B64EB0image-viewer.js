/*! 
 Build based on gin-vue-admin 
 Time : 1709213701000 */
import{bj as e,b7 as a,C as t,a4 as l,aE as n,bl as s,x as o,cq as i,cr as r,cs as c,P as u,y as d,bG as v,a as f,ct as m,Z as p,F as g,Y as y,U as b,T as w,o as k,h,d as x,w as z,b as C,n as I,G as _,H as S,am as N,e as O,J as E,bL as B,c as T,M as A,co as L,aB as R,cu as Y,cv as X,I as F,cw as M,cx as j,N as D,a1 as $,a2 as P,B as H,a3 as W,bI as G,_ as q,ae as K,ab as V,cy as Z,K as J,cz as U,cA as Q,t as ee,al as ae,bF as te,aC as le,cB as ne,cC as se}from"./087AC4D233B64EB0index.js";import{d as oe}from"./087AC4D233B64EB0debounce.js";function ie(e,t,l){var n=!0,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return a(l)&&(n="leading"in l?!!l.leading:n,s="trailing"in l?!!l.trailing:s),oe(e,t,{leading:n,maxWait:t,trailing:s})}const re=t({urlList:{type:l(Array),default:()=>n([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:l(String)}}),ce={close:()=>!0,switch:e=>s(e),rotate:e=>s(e)},ue=["src","crossorigin"],de=o({name:"ElImageViewer"});const ve=J(q(o({...de,props:re,emits:ce,setup(e,{expose:a,emit:t}){var l;const n=e,s={CONTAIN:{name:"contain",icon:i(r)},ORIGINAL:{name:"original",icon:i(c)}},{t:o}=u(),q=d("image-viewer"),{nextZIndex:J}=v(),U=f(),Q=f([]),ee=m(),ae=f(!0),te=f(n.initialIndex),le=p(s.CONTAIN),ne=f({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),se=f(null!=(l=n.zIndex)?l:J()),oe=g((()=>{const{urlList:e}=n;return e.length<=1})),re=g((()=>0===te.value)),ce=g((()=>te.value===n.urlList.length-1)),de=g((()=>n.urlList[te.value])),ve=g((()=>[q.e("btn"),q.e("prev"),q.is("disabled",!n.infinite&&re.value)])),fe=g((()=>[q.e("btn"),q.e("next"),q.is("disabled",!n.infinite&&ce.value)])),me=g((()=>{const{scale:e,deg:a,offsetX:t,offsetY:l,enableTransition:n}=ne.value;let o=t/e,i=l/e;switch(a%360){case 90:case-270:[o,i]=[i,-o];break;case 180:case-180:[o,i]=[-o,-i];break;case 270:case-90:[o,i]=[-i,o]}const r={transform:"scale(".concat(e,") rotate(").concat(a,"deg) translate(").concat(o,"px, ").concat(i,"px)"),transition:n?"transform .3s":""};return le.value.name===s.CONTAIN.name&&(r.maxWidth=r.maxHeight="100%"),r}));function pe(){ee.stop(),t("close")}function ge(){ae.value=!1}function ye(e){ae.value=!1,e.target.alt=o("el.image.error")}function be(e){if(ae.value||0!==e.button||!U.value)return;ne.value.enableTransition=!1;const{offsetX:a,offsetY:t}=ne.value,l=e.pageX,n=e.pageY,s=ie((e=>{ne.value={...ne.value,offsetX:a+e.pageX-l,offsetY:t+e.pageY-n}})),o=K(document,"mousemove",s);K(document,"mouseup",(()=>{o()})),e.preventDefault()}function we(){ne.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ke(){if(ae.value)return;const e=Z(s),a=Object.values(s),t=le.value.name,l=(a.findIndex((e=>e.name===t))+1)%e.length;le.value=s[e[l]],we()}function he(e){const a=n.urlList.length;te.value=(e+a)%a}function xe(){re.value&&!n.infinite||he(te.value-1)}function ze(){ce.value&&!n.infinite||he(te.value+1)}function Ce(e,a={}){if(ae.value)return;const{minScale:l,maxScale:s}=n,{zoomRate:o,rotateDeg:i,enableTransition:r}={zoomRate:n.zoomRate,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":ne.value.scale>l&&(ne.value.scale=Number.parseFloat((ne.value.scale/o).toFixed(3)));break;case"zoomIn":ne.value.scale<s&&(ne.value.scale=Number.parseFloat((ne.value.scale*o).toFixed(3)));break;case"clockwise":ne.value.deg+=i,t("rotate",ne.value.deg);break;case"anticlockwise":ne.value.deg-=i,t("rotate",ne.value.deg)}ne.value.enableTransition=r}return y(de,(()=>{b((()=>{const e=Q.value[0];(null==e?void 0:e.complete)||(ae.value=!0)}))})),y(te,(e=>{we(),t("switch",e)})),w((()=>{var e,a;!function(){const e=ie((e=>{switch(e.code){case V.esc:n.closeOnPressEscape&&pe();break;case V.space:ke();break;case V.left:xe();break;case V.up:Ce("zoomIn");break;case V.right:ze();break;case V.down:Ce("zoomOut")}})),a=ie((e=>{Ce((e.deltaY||e.deltaX)<0?"zoomIn":"zoomOut",{zoomRate:n.zoomRate,enableTransition:!1})}));ee.run((()=>{K(document,"keydown",e),K(document,"wheel",a)}))}(),null==(a=null==(e=U.value)?void 0:e.focus)||a.call(e)})),a({setActiveItem:he}),(e,a)=>(k(),h(G,{to:"body",disabled:!e.teleported},[x(W,{name:"viewer-fade",appear:""},{default:z((()=>[C("div",{ref_key:"wrapper",ref:U,tabindex:-1,class:I(_(q).e("wrapper")),style:S({zIndex:se.value})},[C("div",{class:I(_(q).e("mask")),onClick:a[0]||(a[0]=N((a=>e.hideOnClickModal&&pe()),["self"]))},null,2),O(" CLOSE "),C("span",{class:I([_(q).e("btn"),_(q).e("close")]),onClick:pe},[x(_(E),null,{default:z((()=>[x(_(B))])),_:1})],2),O(" ARROW "),_(oe)?O("v-if",!0):(k(),T(A,{key:0},[C("span",{class:I(_(ve)),onClick:xe},[x(_(E),null,{default:z((()=>[x(_(L))])),_:1})],2),C("span",{class:I(_(fe)),onClick:ze},[x(_(E),null,{default:z((()=>[x(_(R))])),_:1})],2)],64)),O(" ACTIONS "),C("div",{class:I([_(q).e("btn"),_(q).e("actions")])},[C("div",{class:I(_(q).e("actions__inner"))},[x(_(E),{onClick:a[1]||(a[1]=e=>Ce("zoomOut"))},{default:z((()=>[x(_(Y))])),_:1}),x(_(E),{onClick:a[2]||(a[2]=e=>Ce("zoomIn"))},{default:z((()=>[x(_(X))])),_:1}),C("i",{class:I(_(q).e("actions__divider"))},null,2),x(_(E),{onClick:ke},{default:z((()=>[(k(),h(F(_(le).icon)))])),_:1}),C("i",{class:I(_(q).e("actions__divider"))},null,2),x(_(E),{onClick:a[3]||(a[3]=e=>Ce("anticlockwise"))},{default:z((()=>[x(_(M))])),_:1}),x(_(E),{onClick:a[4]||(a[4]=e=>Ce("clockwise"))},{default:z((()=>[x(_(j))])),_:1})],2)],2),O(" CANVAS "),C("div",{class:I(_(q).e("canvas"))},[(k(!0),T(A,null,D(e.urlList,((a,t)=>$((k(),T("img",{ref_for:!0,ref:e=>Q.value[t]=e,key:a,src:a,style:S(_(me)),class:I(_(q).e("img")),crossorigin:e.crossorigin,onLoad:ge,onError:ye,onMousedown:be},null,46,ue)),[[P,t===te.value]]))),128))],2),H(e.$slots,"default")],6)])),_:3})],8,["disabled"]))}}),[["__file","image-viewer.vue"]])),fe=t({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:l([String,Object])},previewSrcList:{type:l(Array),default:()=>n([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:l(String)}}),me={load:e=>e instanceof Event,error:e=>e instanceof Event,switch:e=>s(e),close:()=>!0,show:()=>!0},pe=["src","loading","crossorigin"],ge={key:0},ye=o({name:"ElImage",inheritAttrs:!1});const be=J(q(o({...ye,props:fe,emits:me,setup(a,{emit:t}){const l=a;let n="";const{t:s}=u(),o=d("image"),i=U(),r=Q(),c=f(),v=f(!1),m=f(!0),p=f(!1),x=f(),N=f(),E=e&&"loading"in HTMLImageElement.prototype;let B,L;const R=g((()=>[o.e("inner"),F.value&&o.e("preview"),m.value&&o.is("loading")])),Y=g((()=>i.style)),X=g((()=>{const{fit:a}=l;return e&&a?{objectFit:a}:{}})),F=g((()=>{const{previewSrcList:e}=l;return Array.isArray(e)&&e.length>0})),M=g((()=>{const{previewSrcList:e,initialIndex:a}=l;let t=a;return a>e.length-1&&(t=0),t})),j=g((()=>"eager"!==l.loading&&(!E&&"lazy"===l.loading||l.lazy))),D=()=>{e&&(m.value=!0,v.value=!1,c.value=l.src)};function $(e){m.value=!1,v.value=!1,t("load",e)}function P(e){m.value=!1,v.value=!0,t("error",e)}function W(){((a,t)=>{if(!e||!a||!t)return!1;const l=a.getBoundingClientRect();let n;return n=t instanceof Element?t.getBoundingClientRect():{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},l.top<n.bottom&&l.bottom>n.top&&l.right>n.left&&l.left<n.right})(x.value,N.value)&&(D(),V())}const G=se(W,200,!0);async function q(){var a;if(!e)return;await b();const{scrollContainer:t}=l;te(t)?N.value=t:le(t)&&""!==t?N.value=null!=(a=document.querySelector(t))?a:void 0:x.value&&(N.value=ne(x.value)),N.value&&(B=K(N,"scroll",G),setTimeout((()=>W()),100))}function V(){e&&N.value&&G&&(null==B||B(),N.value=void 0)}function Z(e){if(e.ctrlKey)return e.deltaY<0||e.deltaY>0?(e.preventDefault(),!1):void 0}function J(){F.value&&(L=K("wheel",Z,{passive:!1}),n=document.body.style.overflow,document.body.style.overflow="hidden",p.value=!0,t("show"))}function oe(){null==L||L(),document.body.style.overflow=n,p.value=!1,t("close")}function ie(e){t("switch",e)}return y((()=>l.src),(()=>{j.value?(m.value=!0,v.value=!1,V(),q()):D()})),w((()=>{j.value?q():D()})),(e,a)=>(k(),T("div",{ref_key:"container",ref:x,class:I([_(o).b(),e.$attrs.class]),style:S(_(Y))},[v.value?H(e.$slots,"error",{key:0},(()=>[C("div",{class:I(_(o).e("error"))},ee(_(s)("el.image.error")),3)])):(k(),T(A,{key:1},[void 0!==c.value?(k(),T("img",ae({key:0},_(r),{src:c.value,loading:e.loading,style:_(X),class:_(R),crossorigin:e.crossorigin,onClick:J,onLoad:$,onError:P}),null,16,pe)):O("v-if",!0),m.value?(k(),T("div",{key:1,class:I(_(o).e("wrapper"))},[H(e.$slots,"placeholder",{},(()=>[C("div",{class:I(_(o).e("placeholder"))},null,2)]))],2)):O("v-if",!0)],64)),_(F)?(k(),T(A,{key:2},[p.value?(k(),h(_(ve),{key:0,"z-index":e.zIndex,"initial-index":_(M),infinite:e.infinite,"zoom-rate":e.zoomRate,"min-scale":e.minScale,"max-scale":e.maxScale,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:oe,onSwitch:ie},{default:z((()=>[e.$slots.viewer?(k(),T("div",ge,[H(e.$slots,"viewer")])):O("v-if",!0)])),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):O("v-if",!0)],64)):O("v-if",!0)],6))}}),[["__file","image.vue"]]));export{be as E};