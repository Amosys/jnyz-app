// components/collect/footer/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isFinish: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function(){
      this.triggerEvent("NextStep", {
        isFinish: this.data.isFinish
      })
    },
    
    setFinish: function(isFinish){
      this.setData({
        isFinish: isFinish
      })
    }
  }
})