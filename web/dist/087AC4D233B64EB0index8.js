/*! 
 Build based on gin-vue-admin 
 Time : 1709213701000 */
import e from"./087AC4D233B64EB0menuItem.js";import o from"./087AC4D233B64EB0asyncSubmenu.js";import{F as t,S as r,o as n,h as i,w as s,c as l,M as p,N as u,e as m,I as a}from"./087AC4D233B64EB0index.js";/* empty css                       *//* empty css                      *//* empty css                     */import"./087AC4D233B64EB0_plugin-vue_export-helper.js";import"./087AC4D233B64EB0index20.js";import"./087AC4D233B64EB0isUndefined.js";import"./087AC4D233B64EB0index23.js";import"./087AC4D233B64EB0index24.js";const f=Object.assign({name:"AsideComponent"},{__name:"index",props:{routerInfo:{type:Object,default:()=>null},isCollapse:{default:function(){return!1},type:Boolean},theme:{default:function(){return{}},type:Object}},setup(f){const d=f,B=t((()=>d.routerInfo.children&&d.routerInfo.children.filter((e=>!e.hidden)).length?o:e));return(e,o)=>{const t=r("AsideComponent");return f.routerInfo.hidden?m("",!0):(n(),i(a(B.value),{key:0,"is-collapse":f.isCollapse,theme:f.theme,"router-info":f.routerInfo},{default:s((()=>[f.routerInfo.children&&f.routerInfo.children.length?(n(!0),l(p,{key:0},u(f.routerInfo.children,(e=>(n(),i(t,{key:e.name,"is-collapse":!1,"router-info":e,theme:f.theme},null,8,["router-info","theme"])))),128)):m("",!0)])),_:1},8,["is-collapse","theme","router-info"]))}}});export{f as default};