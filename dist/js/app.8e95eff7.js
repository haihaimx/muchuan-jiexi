(function(t){function e(e){for(var i,o,a=e[0],l=e[1],c=e[2],p=0,d=[];p<a.length;p++)o=a[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var l=n[a];0!==s[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},s={app:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),s=n("bc3a"),r=n.n(s);let o={};const a=r.a.create(o);a.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),a.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=a,window.axios=a,Object.defineProperties(t.prototype,{axios:{get(){return a}},$axios:{get(){return a}}})},i["default"].use(Plugin);var l=Plugin,c=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("index")],1)},u=[],p=function(){var t=this,e=t._self._c;return e("el-row",{attrs:{gutter:20}},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"demo-basic--circle"},[e("div",{staticClass:"block"},[e("el-avatar",{attrs:{size:150,src:t.avatar}})],1)]),e("h1",[t._v("短视频/图集在线去水印解析")]),e("div",{staticClass:"typo"},[e("p",[e("strong",[t._v("本站公告")]),t._v(" 解析失败请留言"),e("b",[e("a",{attrs:{href:"https://weibo.com/u/5754568288",target:"_blank",rel:"nofollow"}},[t._v(" 留言反馈 ")])])]),e("p",[e("strong",[t._v("目前支持 ")]),t._v("皮皮虾/抖音/微视/快手/哔哩哔哩/微博/等等80多个平台")]),e("p",[e("strong",[t._v("温馨提示 ")]),t._v("粘贴视频地址时"),e("u",[t._v("无需删除文案")]),e("small",[t._v(" 但如果视频链接正确但解析失败请删掉文案后重试")])])]),e("hr"),e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main"},[e("div",{staticClass:"grid-content"},[e("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请粘贴分享链接",id:"url"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}},[e("el-button",{attrs:{slot:"append"},on:{click:t.onSubmit},slot:"append"},[t._v("解析")])],1)],1),t.seen?e("div",{staticClass:"download"},[e("h4",[t._v(t._s(t.info.title))]),e("a",{attrs:{href:t.info.cover,target:"_blank"}},[e("el-button",{attrs:{plain:""}},[t._v("下载封面")])],1),t.info.video?e("a",{attrs:{href:t.info.video,target:"_blank"}},[e("el-button",{attrs:{plain:""}},[t._v("下载视频")])],1):t._e(),t.info.music&&t.info.music.url?e("a",{attrs:{href:t.info.music.url,target:"_blank"}},[e("el-button",{attrs:{plain:""}},[t._v("下载音乐")])],1):t._e()]):t._e(),t.iseen?e("div",{staticClass:"waterfall"},t._l(t.images_url,(function(n){return e("div",{key:n,staticClass:"item"},[e("el-image",{attrs:{src:n,"preview-src-list":t.images_url}})],1)})),0):t._e(),t.linkList.length>0?e("div",{staticClass:"link-list"},[e("h4",[t._v("视频或图文链接：")]),e("h5",[t._v("除抖音快手两个平台其他平台预览跳转下载可能有点问题")]),e("h5",[t._v("如果视频跳转下载失败的话则点击链接用浏览器打开就可以下载")]),e("ul",t._l(t.linkList,(function(n,i){return e("li",{key:i},[e("el-button",{attrs:{plain:""},on:{click:function(e){return t.copyLink(n)}}},[t._v(t._s(n))])],1)})),0)]):t._e()])])],1)},d=[],f=(n("14d9"),{data(){return{info:{},input:"",select:"",music:!1,seen:!1,iseen:!1,loading:!1,avatar:"https://men.chatcm.top/1.png",images_url:[],linkList:[]}},methods:{copyLink(t){const e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$notify({title:"复制成功",message:"链接已复制到剪贴板",type:"success"})},onSubmit(){this.seen=!1,this.iseen=!1,this.loading=!0,this.linkList=[];const t=/(https?|http):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.exec(this.input);if(!t)return this.loading=!1,void this.$notify.error({title:"解析失败",message:"请输入有效链接"});const e=t[0];this.axios.get("https://api.chatcm.top/muchuan.php?url="+encodeURIComponent(e)).then(t=>{this.loading=!1,200===t.data.code?(this.info=t.data.data,this.images_url=t.data.data.images||[],this.checkLinks(this.info.video,this.images_url),this.info.video?(this.seen=!0,this.$notify.success({title:"解析成功",message:"请及时下载视频"})):this.images_url.length>0?(this.iseen=!0,this.$notify.success({title:"解析成功",message:"图集暂不支持批量下载，请长按下载或右键另存为"})):this.$notify.error({title:"解析失败",message:"未找到相关视频或图集"})):this.$notify.error({title:"解析失败",message:"视频不存在或接口失效"})}).catch(()=>{this.loading=!1,this.$notify.error({title:"解析失败",message:"发生错误，请稍后重试"})})},checkLinks(t,e){const n=["yximgs.com","douyinpic.com"];t&&!n.some(e=>t.includes(e))&&this.linkList.push(t),e.forEach(t=>{n.some(e=>t.includes(e))||this.linkList.push(t)})}}}),h=f,v=(n("89d7"),n("2877")),m=Object(v["a"])(h,p,d,!1,null,null,null),g=m.exports,_={name:"app",components:{index:g}},b=_,y=(n("ccc1"),Object(v["a"])(b,c,u,!1,null,null,null)),k=y.exports,x=n("5c96"),w=n.n(x);n("0fae");i["default"].use(w.a),i["default"].use(l),i["default"].config.productionTip=!1,new i["default"]({render:t=>t(k)}).$mount("#app")},"89d7":function(t,e,n){"use strict";n("be24")},a568:function(t,e,n){},be24:function(t,e,n){},ccc1:function(t,e,n){"use strict";n("a568")}});
//# sourceMappingURL=app.8e95eff7.js.map