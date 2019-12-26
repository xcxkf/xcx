// 个人中心

var app = getApp();

Page({
  data:{
    userinfo: {
      nickName:"张三",
      avatarUrl:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1209057492,117049258&fm=26&gp=0.jpg"

    }
  },
  onLoad:function(options){
    var _this = this;
    wx.setNavigationBarTitle({
      title: '个人中心'
    })
    // 页面初始化 options为页面跳转所带来的参数
    app.getUserInfo(function(userinfo) {
        _this.setData({
            userinfo: userinfo
        })
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    console.log(this.data.userinfo);
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})