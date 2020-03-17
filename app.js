const TOKEN = 'token'
App({
  globalData: {
    token: ""
  },
  onLaunch: function() {
    // 1.先从缓存中取出token
    const token = wx.getStorageSync(TOKEN)
    if (token && token.length !== 0) { //已经有token
      // 验证token是否过期
      console.log(token)
      this.check_token(token)
    } else {
      this.login()
    }
  },
  login() {
    console.log('执行了登陆操作')
    wx.login({
      success: (res) => {
        const code = res.code
        if (code) {
          wx.request({
            url: "http://127.0.0.1:3000/users/login",
            method: "post",
            data: {
              code
            },
            success: (res) => {
              // 1.取出token
              const token = res.data.token;
              // 2.将token保存到globalData中
              this.globalData.token = token
              // 同步的，只有这句代码执行完才会执行下面的
              wx.setStorageSync(TOKEN, token)
            }
          })
        }
      }
    })
  },
  check_token(token) {
    wx.request({
      url: 'http://127.0.0.1:3000/users/auth',
      method: "post",
      header: {
        token
      },
      success: (res) => {
       if(res.statusCode==200){
         console.log('token有效')
         this.globalData.token = token
       }else {
         wx.login()
       }
      },
      fail: (err)=>{
        console.log(err)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {

  }
})