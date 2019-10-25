"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_api=require("./../api/api.js"),_api2=_interopRequireDefault(_api),_sureorder=require("./../components/order/sureorder.js"),_sureorder2=_interopRequireDefault(_sureorder);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var i=e.apply(this,arguments);return new Promise(function(a,u){return function t(e,n){try{var r=i[e](n),o=r.value}catch(e){return void u(e)}if(!r.done)return Promise.resolve(o).then(function(e){t("next",e)},function(e){t("throw",e)});a(o)}("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var payCart=function(){function u(){var e,t,n;_classCallCheck(this,u);for(var r=arguments.length,o=Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=n=_possibleConstructorReturn(this,(e=u.__proto__||Object.getPrototypeOf(u)).call.apply(e,[this].concat(o)))).config={navigationBarTitleText:"确认订单"},n.$repeat={},n.$props={sureorder:{"xmlns:v-bind":"","v-bind:cartId.sync":"cartId","v-bind:couponId.sync":"couponId",buyType:"buycart","v-bind:studentInfo.sync":"student"}},n.$events={},n.components={sureorder:_sureorder2.default},n.data={cartId:"",couponId:0,student:null},n.methods={},n.events={},_possibleConstructorReturn(n,t)}var e;return _inherits(u,_wepy2.default.page),_createClass(u,[{key:"onLoad",value:function(e){console.log("=====options",e);var t=this;t.cartId=e.cartId||0,t.couponId=e.couponId||0,t.loadPayDetail()}},{key:"onShow",value:function(){this.student=this.$parent.globalData.student||null,this.$apply(),console.log("=================>>>>>>",this.student)}},{key:"onUnload",value:function(){console.log("=============== onupload"),this.$parent.globalData.student=null}},{key:"loadPayDetail",value:(e=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=(t=this).$parent.globalData.userInfo.id,e.next=4,_api2.default.payCartDetail({query:{cart_id:t.cartId,uid:n,coupons_id:t.couponId}});case 4:r=e.sent,console.log("----pay cart ",r),1==r.data.status&&(console.log("=====> 父组件发送更新消息"),t.$broadcast("updatePayInfo",r.data));case 7:case"end":return e.stop()}},e,this)})),function(){return e.apply(this,arguments)})},{key:"changeData",value:function(e){console.log("============== changeData"),this.couponId=e,this.loadPayDetail()}}]),u}();Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(payCart,"pages/pay-cart"));