"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass=function(){function r(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),e}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_util=require("./../../utils/util.js"),_util2=_interopRequireDefault(_util);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var LayoutOne=function(){function i(){var e,t,o;_classCallCheck(this,i);for(var r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=o=_possibleConstructorReturn(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(n)))).props={datas:{type:Object,default:{}},vip:{type:Number,default:0}},o.components={},o.data={type:"layout-one"},o.methods={_goodTitleTap:function(){this.$emit("onSwitchTap",this.datas.goods_type)},_goodTap:function(e){console.log("======>> 点击商品");var t=e.currentTarget.dataset.id;_wepy2.default.navigateTo({url:"/pages/goods_detail?productId="+t})}},o.events={onUpdateTimer:function(){console.log("----------\x3e ",this.type,this.datas),this.datas}},_possibleConstructorReturn(o,t)}return _inherits(i,_wepy2.default.component),_createClass(i,[{key:"onLoad",value:function(){}}]),i}();exports.default=LayoutOne;