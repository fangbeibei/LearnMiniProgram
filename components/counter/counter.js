// components/counter/counter.js
Component({
  methods: {
    handleAddTap() {
      this.triggerEvent('handleAddTap', {
        name: "fangbeibei",
        age: 18
      }, {})
    }
  }
})