const requestPromise = myUrl => {
  // 返回一个Promise实例对象
  return new Promise((resolve, reject) => {
    wx.request({
      url: myUrl,
      success: res => resolve(res)
    })
  })
}
// module.exports = requestPromise;

class DBPost {

  // 构造器
  constructor() {
    this.name = 'My name is DBPost';
  }

  // 根据关键词获取搜索结果
  search(searchword) {
    console.log('搜索：[' + searchword + ']')
    var result = [];

    // requestPromise("http://localhost:8081//Server/search?searchword=搜索XXX")
    //   // 使用.then处理结果
    //   .then(res => {
    //     console.log(res.data);
    //     return result
    //   })

    // wx.request({
    //   url: 'http://localhost:8081//Server/search?searchword=搜索XXX',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   success: function(res) {
    //     console.log(res.data);
    //     result = res.data;
    //     console.log(result);
    //     return result;
    //   },
    // })

    return result;

  }

  // 根据ID获取音乐的详细信息
  getMusicDetail(musicID) {
    var d = {
      audiosrc: 'http://localhost:8080/resource/music/萤火虫之愿(完整版).mp3',
      cover: 'http://localhost:8080/resource/music/萤火虫之愿(完整版).jpg',
      name: '萤火虫之愿(完整版)',
      author: '闫东炜',
    }
    return d
  }


  execSetStorageSync(data) {
    wx.setStorageSync(this.storageKeyName, data)
  }


};
export {
  DBPost
}