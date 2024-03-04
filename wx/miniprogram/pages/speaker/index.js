// pages/speaker/index.js
const { $Toast } = require('../../dist/base/index');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    speakerSN: "",
    historyGet: [
    ]
  },

  onScan: function(){
    wx.scanCode({
      success: (res) => {
        console.log(res)
        $Toast({
            content: '扫码成功',
            type: 'success'
        });
        this.setData({
          speakerSN : res.result
        })
      }
    })
  },

  onGetSpeaker: function () {
    $Toast({
        content: '正在获取数据',
        type: 'loading',
        duration: 0,
        mask: false
    });
    /*
    setTimeout(() => {
        $Toast.hide();
        $Toast({
          content: '获取超时',
          type: 'error'
        });
    }, 5000);*/
    setTimeout(() => {
        let that = this
        $Toast.hide();    
        wx.navigateTo({
          url: '/pages/speaker/show/index',
          success: function(res) {
            // 通过eventChannel向被打开页面传送数据
            let speakerInfo = {
              sn: "SN123456789",
              hwSn: "SN123456789",
              factory: "阿里巴巴有限公司",
              type: "云音响IOT",
              model: "VB75",
              customerId: "10102020",
              customerName: "中村支行",
              storeId: "FA61S561",
              storeName: "中村支行",
              region: "安徽",
              institution: "泾县农村商业银行",
            }
            res.eventChannel.emit('sendSpeakerInfo', speakerInfo)
            let history = {
              sn: speakerInfo.sn,
              storeName: speakerInfo.storeName,
              time: Date.now()
            }
            that.data.historyGet.unshift(history)
            that.setData({
              historyGet: that.data.historyGet
            })
          }
        })
    }, 2000);
  },

  onHistoryClick: function (e) {
    console.log(e)
    var id = Number(e.currentTarget.id.slice(e.currentTarget.id.indexOf("_") + 1))
    console.log(id)
    $Toast({
      content: '正在获取数据',
      type: 'loading',
      duration: 0,
      mask: false
  });
  /*
  setTimeout(() => {
      $Toast.hide();
      $Toast({
        content: '获取超时',
        type: 'error'
      });
  }, 5000);*/
  setTimeout(() => {
      let that = this
      $Toast.hide();    
      wx.navigateTo({
        url: '/pages/speaker/show/index',
        success: function(res) {
          // 通过eventChannel向被打开页面传送数据
          let speakerInfo = {
            sn: "SN123456789",
            hwSn: "SN123456789",
            factory: "阿里巴巴有限公司",
            type: "云音响IOT",
            model: "VB75",
            customerId: "10102020",
            customerName: "中村支行",
            storeId: "FA61S561",
            storeName: "中村支行",
            region: "安徽",
            institution: "泾县农村商业银行",
          }
          res.eventChannel.emit('sendSpeakerInfo', speakerInfo)
        }
      })
  }, 2000);
  }

})