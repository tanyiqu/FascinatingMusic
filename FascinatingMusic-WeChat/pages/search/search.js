// pages/search/search.js

var searchword = ""

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotList: [
      '青空', 'Here With You', 'Endless Tears',
      '繁华的寂静', 'You', '萤火虫', '广寒宫',
      '四叶草的幻想', '夜空的寂静', '花火が瞬く夜に'
    ]
  },

  // 搜索
  onSearcTap() {
    // 处理关键词
    searchword = searchword.trim()
    wx.navigateTo({
      url: '../list/list?searchword=' + searchword,
    })
    // searchword = ''
  },

  // 获取输入 
  getInputValue(e) {
    searchword = e.detail.value;
  },

  // 点击热门搜索
  onHotTap(e) {
    var name = e.currentTarget.dataset.name
    searchword = name.trim()
    this.onSearcTap()
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