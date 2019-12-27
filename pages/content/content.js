
Page({
  data:{
    list: [
      {
        img: "https://ossimg.xinli001.com/20191225/629785f97b22d7f61186eecff545827c.jpeg?x-oss-process=image/quality,Q_80",
        name: "小明",
        content: "优秀,听后豁然开朗",
        time: "16个月",
      }


    ],
    input:""
    },
 
  onLoad:function(options){
  
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  // 点击事件
  search: function (e) {
    // wx.navigateTo({
    //   url: '/pages/2048/2048'
    // });
  },
  ond: function (event) {
   
    this.data.list.push(
      {
        img: "https://ossimg.xinli001.com/20191225/629785f97b22d7f61186eecff545827c.jpeg?x-oss-process=image/quality,Q_80",
        name: "小明",
        content: this.data.input,
        time: "16个月",
      }
    );
    
      
  },
})