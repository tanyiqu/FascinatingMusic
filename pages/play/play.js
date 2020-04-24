// pages/play/play.js

// var playing = false;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster: 'http://p2.music.126.net/iE2PqDZ9nNNsmpUOzqtr2g==/109951163442955471.jpg?param=130y130',
    name: '放課後ディストラクション',
    author: 'やくしまるえつこ',
    src: 'http://localhost:8080/resource/01.m4a',
    playing: false
  },

  audioPlay: function() {
    if (this.playing) {
      this.audioCtx.pause()
      this.setData({
        playing: false
      })
      this.playing = false
    } else {
      this.audioCtx.play()
      this.setData({
        playing: true
      })
      this.playing = true
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')

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