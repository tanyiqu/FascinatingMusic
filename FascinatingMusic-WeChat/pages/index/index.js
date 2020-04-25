// pages/index/index.js
//获取数据
var dataObj = require("../../data/indexData.js")

Page({



  /**
   * 页面的初始数据
   */
  data: {
    my_false: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 加载首页数据
    this.setData({
      helloLink: dataObj.helloLink,
      recommendList_1: dataObj.recommendList_1,
      recommendList_2: dataObj.recommendList_2,
      latestMusic: dataObj.latestMusic
    })


  },

  onSearchTap(){
    console.log('搜索')
    wx.navigateTo({
      url: '../search/search',
    })
  },

  videoErrorCallback: function(e) {

    console.log('视频错误信息:' + e.detail.errMsg);

  },







  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})