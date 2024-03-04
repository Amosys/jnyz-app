// pages/auth/login/index.js
import request from '../../../utils/request/http/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    captchaInfo:{
      captchaId: "",
      base64Url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAoZJREFUOE91kt9Lk1EYx5/znm1to6x20ZLFULrQbraLdxeCc2oMNMppF/5gIN2svS0IgoguutkfUESBaaaZRpouu9h7oSsImTfWeAs2FI0mvc7wxsQVizHfc0684Tt08p6bc55zvs/nnPN8HwQ6I5/P24rFYg4AXHa7PavKRkZGbKFQaOdgCjoYyLIcRQj5nU6nN5fL2Uwm0y9FUeodDsfa0NOhcYbY+0gk8loXsLm5eYVSKgLAXYTQCw0giuIJoCyFMNcgCMKnIwBZlk/v7u6W3G53YWNj4x0AXCWEWCwWy1eM8cXZ2NtJQLB1IxIJPh8cbKHAtQgRIaqC/n9hfX29jlJ6XFGUHbPZbOY47rLT6Xyg3TQ4MBA1mEzjiDGBMbgHANJ1IewpA9RFNps9CQB2jPGfmpqarcrajo6O1lGFrDIEt8Ph8GPtHC0vL9u0wGq1/q2trS3qOaM5oc5VVVWkp6cnj9LpdAEArPtJqy6X64Ie4NXERBIYNGnnxyzmMyiTyZynlBrUzb29vd8ej+fI87WEsbGxUwaDwb4fk/7+/u/lPpAkyUUIacAYL/E8n658RexNrBs4uEkoudPX1/elXAN1kUqlAoyxs5TSHwCwVCqVzvl8vhVNJIqio6Oj42dsevoJALoFwCa6e3uvlV2QJIkvFovbjY2N8sLCwiWOMbuvtfVlIpEIt7W1DYuiGKeUznZ2do7PzMzwHGPuEiHxYDC4faiVk8lkNSNEwEbjlNfrXfswl3iGjPhhoVCo5zguRAi539XVldFt5cWPizxgyjc1Nw+rIg3g9/u/xePxRwDwORAITOkCKguXmJuLYqNxUgXoWXvoC5Wi5Px8ta+9XddWVf8PQnQLM6NWG8oAAAAASUVORK5CYII=",
      captchaLength: 6,
      openCaptcha: true,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.onCaptchaTap()
  },

  onLogin: function () {
    wx.login({
      success: (res) => {
        console.log(res)
      },
    })
  },

  onCaptchaTap: function () {
    let that = this
    request({
      url: "/base/captcha",
      method: "post",
    }).then(
      function success(res) {
        console.log(res)
        that.setData({
          captchaInfo: res.data.data,
        })
      }
    )
  }
})