// components/header/header.js
Component({
  properties: {
    title: {
      type: String,
      value: "我是默认标题",
      observer: function(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    },
    content: {
      type: String,
      value: "我是默认内容",
      observer: function(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    },
  },
  externalClasses: ["titleclass", "contentclass"]

})