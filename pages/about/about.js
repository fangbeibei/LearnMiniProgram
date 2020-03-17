// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleBack(){
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  onUnload: function(options){
    // 每次页面跳转都会将页面压栈，这样就可以通过栈操作返回，也可以获取前面的页面，并向前面的页面传递数据
    const pages = getCurrentPages()
    console.log(pages)
    const home = pages[pages.length - 2]
    home.setData({
      name:"hunaonao"
    })
  }
})