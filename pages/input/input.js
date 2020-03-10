Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  handleInput(event){
    console.log('输入内容了',event)
  },
  handleFocus(event){
    console.log('获取焦点了',event)
  },
  handleBlur(event){
    console.log('失去焦点了',event)
  }
})