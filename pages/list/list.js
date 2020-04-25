// pages/list/list.js

import {
  DBPost
} from '../../db/DBPost.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var sw = options.searchword
    console.log('搜索：[' + sw + ']')
    this.dbPost = new DBPost();
    //获取搜索结果
    var result = this.dbPost.search(sw)
    this.setData({
      searchword: sw,
      searchResult: this.dbPost.search(sw)
    })
  },


  playMusic(e) {
    var musicId = e.currentTarget.dataset.musicId;
    wx.navigateTo({
      url: '../play/play?musicId=' + musicId,
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