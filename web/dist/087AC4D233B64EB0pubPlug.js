/*! 
 Build based on gin-vue-admin 
 Time : 1709213701000 */
import{a,o as s,c as e,d as t,b as o,w as l,g as r,k as u,l as i,E as n}from"./087AC4D233B64EB0index.js";/* empty css                      *//* empty css                     */import{_ as m}from"./087AC4D233B64EB0warningBar.js";import{l as p}from"./087AC4D233B64EB0autoCode.js";/* empty css                     */const c={class:"p-5 bg-white"},d={class:"flex items-center gap-3"},B={__name:"pubPlug",setup(B){const C=a(""),g=async()=>{const a=await p({plugName:C.value});0===a.code&&u.success(a.msg)};return(a,u)=>{const p=i,B=n;return s(),e("div",c,[t(m,{title:"目前只支持标准插件（通过插件模板生成的标准目录插件），非标准插件请自行打包"}),o("div",d,[t(p,{modelValue:C.value,"onUpdate:modelValue":u[0]||(u[0]=a=>C.value=a),placeholder:"插件模板处填写的【插件名】"},null,8,["modelValue"]),t(B,{type:"primary",onClick:g},{default:l((()=>[r("打包插件")])),_:1})])])}}};export{B as default};
