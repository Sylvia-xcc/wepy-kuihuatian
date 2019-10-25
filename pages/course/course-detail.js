"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_api=require("./../../api/api.js"),_api2=_interopRequireDefault(_api),_tip=require("./../../utils/tip.js"),_tip2=_interopRequireDefault(_tip),_config=require("./../../api/config.js"),_config2=_interopRequireDefault(_config);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var s=e.apply(this,arguments);return new Promise(function(a,i){return function t(e,r){try{var n=s[e](r),o=n.value}catch(e){return void i(e)}if(!n.done)return Promise.resolve(o).then(function(e){t("next",e)},function(e){t("throw",e)});a(o)}("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var CourseDetail=function(){function i(){var e,t,r;_classCallCheck(this,i);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=r=_possibleConstructorReturn(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(o)))).config={navigationBarTitleText:"课程详情"},r.components={},r.data={course_id:0,datas:{},list:[],level:0,isToday:!1},r.methods={signTap:function(e){console.log("----------------- >evt",e);var t=e.currentTarget.dataset.sid;this.loadCourseSignIn(t)},editTap:function(){_wepy2.default.navigateTo({url:"/pages/course/course-add?courseId="+this.course_id})}},r.events={},_possibleConstructorReturn(r,t)}var t,e,r,n;return _inherits(i,_wepy2.default.page),_createClass(i,[{key:"onLoad",value:(n=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("---- onLoad---",t),this.course_id=t.course_id||0,this.loadCourseInfo(),e.next=5,_config2.default.getUserLevel();case 5:this.level=e.sent,this.$apply();case 7:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})},{key:"onShow",value:(r=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:0<this.course_id&&(this.loadCourseInfo(),this.$apply());case 1:case"end":return e.stop()}},e,this)})),function(){return r.apply(this,arguments)})},{key:"loadCourseInfo",value:(e=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,_tip2.default.loading(),e.next=4,_api2.default.loadCourseInfo({query:{course_id:t.course_id}});case 4:r=e.sent,console.log("----- course info",r),1==r.data.status?t.datas=r.data.data:_tip2.default.error(r.data.msg),_tip2.default.loaded(),t.$apply();case 9:case"end":return e.stop()}},e,this)})),function(){return e.apply(this,arguments)})},{key:"loadCourseSignIn",value:(t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this,e.next=3,_api2.default.loadCourseSignIn({query:{user_id:r.$parent.globalData.userInfo.id,student_id:t||0,course_id:r.course_id}});case 3:if(n=e.sent,console.log("----- course sign",n),1==n.data.status)return e.next=8,_tip2.default.success("签到成功",800);e.next=11;break;case 8:r.loadCourseInfo(),e.next=12;break;case 11:_tip2.default.error(n.data.msg);case 12:r.$apply();case 13:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})}]),i}();Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(CourseDetail,"pages/course/course-detail"));