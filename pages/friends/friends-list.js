"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_api=require("./../../api/api.js"),_api2=_interopRequireDefault(_api),_tip=require("./../../utils/tip.js"),_tip2=_interopRequireDefault(_tip),_friendsItem=require("./../../components/friends-item.js"),_friendsItem2=_interopRequireDefault(_friendsItem),_bottomLoadMore=require("./../../components/common/bottomLoadMore.js"),_bottomLoadMore2=_interopRequireDefault(_bottomLoadMore),_popup=require("./../../components/common/popup.js"),_popup2=_interopRequireDefault(_popup),_wepyPopDelete=require("./../../components/common/wepy-pop-delete.js"),_wepyPopDelete2=_interopRequireDefault(_wepyPopDelete);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var s=e.apply(this,arguments);return new Promise(function(a,i){return function t(e,n){try{var r=s[e](n),o=r.value}catch(e){return void i(e)}if(!r.done)return Promise.resolve(o).then(function(e){t("next",e)},function(e){t("throw",e)});a(o)}("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var FriendsList=function(){function s(){var e,t,n,r;_classCallCheck(this,s);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return(t=n=_possibleConstructorReturn(this,(e=s.__proto__||Object.getPrototypeOf(s)).call.apply(e,[this].concat(a)))).config={navigationBarTitleText:"点评圈"},n.$repeat={list:{com:"friendsItem",props:"datas.sync"}},n.$props={friendsItem:{"xmlns:v-bind":{value:"",for:"list",item:"item",index:"index",key:"index"},"v-bind:datas.sync":{value:"item",type:"item",for:"list",item:"item",index:"index",key:"index"},"v-bind:userInfo.sync":{value:"userInfo",for:"list",item:"item",index:"index",key:"index"}},bottomLoadMore:{"v-bind:show.sync":"showBottomLoading",message:"正在加载"},popup:{"v-bind:showModal.sync":"showTextArea"},wepyPopDelete:{"v-bind:showModal.sync":"showDel",title:"删除我的评论"}},n.$events={},n.components={friendsItem:_friendsItem2.default,bottomLoadMore:_bottomLoadMore2.default,popup:_popup2.default,wepyPopDelete:_wepyPopDelete2.default},n.data={page:1,list:[],userInfo:{},haveMore:!0,showBottomLoading:!1,showTextArea:!1,showDel:!1,comment:"",curItem:null,commentItem:null,level:0},n.methods={fabuTap:function(){_wepy2.default.navigateTo({url:"/pages/friends/friends-add"})},click:function(){this.showTextArea=!this.showTextArea,this.$apply()},submitTap:(r=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("============> 提交评论CC",this.comment,this.curItem),""==this.comment)return e.abrupt("return");e.next=3;break;case 3:return e.next=5,this.addPinglun(this.curItem.trend_id,this.comment);case 5:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)}),bindinput:function(e){this.comment=e.detail.value}},n.events={showCaozuo:function(e){for(var t=this,n=0;n<t.list.length;n++)e.trend_id==t.list[n].trend_id?t.list[n].showModal=!t.list[n].showModal:t.list[n].showModal=!1;t.$apply()},hideAll:function(){for(var e=0;e<this.list.length;e++)this.list[e].showModal=!1;this.$apply()},tapDianzan:function(e){this.dianzan(e.trend_id),this.$apply()},delDianzan:function(e){this.cancelDianzan(e.trend_id),this.$apply()},tapPinglun:function(e){this.curItem=e,console.log("--------\x3e>> 评论弹窗BB"),this.showTextArea=!this.showTextArea,this.$apply()},delComment:function(e){this.commentItem=e,this.showDel=!this.showDel,this.$apply()},delTrend:function(e){this.delTrendTap(e.trend_id),this.$apply()},delWepPopDelectOk:function(){this.delPinglun(this.commentItem),this.$apply()},flodTap:function(e){for(var t=this,n=0;n<t.list.length;n++)e.trend_id==t.list[n].trend_id&&(t.list[n].fold=!t.list[n].fold);t.$apply()}},_possibleConstructorReturn(n,t)}var t,n,r,o,a,i,u,e,l,d;return _inherits(s,_wepy2.default.page),_createClass(s,[{key:"onLoad",value:(d=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e,this)})),function(){return d.apply(this,arguments)})},{key:"onShow",value:(l=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return _tip2.default.loading(),e.next=3,this.loadUserInfo();case 3:this.loadFriendsList();case 4:case"end":return e.stop()}},e,this)})),function(){return l.apply(this,arguments)})},{key:"loadUserInfo",value:(e=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,e.next=3,_api2.default.getUserInfo({query:{uid:t.$parent.globalData.userInfo.id}});case 3:n=e.sent,console.log("------ userinfo",n),1==n.data.status?(t.userInfo=n.data.userinfo,t.level=t.userInfo.level):_tip2.default.error(n.data.msg);case 6:case"end":return e.stop()}},e,this)})),function(){return e.apply(this,arguments)})},{key:"loadFriendsList",value:(u=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,o,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this,e.next=3,_api2.default.loadFriendsList({query:{page:n.page}});case 3:if(r=e.sent,console.log("-------- load friends list2:",r),1==r.data.status){for(o=r.data.data,a=0;a<o.length;a++)o[a].showModal=!1,o[a].fold=45<o[a].text.length,o[a].showfold=45<o[a].text.length;i=n.list,i=1==n.page?o:i.concat(o),n.list=i,n.haveMore=!(o.length<=0)}else _tip2.default.error(r.data.msg);_tip2.default.loaded(),n.$apply();case 8:case"end":return e.stop()}},e,this)})),function(e){return u.apply(this,arguments)})},{key:"loadFriendsOne",value:(i=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,o,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this,e.next=3,_api2.default.loadFriendsOne({query:{trend_id:t||0}});case 3:if(r=e.sent,console.log("---------\x3eupdate item",r),1==r.data.status)for(o=r.data.data,a=0;a<n.list.length;a++)i=n.list[a],o.trend_id==i.trend_id&&(i.comment_list=o.comment_list,i.like_list=o.like_list);else _tip2.default.error(r.data.msg);n.$apply();case 7:case"end":return e.stop()}},e,this)})),function(e){return i.apply(this,arguments)})},{key:"dianzan",value:(a=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this,e.next=3,_api2.default.friendsAddLike({query:{user_id:n.userInfo.id,trend_id:t||0}});case 3:r=e.sent,console.log("-------- dianzan ",r),1==r.data.status?n.loadFriendsOne(t):_tip2.default.error(r.data.msg);case 6:case"end":return e.stop()}},e,this)})),function(e){return a.apply(this,arguments)})},{key:"cancelDianzan",value:(o=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this,e.next=3,_api2.default.friendsCancelLike({query:{user_id:n.userInfo.id,trend_id:t||0}});case 3:r=e.sent,console.log("-------- dianzan ",r),1==r.data.status?n.loadFriendsOne(t):_tip2.default.error(r.data.msg);case 6:case"end":return e.stop()}},e,this)})),function(e){return o.apply(this,arguments)})},{key:"addPinglun",value:(r=_asyncToGenerator(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this,e.next=3,_api2.default.friendsAddComment({query:{user_id:r.userInfo.id,trend_id:t||0,content:n||""}});case 3:o=e.sent,console.log("-------- add pinglun ",o,t),1==o.data.status?(r.comment="",r.curItem=null,r.showTextArea=!this.showTextArea,r.loadFriendsOne(t)):_tip2.default.error(o.data.msg),r.$apply();case 7:case"end":return e.stop()}},e,this)})),function(e,t){return r.apply(this,arguments)})},{key:"delPinglun",value:(n=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this,r=t?t.comment.comment_id:0,o=t?t.trend.trend_id:0,e.next=5,_api2.default.friendsDelComment({query:{user_id:n.userInfo.id,comment_id:r||0}});case 5:a=e.sent,console.log("-------- del pinglun ",a,r),1==a.data.status?(n.commentItem=null,n.loadFriendsOne(o)):_tip2.default.error(a.data.msg),n.$apply();case 9:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})},{key:"delTrendTap",value:(t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this,e.next=3,_api2.default.friendsDelTrend({query:{user_id:n.userInfo.id,trend_id:t||0}});case 3:if(r=e.sent,console.log("-------- del trend ",r,t),1==r.data.status)return e.next=8,_tip2.default.success("删除成功");e.next=13;break;case 8:for(o=[],a=0;a<n.list.length;a++)n.list[a].trend_id!=t&&o.push(n.list[a]);n.list=o,e.next=14;break;case 13:_tip2.default.error(r.data.msg);case 14:n.$apply();case 15:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"onReachBottom",value:function(){var e=this;e.haveMore&&(e.showBottomLoading=!0,e.page++,setTimeout(function(){e.loadFriendsList(e.page),e.showBottomLoading=!1},500))}}]),s}();Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(FriendsList,"pages/friends/friends-list"));