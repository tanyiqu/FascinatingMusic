class DBPost {

  // 构造器
  constructor() {
    this.storageKeyName = 'dynamic';
  }

  getAllPostData() {
    var res = wx.getStorageSync(this.storageKeyName);
    if (!res) {
      res = require("../data/dynamicData.js")
      this.execSetStorageSync(res);
    }
    return res;
  }

  execSetStorageSync(data) {
    wx.setStorageSync(this.storageKeyName, data)
  }

  //根据动态id获取动态详情
  getDynamicDetail(did) {
    var datas = {}
    var postData = this.getAllPostData().dynamic;
    var len = postData.length
    for (var i = 0; i < len; i++) {
      if (postData[i]['did'] == did) {
        datas = {
          "time": postData[i].time,
          "content": postData[i].content,
          "url": postData[i].url,
          "src": postData[i].cover,
          "name": postData[i].name,
          "author": postData[i].author
        }
        break
      }
    }
    return datas
  }

};


export {
  DBPost
}