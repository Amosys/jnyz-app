/*! 
 Build based on gin-vue-admin 
 Time : 1709213701000 */
import{a as e,o as a,h as l,w as t,d as i,b as o,g as r,c as s,M as u,N as n,G as d,t as m,a7 as p,k as c,l as v,E as g,J as h,Y as y,e as B,d3 as f,d4 as b,d5 as C,d6 as w,d7 as E,U as D,d8 as I}from"./087AC4D233B64EB0index.js";import{E as j}from"./087AC4D233B64EB0dialog.js";import"./087AC4D233B64EB0overlay.js";import{a as k,E as _}from"./087AC4D233B64EB0form-item.js";/* empty css                     */import{E as A}from"./087AC4D233B64EB0pagination.js";import"./087AC4D233B64EB0tag.js";import"./087AC4D233B64EB0select.js";import"./087AC4D233B64EB0scrollbar.js";/* empty css                      */import{E as V,a as x}from"./087AC4D233B64EB0table-column.js";import"./087AC4D233B64EB0checkbox.js";/* empty css                       */import{E as U}from"./087AC4D233B64EB0popover.js";import{E as N}from"./087AC4D233B64EB0switch.js";import{E as z}from"./087AC4D233B64EB0radio.js";/* empty css                      */import{g as S}from"./087AC4D233B64EB0authority2.js";import{C as O}from"./087AC4D233B64EB0index22.js";import{E as T}from"./087AC4D233B64EB0drawer.js";import{E as q}from"./087AC4D233B64EB0image-viewer.js";/* empty css                     */import{_ as J,U as F,a as P,g as K,e as M}from"./087AC4D233B64EB0common.js";import{_ as R}from"./087AC4D233B64EB0warningBar.js";import"./087AC4D233B64EB0isUndefined.js";import"./087AC4D233B64EB0castArray.js";import"./087AC4D233B64EB0_baseClone.js";import"./087AC4D233B64EB0_Uint8Array.js";import"./087AC4D233B64EB0_initCloneObject.js";import"./087AC4D233B64EB0isEqual.js";import"./087AC4D233B64EB0hasIn.js";import"./087AC4D233B64EB0index20.js";import"./087AC4D233B64EB0index21.js";import"./087AC4D233B64EB0strings.js";import"./087AC4D233B64EB0debounce.js";import"./087AC4D233B64EB0dropdown.js";import"./087AC4D233B64EB0arrays.js";import"./087AC4D233B64EB0cloneDeep.js";import"./087AC4D233B64EB0_plugin-vue_export-helper.js";import"./087AC4D233B64EB0upload2.js";import"./087AC4D233B64EB0progress.js";const $={class:"gva-btn-list"},G={class:"media"},Y={class:"header-img-box-list"},Z={class:"header-img-box-list"},H=o("picture",null,null,-1),L=["onClick"],Q={__name:"index",props:{target:{type:Object,default:null},targetKey:{type:String,default:""}},emits:["enterImg"],setup(y,{expose:B,emit:f}){const b=e(""),C=e(""),w=e({}),E=e(1),D=e(0),I=e(20),j=e=>{I.value=e,z()},V=e=>{E.value=e,z()},x=f,U=e(!1),N=e([]),z=async()=>{const e=await K({page:E.value,pageSize:I.value,...w.value});0===e.code&&(N.value=e.data.list,D.value=e.data.total,E.value=e.data.page,I.value=e.data.pageSize,U.value=!0)};return B({open:z}),(e,B)=>{const f=v,S=k,O=g,K=_,Q=h,W=q,X=A,ee=T;return a(),l(ee,{modelValue:U.value,"onUpdate:modelValue":B[3]||(B[3]=e=>U.value=e),title:"媒体库",size:"650px"},{default:t((()=>[i(R,{title:"点击“文件名/备注”可以编辑文件名或者备注内容。"}),o("div",$,[i(J,{imageCommon:C.value,"onUpdate:imageCommon":B[0]||(B[0]=e=>C.value=e),class:"upload-btn-media-library",onOnSuccess:z},null,8,["imageCommon"]),i(F,{imageUrl:b.value,"onUpdate:imageUrl":B[1]||(B[1]=e=>b.value=e),"file-size":512,"max-w-h":1080,class:"upload-btn-media-library",onOnSuccess:z},null,8,["imageUrl"]),i(K,{ref:"searchForm",inline:!0,model:w.value},{default:t((()=>[i(S,{label:""},{default:t((()=>[i(f,{modelValue:w.value.keyword,"onUpdate:modelValue":B[2]||(B[2]=e=>w.value.keyword=e),class:"keyword",placeholder:"请输入文件名或备注"},null,8,["modelValue"])])),_:1}),i(S,null,{default:t((()=>[i(O,{type:"primary",icon:"search",onClick:z},{default:t((()=>[r("查询")])),_:1})])),_:1})])),_:1},8,["model"])]),o("div",G,[(a(!0),s(u,null,n(N.value,((e,r)=>(a(),s("div",{key:r,class:"media-box"},[o("div",Y,[(a(),l(W,{key:r,src:d(P)(e.url),onClick:a=>{return l=e.url,t=y.target,i=y.targetKey,t&&i&&(t[i]=l),x("enterImg",l),void(U.value=!1);var l,t,i}},{error:t((()=>[o("div",Z,[i(Q,null,{default:t((()=>[H])),_:1})])])),_:2},1032,["src","onClick"]))]),o("div",{class:"img-title",onClick:a=>(async e=>{p.prompt("请输入文件名或者备注","编辑",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"不能为空",inputValue:e.name}).then((async({value:a})=>{e.name=a,0===(await M(e)).code&&(c({type:"success",message:"编辑成功!"}),z())})).catch((()=>{c({type:"info",message:"取消修改"})}))})(e)},m(e.name),9,L)])))),128))]),i(X,{"current-page":E.value,"page-size":I.value,total:D.value,style:{"justify-content":"center"},layout:"total, prev, pager, next, jumper",onCurrentChange:V,onSizeChange:j},null,8,["current-page","page-size","total"])])),_:1},8,["modelValue"])}}},W={class:"gva-table-box"},X={class:"gva-btn-list"},ee=o("p",null,"确定要删除此用户吗",-1),ae={style:{"text-align":"right","margin-top":"8px"}},le={class:"gva-pagination"},te={style:{height:"60vh",overflow:"auto",padding:"0 12px"}},ie=["src"],oe={key:1,class:"header-img-box"},re={class:"dialog-footer"},se=Object.assign({name:"User"},{__name:"user",setup(u){const n=e("/api/"),d=(e,a)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const l={authorityId:e.authorityId,authorityName:e.authorityName,children:[]};d(e.children,l.children),a.push(l)}else{const l={authorityId:e.authorityId,authorityName:e.authorityName};a.push(l)}}))},m=e(1),h=e(0),T=e(10),q=e([]),J=e=>{T.value=e,P()},F=e=>{m.value=e,P()},P=async()=>{const e=await f({page:m.value,pageSize:T.value});0===e.code&&(q.value=e.data.list,h.value=e.data.total,m.value=e.data.page,T.value=e.data.pageSize)};y((()=>q.value),(()=>{K()}));(async()=>{P();const e=await S({page:1,pageSize:999});Y(e.data.list)})();const K=()=>{q.value&&q.value.forEach((e=>{e.authorityIds=e.authorities&&e.authorities.map((e=>e.authorityId))}))},M=e(null),$=()=>{M.value.open()},G=e([]),Y=e=>{G.value=[],d(e,G.value)},Z=e({username:"",password:"",nickName:"",headerImg:"",authorityId:"",authorityIds:[],enable:1}),H=e({userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,message:"最低5位字符",trigger:"blur"}],password:[{required:!0,message:"请输入用户密码",trigger:"blur"},{min:6,message:"最低6位字符",trigger:"blur"}],nickName:[{required:!0,message:"请输入用户昵称",trigger:"blur"}],phone:[{pattern:/^1([38][0-9]|4[014-9]|[59][0-35-9]|6[2567]|7[0-8])\d{8}$/,message:"请输入合法手机号",trigger:"blur"}],email:[{pattern:/^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g,message:"请输入正确的邮箱",trigger:"blur"}],authorityId:[{required:!0,message:"请选择用户角色",trigger:"blur"}]}),L=e(null),se=async()=>{Z.value.authorityId=Z.value.authorityIds[0],L.value.validate((async e=>{if(e){const e={...Z.value};if("add"===de.value){0===(await w(e)).code&&(c({type:"success",message:"创建成功"}),await P(),ne())}if("edit"===de.value){0===(await E(e)).code&&(c({type:"success",message:"编辑成功"}),await P(),ne())}}}))},ue=e(!1),ne=()=>{L.value.resetFields(),Z.value.headerImg="",Z.value.authorityIds=[],ue.value=!1},de=e("add"),me=()=>{de.value="add",ue.value=!0},pe={},ce=async(e,a,l)=>{if(a)return void(l||(pe[e.ID]=[...e.authorityIds]));await D();0===(await I({ID:e.ID,authorityIds:e.authorityIds})).code?c({type:"success",message:"角色设置成功"}):l?e.authorityIds=[l,...e.authorityIds]:(e.authorityIds=[...pe[e.ID]],delete pe[e.ID])};return(e,u)=>{const d=g,y=V,f=z,w=N,I=U,S=x,K=A,Y=v,pe=k,ve=_,ge=j;return a(),s("div",null,[i(R,{title:"注：右上角头像下拉可切换角色"}),o("div",W,[o("div",X,[i(d,{type:"primary",icon:"plus",onClick:me},{default:t((()=>[r("新增用户")])),_:1})]),i(S,{data:q.value,"row-key":"ID"},{default:t((()=>[i(y,{align:"left",label:"头像","min-width":"75"},{default:t((e=>[i(O,{style:{"margin-top":"8px"},"pic-src":e.row.headerImg},null,8,["pic-src"])])),_:1}),i(y,{align:"left",label:"ID","min-width":"50",prop:"ID"}),i(y,{align:"left",label:"用户名","min-width":"150",prop:"userName"}),i(y,{align:"left",label:"昵称","min-width":"150",prop:"nickName"}),i(y,{align:"left",label:"手机号","min-width":"180",prop:"phone"}),i(y,{align:"left",label:"邮箱","min-width":"180",prop:"email"}),i(y,{align:"left",label:"用户角色","min-width":"200"},{default:t((e=>[i(f,{modelValue:e.row.authorityIds,"onUpdate:modelValue":a=>e.row.authorityIds=a,options:G.value,"show-all-levels":!1,"collapse-tags":"",props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1,onVisibleChange:a=>{ce(e.row,a,0)},onRemoveTag:a=>{ce(e.row,!1,a)}},null,8,["modelValue","onUpdate:modelValue","options","onVisibleChange","onRemoveTag"])])),_:1}),i(y,{align:"left",label:"启用","min-width":"150"},{default:t((e=>[i(w,{modelValue:e.row.enable,"onUpdate:modelValue":a=>e.row.enable=a,"inline-prompt":"","active-value":1,"inactive-value":2,onChange:()=>{(async e=>{Z.value=JSON.parse(JSON.stringify(e)),await D();const a={...Z.value};0===(await E(a)).code&&(c({type:"success",message:"".concat(2===a.enable?"禁用":"启用","成功")}),await P(),Z.value.headerImg="",Z.value.authorityIds=[])})(e.row)}},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),i(y,{label:"操作","min-width":"250",fixed:"right"},{default:t((e=>[i(I,{visible:e.row.visible,"onUpdate:visible":a=>e.row.visible=a,placement:"top",width:"160"},{reference:t((()=>[i(d,{type:"primary",link:"",icon:"delete"},{default:t((()=>[r("删除")])),_:1})])),default:t((()=>[ee,o("div",ae,[i(d,{type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:t((()=>[r("取消")])),_:2},1032,["onClick"]),i(d,{type:"primary",onClick:a=>(async e=>{0===(await C({id:e.ID})).code&&(c.success("删除成功"),e.visible=!1,await P())})(e.row)},{default:t((()=>[r("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["visible","onUpdate:visible"]),i(d,{type:"primary",link:"",icon:"edit",onClick:a=>{return l=e.row,de.value="edit",Z.value=JSON.parse(JSON.stringify(l)),void(ue.value=!0);var l}},{default:t((()=>[r("编辑")])),_:2},1032,["onClick"]),i(d,{type:"primary",link:"",icon:"magic-stick",onClick:a=>{return l=e.row,void p.confirm("是否将此用户密码重置为123456?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{const e=await b({ID:l.ID});0===e.code?c({type:"success",message:e.msg}):c({type:"error",message:e.msg})}));var l}},{default:t((()=>[r("重置密码")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),o("div",le,[i(K,{"current-page":m.value,"page-size":T.value,"page-sizes":[10,30,50,100],total:h.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:F,onSizeChange:J},null,8,["current-page","page-size","total"])])]),i(ge,{modelValue:ue.value,"onUpdate:modelValue":u[7]||(u[7]=e=>ue.value=e),title:"用户","show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:t((()=>[o("div",re,[i(d,{onClick:ne},{default:t((()=>[r("取 消")])),_:1}),i(d,{type:"primary",onClick:se},{default:t((()=>[r("确 定")])),_:1})])])),default:t((()=>[o("div",te,[i(ve,{ref_key:"userForm",ref:L,rules:H.value,model:Z.value,"label-width":"80px"},{default:t((()=>["add"===de.value?(a(),l(pe,{key:0,label:"用户名",prop:"userName"},{default:t((()=>[i(Y,{modelValue:Z.value.userName,"onUpdate:modelValue":u[0]||(u[0]=e=>Z.value.userName=e)},null,8,["modelValue"])])),_:1})):B("",!0),"add"===de.value?(a(),l(pe,{key:1,label:"密码",prop:"password"},{default:t((()=>[i(Y,{modelValue:Z.value.password,"onUpdate:modelValue":u[1]||(u[1]=e=>Z.value.password=e)},null,8,["modelValue"])])),_:1})):B("",!0),i(pe,{label:"昵称",prop:"nickName"},{default:t((()=>[i(Y,{modelValue:Z.value.nickName,"onUpdate:modelValue":u[2]||(u[2]=e=>Z.value.nickName=e)},null,8,["modelValue"])])),_:1}),i(pe,{label:"手机号",prop:"phone"},{default:t((()=>[i(Y,{modelValue:Z.value.phone,"onUpdate:modelValue":u[3]||(u[3]=e=>Z.value.phone=e)},null,8,["modelValue"])])),_:1}),i(pe,{label:"邮箱",prop:"email"},{default:t((()=>[i(Y,{modelValue:Z.value.email,"onUpdate:modelValue":u[4]||(u[4]=e=>Z.value.email=e)},null,8,["modelValue"])])),_:1}),i(pe,{label:"用户角色",prop:"authorityId"},{default:t((()=>[i(f,{modelValue:Z.value.authorityIds,"onUpdate:modelValue":u[5]||(u[5]=e=>Z.value.authorityIds=e),style:{width:"100%"},options:G.value,"show-all-levels":!1,props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1},null,8,["modelValue","options"])])),_:1}),i(pe,{label:"启用",prop:"disabled"},{default:t((()=>[i(w,{modelValue:Z.value.enable,"onUpdate:modelValue":u[6]||(u[6]=e=>Z.value.enable=e),"inline-prompt":"","active-value":1,"inactive-value":2},null,8,["modelValue"])])),_:1}),i(pe,{label:"头像","label-width":"80px"},{default:t((()=>[o("div",{style:{display:"inline-block"},onClick:$},[Z.value.headerImg?(a(),s("img",{key:0,alt:"头像",class:"header-img-box",src:Z.value.headerImg&&"http"!==Z.value.headerImg.slice(0,4)?n.value+Z.value.headerImg:Z.value.headerImg},null,8,ie)):(a(),s("div",oe,"从媒体库选择"))])])),_:1})])),_:1},8,["rules","model"])])])),_:1},8,["modelValue"]),i(Q,{ref_key:"chooseImg",ref:M,target:Z.value,"target-key":"headerImg"},null,8,["target"])])}}});export{se as default};
