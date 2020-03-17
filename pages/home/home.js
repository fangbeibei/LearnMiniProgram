// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:"fangbeibei"
  },
  handlePushDetail(){
    wx.navigateTo({
      url: '/pages/about/about',
    })
  }
})