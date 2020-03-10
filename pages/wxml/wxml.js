// pages/wxml/wxml.js
Page({
  data: {
    score:40
  },
  handleIncScoreTap(){
    this.setData({
      score: this.data.score + 6
    })
  }
})