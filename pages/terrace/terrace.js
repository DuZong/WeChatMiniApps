//about.js
//获取应用实例
const app = getApp()

wx.showToast({
  title: '欢迎进入小程序',
  image:'../../img/yes.png',
  icon:'success',
})

wx.showLoading({
  title: '当前用户以登录',
  mask:true
})

setTimeout(function(){
  wx.hideLoading()
},1000)

// wx.showModal({
//   title: '提示',
//   content: '这是一个模态弹窗',
//   success: function (res) {
//     if (res.confirm) {
//       console.log('用户点击确定')
//     } else if (res.cancel) {
//       console.log('用户点击取消')
//     }
//   }
// })

Page({  
  statechange(e) {
    console.log('live-player code:', e.detail.code)
  },
  error(e) {
    console.error('live-player error:', e.detail.errMsg)
  },

  data: {
    show:"",// 控制下拉列表的显示隐藏
    selectData:['车场管理','用户管理','商户管理','收费相关'],
    index:0,
    shequstring:"商户管理",
    sqView: true,
  },

    
  

    // 点击下拉显示框
    selectTap(){
      console.log('ss');
      this.setData({
        show:!this.data.show
      });
    },

    // 点击下拉列表
    optionTap(e){
      let Index = e.currentTarget.dataset.index;  // 获取点击的下拉列表的选框
      let Indexs = e.currentTarget.dataset.name;
      let Indexss = e.currentTarget;
      console.log(this.data.selectData[Index]);
      console.log(Index);
      console.log(Indexs);
      this.setData({
        index:Index,
        show:!this.data.show
      });
    },
    onLoad: function (options) {
      console.log('onLoad')
    },
    
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  parkAll:function(){
    var that = this;
    wx.request({
      url: 'http://192.168.2.169:8080/ct/parkSel',
      header:{
        'content-type' : 'application/json',
      },
      success:function(res){
        that.setData({
          parkList:res.data
        })
      } 
    })
  },

  deletePark:function(e){
    var that = this;
    var st = that.data;
    var id = e.target.id;
    console.log(that.data.parkList);
    console.log(e);
    console.log(e.target.id);

    var newData = that.data.parkList;

    removeData = newData.prototype.remove = function(val){
      var index = this.indexOf(val);
      if(index > -1){
        this.splice(index,1);
      }
    }


    wx.request({
      url: 'http://192.168.2.169:8080/ct/deletePark?id=' + id,
      header:{
        'content-type' : 'application/json',
       },
       success:function(res){
         that.setData({
            
         })
       }
    })
  },

  

  click:function(){
    wx.scanCode({
      success:(res) => {
        console.log(res.result);
        this.show = "--result:" + res.result + "--scanType:" + res.scanType + "--charSet:" + res.charSet + "--path:" + res.path;
        this.show = "结果:" + res.result;
        this.setData({
          show:this.show
        })

        wx.showToast({
          title: '成功',
          icon:'success',
          duration:2000
        })
      },
      fail: (res) => {
        wx.makePhoneCall({
          phoneNumber: '18118734403',
        })
        wx.showToast({
          title: '失败',
          icon: 'success',
          duration: 2000
        })
      },  
      complete: (res) => {
      }  
    })
  },

})
