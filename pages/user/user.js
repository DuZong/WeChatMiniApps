//about.js
//获取应用实例
const app = getApp()

Page({
  data: {
    object :{
      key:'hello'
    },
    array:['MINA'],
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  // 用户登录时间
  userClick:function(e){
    console.log('s');
  },
  
  choose:function(){
      var that = this
      var img = wx.getStorageInfoSync('img')
      wx.chooseImage({
        count:1,
        sizeType:['original','compressed'],
        sourceType:['album','camera'],
        success: function(res) {
          var tempFilePaths = res.tempFilePaths
          that.setData({
            tempFilePaths: res.tempFilePaths
          })
          console.log(res.tempFilePaths)
          wx.setStorage({ key: "img", data: tempFilePaths[0] })
        }
      })
  },

  fabu:function(){
    var that = this
    var img = wx.getStorageSync('img')
    wx.uploadFile({
      url: 'http://192.168.2.169:8080/ct/addFile',
      filePath: img,
      name: 'img',
      header: {
        'content-type': 'multipart/form-data'
      },
      formData: {
      },
      success: function (res) {
        var chepai = JSON.parse(res.data)
        var plateNumber = chepai.number;
        that.setData({
          plateNumber:chepai.number
        })  
      }
    })
  },
})
