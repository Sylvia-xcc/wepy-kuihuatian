"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _wxRequest=require("./../utils/wxRequest.js"),_util=require("./../utils/util.js"),_util2=_interopRequireDefault(_util);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var apiMall="https://www.fengzhankeji.com/kuihuat/index.php",wxJsCode2Session=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/login/getsessionkey")},authlogin=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Login/authlogin")},getUserInfo=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/user/userinfo")},loadHomeInfo=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Index/index")},rootCtegoryList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/index/category")},childGoodsCatetoryList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/product/getGoodsList")},goodsDetail=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/product/detail")},goodsAttrDetail=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/product/guige_price")},loadBuyPinTuanList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/product/groupBuyInfo")},loadGoodsList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/product/getGoodsList")},addCart=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/product/add_cart")},payNowDetail=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/payment/buyNow")},payCartDetail=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/payment/buy_cart")},loadSearchGoodLists=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/product/getGoodsList")},collectAdd=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/GoodsCollect/add")},collectCancel=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/GoodsCollect/cancel")},loadCollectList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/GoodsCollect/lists")},payPinTuanDetail=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Pintuan/buy_info")},toPay=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/payment/payment")},toPayPintuan=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Pintuan/pay_now")},toPayProve=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/payment/setPayProve")},toPayBalance=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/payment/balancePay")},wxPay=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Wxpay/wxpay")},cashPay=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Wxpay/wxpay")},cartList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/order/cart")},cartUpdateNum=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/product/up_cart")},cartDel=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/product/del_cart")},purseXiaofeiList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/user/mingxi_list")},chongzhi=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Wxpay/wxpay_money")},loadChongzhiList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/recharge/getList")},loadPinTuanList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/user/pintuan")},loadAllCoupons=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/coupon/coupon_list")},loadCanUseCoupons=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/payment/coupon_canuse")},lingQuCoupon=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/coupon/coupon_receive")},editStudentInfo=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/userStudent/studentHandle")},studentList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/userStudent/lists")},studentDel=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/userStudent/del")},studentGetInfo=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/userStudent/getOne")},loadOrderList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Order/lists")},editOrderInfo=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Order/orders_edit")},delOrder=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Order/orderDel")},loadOrderDetailInfo=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Order/order_details")},loadAdminOrderList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Order/lists")},sureOrder=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/order/confirmPay")},sureAdminOrder=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/admin/confirmPay")},getConfigVal=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/config/getconfig")},loadCourseList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Course/lists")},loadCourseDateList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Course/info")},loadCourseInfo=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Course/getOne")},loadCourseTeacherList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Course/getLecturerList")},loadCourseAdd=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Course/handle")},loadCourseGoodsList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Course/getGoodsList")},loadCourseSignIn=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/Course/signIn")},loadFriendsList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/CourseCircleTrend/lists")},friendsAddLike=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/CourseCircleLike/add")},friendsCancelLike=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/CourseCircleLike/cancel")},friendsAddComment=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/CourseCircleComment/add")},friendsDelComment=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/CourseCircleComment/del")},friendsAddTrend=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/CourseCircleTrend/add")},friendsDelTrend=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/CourseCircleTrend/del")},loadFriendsOne=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/CourseCircleTrend/getOne")},loadActivityList=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/activity/lists")},loadActivityDetial=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/activity/getOne")},loadCode=function(e){return(0,_wxRequest.wxRequest)(e,apiMall+"/wxapp/user/salelog")};exports.default={apiMall:apiMall,wxJsCode2Session:wxJsCode2Session,authlogin:authlogin,loadHomeInfo:loadHomeInfo,rootCtegoryList:rootCtegoryList,childGoodsCatetoryList:childGoodsCatetoryList,cartList:cartList,cartUpdateNum:cartUpdateNum,cartDel:cartDel,goodsDetail:goodsDetail,goodsAttrDetail:goodsAttrDetail,addCart:addCart,payNowDetail:payNowDetail,payCartDetail:payCartDetail,toPay:toPay,wxPay:wxPay,cashPay:cashPay,getConfigVal:getConfigVal,purseXiaofeiList:purseXiaofeiList,chongzhi:chongzhi,loadChongzhiList:loadChongzhiList,loadAllCoupons:loadAllCoupons,lingQuCoupon:lingQuCoupon,loadCanUseCoupons:loadCanUseCoupons,loadSearchGoodLists:loadSearchGoodLists,editStudentInfo:editStudentInfo,studentList:studentList,studentDel:studentDel,studentGetInfo:studentGetInfo,payPinTuanDetail:payPinTuanDetail,toPayPintuan:toPayPintuan,toPayProve:toPayProve,toPayBalance:toPayBalance,loadOrderList:loadOrderList,editOrderInfo:editOrderInfo,delOrder:delOrder,loadOrderDetailInfo:loadOrderDetailInfo,loadCourseList:loadCourseList,loadCourseDateList:loadCourseDateList,loadCourseInfo:loadCourseInfo,loadCourseTeacherList:loadCourseTeacherList,loadCourseAdd:loadCourseAdd,loadCourseGoodsList:loadCourseGoodsList,loadCourseSignIn:loadCourseSignIn,loadFriendsList:loadFriendsList,friendsAddLike:friendsAddLike,getUserInfo:getUserInfo,friendsAddComment:friendsAddComment,friendsDelComment:friendsDelComment,friendsAddTrend:friendsAddTrend,friendsCancelLike:friendsCancelLike,friendsDelTrend:friendsDelTrend,loadFriendsOne:loadFriendsOne,collectAdd:collectAdd,collectCancel:collectCancel,loadCollectList:loadCollectList,loadAdminOrderList:loadAdminOrderList,sureOrder:sureOrder,loadPinTuanList:loadPinTuanList,loadBuyPinTuanList:loadBuyPinTuanList,loadGoodsList:loadGoodsList,sureAdminOrder:sureAdminOrder,loadActivityList:loadActivityList,loadActivityDetial:loadActivityDetial,loadCode:loadCode};