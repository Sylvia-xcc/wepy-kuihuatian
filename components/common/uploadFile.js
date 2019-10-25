"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_tip=require("./../../utils/tip.js"),_tip2=_interopRequireDefault(_tip),_util=require("./../../utils/util.js"),_util2=_interopRequireDefault(_util);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var u=e.apply(this,arguments);return new Promise(function(i,a){return function t(e,r){try{var o=u[e](r),n=o.value}catch(e){return void a(e)}if(!o.done)return Promise.resolve(n).then(function(e){t("next",e)},function(e){t("throw",e)});i(n)}("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var UpLoadFileImg=function(){function p(){var e,t,r,o,n;_classCallCheck(this,p);for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return(t=r=_possibleConstructorReturn(this,(e=p.__proto__||Object.getPrototypeOf(p)).call.apply(e,[this].concat(a)))).props={},r.components={},r.data={upload_pic:[],upload_max:9,video:""},r.methods={chooseVideo:(n=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,o,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this,e.next=3,_util2.default.chooseVideo();case 3:if("chooseVideo:ok"==(o=e.sent).errMsg)return n=o.tempFilePath,r.video=n,r.upload_pic.push(n),e.next=10,_util2.default.uploadFileImg(n);e.next=15;break;case 10:e.sent,r.$emit("uploadfile",{list:r.upload_pic,type:1}),r.$apply(),e.next=16;break;case 15:_tip2.default.error("操作失败");case 16:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)}),chooseImage:(o=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,o,n,i,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this,console.log("=======> add"),o=r.upload_max-r.upload_pic.length,e.next=5,_wepy2.default.chooseImage({count:o});case 5:if("chooseImage:ok"==(n=e.sent).errMsg){for(a in i=n.tempFilePaths)r.upload_pic.length<r.upload_max&&r.upload_pic.push(i[a]);r.$emit("uploadfile",{list:r.upload_pic,type:0}),r.$apply()}else _tip2.default.error("操作失败");case 7:case"end":return e.stop()}},e,this)})),function(e){return o.apply(this,arguments)}),previewImgTap:function(e){var t=e.currentTarget.dataset.index;wx.previewImage({current:this.upload_pic[t],urls:this.upload_pic})},delTap:function(e){var t=this,r=e.currentTarget.dataset.index,o=[];for(var n in t.upload_pic)n!=r&&o.push(t.upload_pic[n]);t.upload_pic=o,t.video="",console.log("====== del ",t.upload_pic),t.$emit("uploadfile",{list:t.upload_pic,type:0}),t.$apply()}},r.events={},_possibleConstructorReturn(r,t)}return _inherits(p,_wepy2.default.component),p}();exports.default=UpLoadFileImg;