(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-add-or-update"],{"11e9":function(r,e,t){var a=t("24fb");e=a(!1),e.push([r.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-6b74bf7c]{padding:%?20?%}.content[data-v-6b74bf7c]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220210/87bd12d356ac4a8e90125da208a7597e.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-6b74bf7c]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-6b74bf7c]{width:%?180?%}.avator[data-v-6b74bf7c]{width:%?150?%;height:%?60?%}.right-input[data-v-6b74bf7c]{flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-6b74bf7c]{justify-content:space-between}.btn[data-v-6b74bf7c]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-6b74bf7c]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-6b74bf7c]{border:0}.cu-form-group uni-input[data-v-6b74bf7c]{padding:0 %?30?%}.uni-input[data-v-6b74bf7c]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-6b74bf7c]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-6b74bf7c]::after{line-height:%?80?%}.select .uni-input[data-v-6b74bf7c]{line-height:%?80?%}.input .right-input[data-v-6b74bf7c]{line-height:%?88?%}',""]),r.exports=e},5874:function(r,e,t){"use strict";var a=t("4ea4");t("99af"),t("a9e3"),t("d3b7"),t("ac1f"),t("5319"),t("2ca0"),t("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("96cf");var n=a(t("1da1")),o=a(t("555c")),i={data:function(){return{cross:"",ruleForm:{title:"",introduction:"",picture:"",content:""},user:{},ro:{title:!1,introduction:!1,picture:!1,content:!1}}},components:{wPicker:o.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(r){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var a,n,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=uni.getStorageSync("nowTable"),t.next=3,e.$api.session(a);case 3:if(n=t.sent,e.user=n.data,e.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(e.ruleForm.refid=r.refid,e.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){t.next=13;break}return e.ruleForm.id=r.id,t.next=11,e.$api.info("news",e.ruleForm.id);case 11:n=t.sent,e.ruleForm=n.data;case 13:if(e.cross=r.cross,!r.cross){t.next=37;break}o=uni.getStorageSync("crossObj"),t.t0=regeneratorRuntime.keys(o);case 17:if((t.t1=t.t0()).done){t.next=37;break}if(i=t.t1.value,"title"!=i){t.next=23;break}return e.ruleForm.title=o[i],e.ro.title=!0,t.abrupt("continue",17);case 23:if("introduction"!=i){t.next=27;break}return e.ruleForm.introduction=o[i],e.ro.introduction=!0,t.abrupt("continue",17);case 27:if("picture"!=i){t.next=31;break}return e.ruleForm.picture=o[i],e.ro.picture=!0,t.abrupt("continue",17);case 31:if("content"!=i){t.next=35;break}return e.ruleForm.content=o[i],e.ro.content=!0,t.abrupt("continue",17);case 35:t.next=17;break;case 37:e.styleChange();case 38:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},pictureTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.picture="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var t,a,n,o,i,d,u,c,s,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r.ruleForm.title){e.next=3;break}return r.$utils.msg("标题不能为空"),e.abrupt("return");case 3:if(r.ruleForm.picture){e.next=6;break}return r.$utils.msg("图片不能为空"),e.abrupt("return");case 6:if(r.ruleForm.content){e.next=9;break}return r.$utils.msg("内容不能为空"),e.abrupt("return");case 9:if(!r.cross){e.next=25;break}if(o=uni.getStorageSync("statusColumnName"),i=uni.getStorageSync("statusColumnValue"),""==o){e.next=25;break}if(d=uni.getStorageSync("crossObj"),o.startsWith("[")){e.next=21;break}for(u in d)u==o&&(d[u]=i);return c=uni.getStorageSync("crossTable"),e.next=19,r.$api.update("".concat(c),d);case 19:e.next=25;break;case 21:t=Number(uni.getStorageSync("userid")),a=d["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 25:if(!a||!t){e.next=47;break}return r.ruleForm.crossuserid=t,r.ruleForm.crossrefid=a,s={page:1,limit:10,crossuserid:t,crossrefid:a},e.next=31,r.$api.list("news",s);case 31:if(l=e.sent,!(l.data.total>=n)){e.next=37;break}return r.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 37:if(!r.ruleForm.id){e.next=42;break}return e.next=40,r.$api.update("news",r.ruleForm);case 40:e.next=44;break;case 42:return e.next=44,r.$api.add("news",r.ruleForm);case 44:r.$utils.msgBack("提交成功");case 45:e.next=55;break;case 47:if(!r.ruleForm.id){e.next=52;break}return e.next=50,r.$api.update("news",r.ruleForm);case 50:e.next=54;break;case 52:return e.next=54,r.$api.add("news",r.ruleForm);case 54:r.$utils.msgBack("提交成功");case 55:case"end":return e.stop()}}),e)})))()},optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return"start"===r?t-=60:"end"===r&&(t+=2),a=a>9?a:"0"+a,n=n>9?n:"0"+n,"".concat(t,"-").concat(a,"-").concat(n)},toggleTab:function(r){this.$refs[r].show()}}};e.default=i},6064:function(r,e,t){"use strict";var a=t("d6ad"),n=t.n(a);n.a},"6d1a":function(r,e,t){"use strict";var a;t.d(e,"b",(function(){return n})),t.d(e,"c",(function(){return o})),t.d(e,"a",(function(){return a}));var n=function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-form",{staticClass:"app-update-pv"},[a("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[a("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("标题")]),a("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.title,placeholder:"标题"},model:{value:r.ruleForm.title,callback:function(e){r.$set(r.ruleForm,"title",e)},expression:"ruleForm.title"}})],1),a("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.pictureTap.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("图片")]),a("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.picture?a("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.picture,mode:"aspectFill"}}):a("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:t("ae5e"),mode:"aspectFill"}})],1)],1),a("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"308rpx"}},[a("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("简介")]),a("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(161, 161, 161, 1)",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"简介"},model:{value:r.ruleForm.introduction,callback:function(e){r.$set(r.ruleForm,"introduction",e)},expression:"ruleForm.introduction"}})],1),a("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"308rpx"}},[a("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("内容")]),a("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(161, 161, 161, 1)",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"内容"},model:{value:r.ruleForm.content,callback:function(e){r.$set(r.ruleForm,"content",e)},expression:"ruleForm.content"}})],1),a("v-uni-view",{staticClass:"btn"},[a("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(130, 163, 157, 1)",borderColor:"rgba(130, 163, 157, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1)],1)},o=[]},9041:function(r,e,t){"use strict";t.r(e);var a=t("6d1a"),n=t("9fe8");for(var o in n)"default"!==o&&function(r){t.d(e,r,(function(){return n[r]}))}(o);t("6064");var i,d=t("f0c5"),u=Object(d["a"])(n["default"],a["b"],a["c"],!1,null,"6b74bf7c",null,!1,a["a"],i);e["default"]=u.exports},"9fe8":function(r,e,t){"use strict";t.r(e);var a=t("5874"),n=t.n(a);for(var o in a)"default"!==o&&function(r){t.d(e,r,(function(){return a[r]}))}(o);e["default"]=n.a},ae5e:function(r,e,t){r.exports=t.p+"static/img/upload.2a6f2919.png"},d6ad:function(r,e,t){var a=t("11e9");"string"===typeof a&&(a=[[r.i,a,""]]),a.locals&&(r.exports=a.locals);var n=t("4f06").default;n("c87261f2",a,!0,{sourceMap:!1,shadowMode:!1})}}]);