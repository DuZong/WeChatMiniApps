//logs.js
let util = require('../../libs/util.js');
let amap = require("../../libs/amap");
Page({
  data: {
    steps: [],
  },
  onLoad() {
    let steps = wx.getStorageSync("steps");
    this.setData({ steps })
  },
});
