//采用H5 sessionStorage，保存登录信息的公共js，不采用jquery
// var _EXPIRE_TIME = 2*60*1000;//两分钟没有操作，则注销
var _EXPIRE_TIME = 30*1000;
var _interval_handler=-1;
(function () {
    if (isLogin()) {//已登录
       //刷新最后使用时间
       sessionStorage.setItem("nxgx_lastVisitTime", new Date().getTime());
       _interval_handler=setInterval(checkExpired, 10*1000);//10秒钟检查一次，是否超时
      }
})();
 
function checkExpired() {
   console.log("10秒检查一次是否过期"+window.location.href+"::"+new Date());
   var storeLastTime=sessionStorage.getItem("nxgx_lastVisitTime")?sessionStorage.getItem("nxgx_lastVisitTime"):-1;
   if (storeLastTime==-1) clearInterval(_interval_handler);
   else {
        if ((new Date()).getTime()-storeLastTime>_EXPIRE_TIME) {  //过期了
          
          alert("由于您长时间未进行操作，系统已为您自动退出登录");
          exit('pc');
          //删除sessionStorage信息
          //sessionStorage.clear();
          //把页头中的已登录部分，改为需要登录的样子
          document.location.reload();//刷新当前页面
          //退出循环
          clearInterval(_interval_handler);
     }
  }
}