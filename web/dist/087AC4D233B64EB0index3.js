/*! 
 Build based on gin-vue-admin 
 Time : 1715432289000 */
import{u as e,a,r as t,m as s,o as l,c as r,b as o,d as n,w as c,q as p,s as i,h as d,e as u,g as m,k as h,l as f,E as g}from"./087AC4D233B64EB0index.js";import{E as w,a as b}from"./087AC4D233B64EB0form-item.js";/* empty css                      *//* empty css                     */import{c as B}from"./087AC4D233B64EB0initdb.js";import y from"./087AC4D233B64EB0bottomInfo.js";import{m as v}from"./087AC4D233B64EB0md5.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0_plugin-vue_export-helper.js";import"./087AC4D233B64EB0___vite-browser-external_commonjs-proxy.js";const C=""+new URL("087AC4D233B64EB0docs.png",import.meta.url).href,_=""+new URL("087AC4D233B64EB0kefu.png",import.meta.url).href,x=""+new URL("087AC4D233B64EB0github.png",import.meta.url).href,j=""+new URL("087AC4D233B64EB0video.png",import.meta.url).href,E={id:"userLayout",class:"w-full h-full relative"},A={class:"rounded-lg flex items-center justify-evenly w-full h-full bg-white md:w-screen md:h-screen md:bg-[#194bfb]"},D={class:"md:w-3/5 w-10/12 h-full flex items-center justify-evenly"},k=o("div",{class:"oblique h-[130%] w-3/5 bg-white transform -rotate-12 absolute -ml-52"},null,-1),I={class:"z-[999] pt-12 pb-10 md:w-96 w-full rounded-lg flex flex-col justify-between box-border"},L={class:"flex items-center justify-center"},V=["src"],U=o("div",{class:"mb-9"},[o("p",{class:"text-center text-4xl font-bold"},"泾农云助"),o("p",{class:"text-center text-sm font-normal text-gray-500 mt-2.5"},"泾县农商行云助手 ")],-1),z={class:"flex w-full justify-between"},q={class:"w-1/3 h-11 bg-[#c3d4f2] rounded"},R=["src"],N=o("div",{class:"links items-center justify-center gap-2 hidden md:flex"},[o("a",{href:"http://doc.henrongyi.top/",target:"_blank"},[o("img",{src:C,class:"w-8 h-8",alt:"文档"})]),o("a",{href:"https://support.qq.com/product/371961",target:"_blank"},[o("img",{src:_,class:"w-8 h-8",alt:"客服"})]),o("a",{href:"https://github.com/flipped-aurora/gin-vue-admin",target:"_blank"},[o("img",{src:x,class:"w-8 h-8",alt:"github"})]),o("a",{href:"https://space.bilibili.com/322210472",target:"_blank"},[o("img",{src:j,class:"w-8 h-8",alt:"视频站"})])],-1),O=Object.assign({name:"Login"},{__name:"index",setup(C){const _=e(),x=()=>{i({}).then((async e=>{G.captcha.push({max:e.data.captchaLength,min:e.data.captchaLength,message:"请输入".concat(e.data.captchaLength,"位验证码"),trigger:"blur"}),O.value=e.data.picPath,F.captchaId=e.data.captchaId,F.openCaptcha=e.data.openCaptcha}))};x();const j=a(null),O=a(""),F=t({username:"",phone:"13888888888",password:"123456",captcha:"",captchaId:"",openCaptcha:!1}),G=t({username:[{validator:(e,a,t)=>{if(a.length<5)return t(new Error("请输入正确的用户名"));t()},trigger:"blur"}],password:[{validator:(e,a,t)=>{if(a.length<6)return t(new Error("请输入正确的密码"));t()},trigger:"blur"}],captcha:[{message:"验证码格式不正确",trigger:"blur"}]}),K=s(),M=()=>{j.value.validate((async e=>{if(!e)return h({type:"error",message:"请正确填写登录信息",showClose:!0}),x(),!1;await(async()=>{var e={username:F.username,phone:F.phone,password:F.password,captcha:F.captcha,captchaId:F.captchaId,openCaptcha:F.openCaptcha};return e.password=v.md5(e.password),await K.LoginIn(e)})()||x()}))},P=async()=>{var e;const a=await B();0===a.code&&((null==(e=a.data)?void 0:e.needInit)?(K.NeedInit(),_.push({name:"Init"})):h({type:"info",message:"已配置数据库信息，无法初始化"}))};return(e,a)=>{const t=f,s=b,i=g,h=w;return l(),r("div",E,[o("div",A,[o("div",D,[k,o("div",I,[o("div",null,[o("div",L,[o("img",{class:"w-24",src:e.$GIN_VUE_ADMIN.appLogo,alt:""},null,8,V)]),U,n(h,{ref_key:"loginForm",ref:j,model:F,rules:G,"validate-on-rule-change":!1,onKeyup:p(M,["enter"])},{default:c((()=>[n(s,{prop:"phone",class:"mb-6"},{default:c((()=>[n(t,{modelValue:F.phone,"onUpdate:modelValue":a[0]||(a[0]=e=>F.phone=e),size:"large",type:"tel",placeholder:"请输入手机号码","suffix-icon":"phone"},null,8,["modelValue"])])),_:1}),n(s,{prop:"password",class:"mb-6"},{default:c((()=>[n(t,{modelValue:F.password,"onUpdate:modelValue":a[1]||(a[1]=e=>F.password=e),"show-password":"",size:"large",type:"password",placeholder:"请输入密码"},null,8,["modelValue"])])),_:1}),F.openCaptcha?(l(),d(s,{key:0,prop:"captcha",class:"mb-6"},{default:c((()=>[o("div",z,[n(t,{modelValue:F.captcha,"onUpdate:modelValue":a[2]||(a[2]=e=>F.captcha=e),placeholder:"请输入验证码",size:"large",class:"flex-1 mr-5"},null,8,["modelValue"]),o("div",q,[O.value?(l(),r("img",{key:0,class:"w-full h-full",src:O.value,alt:"请输入验证码",onClick:a[3]||(a[3]=e=>x())},null,8,R)):u("",!0)])])])),_:1})):u("",!0),n(s,{class:"mb-6"},{default:c((()=>[n(i,{class:"shadow shadow-blue-600 h-11 w-full",type:"primary",size:"large",onClick:M},{default:c((()=>[m("登 录")])),_:1})])),_:1}),n(s,{class:"mb-6"},{default:c((()=>[n(i,{class:"shadow shadow-blue-600 h-11 w-full",type:"primary",size:"large",onClick:P},{default:c((()=>[m("前往初始化")])),_:1})])),_:1})])),_:1},8,["model","rules"])])])])]),n(y,{class:"left-0 right-0 absolute bottom-3 mx-auto w-full z-20"},{default:c((()=>[N])),_:1})])}}});export{O as default};
