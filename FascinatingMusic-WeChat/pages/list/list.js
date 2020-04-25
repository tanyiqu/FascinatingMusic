// pages/list/list.js

import {
  DBPost
} from '../../db/DBPost.js';

const utilApi = require('../../utils/util.js')

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
    // 获取关键词
    var sw = options.searchword
    this.dbPost = new DBPost();
    this.setData({
      searchword: sw,
    })
    //获取搜索结果
    utilApi.requestPromise("http://localhost:8081//Server/search?searchword=" + sw)
      .then(res => {
        console.log('data: ' + res.data)
        this.setData({
          searchResult: res.data
        })
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