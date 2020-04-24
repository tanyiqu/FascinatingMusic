// pages/splash/splash.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    my_false: false,
    splashLink: "http://vwecam.gtimg.com/1006_04a1a2de9a3144e5837cd9d0a961ae6c.f20.mp4?ptype=http&vkey=758CD858F92CB62F471904F86860902A5F74B127A3CFB4DC848E9964C53DAC750FADBD6B3A36306BEDC0D555F8C5CC816514D99233FBC8E1&sdtfrom=v1000&owner=0"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  //播放结束
  onVideoEnded: function(msg) {
    console.log('播放结束')
    wx.redirectTo({
      url: '../index/index',
    })
  },

  //播放错误，直接跳到主页 
  onVideoError: function(msg) {
    console.log('播放错误')
    wx.redirectTo({
      url: '../index/index',
    })
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