/*! 
 Build based on gin-vue-admin 
 Time : 1709213701000 */
import{C as s,a_ as a,x as e,aj as l,y as o,F as t,o as n,c,b as i,B as r,n as u,G as p,h as d,w as f,d as k,bL as g,am as m,J as y,e as b,H as v,a3 as C,_ as B,K as _}from"./087AC4D233B64EB0index.js";const h=s({type:{type:String,values:["success","info","warning","danger",""],default:""},closable:Boolean,disableTransitions:Boolean,hit:Boolean,color:{type:String,default:""},size:{type:String,values:a,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),E={close:s=>s instanceof MouseEvent,click:s=>s instanceof MouseEvent},S=e({name:"ElTag"});const x=_(B(e({...S,props:h,emits:E,setup(s,{emit:a}){const e=s,B=l(),_=o("tag"),h=t((()=>{const{type:s,hit:a,effect:l,closable:o,round:t}=e;return[_.b(),_.is("closable",o),_.m(s),_.m(B.value),_.m(l),_.is("hit",a),_.is("round",t)]})),E=s=>{a("close",s)},S=s=>{a("click",s)};return(s,a)=>s.disableTransitions?(n(),c("span",{key:0,class:u(p(h)),style:v({backgroundColor:s.color}),onClick:S},[i("span",{class:u(p(_).e("content"))},[r(s.$slots,"default")],2),s.closable?(n(),d(p(y),{key:0,class:u(p(_).e("close")),onClick:m(E,["stop"])},{default:f((()=>[k(p(g))])),_:1},8,["class","onClick"])):b("v-if",!0)],6)):(n(),d(C,{key:1,name:"".concat(p(_).namespace.value,"-zoom-in-center"),appear:""},{default:f((()=>[i("span",{class:u(p(h)),style:v({backgroundColor:s.color}),onClick:S},[i("span",{class:u(p(_).e("content"))},[r(s.$slots,"default")],2),s.closable?(n(),d(p(y),{key:0,class:u(p(_).e("close")),onClick:m(E,["stop"])},{default:f((()=>[k(p(g))])),_:1},8,["class","onClick"])):b("v-if",!0)],6)])),_:3},8,["name"]))}}),[["__file","tag.vue"]]));export{x as E,h as t};