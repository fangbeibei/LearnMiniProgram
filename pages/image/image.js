// pages/image/image.js
Page({
  data: {
    filePath:''
  },
  handleChooseAlbum() {
    wx.chooseImage({
      success: (res) => {
        this.setData({
          filePath:res.tempFilePaths
        })
      },
    })
  },
  handlebindload(){
    console.log('图片加载出来了')
  }
})