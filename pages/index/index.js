//index.js
//获取应用实例
var app = getApp()
const config = require('../../config')
const iconList = require('../../data/four-icon-data')

var pageNo = 0;
Page({
  data: {
    list: [
      {
        img: "https://ossimg.xinli001.com/20191225/629785f97b22d7f61186eecff545827c.jpeg?x-oss-process=image/quality,Q_80",
        tittle: "谈边界｜朋友找你借钱，为什么很难拒绝？",
        content: "在我们所有的关系中，边界都是必不可少的。但是，我们都知道，由于一些原因，它们可能很难设置。通常，我们不知道我们需要什么样的边界",
         time: "5-15 12:55",
         st:"128"
      },
      {
        img: "https://ossimg.xinli001.com/20191202/e91eef2ffd7408b55598928e2c31eedf.jpeg?x-oss-process=image/quality,Q_80",
        tittle: "人际交往小技巧——树立良好的第一印象！",
        content: "第一印象（first impression），知觉主体与陌生人第一次接触或交往后的所得印",
        time: "5-15 12:55",
        st: "128"
      },
      {
        img: "https://ossimg.xinli001.com/20191211/1e8910f42d13234070368d47b64d34cf.jpeg?x-oss-process=image/quality,Q_80",
        tittle: "3招，教你应对七大姑八大姨的'评判'",
        content: "当我第一次回到阿肯色州时，有一些关于我的事情不想让其他人知道。我在阿",
        time: "5-15 12:55",
        st: "128"
      },
      {
        img: "https://ossimg.xinli001.com/20191225/629785f97b22d7f61186eecff545827c.jpeg?x-oss-process=image/quality,Q_80",
        tittle: "悄无声息影响他人的7个技巧",
        content: "年轻的时候，当人们想要影响我们的时候，他们往往会使用奉承和顺从这两招",
        time: "5-15 12:55",
        st: "128"
      },
     
      
    ],
  },

  /** 跳转（政务资讯、办事指南、办事大厅、办事攻略） */
  tapGridCell: function (event) {
    switch (event.currentTarget.dataset.iconId) {
      case 0:
        console.log("点击专栏课程");
        wx.navigateTo({
          url: 'temp/temp'
        });
        break
      case 1:
        console.log("点击单品课程");
        wx.navigateTo({
          url: 'temp2/temp'
        });
        break
      case 2:
        console.log("点击经典微课");
        wx.navigateTo({
          url: 'temp3/temp'
        });
        break
      case 3:
        console.log("点击精选文章");
        wx.navigateTo({
          url: 'temp4/temp'
        });
        break
    }

   
  },

  /** 跳转要闻详情页面 */
  tapHotNewsCell: function (event) {
    wx.navigateTo({
      url: 'HotNewsDetail/HotNewsDetail'
    })
  },

  /** 下拉刷新 */
   loadNewData: function () {
     pageNo = 1;
     this.requestData()

   },

  // loadNewData_NextPage: function () {
  //   pageNo += 1;
  //   this.requestData();
  // },

  // requestData: function () {
  //   var that = this

  //   wx.request({
  //     url: config.GET_HOT_NEWS,
  //     data: {
  //       "system": "02",
  //       "tagId": "1",
  //       "accessToken": "",
  //       "scopeAddressCode": "",
  //       "key": "",
  //       "systemVersion": "10.3.1",
  //       "imei": "A902EA47-B1B2-452A-96FB-4C7BCCBB149C",
  //       "currentVersion": "3.1.6",
  //       "sig": "",
  //       "pageNo": pageNo,
  //       "model": "iPhone 6s Plus (A1699)",
  //       "pageSize": "20"
  //     },
  //     method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  //     header: { 'content-type': 'application/json' }, // 设置请求的 header
  //     success: function (res) {
  //       // success
  //       if (pageNo == 1) {
  //         that.setData({ list: res.data.data.list })
          
  //       }else {
  //         that.setData({ list: that.data.list.concat(res.data.data.list) })

  //       }

  //       console.log(that.data.list)
        
  //     },
  //     fail: function (res) {
  //       // fail
  //       pageNo--;
  //     },
  //     complete: function (res) {
  //       // complete
  //       wx.stopPullDownRefresh()
  //     }
  //   })

  // },


  onLoad: function () {
    console.log('onLoad')

    console.log(iconList)
    this.setData(iconList)
    this.loadNewData();

  },
  onSwiperTap: function (event) {
    // target 和currentTarget
    // target指的是当前点击的组件 和currentTarget 指的是事件捕获的组件
    // target这里指的是image，而currentTarget指的是swiper
    var postId = event.target.dataset.postid;
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
    this.loadNewData();

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
    console.log("onReachBottom")
    
    this.loadNewData_NextPage()
  },
  audio: function (event) {
    wx.navigateTo({
      url: '/pages/content/content'
    })
  }


})
