/*! 
 Build based on gin-vue-admin 
 Time : 1709213701000 */
import{a0 as e,v as t,a as r,Y as a,S as n,o as i,c as s,b as o,d as u,w as f,g as l,a1 as h,a2 as p,t as d,e as c,a3 as v,k as y,E as g,J as m,p as b,i as _}from"./087AC4D233B64EB0index.js";import{E as A}from"./087AC4D233B64EB0progress.js";/* empty css                     *//* empty css                      */import{E as B}from"./087AC4D233B64EB0divider.js";import{_ as w}from"./087AC4D233B64EB0_plugin-vue_export-helper.js";var C={exports:{}};const k=e(C.exports=function(e){var t=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function r(e,t){var r=e[0],a=e[1],n=e[2],i=e[3];a=((a+=((n=((n+=((i=((i+=((r=((r+=(a&n|~a&i)+t[0]-680876936|0)<<7|r>>>25)+a|0)&a|~r&n)+t[1]-389564586|0)<<12|i>>>20)+r|0)&r|~i&a)+t[2]+606105819|0)<<17|n>>>15)+i|0)&i|~n&r)+t[3]-1044525330|0)<<22|a>>>10)+n|0,a=((a+=((n=((n+=((i=((i+=((r=((r+=(a&n|~a&i)+t[4]-176418897|0)<<7|r>>>25)+a|0)&a|~r&n)+t[5]+1200080426|0)<<12|i>>>20)+r|0)&r|~i&a)+t[6]-1473231341|0)<<17|n>>>15)+i|0)&i|~n&r)+t[7]-45705983|0)<<22|a>>>10)+n|0,a=((a+=((n=((n+=((i=((i+=((r=((r+=(a&n|~a&i)+t[8]+1770035416|0)<<7|r>>>25)+a|0)&a|~r&n)+t[9]-1958414417|0)<<12|i>>>20)+r|0)&r|~i&a)+t[10]-42063|0)<<17|n>>>15)+i|0)&i|~n&r)+t[11]-1990404162|0)<<22|a>>>10)+n|0,a=((a+=((n=((n+=((i=((i+=((r=((r+=(a&n|~a&i)+t[12]+1804603682|0)<<7|r>>>25)+a|0)&a|~r&n)+t[13]-40341101|0)<<12|i>>>20)+r|0)&r|~i&a)+t[14]-1502002290|0)<<17|n>>>15)+i|0)&i|~n&r)+t[15]+1236535329|0)<<22|a>>>10)+n|0,a=((a+=((n=((n+=((i=((i+=((r=((r+=(a&i|n&~i)+t[1]-165796510|0)<<5|r>>>27)+a|0)&n|a&~n)+t[6]-1069501632|0)<<9|i>>>23)+r|0)&a|r&~a)+t[11]+643717713|0)<<14|n>>>18)+i|0)&r|i&~r)+t[0]-373897302|0)<<20|a>>>12)+n|0,a=((a+=((n=((n+=((i=((i+=((r=((r+=(a&i|n&~i)+t[5]-701558691|0)<<5|r>>>27)+a|0)&n|a&~n)+t[10]+38016083|0)<<9|i>>>23)+r|0)&a|r&~a)+t[15]-660478335|0)<<14|n>>>18)+i|0)&r|i&~r)+t[4]-405537848|0)<<20|a>>>12)+n|0,a=((a+=((n=((n+=((i=((i+=((r=((r+=(a&i|n&~i)+t[9]+568446438|0)<<5|r>>>27)+a|0)&n|a&~n)+t[14]-1019803690|0)<<9|i>>>23)+r|0)&a|r&~a)+t[3]-187363961|0)<<14|n>>>18)+i|0)&r|i&~r)+t[8]+1163531501|0)<<20|a>>>12)+n|0,a=((a+=((n=((n+=((i=((i+=((r=((r+=(a&i|n&~i)+t[13]-1444681467|0)<<5|r>>>27)+a|0)&n|a&~n)+t[2]-51403784|0)<<9|i>>>23)+r|0)&a|r&~a)+t[7]+1735328473|0)<<14|n>>>18)+i|0)&r|i&~r)+t[12]-1926607734|0)<<20|a>>>12)+n|0,a=((a+=((n=((n+=((i=((i+=((r=((r+=(a^n^i)+t[5]-378558|0)<<4|r>>>28)+a|0)^a^n)+t[8]-2022574463|0)<<11|i>>>21)+r|0)^r^a)+t[11]+1839030562|0)<<16|n>>>16)+i|0)^i^r)+t[14]-35309556|0)<<23|a>>>9)+n|0,a=((a+=((n=((n+=((i=((i+=((r=((r+=(a^n^i)+t[1]-1530992060|0)<<4|r>>>28)+a|0)^a^n)+t[4]+1272893353|0)<<11|i>>>21)+r|0)^r^a)+t[7]-155497632|0)<<16|n>>>16)+i|0)^i^r)+t[10]-1094730640|0)<<23|a>>>9)+n|0,a=((a+=((n=((n+=((i=((i+=((r=((r+=(a^n^i)+t[13]+681279174|0)<<4|r>>>28)+a|0)^a^n)+t[0]-358537222|0)<<11|i>>>21)+r|0)^r^a)+t[3]-722521979|0)<<16|n>>>16)+i|0)^i^r)+t[6]+76029189|0)<<23|a>>>9)+n|0,a=((a+=((n=((n+=((i=((i+=((r=((r+=(a^n^i)+t[9]-640364487|0)<<4|r>>>28)+a|0)^a^n)+t[12]-421815835|0)<<11|i>>>21)+r|0)^r^a)+t[15]+530742520|0)<<16|n>>>16)+i|0)^i^r)+t[2]-995338651|0)<<23|a>>>9)+n|0,a=((a+=((i=((i+=(a^((r=((r+=(n^(a|~i))+t[0]-198630844|0)<<6|r>>>26)+a|0)|~n))+t[7]+1126891415|0)<<10|i>>>22)+r|0)^((n=((n+=(r^(i|~a))+t[14]-1416354905|0)<<15|n>>>17)+i|0)|~r))+t[5]-57434055|0)<<21|a>>>11)+n|0,a=((a+=((i=((i+=(a^((r=((r+=(n^(a|~i))+t[12]+1700485571|0)<<6|r>>>26)+a|0)|~n))+t[3]-1894986606|0)<<10|i>>>22)+r|0)^((n=((n+=(r^(i|~a))+t[10]-1051523|0)<<15|n>>>17)+i|0)|~r))+t[1]-2054922799|0)<<21|a>>>11)+n|0,a=((a+=((i=((i+=(a^((r=((r+=(n^(a|~i))+t[8]+1873313359|0)<<6|r>>>26)+a|0)|~n))+t[15]-30611744|0)<<10|i>>>22)+r|0)^((n=((n+=(r^(i|~a))+t[6]-1560198380|0)<<15|n>>>17)+i|0)|~r))+t[13]+1309151649|0)<<21|a>>>11)+n|0,a=((a+=((i=((i+=(a^((r=((r+=(n^(a|~i))+t[4]-145523070|0)<<6|r>>>26)+a|0)|~n))+t[11]-1120210379|0)<<10|i>>>22)+r|0)^((n=((n+=(r^(i|~a))+t[2]+718787259|0)<<15|n>>>17)+i|0)|~r))+t[9]-343485551|0)<<21|a>>>11)+n|0,e[0]=r+e[0]|0,e[1]=a+e[1]|0,e[2]=n+e[2]|0,e[3]=i+e[3]|0}function a(e){var t,r=[];for(t=0;t<64;t+=4)r[t>>2]=e.charCodeAt(t)+(e.charCodeAt(t+1)<<8)+(e.charCodeAt(t+2)<<16)+(e.charCodeAt(t+3)<<24);return r}function n(e){var t,r=[];for(t=0;t<64;t+=4)r[t>>2]=e[t]+(e[t+1]<<8)+(e[t+2]<<16)+(e[t+3]<<24);return r}function i(e){var t,n,i,s,o,u,f=e.length,l=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=f;t+=64)r(l,a(e.substring(t-64,t)));for(n=(e=e.substring(t-64)).length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)i[t>>2]|=e.charCodeAt(t)<<(t%4<<3);if(i[t>>2]|=128<<(t%4<<3),t>55)for(r(l,i),t=0;t<16;t+=1)i[t]=0;return s=(s=8*f).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(s[2],16),u=parseInt(s[1],16)||0,i[14]=o,i[15]=u,r(l,i),l}function s(e){var t,a,i,s,o,u,f=e.length,l=[1732584193,-271733879,-1732584194,271733878];for(t=64;t<=f;t+=64)r(l,n(e.subarray(t-64,t)));for(a=(e=t-64<f?e.subarray(t-64):new Uint8Array(0)).length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<a;t+=1)i[t>>2]|=e[t]<<(t%4<<3);if(i[t>>2]|=128<<(t%4<<3),t>55)for(r(l,i),t=0;t<16;t+=1)i[t]=0;return s=(s=8*f).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(s[2],16),u=parseInt(s[1],16)||0,i[14]=o,i[15]=u,r(l,i),l}function o(e){var r,a="";for(r=0;r<4;r+=1)a+=t[e>>8*r+4&15]+t[e>>8*r&15];return a}function u(e){var t;for(t=0;t<e.length;t+=1)e[t]=o(e[t]);return e.join("")}function f(e){return/[\u0080-\uFFFF]/.test(e)&&(e=unescape(encodeURIComponent(e))),e}function l(e,t){var r,a=e.length,n=new ArrayBuffer(a),i=new Uint8Array(n);for(r=0;r<a;r+=1)i[r]=e.charCodeAt(r);return t?i:n}function h(e){return String.fromCharCode.apply(null,new Uint8Array(e))}function p(e,t,r){var a=new Uint8Array(e.byteLength+t.byteLength);return a.set(new Uint8Array(e)),a.set(new Uint8Array(t),e.byteLength),r?a:a.buffer}function d(e){var t,r=[],a=e.length;for(t=0;t<a-1;t+=2)r.push(parseInt(e.substr(t,2),16));return String.fromCharCode.apply(String,r)}function c(){this.reset()}return u(i("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function t(e,t){return(e=0|e||0)<0?Math.max(e+t,0):Math.min(e,t)}ArrayBuffer.prototype.slice=function(r,a){var n,i,s,o,u=this.byteLength,f=t(r,u),l=u;return a!==e&&(l=t(a,u)),f>l?new ArrayBuffer(0):(n=l-f,i=new ArrayBuffer(n),s=new Uint8Array(i),o=new Uint8Array(this,f,n),s.set(o),i)}}(),c.prototype.append=function(e){return this.appendBinary(f(e)),this},c.prototype.appendBinary=function(e){this._buff+=e,this._length+=e.length;var t,n=this._buff.length;for(t=64;t<=n;t+=64)r(this._hash,a(this._buff.substring(t-64,t)));return this._buff=this._buff.substring(t-64),this},c.prototype.end=function(e){var t,r,a=this._buff,n=a.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<n;t+=1)i[t>>2]|=a.charCodeAt(t)<<(t%4<<3);return this._finish(i,n),r=u(this._hash),e&&(r=d(r)),this.reset(),r},c.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},c.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},c.prototype.setState=function(e){return this._buff=e.buff,this._length=e.length,this._hash=e.hash,this},c.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},c.prototype._finish=function(e,t){var a,n,i,s=t;if(e[s>>2]|=128<<(s%4<<3),s>55)for(r(this._hash,e),s=0;s<16;s+=1)e[s]=0;a=(a=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),n=parseInt(a[2],16),i=parseInt(a[1],16)||0,e[14]=n,e[15]=i,r(this._hash,e)},c.hash=function(e,t){return c.hashBinary(f(e),t)},c.hashBinary=function(e,t){var r=u(i(e));return t?d(r):r},c.ArrayBuffer=function(){this.reset()},c.ArrayBuffer.prototype.append=function(e){var t,a=p(this._buff.buffer,e,!0),i=a.length;for(this._length+=e.byteLength,t=64;t<=i;t+=64)r(this._hash,n(a.subarray(t-64,t)));return this._buff=t-64<i?new Uint8Array(a.buffer.slice(t-64)):new Uint8Array(0),this},c.ArrayBuffer.prototype.end=function(e){var t,r,a=this._buff,n=a.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(t=0;t<n;t+=1)i[t>>2]|=a[t]<<(t%4<<3);return this._finish(i,n),r=u(this._hash),e&&(r=d(r)),this.reset(),r},c.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},c.ArrayBuffer.prototype.getState=function(){var e=c.prototype.getState.call(this);return e.buff=h(e.buff),e},c.ArrayBuffer.prototype.setState=function(e){return e.buff=l(e.buff,!0),c.prototype.setState.call(this,e)},c.ArrayBuffer.prototype.destroy=c.prototype.destroy,c.ArrayBuffer.prototype._finish=c.prototype._finish,c.ArrayBuffer.hash=function(e,t){var r=u(s(new Uint8Array(e)));return t?d(r):r},c}()),D=e=>(b("data-v-3e4e0bfd"),e=e(),_(),e),U={class:"break-point"},S={class:"gva-table-box"},E={id:"fromCont",method:"post"},F=D((()=>o("div",{class:"el-upload__tip"},"请上传不超过5MB的文件",-1))),M={class:"list"},I={key:0,class:"list-item"},x={class:"percentage"},N=D((()=>o("div",{class:"tips"},"此版本为先行体验功能测试版，样式美化和性能优化正在进行中，上传切片文件和合成的完整文件分别再QMPlusserver目录的breakpointDir文件夹和fileDir文件夹",-1))),j=w(Object.assign({name:"BreakPoint"},{__name:"breakpoint",setup(e){const b=r(null),_=r(""),w=r([]),C=r([]),D=r(NaN),j=r(!1),L=r(0),P=r(!0),R=async e=>{const r=new FileReader,a=e.target.files[0];b.value=a,L.value=0,b.value.size<5242880?(r.readAsArrayBuffer(b.value),r.onload=async e=>{const r=e.target.result,a=new k.ArrayBuffer;a.append(r),_.value=a.end();const n=1048576;let i=0,s=0,o=0;for(w.value=[];s<b.value.size;){i=o*n,s=(o+1)*n;var u=b.value.slice(i,s);const e=new window.FormData;e.append("fileMd5",_.value),e.append("file",u),e.append("chunkNumber",o),e.append("fileName",b.value.name),w.value.push({key:o,formData:e}),o++}const f={fileName:b.value.name,fileMd5:_.value,chunkTotal:w.value.length},l=await(e=>t({url:"/fileUploadAndDownload/findFile",method:"get",params:e}))(f),h=l.data.file.ExaFileChunk;l.data.file.IsFinish?(C.value=[],y.success("文件已秒传")):C.value=w.value.filter((e=>!(h&&h.some((t=>t.FileChunkNumber===e.key))))),D.value=C.value.length}):(j.value=!0,y("请上传小于5M文件"))},T=()=>{null!==b.value?(100===L.value&&(P.value=!1),$()):y("请先上传文件")},$=()=>{C.value&&C.value.forEach((e=>{e.formData.append("chunkTotal",w.value.length);const t=new FileReader,r=e.formData.get("file");t.readAsArrayBuffer(r),t.onload=t=>{const r=new k.ArrayBuffer;r.append(t.target.result),e.formData.append("chunkMd5",r.end()),z(e)}}))};a((()=>D.value),(()=>{L.value=Math.floor((w.value.length-D.value)/w.value.length*100)}));const z=async e=>{var r;if(0===(await(r=e.formData,t({url:"/fileUploadAndDownload/breakpointContinue",method:"post",donNotShowLoading:!0,headers:{"Content-Type":"multipart/form-data"},data:r}))).code&&(D.value--,0===D.value)){const e={fileName:b.value.name,fileMd5:_.value},r=await(e=>t({url:"/fileUploadAndDownload/breakpointContinueFinish",method:"post",params:e}))(e);if(0===r.code){const e={fileName:b.value.name,fileMd5:_.value,filePath:r.data.filePath};y.success("上传成功"),await((e,r)=>t({url:"/fileUploadAndDownload/removeChunk",method:"post",data:e,params:r}))(e)}}},J=r(null),O=()=>{J.value.dispatchEvent(new MouseEvent("click"))};return(e,t)=>{const r=B,a=g,y=n("document"),_=m,w=A;return i(),s("div",U,[o("div",S,[u(r,{"content-position":"left"},{default:f((()=>[l("大文件上传")])),_:1}),o("form",E,[o("div",{class:"fileUpload",onClick:O},[l(" 选择文件 "),h(o("input",{id:"file",ref_key:"FileInput",ref:J,multiple:"multiple",type:"file",onChange:R},null,544),[[p,!1]])])]),u(a,{disabled:j.value,type:"primary",class:"uploadBtn",onClick:T},{default:f((()=>[l("上传文件")])),_:1},8,["disabled"]),F,o("div",M,[u(v,{name:"list",tag:"p"},{default:f((()=>[b.value?(i(),s("div",I,[u(_,null,{default:f((()=>[u(y)])),_:1}),o("span",null,d(b.value.name),1),o("span",x,d(L.value)+"%",1),u(w,{"show-text":!1,"text-inside":!1,"stroke-width":2,percentage:L.value},null,8,["percentage"])])):c("",!0)])),_:1})]),N])])}}}),[["__scopeId","data-v-3e4e0bfd"]]);export{j as default};
