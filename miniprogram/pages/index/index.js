//index.js
const app = getApp()

Page({
  data: {
    itemValue: ''
  },

  onLoad: function() {

  },

  getItem: function(e) {
    var that = this;
    wx.request({
      url: "https://www.cqhaokai.com/systemwx/home/index/",
      method: "POST",
      data: {
        name: that.data.itemValue
      },
      success(res) {
        if (res.data.MessageType == 0) {
          var application = getApp();
          application.globalData.itemData = JSON.parse(res.data.Message);
          wx.navigateTo({
            url: "../itemD/itemD",
          });
        }
      },
    });

  },

  onInput: function(e) {
    this.data.itemValue = e.detail.value;
  }
})