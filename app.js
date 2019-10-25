'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _api = require('./api/api.js');

var _api2 = _interopRequireDefault(_api);

var _tip = require('./utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/home', 'pages/classify', 'pages/shop_cart', 'pages/info', 'pages/authorize', 'pages/goods_detail', 'pages/pay_now', 'pages/pay-cart', 'pages/pay-pintuan', 'pages/pay/pay-success', 'pages/pay/pay-fail', 'pages/my-purse', 'pages/chongzhi', 'pages/my-coupon', 'pages/my-pintuan', 'pages/use-coupon', 'pages/search', 'pages/student/student-list', 'pages/student/student-edit', 'pages/student/student-add', 'pages/student/student-select', 'pages/order-list', 'pages/order-detail', 'pages/order-admin', 'pages/my-collect', 'pages/course/course-list', 'pages/course/course-detail', 'pages/course/course-add', 'pages/friends/friends-list', 'pages/friends/friends-add', 'pages/home-list', 'pages/activity-list', 'pages/activity-detail'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#FCFBFB',
        navigationBarTitleText: '葵花田艺术',
        navigationBarTextStyle: 'black'
      },
      "tabBar": {
        "color": "#CCCCCC",
        "selectedColor": "#D11C16",
        "backgroundColor": "#ffffff",
        "borderStyle": "black",
        "list": [{
          "pagePath": "pages/home",
          "text": "首页",
          "iconPath": "images/icon_home.png",
          "selectedIconPath": "images/icon_home_active.png"
        }, {
          "pagePath": "pages/classify",
          "text": "分类",
          "iconPath": "images/icon_classify.png",
          "selectedIconPath": "images/icon_classify_active.png"
        }, {
          "pagePath": "pages/shop_cart",
          "text": "购物车",
          "iconPath": "images/icon_cart.png",
          "selectedIconPath": "images/icon_cart_active.png"
        }, {
          "pagePath": "pages/info",
          "text": "我",
          "iconPath": "images/icon_info.png",
          "selectedIconPath": "images/icon_info_active.png"
        }]
      }
    };
    _this.globalData = {
      userInfo: null,
      checkLogin: false,
      student: null, //选择的学生信息
      vip: 0,
      code: ''
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
      this.init();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'init',
    value: function init() {
      console.log('==================onLaunch');
      this.checkSettingStatus();
    }
    //判断用户登陆状态/是否授权

  }, {
    key: 'checkSettingStatus',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var auth, authSetting, userInfo;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _wepy2.default.getSetting();

              case 3:
                auth = _context2.sent;
                authSetting = auth.authSetting;

                if (!authSetting['scope.userInfo']) {
                  _context2.next = 15;
                  break;
                }

                console.log('---已经授权---');
                //已经授权情况下直接获取userInfor
                this.globalData.checkLogin = true;
                _context2.next = 10;
                return _wepy2.default.getUserInfo();

              case 10:
                userInfo = _context2.sent;

                this.globalData.userInfo = userInfo.userInfo;
                //调用登录
                this.login();
                _context2.next = 18;
                break;

              case 15:
                //未授权
                console.log('---未授权---');
                this.globalData.checkLogin = true;
                if (this.checkLoginReadyCallback) {
                  this.checkLoginReadyCallback();
                }

              case 18:
                _context2.next = 23;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t0 = _context2['catch'](0);

                console.log('check error', _context2.t0);

              case 23:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 20]]);
      }));

      function checkSettingStatus() {
        return _ref2.apply(this, arguments);
      }

      return checkSettingStatus;
    }()
  }, {
    key: 'login',

    //登陆方法
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var res, rlt, data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                console.log('-----调用login方法-----');
                _wepy2.default.getStorageSync('token') || '';
                //通过调用login获取code 判断是否开始登录
                _context3.next = 5;
                return _wepy2.default.login();

              case 5:
                res = _context3.sent;

                if (!res.code) {
                  _context3.next = 17;
                  break;
                }

                _context3.next = 9;
                return _api2.default.wxJsCode2Session({
                  query: {
                    code: res.code
                  }
                });

              case 9:
                rlt = _context3.sent;

                // console.log('----session ', rlt)
                data = rlt.data;

                if (!(rlt.statusCode == 0)) {
                  _context3.next = 14;
                  break;
                }

                wx.showToast({
                  title: data.err,
                  duration: 2000
                });
                return _context3.abrupt('return', false);

              case 14:
                this.globalData.userInfo['openid'] = data.openid;
                this.globalData.userInfo['sessionId'] = data.session_key;
                this.onLoginUser();

              case 17:
                _context3.next = 21;
                break;

              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3['catch'](0);

              case 21:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 19]]);
      }));

      function login() {
        return _ref3.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: 'onLoginUser',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var that, user, rlt, data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                that = this;
                user = that.globalData.userInfo;
                _context4.next = 4;
                return _api2.default.authlogin({
                  query: {
                    gender: user.gender,
                    NickName: user.nickName,
                    avatarUrl: user.avatarUrl,
                    openid: user.openid,
                    pid: 0
                  }
                });

              case 4:
                rlt = _context4.sent;

                console.log('=====> authlogin ', rlt);

                if (!(rlt.data.status == 1)) {
                  _context4.next = 18;
                  break;
                }

                data = rlt.data;

                if (data.uid) {
                  _context4.next = 11;
                  break;
                }

                _tip2.default.error('登录失败', 2000);
                return _context4.abrupt('return');

              case 11:
                that.globalData.checkLogin = true;
                that.globalData.userInfo['is_admin'] = data.is_admin;
                that.globalData.userInfo['id'] = data.uid;
                that.globalData.userInfo['vip'] = data.vip;
                if (that.checkLoginReadyCallback) {
                  that.checkLoginReadyCallback();
                }
                _context4.next = 19;
                break;

              case 18:
                _tip2.default.error('网络异常！', 2000);

              case 19:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onLoginUser() {
        return _ref4.apply(this, arguments);
      }

      return onLoginUser;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJjaGVja0xvZ2luIiwic3R1ZGVudCIsInZpcCIsImNvZGUiLCJ1c2UiLCJ0ZXN0QXN5bmMiLCJpbml0IiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjaGVja1NldHRpbmdTdGF0dXMiLCJ3ZXB5IiwiZ2V0U2V0dGluZyIsImF1dGgiLCJhdXRoU2V0dGluZyIsImdldFVzZXJJbmZvIiwibG9naW4iLCJjaGVja0xvZ2luUmVhZHlDYWxsYmFjayIsImdldFN0b3JhZ2VTeW5jIiwicmVzIiwiYXBpIiwid3hKc0NvZGUyU2Vzc2lvbiIsInF1ZXJ5Iiwicmx0Iiwic3RhdHVzQ29kZSIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJlcnIiLCJkdXJhdGlvbiIsIm9wZW5pZCIsInNlc3Npb25fa2V5Iiwib25Mb2dpblVzZXIiLCJ0aGF0IiwidXNlciIsImF1dGhsb2dpbiIsImdlbmRlciIsIk5pY2tOYW1lIiwibmlja05hbWUiLCJhdmF0YXJVcmwiLCJwaWQiLCJzdGF0dXMiLCJ1aWQiLCJ0aXAiLCJlcnJvciIsImlzX2FkbWluIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0VFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUE3RWRBLE1BNkVjLEdBN0VMO0FBQ1BDLGFBQU8sQ0FDTCxZQURLLEVBRUwsZ0JBRkssRUFHTCxpQkFISyxFQUlMLFlBSkssRUFLTCxpQkFMSyxFQU1M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akJsQyxvQixHQUFPZ0IsSUFBSWhCLEk7O29CQUNWQSxLQUFLbUMsRzs7Ozs7QUFDUkMsOEJBQUlDLEtBQUosQ0FBVSxNQUFWLEVBQWtCLElBQWxCOzs7O0FBR0ZYLHFCQUFLekMsVUFBTCxDQUFnQkUsVUFBaEIsR0FBNkIsSUFBN0I7QUFDQXVDLHFCQUFLekMsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUIsVUFBekIsSUFBdUNjLEtBQUtzQyxRQUE1QztBQUNBWixxQkFBS3pDLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCLElBQXpCLElBQWlDYyxLQUFLbUMsR0FBdEM7QUFDQVQscUJBQUt6QyxVQUFMLENBQWdCQyxRQUFoQixDQUF5QixLQUF6QixJQUFrQ2MsS0FBS1gsR0FBdkM7QUFDQSxvQkFBSXFDLEtBQUtoQix1QkFBVCxFQUFrQztBQUNoQ2dCLHVCQUFLaEIsdUJBQUw7QUFDRDs7Ozs7QUFFRDBCLDhCQUFJQyxLQUFKLENBQVUsT0FBVixFQUFtQixJQUFuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXRMdUJqQyxlQUFLbUMsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuICBpbXBvcnQgYXBpIGZyb20gJ0AvYXBpL2FwaSc7XG4gIGltcG9ydCB0aXAgZnJvbSAnQC91dGlscy90aXAnO1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBwYWdlczogW1xuICAgICAgICAncGFnZXMvaG9tZScsXG4gICAgICAgICdwYWdlcy9jbGFzc2lmeScsXG4gICAgICAgICdwYWdlcy9zaG9wX2NhcnQnLFxuICAgICAgICAncGFnZXMvaW5mbycsXG4gICAgICAgICdwYWdlcy9hdXRob3JpemUnLFxuICAgICAgICAncGFnZXMvZ29vZHNfZGV0YWlsJyxcbiAgICAgICAgJ3BhZ2VzL3BheV9ub3cnLFxuICAgICAgICAncGFnZXMvcGF5LWNhcnQnLFxuICAgICAgICAncGFnZXMvcGF5LXBpbnR1YW4nLFxuICAgICAgICAncGFnZXMvcGF5L3BheS1zdWNjZXNzJyxcbiAgICAgICAgJ3BhZ2VzL3BheS9wYXktZmFpbCcsXG4gICAgICAgICdwYWdlcy9teS1wdXJzZScsXG4gICAgICAgICdwYWdlcy9jaG9uZ3poaScsXG4gICAgICAgICdwYWdlcy9teS1jb3Vwb24nLFxuICAgICAgICAncGFnZXMvbXktcGludHVhbicsXG4gICAgICAgICdwYWdlcy91c2UtY291cG9uJyxcbiAgICAgICAgJ3BhZ2VzL3NlYXJjaCcsXG4gICAgICAgICdwYWdlcy9zdHVkZW50L3N0dWRlbnQtbGlzdCcsXG4gICAgICAgICdwYWdlcy9zdHVkZW50L3N0dWRlbnQtZWRpdCcsXG4gICAgICAgICdwYWdlcy9zdHVkZW50L3N0dWRlbnQtYWRkJyxcbiAgICAgICAgJ3BhZ2VzL3N0dWRlbnQvc3R1ZGVudC1zZWxlY3QnLFxuICAgICAgICAncGFnZXMvb3JkZXItbGlzdCcsXG4gICAgICAgICdwYWdlcy9vcmRlci1kZXRhaWwnLFxuICAgICAgICAncGFnZXMvb3JkZXItYWRtaW4nLFxuICAgICAgICAncGFnZXMvbXktY29sbGVjdCcsXG4gICAgICAgICdwYWdlcy9jb3Vyc2UvY291cnNlLWxpc3QnLFxuICAgICAgICAncGFnZXMvY291cnNlL2NvdXJzZS1kZXRhaWwnLFxuICAgICAgICAncGFnZXMvY291cnNlL2NvdXJzZS1hZGQnLFxuICAgICAgICAncGFnZXMvZnJpZW5kcy9mcmllbmRzLWxpc3QnLFxuICAgICAgICAncGFnZXMvZnJpZW5kcy9mcmllbmRzLWFkZCcsXG4gICAgICAgICdwYWdlcy9ob21lLWxpc3QnLFxuICAgICAgICAncGFnZXMvYWN0aXZpdHktbGlzdCcsXG4gICAgICAgICdwYWdlcy9hY3Rpdml0eS1kZXRhaWwnLFxuICAgICAgXSxcbiAgICAgIHdpbmRvdzoge1xuICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0ZDRkJGQicsXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfokbXoirHnlLDoibrmnK8nLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgICB9LFxuICAgICAgXCJ0YWJCYXJcIjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiI0NDQ0NDQ1wiLFxuICAgICAgICBcInNlbGVjdGVkQ29sb3JcIjogXCIjRDExQzE2XCIsXG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgICAgICBcImJvcmRlclN0eWxlXCI6IFwiYmxhY2tcIixcbiAgICAgICAgXCJsaXN0XCI6IFt7XG4gICAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2hvbWVcIixcbiAgICAgICAgICBcInRleHRcIjogXCLpppbpobVcIixcbiAgICAgICAgICBcImljb25QYXRoXCI6IFwiaW1hZ2VzL2ljb25faG9tZS5wbmdcIixcbiAgICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogXCJpbWFnZXMvaWNvbl9ob21lX2FjdGl2ZS5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL2NsYXNzaWZ5XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwi5YiG57G7XCIsXG4gICAgICAgICAgXCJpY29uUGF0aFwiOiBcImltYWdlcy9pY29uX2NsYXNzaWZ5LnBuZ1wiLFxuICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9pY29uX2NsYXNzaWZ5X2FjdGl2ZS5wbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL3Nob3BfY2FydFwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIui0reeJqei9plwiLFxuICAgICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvaWNvbl9jYXJ0LnBuZ1wiLFxuICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9pY29uX2NhcnRfYWN0aXZlLnBuZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvaW5mb1wiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIuaIkVwiLFxuICAgICAgICAgIFwiaWNvblBhdGhcIjogXCJpbWFnZXMvaWNvbl9pbmZvLnBuZ1wiLFxuICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiBcImltYWdlcy9pY29uX2luZm9fYWN0aXZlLnBuZ1wiXG4gICAgICAgIH1dXG4gICAgICB9XG4gICAgfVxuICAgIGdsb2JhbERhdGEgPSB7XG4gICAgICB1c2VySW5mbzogbnVsbCxcbiAgICAgIGNoZWNrTG9naW46IGZhbHNlLFxuICAgICAgc3R1ZGVudDogbnVsbCwgLy/pgInmi6nnmoTlrabnlJ/kv6Hmga9cbiAgICAgIHZpcDogMCxcbiAgICAgIGNvZGU6ICcnLFxuICAgIH1cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKClcbiAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4Jyk7XG4gICAgICB0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XG4gICAgfVxuICAgIG9uTGF1bmNoKCkge1xuICAgICAgdGhpcy50ZXN0QXN5bmMoKTtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBzbGVlcChzKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcbiAgICAgICAgfSwgcyAqIDEwMDApXG4gICAgICB9KVxuICAgIH1cbiAgICBhc3luYyB0ZXN0QXN5bmMoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxuICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT1vbkxhdW5jaCcpXG4gICAgICB0aGlzLmNoZWNrU2V0dGluZ1N0YXR1cygpO1xuICAgIH1cbiAgICAvL+WIpOaWreeUqOaIt+eZu+mZhueKtuaAgS/mmK/lkKbmjojmnYNcbiAgICBhc3luYyBjaGVja1NldHRpbmdTdGF0dXMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgYXV0aCA9IGF3YWl0IHdlcHkuZ2V0U2V0dGluZygpO1xuICAgICAgICBsZXQgYXV0aFNldHRpbmcgPSBhdXRoLmF1dGhTZXR0aW5nO1xuICAgICAgICBpZiAoYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnLS0t5bey57uP5o6I5p2DLS0tJyk7XG4gICAgICAgICAgLy/lt7Lnu4/mjojmnYPmg4XlhrXkuIvnm7TmjqXojrflj5Z1c2VySW5mb3JcbiAgICAgICAgICB0aGlzLmdsb2JhbERhdGEuY2hlY2tMb2dpbiA9IHRydWU7XG4gICAgICAgICAgbGV0IHVzZXJJbmZvID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpO1xuICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHVzZXJJbmZvLnVzZXJJbmZvO1xuICAgICAgICAgIC8v6LCD55So55m75b2VXG4gICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8v5pyq5o6I5p2DXG4gICAgICAgICAgY29uc29sZS5sb2coJy0tLeacquaOiOadgy0tLScpXG4gICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLmNoZWNrTG9naW4gPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGlzLmNoZWNrTG9naW5SZWFkeUNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrTG9naW5SZWFkeUNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZygnY2hlY2sgZXJyb3InLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcbiAgICAvL+eZu+mZhuaWueazlVxuICAgIGFzeW5jIGxvZ2luKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0t6LCD55SobG9naW7mlrnms5UtLS0tLScpO1xuICAgICAgICB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpIHx8ICcnO1xuICAgICAgICAvL+mAmui/h+iwg+eUqGxvZ2lu6I635Y+WY29kZSDliKTmlq3mmK/lkKblvIDlp4vnmbvlvZVcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkubG9naW4oKTtcbiAgICAgICAgaWYgKHJlcy5jb2RlKSB7XG4gICAgICAgICAgbGV0IHJsdCA9IGF3YWl0IGFwaS53eEpzQ29kZTJTZXNzaW9uKHtcbiAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJy0tLS1zZXNzaW9uICcsIHJsdClcbiAgICAgICAgICBsZXQgZGF0YSA9IHJsdC5kYXRhO1xuICAgICAgICAgIGlmIChybHQuc3RhdHVzQ29kZSA9PSAwKSB7XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICB0aXRsZTogZGF0YS5lcnIsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvWydvcGVuaWQnXSA9IGRhdGEub3BlbmlkO1xuICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1snc2Vzc2lvbklkJ10gPSBkYXRhLnNlc3Npb25fa2V5O1xuICAgICAgICAgIHRoaXMub25Mb2dpblVzZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgfTtcbiAgICBhc3luYyBvbkxvZ2luVXNlcigpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIGxldCB1c2VyID0gdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvO1xuICAgICAgbGV0IHJsdCA9IGF3YWl0IGFwaS5hdXRobG9naW4oe1xuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIGdlbmRlcjogdXNlci5nZW5kZXIsXG4gICAgICAgICAgTmlja05hbWU6IHVzZXIubmlja05hbWUsXG4gICAgICAgICAgYXZhdGFyVXJsOiB1c2VyLmF2YXRhclVybCxcbiAgICAgICAgICBvcGVuaWQ6IHVzZXIub3BlbmlkLFxuICAgICAgICAgIHBpZDogMCxcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnPT09PT0+IGF1dGhsb2dpbiAnLCBybHQpO1xuICAgICAgaWYgKHJsdC5kYXRhLnN0YXR1cyA9PSAxKSB7XG4gICAgICAgIGxldCBkYXRhID0gcmx0LmRhdGE7XG4gICAgICAgIGlmICghZGF0YS51aWQpIHtcbiAgICAgICAgICB0aXAuZXJyb3IoJ+eZu+W9leWksei0pScsIDIwMDApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Lmdsb2JhbERhdGEuY2hlY2tMb2dpbiA9IHRydWU7XG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mb1snaXNfYWRtaW4nXSA9IGRhdGEuaXNfYWRtaW47XG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mb1snaWQnXSA9IGRhdGEudWlkO1xuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm9bJ3ZpcCddID0gZGF0YS52aXA7XG4gICAgICAgIGlmICh0aGF0LmNoZWNrTG9naW5SZWFkeUNhbGxiYWNrKSB7XG4gICAgICAgICAgdGhhdC5jaGVja0xvZ2luUmVhZHlDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgeyAgICAgICAgXG4gICAgICAgIHRpcC5lcnJvcign572R57uc5byC5bi477yBJywgMjAwMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=