"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_api=require("./../../api/api.js"),_api2=_interopRequireDefault(_api),_tip=require("./../../utils/tip.js"),_tip2=_interopRequireDefault(_tip),_util=require("./../../utils/util.js"),_util2=_interopRequireDefault(_util),_uploadFile=require("./../../components/common/uploadFile.js"),_uploadFile2=_interopRequireDefault(_uploadFile);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var u=e.apply(this,arguments);return new Promise(function(o,i){return function t(e,n){try{var r=u[e](n),a=r.value}catch(e){return void i(e)}if(!r.done)return Promise.resolve(a).then(function(e){t("next",e)},function(e){t("throw",e)});o(a)}("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var FriendsAdd=function(){function u(){var e,t,n,r;_classCallCheck(this,u);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=n=_possibleConstructorReturn(this,(e=u.__proto__||Object.getPrototypeOf(u)).call.apply(e,[this].concat(o)))).config={navigationBarTitleText:"发布"},n.components={upLoadFile:_uploadFile2.default},n.data={comment:"",uploadData:{}},n.methods={bindinput:function(e){this.comment=e.detail.value},cancelTap:function(){_wepy2.default.navigateBack({delta:1})},fabuTap:(r=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,a,o,i,u,l,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=(n=this).uploadData.type||0,a="",o=n.uploadData.list||[],i=[],_tip2.default.loading("上传中..."),u=0;case 7:if(u<o.length)return e.next=10,_util2.default.uploadFileImg(o[u]);e.next=16;break;case 10:l=e.sent,console.log("... ",u,s),1==l.status&&i.push(l.uri);case 13:u++,e.next=7;break;case 16:return a=JSON.stringify(i),console.log("-----\x3e fabu 内容",r,a),e.next=20,_api2.default.friendsAddTrend({query:{user_id:n.$parent.globalData.userInfo.id,text:n.comment,type:r,content:a||""}});case 20:if(s=e.sent,console.log("------ fabu",s),1==s.data.status)return e.next=25,_tip2.default.success("发布成功",1e3);e.next=28;break;case 25:wx.navigateBack(),e.next=29;break;case 28:_tip2.default.error(s.data.msg);case 29:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})},n.events={uploadfile:function(e){console.log("------------ get imgs ",e),this.uploadData=e}},_possibleConstructorReturn(n,t)}return _inherits(u,_wepy2.default.page),_createClass(u,[{key:"onLoad",value:function(){}}]),u}();Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(FriendsAdd,"pages/friends/friends-add"));