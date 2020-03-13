// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    tabList:['全部','组队','闲物','找Ta']
  },
  handleAddTap(event) {
    console.log(event)
    this.setData({
      count: this.data.count + 1
    })
  },
  handleTabTap(event){
    console.log(event)
  },
  handleBtnTap(){
    const cpn = this.selectComponent('#inner-counter')
    console.log(cpn)
    cpn.incrementCount(-5)
  }
})