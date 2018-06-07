
var QQMapWX = require('../../qqmap-wx-jssdk.min.js');

Page({
  data: {
    id: '先生',
    city: '点击选择',
    name: '',
    phone: '',
    cityDetail: '',
    address: '',   //当前定位的城市
    nothing: false
  },
  getAddress: function () {
    var that = this;
    wx.chooseLocation({
      success: function (res) {
        if (res.address.length > 10) {
          res.address = res.address.substr(0, 10) + '...'
        }
        that.setData({
          city: res.address
        })
      },
    })
  },


  noChoose: function() {
    this.setData({
      pageType: 1,
      city: '点击选择',
    })
  },



})