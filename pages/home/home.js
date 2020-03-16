// pages/home/home.js
import request from "../../service/request.js"
Page({
  onLoad: () => {
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  handleBtnTap() {
    request({
        url: 'http://123.207.32.32:8000/api/wh/recommend'
      })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log("出错啦")
      })
  },
  handleToastTap() {
    wx.showToast({
      title:"加载中...",
      duration:3000,
      mask:true,
      icon:"loading"
    })
  },
  handleModalTap(){
    wx.showModal({
      title: '确定嘛',
      content: 'lalal',
      success:(res)=>{
        console.log(res)
      }
    })
  },
  handleLoadingTap(){
    wx.showLoading({
      title: '加载中...',
      mask:true
    })
    setTimeout(()=>{
      wx.hideLoading()
    },1000)
  }
})