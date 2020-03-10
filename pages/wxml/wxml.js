// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "HelloMiniProgram",
    age: 17,
    isActive: false,
    now:new Date().toLocaleString()
  },
  handleBox() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        now: new Date().toLocaleString()
      })
    },1000)
  }
})