/*! 
 Build based on gin-vue-admin 
 Time : 1709213701000 */
import{_ as e,x as t,B as o,a,z as l,a9 as n,T as i,G as r,ai as s,C as p,a4 as u,D as c,ab as d}from"./087AC4D233B64EB0index.js";import{b as f,u as m}from"./087AC4D233B64EB0index20.js";var C=e(t({inheritAttrs:!1}),[["render",function(e,t,a,l,n,i){return o(e.$slots,"default")}],["__file","collection.vue"]]);var y=e(t({name:"ElCollectionItem",inheritAttrs:!1}),[["render",function(e,t,a,l,n,i){return o(e.$slots,"default")}],["__file","collection-item.vue"]]);const E="data-el-collection-item",g=e=>{const t="El".concat(e,"Collection"),o="".concat(t,"Item"),p=Symbol(t),u=Symbol(o),c={...C,name:t,setup(){const e=a(null),t=new Map;l(p,{itemMap:t,getItems:()=>{const o=r(e);if(!o)return[];const a=Array.from(o.querySelectorAll("[".concat(E,"]")));return[...t.values()].sort(((e,t)=>a.indexOf(e.ref)-a.indexOf(t.ref)))},collectionRef:e})}},d={...y,name:o,setup(e,{attrs:t}){const o=a(null),c=n(p,void 0);l(u,{collectionItemRef:o}),i((()=>{const e=r(o);e&&c.itemMap.set(e,{ref:e,...t})})),s((()=>{const e=r(o);c.itemMap.delete(e)}))}};return{COLLECTION_INJECTION_KEY:p,COLLECTION_ITEM_INJECTION_KEY:u,ElCollection:c,ElCollectionItem:d}},I=p({trigger:f.trigger,effect:{...m.effect,default:"light"},type:{type:u(String)},placement:{type:u(String),default:"bottom"},popperOptions:{type:u(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:u([Number,String]),default:0},maxHeight:{type:u([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:u(Object)},teleported:m.teleported}),O=p({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:c}}),b=p({onKeydown:{type:u(Function)}}),N=[d.down,d.pageDown,d.home],_=[d.up,d.pageUp,d.end],S=[...N,..._],{ElCollection:T,ElCollectionItem:B,COLLECTION_INJECTION_KEY:x,COLLECTION_ITEM_INJECTION_KEY:L}=g("Dropdown");export{L as C,T as E,S as F,_ as L,O as a,E as b,g as c,I as d,B as e,b as f,x as g};
