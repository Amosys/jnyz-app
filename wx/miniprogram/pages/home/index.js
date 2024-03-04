// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onCollectInfo: function() {
    wx.navigateTo({
      url: '/pages/collect/step1/index',
    })
  }
})