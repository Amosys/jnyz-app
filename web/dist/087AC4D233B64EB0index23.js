/*! 
 Build based on gin-vue-admin 
 Time : 1715432289000 */
import{B as e,aP as s,bg as a,C as r,a6 as t,v as c,x as i,a as l,D as p,aB as n,T as u,Y as o,o as v,c as m,G as f,F as d,h as y,w as g,H as S,I as h,A as I,n as B,_ as k,K as _,m as w,M as E,e as A}from"./087AC4D233B64EB0index.js";import{E as C}from"./087AC4D233B64EB0image-viewer.js";import{_ as z}from"./087AC4D233B64EB0_plugin-vue_export-helper.js";const b=e({size:{type:[Number,String],values:s,default:"",validator:e=>a(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:r},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:t(String),default:"cover"}}),j={error:e=>e instanceof Event},x=["src","alt","srcset"],D=c({name:"ElAvatar"});const T=_(k(c({...D,props:b,emits:j,setup(e,{emit:s}){const r=e,t=i("avatar"),c=l(!1),k=p((()=>{const{size:e,icon:s,shape:a}=r,c=[t.b()];return n(e)&&c.push(t.m(e)),s&&c.push(t.m("icon")),a&&c.push(t.m(a)),c})),_=p((()=>{const{size:e}=r;return a(e)?t.cssVarBlock({size:u(e)||""}):void 0})),w=p((()=>({objectFit:r.fit})));function E(e){c.value=!0,s("error",e)}return o((()=>r.src),(()=>c.value=!1)),(e,s)=>(v(),m("span",{class:B(d(k)),style:f(d(_))},[!e.src&&!e.srcSet||c.value?e.icon?(v(),y(d(h),{key:1},{default:g((()=>[(v(),y(S(e.icon)))])),_:1})):I(e.$slots,"default",{key:2}):(v(),m("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:f(d(w)),onError:E},null,44,x))],6))}}),[["__file","avatar.vue"]])),q=""+new URL("087AC4D233B64EB0noBody.png",import.meta.url).href,F={class:"headerAvatar"},P=["src"],G=["src"],H=z(Object.assign({name:"CustomPic"},{__name:"index",props:{picType:{type:String,required:!1,default:"avatar"},picSrc:{type:String,required:!1,default:""},preview:{type:Boolean,default:!1}},setup(e){const s=e,a=l("/api/"),r=l(q),t=w(),c=p((()=>""===s.picSrc?""!==t.userInfo.headerImg&&"http"===t.userInfo.headerImg.slice(0,4)?t.userInfo.headerImg:a.value+t.userInfo.headerImg:""!==s.picSrc&&"http"===s.picSrc.slice(0,4)?s.picSrc:a.value+s.picSrc)),i=p((()=>s.picSrc&&"http"!==s.picSrc.slice(0,4)?a.value+s.picSrc:s.picSrc)),n=p((()=>s.preview?[i.value]:[]));return(s,a)=>{const l=T,p=C;return v(),m("span",F,["avatar"===e.picType?(v(),m(E,{key:0},[d(t).userInfo.headerImg?(v(),y(l,{key:0,size:30,src:c.value},null,8,["src"])):(v(),y(l,{key:1,size:30,src:r.value},null,8,["src"]))],64)):A("",!0),"img"===e.picType?(v(),m(E,{key:1},[d(t).userInfo.headerImg?(v(),m("img",{key:0,src:c.value,class:"avatar"},null,8,P)):(v(),m("img",{key:1,src:r.value,class:"avatar"},null,8,G))],64)):A("",!0),"file"===e.picType?(v(),y(p,{key:2,src:i.value,class:"file","preview-src-list":n.value,"preview-teleported":!0},null,8,["src","preview-src-list"])):A("",!0)])}}}),[["__scopeId","data-v-a9ea8f7c"]]);export{H as C};
