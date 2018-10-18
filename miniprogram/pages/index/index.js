//index.js
const app = getApp()

Page({
  data: {
    itemValue: '',
    characterValue: ''
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
        } else if (res.data.MessageType == 1) {
          wx.showToast({
            icon: "none",
            title: res.data.Message
          });
        }
      },
    });
  },

  getCharacter: function(e) {
    var that = this;
    wx.request({
      url: "https://www.cqhaokai.com/systemwx/home/getcharacter/",
      method: "POST",
      data: {
        name: that.data.characterValue
      },
      success(res) {
        if (res.data.MessageType == 0) {
          var application = getApp();
          application.globalData.characterData = JSON.parse(res.data.Message);
          wx.navigateTo({
            url: "../characterD/characterD",
          });
        } else if (res.data.MessageType == 1) {
          wx.showToast({
            icon: "none",
            title: res.data.Message
          });
        }
      }
    });
  },

  onInput: function(e) {
    switch (e.currentTarget.id) {
      case "item":
        this.setData({
          itemValue: e.detail.value
        });
        break;
      case "character":
        this.setData({
          characterValue: e.detail.value
        });
        break;
    }
  }
})