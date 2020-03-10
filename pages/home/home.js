const app = getApp()
// console.log(app.globalData.name)
// console.log(app.globalData.age)
Page({
  // 初始化数据
  data: {
    name: "FangBeiBei",
    age: 18,
    users: [{
      id: 1,
      name: "张三",
      age: 18
    }, {
      id: 2,
      name: "李四",
      age: 18
    }, {
      id: 3,
      name: "王五",
      age: 19
    }],
    count: 0,
    list: []
  },
  handleIncCountClick() {
    // this.data.count += 1
    // console.log(this.data.count)
    this.setData({
      count: this.data.count + 1
    })
  },
  handledecCountClick() {
    this.setData({
      count: this.data.count - 1
    })
  },
  handleGetUserInfo(event) {
    console.log(event)
  },
  // 页面加载完毕
  onLoad() {
    console.log('load')
  },
  // 页面显示出来
  onShow() {
    console.log('show')
    wx.request({
      url: 'http://123.207.32.32:8000/api/wh/recommend',
      // 箭头函数中的this是一层层往上找的，最总一定是找到最顶层Page的
      success: (res) => {
        this.setData({
          list: res.data.data.list
        })
      }
    })
  },
  // 页面初次渲染完成
  onReady() {
    console.log('ready')
  },
  // 当页面隐藏
  onHide() {
    console.log('hide')
  },
  onUnload() {
    console.log('onUnload')
  },
  onPageScroll(obj) {
    console.log(obj)
  },
  onReachBottom() {
    console.log('页面滚动到底部')
  },
  onPullDownRefresh() {
    console.log('页面刷新')
  },
  onTabItemTap(){
    console.log('onTabItemTap')
  }
})